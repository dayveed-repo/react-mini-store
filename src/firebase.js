import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqDUMBmHb20WwXKPlrZMSCTCM8EPB-xLU",
  authDomain: "shop-cart-99b39.firebaseapp.com",
  projectId: "shop-cart-99b39",
  storageBucket: "shop-cart-99b39.appspot.com",
  messagingSenderId: "243740664219",
  appId: "1:243740664219:web:af812ed692177e8a0ec13e",
  measurementId: "G-JB5P5NXVWD"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  /*const db = firebaseApp.firestore();*/
  const auth = firebase.auth();

  export default auth;