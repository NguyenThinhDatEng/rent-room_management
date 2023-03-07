<template>
  <div class="table">
    <table>
      <thead>
        <v-th
          v-for="config in tableHeadData"
          :key="config.col"
          :config="config"
        />
      </thead>
      <tbody>
        <v-table-row v-for="item in tableData" :key="item.col" />
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
// components
import VTh from "./VTh.vue";
import VTableRow from "./VRow.vue";
// resources
import resource from "@/assets/js/resource";

export default {
  name: "TableVue",
  components: { VTh, VTableRow },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  emits: [],

  created() {
    this.initTableHeadData();
    console.log("1", this.tableData);
    console.log("2", this.tableHeadData);
  },

  methods: {
    /**
     * @description initialize data for columns in table
     * @author NVThinh
     * 05/03/2023
     */
    initTableHeadData: function () {
      let me = this;
      // init content for each object in tableData
      const contents = resource.spending_list.table_header;
      this.tableData.forEach((item) => {
        // init tableHeadData
        me.tableHeadData.push({ ...item });
      });
      this.tableHeadData.forEach((item) => {
        // add content
        item.content = contents[item.col]?.vi;
        delete item.type;
      });
    },

    /**
     * @description initialize data for columns in table
     * @author NVThinh
     * 06/03/2023
     */
    initTableBodyData: function () {
      let me = this;
      // init content for each object in tableData
      const contents = resource.spending_list.table_header;
      this.tableData.forEach((item) => {
        // init tableHeadData
        me.tableHeadData.push({ ...item });
      });
      this.tableHeadData.forEach((item) => {
        // add content
        item.content = contents[item.col]?.vi;
        delete item.type;
      });
    },
  },

  data() {
    return {
      tableHeadData: [], // Dữ liệu cho phần header
    };
  },
};
</script>

<style scoped lang="scss">
// variables
$table__border--color: #afafaf;

.table {
  background-color: #fff;
  margin-bottom: 0;
  overflow: auto;
  border: 1px solid $table__border--color;
  border-radius: 8px;
  height: calc(100vh - 145px);

  table {
    width: 100%;
    height: 500px;

    thead {
      position: sticky;
      top: 0;
      height: 40px;
      background-color: #fff;
    }
  }
}
</style>