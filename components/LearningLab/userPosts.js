
import React from "react";

//FIREBASE
import * as firebase from "firebase";
import { loadDB } from "../../firebaseConfig/firebase";

//FUNCTIONS
import { addPost } from "../firebaseAPI/firebasePosts";

//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Postcard from "../community/Postcard";
import PropTypes from "prop-types";

//styling
const styles = {
  list: {
    display: "flex",
    flexFlow: "column"
  },
  pTag: {
    textAlign: 'start',
    paddingLeft: '20px'
  }
};

const UserPosts = props => {
  const { classes } = props;
  console.log("classes", classes);
  const [postList, setPostList] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  //const [postList, setPostList] = React.useState([]);
  console.log("top post learninglab", postList);

  const getPostsByUserId = async () => {
    console.log("state", props.state.userID, "\n postlist: ", postList);
    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("user")
      ? urlParams.get("user")
      : props.state.userID;
    console.log("userID: ", userID);
    // setUser(userID);
    let result = await loadDB();
    let db = result.firestore();
    db.collection("posts")
      .where("userId", "==", userID)
      .get()
      .then(async function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const result = doc.data();
          console.log("ESULT", result);
          let newArr = []
          newArr.push(result)
          setPostList(postList => postList.concat(newArr));
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });

    setNumber(number => number + 1);
    console.log("number", number);
  }; //end getPostsByUserId
  // change in postList => new render

  React.useEffect(() => {
    getPostsByUserId();
  }, []);

  return (
    <div className={classes.list}>
      {console.log("postList:   ", postList)}
     
      {console.log("leeeeength", postList.length)}
      {postList.length ? (
        postList.map((post, index) => <Postcard content={post} state={props.state} key={index} />)
      ) : (
        <p className={classes.pTag} >You don't have any posts yet! You can save a content to your list and click "Share Post" to share with your 
          followers. </p>
      )}
    </div>
  );
}; //end component
UserPosts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(UserPosts);
