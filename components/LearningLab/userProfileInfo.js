import React from "react";

//FIREBASE
import * as firebase from "firebase";
import { loadDB } from "../../firebaseConfig/firebase";


//MATERIAL UI
import { makeStyles } from "@material-ui/styles";
import Postcard from "../community/Postcard";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  profileImage: {
    borderRadius: "10px"
  }
}));

const UserProfileInfo = props => {
  const classes = useStyles();
const { userInfo, setUserInfo } = React.useState({})
  

  const getUserInfo = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("user")
      ? urlParams.get("user")
      : props.state.userID;
    console.log("userID: ", userID);
    let result = await loadDB();
    let db = result.firestore();

    db.collection('user').doc(userID).get().then(docSnapshot => {
        if(docSnapshot.exists){
            console.log("user data:   ",docSnapshot.data())
            setUserInfo(docSnapshot.data())
        }
    }).catch(err=>{
        console.log(err)
    })
}
console.log("user info array: ", userInfo)
React.useEffect(()=>{
    getUserInfo();
})
  return (
    <div>
      <img className={classes.profileImage} src={props.state.userImage} />
      <h1>{props.state.displayName}</h1>
      
    </div>
  );
};

export default UserProfileInfo;

