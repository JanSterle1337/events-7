<template>
  <div class="input-form-wrapper">
      <form @submit.prevent="processEvent">
      <div class="row">
          <h1>Create your event</h1>
          <div style="width: 50%" class="delete"></div>
      </div>
        
        <div class="row">
            <label>name your event</label>
            <input type="text" placeholder="double-click" name="name" v-model="name"/>
        </div>

        <div class="row">
          <label>type</label>
          <input type="text" placeholder="mobile" name="type" v-model="type"/>
        </div>

        <div class="row">
          <label>priority</label>
          <input type="number" placeholder="3" name="priority" v-model="priority"/>
        </div>

        <div class="row">
          <label>description</label>
          <textarea v-model="description" v-on:input="checkDescLength" maxlength = "100">This is a spam click...</textarea>
          <!--<input type="text" placeholder="This is a spam click..." name="description" v-model="description"/>-->
        </div>
         <p class="length-text">{{ maxDescLength }} / {{ currentLength}}</p> 
         <p class="alert">{{ errors}}</p>
         <p class="sucess">{{ success }}</p>
        <div class="button-wrapper">
          <button name="submit"><span class="text">Add event</span></button>
        </div>
      </form>
  </div>
</template>

<script>

import { db } from '../firebase';
import { collection, getDoc, orderBy, query,addDoc, limit, getDocs } from 'firebase/firestore';




export default {
    name: 'CreateEvent',
    data() {
        return {
            name: "",
            type: "",
            priority: 10,
            description: "",
            maxDescLength: 100,
            currentLength: 0,
            eventsRef: null,
            maxEvent: [],
            maxID: 0,
            errors: "",
            success: "",
        }
    },
    methods: {
         async processEvent() {
            console.log("neki");

            let name = this.checkName();
            let type = this.checkType();
            let priority = this.checkPriority();
            let description = this.checkDescription();

            if (name && type && priority && description) {
                console.log("Cist vse je urede");


               await this.getLastEvent();
               await this.uploadData();
               this.errors = "";
               this.success = "Event was successfully uploaded to the database";
               setTimeout( () => this.$router.push({ path: '/'}), 3000);
                
            } else {     
                setTimeout(function () { this.fetchHole() }.bind(this), 1000);
                this.errors = "";
                console.log("Nek parametr ni urjde");
            }
    
        },

        fetchHole() {
            this.errors = "There was an error sending the data to database. Please, check for misspellings.";
        },

        checkName() {
            
            let nameRegex = new RegExp(/^[A-z0-9]+\-?[A-z0-9]*$/i);


            console.log(nameRegex.test(this.name)); 

            if (this.name.length > 3 && this.name.length < 30) {
                if (nameRegex.test(this.name)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        checkType() {
            let typeRegex = new RegExp(/^[A-z0-9]+\-?[A-z0-9]*$/i);

            if (this.type.length >= 3 && this.type.length < 30) {
                if (typeRegex.test(this.type)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log("Type ni okej");
                return false;
            }
        },
        checkPriority() {
            if (this.priority > 0 && this.priority <= 10) {
                return true;
            } else {
                return false;
            }
        },
        checkDescription() {
            let descriptionRegex = new RegExp(/^(([A-z0-9\'\"]+\-?[ \t]*)*[A-z0-9]*\-*[\. \t]*)*$/g);

            if (this.description.length > 3 && this.description.length <= 100) {
                if (descriptionRegex.test(this.description)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log("description ni okej");
                return false;
            }
        },

        checkDescLength() {
            let length = this.description.length;
            this.currentLength = length;
            if (this.currentLength >= 100) {
                
            }
            console.log(this.currentLength);
        },

        async getLastEvent() {
            
           
            this.eventsRef = collection(db, "Events");
            const q = query(this.eventsRef, orderBy("eventID", "desc"), limit(1));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                this.maxEvent = doc.data();

                
                console.log("Max event: ", this.maxEvent);
                this.maxID = this.maxEvent.eventID + 1;
                //console.log(doc.id, " => ", doc.data());
                
                console.log("Nov id je: ", this.maxID);

                console.log("Newid: ", this.newID);
                console.log("Name: ", this.name);
                console.log("Type: ", this.type);
                console.log("Description: ", this.description);
                console.log("priority: ", this.priority);
            });
            
                

                

            this.isLoaded = true;
        },


        async uploadData() {
            let docRef = await addDoc(collection(db,"Events"), {
                    
                    eventID: this.maxID,
                    name: this.name,
                    type: this.type,
                    priority: this.priority,
                    description: this.description
                });
        }
    }
}
</script>

<style scoped>


    .alert { 
        color: red;
        margin: 0px;
        font-weight: bold;
    }

    .sucess {
        color:#42b983;
        font-weight: bold;
    }

    .length-text {
        margin-left: 3rem;
    }
    .input-form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #eeee;
        border-radius: 10px;
       
        height: 100%;
    }
    .row {
        display: flex;
        flex-direction: row;
        margin: 10px;
        justify-content:flex-start;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        
        border-radius: 10px;
        min-width: 70%;
        height: auto;
        justify-content: center;
        border-top: 3rem solid #eeee;
        margin-top: -100px;
        box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    }

    label {
        width: 50%;
        font-size: 1.5rem;
    }
    textarea {
        width: 40%;
        height: 5rem;
        padding-left: 20px;
        padding-top: 10px;
        font-size: 1.1rem;
        outline: none;
        border-radius: 10px;
        border-color: #eeee;
        background: #eeee;
        border: 1px solid gray;
        margin-right: 20px;
        resize: none;
        margin-top: 20px;
    }

    textarea:focus {
        border: 2px solid #42b983;
        background: white;
        
    }


    .button-wrapper {
        display: flex;
        justify-content: flex-end;
        height: 7rem;
        width: 90%;
    }

   
 button {
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 20px;
  margin-bottom: 30px;
}

button:active {
  outline: 0;
}

button:hover {
  outline: 0;
}

button span {
  transition: all 200ms;
}

button:hover span {
  transform: scale(.9);
  opacity: .75;
}

h1 {
    width: 50%;
    text-align: center;
    margin: 5px;
}

@media screen and (max-width: 991px) {
  button {
    font-size: 15px;
    height: 50px;
  }

  button span {
    line-height: 50px;
  }
}

@media screen and (max-width: 600px) { 
    form {
        width: 100%;
        height: auto;
    }
    h1 {
        width: 100%;
        text-align: center;
    }

    .delete {
        width: 0% !important;
    }
}

    input {
        width: 40%;
        height: 2rem;
        padding-left: 20px;
        font-size: 1.2rem;
        outline: none;
        border-radius: 10px;
        border-color: #eeee;
        background: #eeee;
        border: 1px solid gray;
        margin-right: 20px;
        margin-top: 20px;
        
    }

    input:focus {
        border: 2px solid #42b983;
        background: white;
        
    }

    input:focus::placeholder {
        color: transparent;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

    h2 {
        width: 100%;
        text-align: center;
    }

</style>