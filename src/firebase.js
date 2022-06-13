import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore } from 'firebase/firestore'; 
import { collection, getDoc } from 'firebase/firestore';


const config = {                                                          //DATA FOR CONNECTION TO MY DATABASE
    apiKey: "AIzaSyAZDtwzpOhE8dpdPeNQs5E2LlwkFNt_qHk",
    authDomain: "crud-app-a37c2.firebaseapp.com",
    projectId: "crud-app-a37c2",
    storageBucket: "crud-app-a37c2.appspot.com",
    messagingSenderId: "726472562226",
    appId: "1:726472562226:web:ea944d26061a7cfb56ce2b",
    measurementId: "G-TQSL8VEX52"
}


const app = initializeApp(config);  //initialize firestore object

const db = getFirestore(app);

console.log(db);


export { db };
