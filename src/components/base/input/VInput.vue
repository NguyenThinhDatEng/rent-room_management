<template>
  <div class="input">
    <input
      :type="type"
      :value="value"
      :style="{ width: inputWidth + 'px' }"
      @input="$emit('update:value', $event.target.value)"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: "NormalInput",
  props: {
    type: {
      type: String,
      default: "text",
    }, // Type of input
    value: {
      type: [String, Number],
      default: "",
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
  emits: ["update:value"],
  data() {
    return {};
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