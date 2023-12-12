import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMBfdAfSmSWMf1Xc4HA0IgETigiT7nT20",
    authDomain: "noboru-web.firebaseapp.com",
    projectId: "noboru-web",
    storageBucket: "noboru-web.appspot.com",
    messagingSenderId: "65079678415",
    appId: "1:65079678415:web:aacba3dc545a33f4a2aeba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };