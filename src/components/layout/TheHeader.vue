<template>
  <div id="theHeader">
    <div class="header">
      <div class="header__left">
        <img src="@/assets/images/common/room-icon.png" />
        <p style="margin-left: 24px">Phòng trọ của tôi</p>
      </div>
      <div class="header__right">
        <input
          type="number"
          :value="Function.getCurrentYear()"
          min-length="4"
          max-length="4"
        />
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
$input__border--hover: #81ecec;

#theHeader {
  .header {
    display: flex;
    padding: 8px;
    width: 100%;

    .header__left {
      display: flex;
      align-items: center;
      margin-right: auto;

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

      input {
        padding-left: 8px;
        border: 1px solid #afafaf;
        border-radius: 4px;
        outline: none;
        width: 60px;
        height: 36px;

        &:hover {
          border-color: $input__border--hover;
        }
      }
    }
  }
}
</style>