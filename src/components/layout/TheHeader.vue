<template>
  <div id="theHeader">
    <div class="header">
      <div class="header__left">
        <img src="@/assets/images/common/room-icon.png" />
        <p style="margin-left: 24px">Phòng trọ của tôi</p>
      </div>
      <div class="header__right">
        <v-input
          :type="resource.common.input_type.number"
          :input-width="50"
          v-model="year"
        >
          <div class="input__icon">
            <font-awesome-icon
              icon="fa-solid fa-chevron-up"
              fixed-width
              :title="dictionary.increase.vi"
              @click="onClickUpIcon()"
            />
            <font-awesome-icon
              icon="fa-solid fa-chevron-down"
              fixed-width
              :title="dictionary.decrease.vi"
              @click="onClickDownIcon()"
            />
          </div>
        </v-input>
      </div>
    </div>
  </div>
</template>

<script>
// resources
import Function from "@/assets/js/common/func.js";
import resource from "@/assets/js/resource";
import dictionary from "@/assets/js/resource/dictionary";
// components
import VInput from "../base/input/VInput.vue";

export default {
  name: "TheHeader",
  components: { VInput },
  props: {},
  emits: [],

  created() {
    // init year
    this.year = Function.getCurrentYear();
  },
  watch: {
    year: function () {
      console.log(this.year);
    }, // năm hiện tại
  },
  mounted() {},
  methods: {
    /**
     * @description increase current year when click up icon
     * @author NVThinh
     * 06/03/2023
     */
    onClickUpIcon: function () {
      this.year += 1;
    },

    /**
     * @description decrease current year when click down icon
     * @author NVThinh
     * 06/03/2023
     */
    onClickDownIcon: function () {
      this.year -= 1;
    },
  },

  data() {
    return {
      year: 0, // displayed year
      // resources
      Function,
      resource,
      dictionary,
    };
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

      .input__icon {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 13px;

        svg {
          cursor: pointer;
        }
      }
    }
  }
}
</style>