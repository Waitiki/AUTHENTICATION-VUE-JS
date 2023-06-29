<script>
import axios from 'axios';
import { RouterView } from 'vue-router'
export default{
 
      created(){

      },

      beforeCreate () {
        axios.get("/checklogin")
        .then((res)=>{
          this.$router.push({ name: 'HomeView' })
        })
        .catch((err)=>{
          this.$router.push({ name: 'Login' })

        })
 
}
  }


</script>

<template>
  NavBar

  <RouterView />
  
</template>

<style scoped>

</style>
