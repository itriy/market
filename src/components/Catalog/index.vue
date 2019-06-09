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
<style lang="scss">
@import "../../assets/scss/mixins/index.scss";

$padding: 10px;

.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1300px;
    margin:auto;
    justify-content: start;

    &-item {
      margin: $padding 0 0 0;
      max-width: 100%;
      flex-basis: 100%;

      @include media(S) {
        max-width: calc(100% - #{$padding});
        margin: $padding 0 0 $padding;
        flex-basis: calc(49% - #{$padding});
      }
      @include media(M) {
        flex-basis: calc(33% - #{$padding});
      }

      @include media(L) {
        flex-basis: calc(25% - #{$padding});
      }
    }
  }
}
</style>
