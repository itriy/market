<template>
<div>
    <button @click="closeItemView">Back</button>
    <div class="item-view">
        <div class="item-view__title">{{itemData.title}}</div>
        <div class="item-view__image">
            <img :src="itemData.image" alt="">
        </div>
        <div class="item-view__descriptions">{{itemData.descriptions}}</div>
        <div>
            <label :for="elem.id" v-for="elem in valueData" :key="elem.id">
                <input type="radio" v-model="value" :value="elem.price" :id="elem.id">
                <span>{{elem.title}}</span>
            </label>
            {{value}}
        </div>
    </div>
</div>

</template>
<script>
export default {
    props: ['slug'],
    data() {
      return {
          valueData: [
              {
                id: 1,
                title: 'Base price',
                price: 100,
              },
            {
                id: 2,
                title: 'Normal price',
                price: 150,
              },
            {
                id: 3,
                title: 'Top price',
                price: 200,
              },
            {
                id: 4,
                title: 'Vip price',
                price: 350,
              }
          ],
          value: null
      }
    },
    computed:{
        itemData(){
            return this.$store.getters['GET_ITEM_BY_SLUG'](this.slug);
        }
    },
    methods: {
        closeItemView(){
            this.$router.go(-1);
        },
    },
    created(){
        this.value = this.valueData[0].price;
    }
}
</script>
<style lang="scss" src="./style.scss"></style>