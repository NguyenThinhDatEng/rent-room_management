<template>
  <tr>
    <v-data></v-data>
    <v-data></v-data>
    <v-data></v-data>
    <v-data></v-data>
    <v-data></v-data>
  </tr>
</template>

<script>
import VData from "./VData.vue";

export default {
  name: "TableRow",
  components: { VData },
  created() {},
  props: {},
  emits: [],
  methods: {},
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