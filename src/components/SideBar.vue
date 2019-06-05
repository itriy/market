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
<style lang="scss">
@import "../assets/scss/mixins/index.scss";
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 4000;
  right: 0;
  left: 100%;
  width: 100vw;
  background: #47b784;
  transition: all 0.3s;
  overflow: hidden;
  transform: translateX(0);
  top: 0;
  bottom: 0;

  @include media(XS) {
    width: 320px;
  }

  &.open {
    transform: translateX(-100vw);

    @include media(XS) {
      transform: translateX(-320px);
    }
  }
}
</style>
