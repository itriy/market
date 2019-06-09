<template>
  <div class="catalog">
    <div class="catalog__list">
      <item v-for="(item,index) in 17" :key="index" :img="img" :index="index" class="catalog__list-item"></item>
    </div>
  </div>
</template>
<script>
import Item from "../Item";
export default {
  components: {
    Item
  },
  data() {
    return {
      img: "http://lorempixel.com/400/200/sports/1/"
    };
  }
};
</script>
<style lang="scss" src="./style.scss"></style>
