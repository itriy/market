<template>
  <div class="catalog">
    <div class="catalog__list">
      <item v-for="(item) in items" :key="item.id" :item-data="item" class="catalog__list-item"></item>
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
 
    };
  },
  computed: {
    items(){
      return this.$store.getters['GET_ITEMS'];
    }
  }
};
</script>
<style lang="scss" src="./style.scss"></style>
