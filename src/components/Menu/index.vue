<template>
    <div>
        <router-link v-for="item in menuItems" :key="item.id" :to="item.slug">
            {{item.label}}
        </router-link>
    </div>
</template>
<script>
export default {
    props: [],
    data(){
        return {
            menuItems: [
                {
                    label: 'Home',
                    slug: '/',
                    id: 1
                },
                {
                    label: 'About',
                    slug: '/about',
                    id: 2
                },
                {
                    label: 'Catalog',
                    slug: '/catalog',
                    id: 3
                }
            ]
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>