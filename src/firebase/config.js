import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyBYtrbcMytxeA3JDMvf1M-lMgUGpkn6TT8",
  
    authDomain: "invoice-app-28acb.firebaseapp.com",
  
    projectId: "invoice-app-28acb",
  
    storageBucket: "invoice-app-28acb.appspot.com",
  
    messagingSenderId: "1098898002634",
  
    appId: "1:1098898002634:web:a72770accacb85c5375a33"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore();