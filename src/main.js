import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore } from 'firebase/firestore'; 
import { collection, getDoc } from 'firebase/firestore';*/




/*
const config = {
    apiKey: "AIzaSyAZDtwzpOhE8dpdPeNQs5E2LlwkFNt_qHk",
    authDomain: "crud-app-a37c2.firebaseapp.com",
    projectId: "crud-app-a37c2",
    storageBucket: "crud-app-a37c2.appspot.com",
    messagingSenderId: "726472562226",
    appId: "1:726472562226:web:ea944d26061a7cfb56ce2b",
    measurementId: "G-TQSL8VEX52"
}


const app = initializeApp(config);

const db = getFirestore(app);

console.log(db);


async function getEvents(db) {
    const eventsCol = collection(db, 'Events');
    const eventsSnapshot = await getDocs(eventsCol);
    const  eventsList = eventsSnapshot.docs.map(doc => doc.data());
    console.log(eventsList);
}


getEvents(db);
 */

/*
import { config, app, db, getEvents } from './firebase';

getEvents(db);
*/

createApp(App).use(store).use(router).mount('#app')
