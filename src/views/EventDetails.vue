<template>
  <div class="event-details">
      <div class="center-div">
        <div class="details-wrapper">
        <h2>name: {{ name }}</h2>
        <h2>type: {{ type }}</h2>
        <h2>description: {{ description }}</h2>
        </div>
        <div class="priority-wrapper">
            <h2>priority: {{ priorityWord}}</h2>
            <div class="priority-box">
                <div class="white" ref="white"></div>
                <div class="colored" ref="colored"></div>
                <p> {{$store.state.name}} </p>
            </div>
        </div>
      </div>
  </div>
  
</template>

<script>

import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import NavbarView from './NavbarView.vue';

export default {
    name: "EventDetails",
    props: ["id", "name", "priority", "type", "description"],
    data() {
        return {
            eventData: [],
            eventsRef: null,
            whiteBox: null,
            coloredBox: null,
            priorityWord: "",
            allEvents: [],
        };
    },
    methods: {
        async getEvent(id) {
            console.log("Gettamo event");
            this.eventsRef = collection(db, "Events");
            const q = query(this.eventsRef, where("eventID", "==", id));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        },

        checkPriority() {

            
            this.coloredBox = this.$refs['colored'];

            if (this.priority < 3) {
                
                this.coloredBox.style.height = "100px";
                this.coloredBox.style.width = "40px";
                this.coloredBox.style.background= "#FF1219";
                this.priorityWord = "high";
            }

            if (this.priority >=3 && this.priority <= 6) {
                this.coloredBox.style.height = "100px";
                this.coloredBox.style.width = "40px";
                this.coloredBox.style.background= "#FF6A19";
                this.priorityWord = "medium";

            }

            if (this.priority >= 7 && this.priority <= 10) {
                this.coloredBox.style.height = "100px";
                this.coloredBox.style.width = "40px";
                this.coloredBox.style.background= "#00EA09";
                this.priorityWord = "low";

            }
        },
        
    },
    async mounted() {
        this.getEvent(4);
        this.checkPriority();
        
        /*this.allEvents = await this.$store.dispatch('getEventsQuery');*/
    },
    components: { NavbarView }
}
</script>

<style>
    .event-details {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: left;
        height: 100%;
        background: white;
        margin: 0px;
    }

    .center-div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: left;
        height: 50%;
        width: 80%;
        border-radius: 10px;
        background: #eeee;
         box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    }

    .details-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .name {
        font-weight: bold;
        font-size: 2rem;
    }

    .priority-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .priority-box {
        
        background: lightgreen;
        width: 40px;
        height: 120px;
        border: 1px solid black;
    }

    .white {
        height: 20px;
        width: 40px;
        background: white;
    }

    h2 {
        text-align: center;
    }

    
    
</style>