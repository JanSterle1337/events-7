<template>
  <nav>
    <div class="center">
      
      <router-link to="/" class="link">
        
        <img class="logo" src="../assets/Outfit7_Logo_2021.png">
        <h2 class="main-header"> : Analytics dashboard</h2>
        
      </router-link>
      <div class="right-box"></div> 
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavbarView'
}
</script>

<style scoped>

    nav {
      width: 100%;
    }

    .center {
      width: 100%;
    }

    .center:hover {
      transition: 1s;
    }

  .logo {
    width: 140px;
    height: 40px;
    
  }

  .main-header {
    width: auto;  
    margin: 5px;
    font-size: 30px;
  }

  .link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .center {
 
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
  transition: 0.3s ease-in-out;
  
}


nav div a.router-link-exact-active {
  color: white;
}


nav div a.router-link-exact-active:hover {
   color:hsl(343, 70%, 38%);
   background: white;
}

@media screen and (max-width: 600px) {
  .logo {
    width: 120px;
    height: 25px;
    
  }

  .main-header {
    width: auto;  
    margin: 5px;
    font-size: 22px;
  }
  
}

  
</style>