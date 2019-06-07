<template>
    <div class="item">
        <router-link :to="{name: 'ItemView',params:{slug:index}}">
            <img :src="img" alt="">
        </router-link>

    </div>
</template>
<script>
export default {
    props: ['img','index'],
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
    .item {
        display: flex;

        a {
            width: 100%;
        }

        img {
            width: 100%;
            height: auto;
        }
    }
</style>
