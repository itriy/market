<template>
    <div class="item">
        <img :src="img" alt="">
    </div>
</template>
<script>
export default {
    props: ['img'],
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
    .item {
        display: flex;

        img {
            width: 100%;
            height: auto;
        }
    }
</style>
