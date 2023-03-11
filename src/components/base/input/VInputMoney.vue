<template>
  <div class="my-input">
    <label>{{ label }}</label>
    <input ref="inputRef" type="text" class="input" />
  </div>
</template>
  
  <script>
import { useCurrencyInput } from "vue-currency-input";

export default {
  name: "CurrencyInput",
  props: {
    modelValue: Number,
    options: Object,
    label: String,
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options);

    return { inputRef };
  },
};
</script>

<style scoped lang="scss">
.my-input {
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
    text-align: right;
  }
}
</style>