<template>
  <th v-if="config.content" :style="appFunc.getStyle(config)">
    {{ config.content }}
  </th>
  <th v-else :style="appFunc.getStyle(config)">
    <input type="checkbox" v-model="checked" />
  </th>
</template>
  
  <script>
// resources
import appFunc from "@/assets/js/common/function/app.js";

export default {
  name: "tableData",
  emits: ["checkAll"],
  props: {
    config: {
      type: Object,
      default: () => {},
    }, // config of th
  },

  watch: {
    checked: function () {
      this.$emit("checkAll", this.checked);
    }, // emit to table when checkbox is clicked
  },

  methods: {},
  data() {
    return {
      checked: false, // value of checkbox
      // resources
      appFunc,
    };
  },
};
</script>
  
  <style scoped>
input {
  width: 16px;
  height: 16px;
}
</style>