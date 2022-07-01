import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore } from 'firebase/firestore'; 
import { collection, getDoc } from 'firebase/firestore';


const config = {                                                          //DATA FOR CONNECTION TO MY DATABASE
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}


const app = initializeApp(config);  //initialize firestore object

const db = getFirestore(app);

console.log(db);


export { db };
