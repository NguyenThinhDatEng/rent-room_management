<template>
  <div class="myInput">
    <label v-show="hasLabel">{{ label }}</label>
    <div v-if="!isTextarea" class="input">
      <input
        :type="type"
        :value="modelValue"
        :style="{ width: getWidth(inputWidth), 'text-align': getTextAlign() }"
        @input="$emit('update:modelValue', getValue($event))"
      />
      <slot />
    </div>
    <textarea v-else @input="$emit('update:modelValue', getValue($event))" />
  </div>
</template>

<script>
// resources
import resource from "@/assets/js/resource";
import myEnum from "@/assets/js/enum";
import myFunc from "@/assets/js/common/function";

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
    isTextarea: {
      type: Boolean,
      default: false,
    }, // use textarea
  },

  created() {
    // update hasLabel
    this.hasLabel = this.label != "";
  },

  methods: {
    /**
     * @description Get value following type of input
     * @param {Event} e
     * 07/03/2023
     */
    getValue(e) {
      try {
        const val = e.target.value;
        if (this.type === this.inputType.number) {
          return Number(val);
        }
        return val;
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

    /**
     * @description get text-align for style of input
     * @author NVThinh 11/03/2023
     */
    getTextAlign: function () {
      if (this.type == this.inputType.number) {
        return "right";
      }
      return "left";
    },
  },

  data() {
    return {
      hasLabel: false,
      // resources
      myEnum,
      myFunc,
      inputType: resource.common.input_type,
    };
  },
};
</script>

<style scoped lang="scss">
// variables
$input__border--hover: #1aa4c8;
$border--default: #afafaf;

.myInput {
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    text-align: left;
    margin-bottom: 4px;
  }

  .input {
    display: flex;
    border: 1px solid $border--default;
    border-radius: 4px;
    padding: 4px 8px;
    height: 40px;

    input {
      border-radius: 4px;
      border: none;

      &:hover {
        border-color: $input__border--hover;
      }
    }
  }

  textarea {
    border-radius: 4px;
    border: 1px solid $border--default;
    height: 60px;
    padding: 4px 8px;

    &:hover,
    &:focus {
      border-color: $input__border--hover;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>