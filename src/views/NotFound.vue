<template>
  <div class="wrapper">
    <div> 
      <h1 class="alignment">404</h1>
      <h2 class="alignment">Page not found</h2>
    </div>
    <img src="../assets/greeting.gif">
  </div>
  


</template>

<script>
export default {

}
</script>

<style scoped>

  .wrapper {
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    height: 50%;
  }

  img {
    width: 150px;
    height: 150px;
  }
 

  .alignment {
    width: auto;
    margin: 20px;
  }
  
</style>