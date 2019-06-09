<template>
  <div class="sidebar" :class="{open}">
    <h2>SideBar</h2>
    <button @click="closeSideBar">X</button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            open: false
        };
    },
    methods: {
        closeSideBar() {
            if (this.open) {
                this.$bus.$emit("sidebar.close");
            }
        },
    },
    mounted() {
        this.$bus.$on("sidebar.open", () => {
            this.open = true;
        });

        this.$bus.$on("sidebar.close", () => {
            this.open = false;
        });
    },
};
</script>
<style lang="scss" src="./style.scss"></style>