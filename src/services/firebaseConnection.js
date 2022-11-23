import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyCRc8kUp1zHW941gZhC_zM6Z7lcdXJyoUA",
    authDomain: "appfinancas-b6b2a.firebaseapp.com",
    databaseURL: "https://appfinancas-b6b2a-default-rtdb.firebaseio.com",
    projectId: "appfinancas-b6b2a",
    storageBucket: "appfinancas-b6b2a.appspot.com",
    messagingSenderId: "372016051302",
    appId: "1:372016051302:web:0042fa4b17d58cfa9c29a7",
    measurementId: "G-Q4QMVCF2B3"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;