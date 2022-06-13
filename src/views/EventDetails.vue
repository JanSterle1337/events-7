<template>
  <div class="event-details">
      <div class="center-div">
        <div class="details-wrapper">
        <h2 class="details">name: <span class="text">{{ name }}</span></h2>
        <h2 class="details">type: <span class="text">{{ type }}</span></h2>
        <h2 class="details">description <p class="text">{{ description }}</p></h2>
        </div>
        <div class="priority-wrapper">
            <h2 class="priority">priority: {{ priorityWord}}</h2>
            <div class="priority-box">
                <div class="white" ref="white"></div>
                <div class="colored" ref="colored"></div>
                <p class="details"> {{$store.state.name}} </p>
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
                
                
                this.coloredBox.style.background= "#FF1219";
                this.priorityWord = "high";
            }

            if (this.priority >=3 && this.priority <= 6) {
                
                this.coloredBox.style.background= "#FF6A19";
                this.priorityWord = "medium";

            }

            if (this.priority >= 7 && this.priority <= 10) {
            
                this.coloredBox.style.background= "#00EA09";
                this.priorityWord = "low";

            }
        },
        
    },
    async mounted() {
        this.getEvent(this.id);
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
        width: auto;
    }

    .priority-box {
        
        background: lightgreen;
        width: 50px;
        height: 140px;
        border: 1px solid black;
    }

    .colored {
        height: 110px;
        width: 50px;
    }



    .white {
        height: 30px;
        width: 50px;
        background: white;
    }

    

    .details {
        text-align: center;
    }
    
    .priority {
        width: auto;
        margin: 20px;
    }

    .text {
        font-weight:500;
    }


     @media screen and (max-width: 600px) {
        .event-details {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        text-align: left;
        height: 100vh;
        background: white;
        margin: 0px;
        width: 100%;
    }

        .center-div {
            display: flex;
            flex-direction: column;
            justify-content: center;
         
            text-align: left;
            height: 100%;
            width: 100%;
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

        .details {
            font-size: 25px;
        }

        .text {
            font-size: 24px;
        }

        .priority-box {
            width: 80px;
            height: 220px;
        }

        .white {
            width: 80px;
            height: 50px;
        }

        .colored {
            width: 80px;
            height: 170px;
        }
     }  
    
    
</style>