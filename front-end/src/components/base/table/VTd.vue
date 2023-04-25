<template>
  <td v-if="config.type == dataType._checkbox">
    <input type="checkbox" :checked="checked" />
  </td>

  <td v-else-if="config.type == dataType.number">{{ content }}</td>

  <td
    v-else-if="config.type == dataType.text"
    :style="appFunc.getStyle(config)"
  >
    {{ content }}
  </td>

  <td v-else-if="config.type == dataType.date">
    {{ moment(new Date()).format("DD/MM/YYYY") }}
  </td>

  <td v-else-if="config.type == dataType.money">
    {{ formatMoney.format(content) }}
  </td>

  <td
    v-else-if="config.type == dataType._function"
    style="
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
    "
  >
    <img src="@/assets/icons/delete.png" :title="dictionary.delete.vi" />
    <img src="@/assets/icons/edit.png" :title="dictionary.edit.vi" />
  </td>

  <td v-else>
    <svg
      v-show="hasImages(content)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
      />
    </svg>
  </td>
</template>

<script>
// resources
import myEnum from "@/assets/js/enum";
import appFunc from "@/assets/js/common/function/app.js";
import dictionary from "@/assets/js/resource/dictionary";
// libraries
import moment from "moment";

export default {
  name: "TableData",
  props: {
    config: {
      type: Object,
      default: () => {},
    }, // config of td
    content: {
      type: String,
      default: "",
    }, // content of td
    checked: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  components: {},
  emits: [],
  methods: {
    /**
     * @returns true is array is not empty
     * @param {Object} imgs Array contains the infos about relevant imgs
     * @author NVThinh 9/3/2023
     */
    hasImages: function (imgs) {
      // if input is object type
      if (typeof imgs === "object") {
        return imgs.length > 0;
      }
      return false;
    },
  },
  data() {
    return {
      // libraries
      moment: moment,
      formatMoney: new Intl.NumberFormat("en-DE"),
      // resources
      dataType: myEnum.data_type,
      appFunc,
      dictionary,
    };
  },
};
</script>

<style scoped lang="scss">
td {
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  img {
    cursor: pointer;
  }
}
</style>