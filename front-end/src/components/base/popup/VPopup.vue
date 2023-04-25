<template>
  <div class="popup-wrapper" v-if="isOpen">
    <div class="center popup">
      <!-- Popup Header -->
      <div class="popup__header">
        <span>{{ title }}</span>
        <img
          src="@/assets/icons/close-24px.png"
          :title="dictionary.close.vi"
          @click="close()"
        />
      </div>
      <!-- Popup body  -->
      <div class="popup__body">
        <slot />
      </div>
      <!-- Popup footer  -->
      <div class="popup__footer">
        <v-button
          :title="dictionary.save.vi"
          :content="dictionary.save.vi"
          @click="$emit('on-save')"
        ></v-button>
        <v-button
          class="button--outline"
          :title="dictionary.cancel.vi"
          :content="dictionary.cancel.vi"
          @click="close()"
        ></v-button>
      </div>
    </div>
  </div>
</template>
      
      <script>
// Resources
import Resource from "@/assets/js/resource";
import Enum from "@/assets/js/enum";
import dictionary from "@/assets/js/resource/dictionary";
//Components
import VButton from "@/components/base/button/VButton.vue";

export default {
  name: "PopupVue",
  components: {
    VButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    }, // Tiêu đề của popup

    mode: {
      type: Number,
      default: 0,
    }, // Chế độ của popup

    popupObj: {
      type: Object,
      default: () => {
        return {};
      },
    }, // Đối tượng popup

    isShow: {
      type: Boolean,
      default: false,
    }, // Change the value of isShow to open popup
  },
  emits: ["close-popup", "on-save", "on-tab"],

  watch: {
    isShow: function () {
      this.isOpen = true;
    },
  },

  created() {},

  methods: {
    /**
     * @description Đóng popup
     * @author NVThinh 5/1/2023
     */
    close: function () {
      this.isOpen = false;
    },

    /**
     * Thực hiện hàm updateFilter của component cha
     * @param {string} field trường của dữ liệu
     * @param {string} value giá trị được cập nhật
     * @author NVThinh 7/1/2023
     */
    updateFilter: function (field, value) {
      try {
        this.$parent.updateFilter(field, value);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Lấy thông tin các tài sản được chọn
     * @param {Array} selectedRows mảng các dòng được chọn
     * @author Nguyen Van Thinh 7/1/2023
     */
    updateRow: function (selectedRows) {
      try {
        // Truyền mảng các dòng được chọn lên component cha
        this.$parent.updateRow(selectedRows);
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      isOpen: false,
      // Resources
      Resource,
      Enum,
      dictionary,
    };
  },
};
</script>
      
<style scoped lang="scss">
.popup-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 15, 15, 0.5);
  z-index: 2;

  .popup {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    width: 700px;
    background-color: #fff;

    .popup__header {
      display: flex;
      justify-content: space-between;
      padding: 20px 16px;

      span {
        font-weight: 700;
        font-size: 20px;
      }

      img {
        cursor: pointer;
        opacity: 0.75;
        width: 20px;
        height: 20px;
      }
    }

    .popup__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 16px;
    }

    .popup__footer {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row-reverse;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 50px;
      background-color: #f5f5f5;
      padding-right: 16px;
      margin-top: 16px;

      .button--outline {
        margin-right: 8px;
      }
    }
  }
}
</style>