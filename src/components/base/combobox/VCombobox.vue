<template>
  <div class="myCombobox">
    <label>{{ label }}</label>
    <v-combobox
      class="combobox1"
      active="true"
      bg-color="#fff"
      density="compact"
      variant="solo"
      hide-details="false"
      :label="placeholder"
      :items="items"
    />
  </div>
</template>

<script>
// libraries
import { VCombobox } from "vuetify";

export default {
  name: "ComponentVue",
  components: { VCombobox },
  props: {
    label: {
      type: String,
    }, // label of combobox
    items: {
      type: Array,
      default: () => [],
    }, // select content of combo
    placeholder: {
      type: String,
      default: "",
    },
  },
  created() {},
  emits: [],
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.myCombobox {
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
    margin-bottom: 4px;
  }

  .combobox1 {
    height: 36px;
    border-radius: 4px;

    .v-input__control {
      .v-field--variant-solo {
        border: 1px solid red !important;
      }
    }
  }
}
</style>