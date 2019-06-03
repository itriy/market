<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {

};
</script>


<style lang="scss">
@import "./assets/scss/mixins/index.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
.main {
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @include media(M) {
    min-height: 100vh;
    padding-bottom: 0;
  }
}

body {
  justify-self: stretch;
  display: flex;
  flex-grow: 1;
  margin: 0;
}
</style>
