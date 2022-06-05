<template>
  <div class="heading">
      <h1>Analytics panel</h1>
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
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>