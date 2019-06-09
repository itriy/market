<template>
  <div>
    <top-menu class="nav"></top-menu>
    <router-view/>
    <sidebar></sidebar>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import TopMenu from "../components/Menu";
export default {
  components: {
    Sidebar,
    TopMenu
  },
  data() {
    return {};
  }
};
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
