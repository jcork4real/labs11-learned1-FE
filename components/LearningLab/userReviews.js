import React from 'react';

//FIREBASE
import * as firebase from "firebase";
import { loadDB } from "../../firebaseConfig/firebase";


//MATERIAL UI
import { makeStyles } from "@material-ui/styles";

//COMPONENTS




const useStyles = makeStyles(theme => ({
reviewList: {
    display: "flex",
    background: "#cccccc",
    flexFlow: "column wrap",
    width: "100%"
},
reviewContainer:{
  display: "flex",
  flexFlow: 'row wrap', 
  width: "100%"


}
})); //end styles

// UserReviews Component
const UserReviews = (props) => {
    const  classes  = useStyles();
    //Hooks
    const [reviewList, setReviewList] = React.useState([]);
    const [openReviewList, setOpenReviewList] = React.useState(false);
    const [share, setShare] = React.useState(true);
    const [submitType, setSubmitType] = React.useState("");
    const [reviewContent, setReviewContent] = React.useState({
        rating: 5,
        title: "",
        content: "",
        postId: "",
        reviewID: ""
      });

    // just get all user's reviews from db

    const getReviewsByUserId = async () => {
    let result = await loadDB();
    let db = result.firestore();
        
console.log("userID",props.state.userID)
      db.collection('reviews').where('userId', '==', props.state.userID).get().then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
          const result = doc.data();
          console.log("reviews result", result)
          setReviewList([...reviewList, reviewList.push(result)])
          console.log("REVIEW LIST AFTER SETLIST", reviewList)
        })
        
      }).catch(err => {
        console.log("error getting reviews", err)
      })



    }//end getReviewsByUserId function  
    React.useEffect(() => {
      getReviewsByUserId();
    }, []);
    // <Link href={{ pathname: '/postPage', query: { content: review.contentCollectionId}}}></Link>
return(
    <div className={classes.reviewList}>
      {console.log("reviewlist in jsx", reviewList)}
        {reviewList.map((review, index) => 
        <div className={classes.reviewContainer} key={index}>
            
          <a href={`/postPage?content=${review.contentCollectionId}`} className={classes.link}>{review.title}</a>
            
            <p>{review.comment}</p>

            </div>
        )
    }


    </div>
    )

        
    }//end component

export default UserReviews;