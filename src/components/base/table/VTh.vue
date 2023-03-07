<template>
  <th v-if="config.content" :style="getStyle(config)">
    {{ config.content }}
  </th>
  <th v-else :style="getStyle(config)">
    <input type="checkbox" v-model="checked" />
  </th>
</template>
  
  <script>
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

  methods: {
    /**
     * @description convert width in config to width in css
     * @param {Number} width
     * @author NVThinh
     * 05/03/2023
     */
    getWidth: function (width) {
      return width + "px";
    },

    /**
     * @description convert to style in css
     * @param {object} config includes width, colName, ...
     * 07/03/2023
     */
    getStyle: function (config) {
      let tmpArr = [];
      let style = "";
      if (config.width) tmpArr.push("width: " + this.getWidth(config.width));
      style = tmpArr.join(";");
      return style;
    },
  },
  data() {
    return {
      checked: false, // value of checkbox
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