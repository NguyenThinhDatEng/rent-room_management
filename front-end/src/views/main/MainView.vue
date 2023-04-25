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
import TheHeader from "@/components/layout/TheHeader.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";
import TheContent from "@/components/layout/TheContent.vue";

export default {
  name: "MainVue",
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main__body {
    display: flex;
    height: 100%;
  }
}
</style>
