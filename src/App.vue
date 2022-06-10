<template>
  <NavbarView />
  <!--<div>
    {{name}}
  </div>
  <div>
    <button @click="displaySomething">Display</button>
  </div>
  <div>
    <div v-for="event in dataArr" :key="event">
      {{event.eventID}} {{event.name}} {{event.priority}} {{event.type}}
    </div>
  </div>
  <div>
    <button @click="addToDatabase">Add data</button>
  </div> -->
  <router-view/>
</template>

<script>

import {db} from './firebase';
import { collection, getDoc, addDoc } from 'firebase/firestore';
import { getDocs, getFirestore } from 'firebase/firestore'; 
import NavbarView from './views/NavbarView.vue';

export default {
  name: 'App',
  components: { NavbarView},
  data() {
    return {
      name: 'Jancek',
      dataArr: [],
    }
  },
  
  methods: {
   async displaySomething() {
      const eventsCol = collection(db, 'Events');
      const eventsSnapshot = await getDocs(eventsCol);
      const  eventsList = eventsSnapshot.docs.map(doc => doc.data());
      this.dataArr = eventsList;
      console.log(eventsList);
    },
    async addToDatabase() {
      try {
        const docRef = await addDoc(collection(db,"Events"), {
          eventID: 3,
          name: 'Spam-click',
          priority: 10,
          type: 'Active-click'
        });

        console.log("Document written with ID ", docRef.id);
      } catch (err) {
        console.log("Error adding comment: ", e);
      }
    }
  }
}

</script>

<style>

* {
  font-family:Arial, Helvetica, sans-serif;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  height: 100%;
}


html,body {
  padding: 0px !important;
  margin: 0px;
  height: 100%;
}


nav {
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  
}

.center {
  width: 50%;
  background: hsl(343, 70%, 38%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

nav div a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 3vw;
  margin: 0px;
  padding: 1vw;
  font-size: 2rem;
}

nav div a:hover {
  color:hsl(343, 70%, 38%);
  background: white;
  

}


nav div a.router-link-exact-active {
  color: white;
}


nav div a.router-link-exact-active:hover {
   color:hsl(343, 70%, 38%);
   background: white;
}
</style>
