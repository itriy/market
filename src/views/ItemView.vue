<template>
<div>
    <button @click="closeItemView">Back</button>
    ItemView
      <router-view/>
</div>

</template>
<script>
export default {
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
<style lang="scss">

</style>
