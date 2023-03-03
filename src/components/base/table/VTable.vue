<template>
  <div class="table">
    <table>
      <v-table-head />
      <tbody>
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
        <v-table-row />
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
// components
import VTableHead from "./VHead.vue";
import VTableRow from "./VRow.vue";

export default {
  name: "TableVue",
  components: { VTableHead, VTableRow },
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
$table__border--color: #afafaf;

.table {
  background-color: #fff;
  margin-bottom: 0;
  height: calc(100vh - 130px);
  overflow: auto;
  border: 1px solid $table__border--color;
  border-radius: 8px;

  table {
    width: 100%;
    height: 500px;

    thead {
      position: sticky;
      top: 0;
      background-color: #fff;

      //   &:before {
      //     content: "";
      //   }

      //   &:after {
      //     content: "";
      //   }
    }
  }
}
</style>