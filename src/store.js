import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    GET_ITEMS: (state) => {
      return state.items
    },
    GET_ITEM_BY_SLUG: (state) => {
      return (slug)=>{
        return state.items.find((el)=>{
          return el.slug === slug;
        })
      }
    }
  }
})
