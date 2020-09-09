import firebase from 'firebase'
//import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBmNZ4RZ2ti8yP4hF8KGGfvBjbEEZPINHc",
    authDomain: "online-shop-133ce.firebaseapp.com",
    databaseURL: "https://online-shop-133ce.firebaseio.com",
    projectId: "online-shop-133ce",
    storageBucket: "online-shop-133ce.appspot.com",
    messagingSenderId: "851180252084",
    appId: "1:851180252084:web:1eace0ede045849f17a0e1",
    measurementId: "G-ZH6FSB863D"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db
