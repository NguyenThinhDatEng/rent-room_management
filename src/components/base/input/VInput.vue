<template>
  <div class="myInput">
    <label v-show="hasLabel">{{ label }}</label>
    <div class="input">
      <input
        :type="type"
        :value="modelValue"
        :style="{ width: getWidth(inputWidth) }"
        @input="$emit('update:modelValue', getValue($event))"
      />
      <slot />
    </div>
  </div>
</template>

<script>
// resources
import resource from "@/assets/js/resource";

export default {
  name: "NormalInput",
  emits: ["update:modelValue"],
  props: {
    type: {
      type: String,
      default: "text",
    }, // Type of input
    modelValue: {
      type: [String, Number],
    }, // default value of input
    maxLength: {
      type: [Number, String],
      default: "",
    }, // max length of input
    minLength: {
      type: [Number, String],
      default: "",
    }, // min length of input
    inputWidth: {
      type: [Number, String],
      default: 100,
    }, // width of input
    label: {
      type: String,
    }, // label of combobox
    hasLabel: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    /**
     * @description Get value following type of input
     * @param {Vue Event} e
     * 07/03/2023
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

    /**
     * @description match with for style base on type of width
     * @param {Number, String} width width of input
     * @author NVThinh 9/3/2023
     */
    getWidth: function (width) {
      if (typeof width === "number") {
        return this.inputWidth + "px";
      }
      return width;
    },
  },

  data() {
    return {
      // resources
      inputType: resource.common.input_type,
    };
  },
};
</script>

<style scoped lang="scss">
// variables
$input__border--hover: #81ecec;

.myInput {
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
    margin-bottom: 4px;
  }

  .input {
    display: flex;
    border: 1px solid #afafaf;
    border-radius: 4px;
    padding: 4px 8px;
    height: 40px;

    input {
      border-radius: 4px;
      border: none;
      outline: none;

      &:hover {
        border-color: $input__border--hover;
      }
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>