<template>
  <div class="heading"> 
    <router-link to="/create" class="create-button"><span class="text">Add event</span></router-link>
  </div>
  <hr>
  <div class="main-content">
    <EventList/>
  </div>
  
</template>

<script>

import EventList from '../components/EventList.vue'

export default {
    name: 'NavbarView',
    components: {
      EventList
    },
    data() {
      return {

      }
    },
}
</script>

<style>
  .heading {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
  }
  .main-content {
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 100%;
    width: 100%;
  }

  .create-button {
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
    margin-left: 10%;
  }



.create-button:active {
  outline: 0;
}

.create-button:hover {
  outline: 0;
}

.create-button span {
  transition: all 200ms;
}

.create-button:hover span {
  transform: scale(.9);
  opacity: .75;
}
</style>