<template>
  <div v-if="isLoaded" class="event-wrapper">
       
      <div v-for="event in events" :key="event" class="event">
        
            <router-link 
            class="link-header" 
            :to="{ 
            name: 'EventDetails', 
            params: { id: event.eventID, name: event.name, description: event.description, priority: event.priority, type: event.type}}">
                <h2> {{ event.eventID }}. </h2>
                <h2> {{event.name}} </h2>
                <h2> {{ event.type }} </h2>
            </router-link>

            <router-link :to="{name: 'EventEdit', params: {id: event.eventID}}">
                <svg class="edit-button" stroke="" fill="#F9A609" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
            </router-link>
            <svg class="delete-button" stroke="currentColor" fill="#FF0000" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg> 
          
      </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>

import { db } from '../firebase';
import { collection, getDoc, addDoc } from 'firebase/firestore';
import { getDocs, getFirestore } from 'firebase/firestore';



export default {
    name: 'EventList',
    
    data() {
        return {
            events: [],
            isLoaded: false,
        }
    },
    methods: {
       async getEvents() {
        const eventsCol = collection(db, 'Events');
        const eventsSnapshot = await getDocs(eventsCol);
        const  eventsList = eventsSnapshot.docs.map(doc => doc.data());
        this.events = eventsList;
        this.isLoaded = true;
        console.log(eventsList);
        }
    },
    mounted() {
       this.getEvents();
    }
     
}
</script>

<style>
    .event-wrapper {
        box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
        min-height: 10rem;
        width: 80%;
        background: white;
        border: 1px solid #eeee;
        border-radius: 10px;
        
    }

    .link-header {
        text-decoration: none;
        color: gray;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin: 20px;
        width: 80%;
        justify-content: center;
        align-items: center;
    }

    .link-header{ text-decoration: none; }
    .link-header:visited { text-decoration: none; }
    .link-header:hover { text-decoration: none; }
    .link-header:active { text-decoration: none; }

    h2 {
        width: 35%;
    }

    .elements {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .event {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    svg {
        margin: 20px;
    }

    .edit-button:hover {
        fill: #F95B09;
        stroke:  #F95B09;     
    }
    .delete-button:hover {
        fill: #C50000;
    }
</style>