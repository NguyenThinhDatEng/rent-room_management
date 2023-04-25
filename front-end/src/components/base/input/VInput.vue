<template>
  <div class="myInput">
    <!-- label -->
    <label v-if="hasLabel">{{ label }}<span v-show="isRequired">*</span></label>
    <!-- normal input -->
    <div
      v-if="!isTextarea"
      :class="[
        { 'has-border': hasBorder },
        { 'is-error': errorConfig.isError },
        'input',
      ]"
    >
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :style="{
          width: inputWidth ? getWidth(inputWidth) : '100%',
          'text-align': getTextAlign(),
        }"
        @input="$emit('update:modelValue', getValue($event))"
        :class="{ 'is-error': errorConfig.isError }"
      />
      <slot />
    </div>
    <!-- textarea -->
    <textarea v-else @input="$emit('update:modelValue', getValue($event))" />
    <!-- error message -->
    <p v-show="errorConfig.isError" class="error-message">
      {{ errorConfig.message }}
    </p>
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
      default: 0,
    }, // width of input
    label: {
      type: String,
    }, // label of combobox
    isTextarea: {
      type: Boolean,
      default: false,
    }, // use textarea
    hasBorder: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    errorConfig: {
      type: Object,
      default() {
        return { message: "", isError: false };
      },
    }, // change border color and display message when have some errors
    isRequired: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    // update hasLabel
    this.hasLabel = this.label != "";
  },

  watch: {},

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
    margin-bottom: 0.5rem;

    span {
      color: red;
      padding-left: 4px;
    }
  }

  .input {
    display: flex;
    border-radius: 4px;
    height: 40px;

    &.has-border {
      padding: 4px 8px;
      border: 1px solid $border--default;
    }

    input {
      border-radius: 4px;
      border: none;
      width: 100%p;

      &:hover {
        border-color: $input__border--hover;
      }

      &.is-error {
        border-color: red !important;
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

  .error-message {
    color: red;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>