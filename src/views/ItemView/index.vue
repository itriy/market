<template>
<div>
    <button @click="closeItemView">Back</button>
    ItemView
      <router-view/>
      <sidebar></sidebar>
</div>

</template>
<script>
import Sidebar from "../../components/Sidebar";
export default {
    components: {
        Sidebar
    },
    data() {
      return {

      }
    },
    methods: {
        closeItemView(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>