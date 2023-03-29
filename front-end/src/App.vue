<template>
  <div class="main">
    <TheHeader />
    <div class="main__body">
      <TheSidebar />
      <TheContent />
    </div>
  </div>
</template>

<script>
// Components
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
};
</script>

<style lang="scss">
@import url(@/assets/css/style.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    height: 100%;

    .main__body {
      display: flex;
      height: 100%;
    }
  }
}
</style>
