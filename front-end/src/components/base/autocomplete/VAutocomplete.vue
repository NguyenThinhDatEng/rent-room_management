<template>
  <div class="myAutocomplete">
    <label>{{ label }}</label>
    <!-- select-when-unmatched: true -->
    <!-- highlight-first-item="true" -->
    <ElAutocomplete
      class="autoCompleteCustom"
      clearable
      v-model="state"
      popper-class="my-list"
      name="NVT"
      :fetch-suggestions="querySearch"
      :placeholder="placeholder"
    >
      <template #suffix>
        <el-icon class="el-input__icon">
          <edit />
        </el-icon> </template
    ></ElAutocomplete>
  </div>
</template>

<script>
// libraries
import { Edit } from "@element-plus/icons-vue";

export default {
  name: "AutoComplete",
  components: { Edit },
  props: {
    label: {
      type: String,
    }, // label of combobox
    data: {
      type: Array,
      default: () => [],
    }, // select content of combo
    placeholder: {
      type: String,
      default: "",
    }, // placeholder of autocomplete
    modelValue: {
      type: [String, Number],
    }, // default value of input
  },
  emits: ["update:modelValue"],
  created() {},

  watch: {},

  methods: {
    /**
     * @description get suggestion via keyword
     * @param {String} queryString keyword to filter
     * @param {Function} callback get result from filter
     * @author NVThinh 11/3/2023
     */
    querySearch(queryString, callback) {
      const result = this.data.filter((item) => {
        return (
          item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      });
      callback(result);
    },

    /**
     * @description Get value following type of input
     * @param {Vue Event} e
     * @author NVThinh 11/03/2023
     */
    getValue(e) {
      try {
        if (this.type == this.inputType.number) {
          return Number(e.target.value);
        }
        return e.target.value;
      } catch (error) {
        console.log("getValue in VInput:", error);
      }
    },
  },

  data() {
    return {
      state: "", // value of autocomplete
    };
  },
};
</script>

<style>
:root {
  --border--color: #afafaf;
  --selected-item: #c7e0f5;
}

.myAutocomplete {
  display: flex;
  flex-direction: column;
}

.myAutocomplete label {
  text-align: left;
  margin-bottom: 4px;
}

.my-list li {
  line-height: normal;
  padding: 7px;
  font-family: T Regular;
}

.my-list li:hover,
.my-list li.highlighted {
  background-color: var(--selected-item) !important;
}

.my-list li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-list li .addr {
  font-size: 12px;
  color: red;
}

.el-input__wrapper {
  box-shadow: none !important;
  border: 1px solid var(--border--color);
}

.el-input__wrapper:hover {
  border-color: var(--border--color);
}

input[name="NVT"] {
  height: 36.5px;
}
</style>