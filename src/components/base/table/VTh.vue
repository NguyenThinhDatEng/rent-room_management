<template>
  <th v-if="config.content" :style="getStyle(config)">{{ config.content }}</th>
  <th v-else :style="getStyle(config)">
    <input type="checkbox" />
  </th>
</template>
  
  <script>
export default {
  name: "tableData",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
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

    getStyle: function (config) {
      let tmpArr = [];
      let style = "";
      if (config.width) tmpArr.push("width: " + this.getWidth(config.width));
      style = tmpArr.join(";");
      return style;
    },
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
input {
  width: 16px;
  height: 16px;
}
</style>