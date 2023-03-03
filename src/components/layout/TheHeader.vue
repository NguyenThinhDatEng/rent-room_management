<template>
  <div id="theHeader">
    <div class="header">
      <div class="header__left mr-auto">
        <img src="@/assets/images/common/room-icon.png" />
        <p class="ml-2">Phòng trọ của tôi</p>
      </div>
      <div class="header__right">
        <input type="number" :value="Function.ge" />
      </div>
    </div>
  </div>
</template>

<script>
import Function from "@/assets/js/common/func.js";

export default {
  name: "TheHeader",
  created() {},
  components: {},
  props: {},
  emits: [],
  methods: {},
  data() {
    return { Function };
  },
};
</script>

<style lang="scss" scoped>
#theHeader {
  .header {
    display: flex;
    padding: 8px;
    width: 100%;

    .header__left {
      display: flex;
      align-items: center;

      img {
        max-width: 50px;
      }

      p {
        font-size: 24px;
        margin: 0;
      }
    }

    .header__right {
      display: flex;
      align-items: center;
    }
  }
}
</style>