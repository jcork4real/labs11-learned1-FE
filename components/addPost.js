import { loadDB } from "../firebaseConfig/firebase";
import { Store } from "../components/store";
// make sure to import * from firebase so that array updates work correctly
import * as firebase from "firebase";

//// =============ADD POST==============
export const addPost = async () => {
  //load db instance
  let result = await loadDB();
  let db = result.firestore();

  // add post to "posts" collection, creating a unique document/postId with .add()
  db.collection("posts")
    .add({
      title: "Test Title 3", // <--- provide input form
      content: "Test Content 3", //<--- provide input form
      createdAt: Date.now(),
      url: "TestURL3.com",
      userId: "1" //<--- make dynamic with state.userId
    })
    .then(ref =>
      db
        .collection("user")
        .doc("1") // <--- make dynamic with state.userId
        .update({ posts: firebase.firestore.FieldValue.arrayUnion(ref.id) }) // <--- updates the array of postId's within user, for future reference
        .then(() => {
          console.log("Success adding a post");
        })
        .catch(err => {
          console.log("error adding post to user array", err); // inner addition to the array failed
        })
    )
    .catch(err => console.log("error adding post", err)); // addition to "posts" collection failed
};

// =============EDIT POST==============
export const editPost = async (/*value of post.id, post.title, post.content */) => {
  let result = await loadDB();
  let db = result.firestore();

  //access posts collection, provide specific post to update with postID, then call update providing fields 
  db.collection("posts")
    .doc("b6lwH7wl6w7Km472m0uJ") //< postId
    .update({
      /*--------JSON of things to update--------*/
      title: "Revised Test Title 3", //< post.title
      content: "Revised Content", //< post.content
      url: "TestURL3.com", //< post.url
    })
    .then(res => console.log("Success", res))
    .catch(err => console.log("Failed", err));
};

// =============DELETE POST==============

// =============GET POST==============
export const getPost = async (/*value of postId*/) => {
  let result = await loadDB();
  let db = result.firestore();

  //access posts collection, provide the postId that you want to get
  db.collection("posts")
    .doc("b6lwH7wl6w7Km472m0uJ") //<--- make dynamic and pass in postId
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log("No post with this id");
      } else {
        console.log("Post Data: ", doc.data());
      }
    })
    .catch(err => {
      console.log("error fetching this post", err);
    });
};
