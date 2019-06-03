<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
       this.$bus.$on("console.test", ()=> {
       console.log('console from Home')
    });
  },
    beforeDestroy(){
    // console.log('OFF,console.test')
        this.$bus.$off("console.test");
  }
}
</script>
