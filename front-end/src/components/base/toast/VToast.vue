<template>
  <!-- Toast is here -->
  <div v-if="isShow" class="toast__wrapper">
    <div
      :class="[
        'v-toast',
        { 'toast--error': actionStatus == Enum.action_status.error },
      ]"
    >
      <div class="toast__icon--background">
        <div class="toast__icon--wrapper center">
          <div class="icon icon--center icon--tick"></div>
        </div>
      </div>
      <div class="toast__info">{{ content }}</div>
    </div>
  </div>
</template>

<script>
import Enum from "@/assets/js/enum";

export default {
  name: "ToastVue",
  props: {
    // Trạng thái: Lỗi, Thành công, ...
    actionStatus: {
      type: Number,
      default: 0,
    },
    // Nội dung hiển thị
    content: {
      type: String,
      default: "Chưa có nội dung để hiển thị",
    },
  },

  created() {
    this.isShow = true;
  },

  mounted() {
    setTimeout(() => {
      this.isShow = false;
    }, 2000);
  },

  data() {
    return {
      isShow: false,
      // Resources
      Enum,
    };
  },
};
</script>

<style scoped>
@import url(@/assets/css/icon.css);

.toast__wrapper {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
}

.v-toast {
  display: flex;
  align-items: center;
  width: 450px;
  height: 56px;
  border-radius: 4px;
  padding: 18px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
}

.toast__icon--background {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background-color: #baeed4;
}

.toast__icon--wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: #1ac871;
}

.toast--error .toast__icon--background {
  background-color: #f59999;
}

.toast--error .toast__icon--wrapper {
  background-color: #eb3333;
}

.toast--error .icon--tick {
  background: url(@/assets/icons/icons8-exclamation-mark-15.png);
  width: 15px;
  height: 15px;
}

.toast__info {
  padding-left: 18px;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>