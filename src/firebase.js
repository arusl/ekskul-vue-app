import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  //paste from Firebase Project Setting -> config
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const fbdb = firebase.database();

export { fbdb };
