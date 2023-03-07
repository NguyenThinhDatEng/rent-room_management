<template>
  <div class="input">
    <input
      :type="type"
      :value="modelValue"
      :style="{ width: inputWidth + 'px' }"
      @input="$emit('update:modelValue', getValue($event))"
    />
    <slot />
  </div>
</template>

<script>
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
      type: Number,
      default: 100,
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

.input {
  display: flex;
  border: 1px solid #afafaf;
  border-radius: 4px;
  padding: 4px 8px;
  height: 36px;

  input {
    border-radius: 4px;
    border: none;
    outline: none;

    &:hover {
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