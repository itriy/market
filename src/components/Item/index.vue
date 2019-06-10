<template>
    <div class="item" @click="toFullView">
            <div class="item__img">
                <img :src="itemData.image" alt="">
            </div>
            <div class="item__title">{{itemData.title}}</div>
            <div class="item__descriptions">{{itemData.descriptions}}</div>

    </div>
</template>
<script>
export default {
    props: [ 'itemData'],
    data(){
        return {

        }
    },
    methods: {
        toFullView(){
            this.$router.push({name: 'ItemView',params:{slug:this.itemData.slug}});
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>