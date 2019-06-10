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
      items: [
        {
          id: 1,
          title: "Title-1",
          descriptions:
            "Online auction sites like eBay are visual platforms. Many buyers look only at the photos and neglect to read the text. But writing good descriptions is one of the best ways to close a sale.",
          image: "http://lorempixel.com/400/200/sports/1/",
          slug: "slug-1"
        },
        {
          id: 2,
          title: "Title-2",
          descriptions:
            "Online auction sites like eBay are visual platforms. Many buyers look only at the photos and neglect to read the text. But writing good descriptions is one of the best ways to close a sale.",
          image: "http://lorempixel.com/400/200/sports/1/",
          slug: "slug-2"
        },
        {
          id: 3,
          title: "Title-3",
          descriptions:
            "Online auction sites like eBay are visual platforms. Many buyers look only at the photos and neglect to read the text. But writing good descriptions is one of the best ways to close a sale.",
          image: "http://lorempixel.com/400/200/sports/1/",
          slug: "slug-3"
        },
        {
          id: 4,
          title: "Title-4",
          descriptions:
            "Online auction sites like eBay are visual platforms. Many buyers look only at the photos and neglect to read the text. But writing good descriptions is one of the best ways to close a sale.",
          image: "http://lorempixel.com/400/200/sports/1/",
          slug: "slug-4"
        },
        {
          id: 5,
          title: "Title-5",
          descriptions:
            "Online auction sites like eBay are visual platforms. Many buyers look only at the photos and neglect to read the text. But writing good descriptions is one of the best ways to close a sale.",
          image: "http://lorempixel.com/400/200/sports/1/",
          slug: "slug-5"
        }
      ]
    };
  }
};
</script>
<style lang="scss" src="./style.scss"></style>
