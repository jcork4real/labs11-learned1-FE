import React from 'react';

//REACT
import axios from 'axios';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation/Nav';
import MyListCard from '../components/LearningLab/card';


//FIREBASE
import * as firebase from "firebase";
import { loadDB } from "../firebaseConfig/firebase";

//MaterialUI
import { withStyles } from '@material-ui/core/styles';
import { Store } from "../components/store";

import UserListCard from '../components/userLabCard'

const styles = theme => ({
    menu: {
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    homepageWrapper:{
        width:"80%",
        marginLeft:"26%"
    },
    userList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    myHeader: {
        display: 'flex',
        borderBottom: '1.5px solid rgba(0,0,0,.1)',
        margin: '20px',
        paddingBottom: '20px',
        alignItems: 'center',
        '& h1': {
            margin: '0 20px 0 20px'
        },
        '& button': {
            marginLeft: '20px'
        }
    },
    learningLabWrap: {
        marginTop: '40px'
    },
    currentCourses: {
        minHeight: '100px'
    }
});

const UsersLab = (props) => {

    //Might just use one big state, but don't want it to look too much like normal setState so
    // I don't really want to.
    const { classes } = props;
    const {state, dispatch} = React.useContext(Store)
    const [list, setList] = React.useState([]);
    const [UdemyList, setUdemyList] = React.useState([]);

    const getContentByUserId = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const userID = urlParams.get('user');
        let arr = [];
        let result = await loadDB();
        let db = result.firestore();
        db.collection("content-collection").where("userList", "array-contains", userID)
        .get()
        .then(async function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const result = doc.data()
                console.log("RESULT", result)
                let newLink = (result.link).split("//").pop().replace(/[/]/g, "-");
                db.collection("reviews").where("userId", "==", userID).where("contentCollectionId", "==", newLink)
                .get()
                .then(async(res) => {
                    let response;
                    if(res.docs.length > 0) {
                        response = res.docs[0].data();
                        response["reviewId"] = res.docs[0].id;
                    } else {
                        response = null;
                    }
                    result["review"] = response;
                    setList(list => [
                        ...list, result
                    ])
                })
                .catch(err => {
                    console.log(err)
                })   
            
            }); 
            
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        console.log("MY ARRAY", arr)
    }

    const getUdemyByUserId = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const userID = urlParams.get('user');
        let arr = [];
        let result = await loadDB();
        let db = result.firestore();
        db.collection("content-collection").where("UserList", "array-contains", userID)
        .get()
        .then(async function(querySnapshot) {
            await querySnapshot.forEach(function(doc) {
                const result = doc.data()
                arr.push(result)
                console.log("udemy result", result) 
            }); 
            console.log("this is the array", arr)
            setUdemyList([...arr])
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    React.useEffect(
        () => {
            getContentByUserId()
            getUdemyByUserId()
        },
        []
    );

    // React.useEffect(
    //     () => {
            
    //         if (metaData.title) {
    //             console.log("HEY IM BEING CALLED!")
    //             addContent()
    //         }
    //     },
    //     [metaData.title]
    // );
    return (
        <div>
            <Navigation />
            <div className={classes.learningLabWrap}>
                <div className={classes.myHeader}>
                    <h1>Their Current Courses</h1>
                </div>
                <div className={classes.userList}>
                    {UdemyList.length ? UdemyList.map(item=><UserListCard content={item} />)
                    :
                    <p>This user has no courses or has not linked their account yet</p>
                    }
                </div>

                <div className={classes.myHeader}>
                    <h1>Their List</h1>
                </div>
                
                <div className={classes.userList}>
                    {list.map(item=>{
                            return(
                                <UserListCard content={item} />
                            )
                        })}
                </div>
            </div>
        </div>
    );
}

UsersLab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersLab);