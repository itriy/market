<template>
<div>
    <div class="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/catalog">Catalog</router-link>
      </div>
      <router-view/>
      <sidebar></sidebar>
</div>

</template>
<script>
import Sidebar from "../components/SideBar"
export default {
    components: {
      Sidebar
    },
    data() {
      return {
        
      }
    }
}
</script>
<style lang="scss">
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
