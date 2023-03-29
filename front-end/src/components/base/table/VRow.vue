<template>
  <tr>
    <v-td></v-td>
  </tr>
</template>

<script>
import VTd from "./VTd.vue";

export default {
  name: "TableRow",
  components: { VTd },
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
tr {
  height: 40px;
}
</style>