import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcda2cazh6mAu9DxMRTXYtQv0L1UtENjM",
  authDomain: "net-ninja-marioplan-288f6.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-288f6.firebaseio.com",
  projectId: "net-ninja-marioplan-288f6",
  storageBucket: "",
  messagingSenderId: "241254183173",
  appId: "1:241254183173:web:a3e8d4636db1ca83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
