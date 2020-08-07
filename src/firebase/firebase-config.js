import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJrVOT8823XadZqgqn3jDr9DXx42k3_qA",
  authDomain: "react-app-course-1f88a.firebaseapp.com",
  databaseURL: "https://react-app-course-1f88a.firebaseio.com",
  projectId: "react-app-course-1f88a",
  storageBucket: "react-app-course-1f88a.appspot.com",
  messagingSenderId: "316565086040",
  appId: "1:316565086040:web:b64beacf6fdaaa77b24f2d",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
