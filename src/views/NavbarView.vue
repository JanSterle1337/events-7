<template>
  <nav>
    <div class="center">
      <img class="logo" src="../assets/Outfit7_Logo_2021.png">
    </div>
    <div class="center">
      <router-link to="/">Home</router-link>
    </div>
    <div class="center">
      <router-link to="/about">About</router-link>
    </div>
    
  </nav>
</template>

<script>
export default {
    name: 'NavbarView'
}
</script>

<style>
  .logo {
    width: 140px;
    height: 40px;
    margin-left: 10%;
  }
</style>