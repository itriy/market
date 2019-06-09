<template>
  <div>
    <top-menu class="nav"></top-menu>
    <router-view/>
    <sidebar></sidebar>
  </div>
</template>
<script>
import Sidebar from "../../components/Sidebar";
import TopMenu from "../../components/Menu";
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
<style lang="scss" src="./style.scss"></style>