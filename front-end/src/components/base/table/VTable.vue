<template>
  <div class="table">
    <table>
      <thead>
        <v-th
          v-for="config in tableHeadData"
          :key="config.col"
          :config="config"
          @check-all="checkAll"
        />
      </thead>
      <tbody>
        <tr v-for="(item, index) of tableData" :key="index">
          <v-td
            v-for="config in tableConfig"
            :key="config.col"
            :config="config"
            :content="item[config.col] || index + 1"
            :checked="isCheckedAll"
          ></v-td>
        </tr>
        <tr class="ignoreRow">
          <td v-show="false" colspan="100"></td>
        </tr>
      </tbody>
      <v-foot
        :noOfColspan="4"
        :no-of-records="tableData.length"
        :configs="tFootConfigs"
      />
    </table>
  </div>
</template>

<script>
// components
import VTh from "./VTh.vue";
import VTd from "./VTd.vue";
import VFoot from "./VFoot.vue";
// resources
import resource from "@/assets/js/resource";
import myEnum from "@/assets/js/enum";

export default {
  name: "TableVue",
  components: { VTh, VTd, VFoot },
  props: {
    tableConfig: {
      type: Array,
      required: true,
    }, // configs for table
    tableData: {
      type: Array,
      required: true,
      default: () => [],
    }, // data of table
  },
  emits: [],

  created() {
    this.initTableHeadData();
  },
  watch: {
    tableData: function () {
      this.initTableFootData();
    },
  },

  mounted() {},

  methods: {
    /**
     * @description initialize data for columns in table
     * @author NVThinh
     * 05/03/2023
     */
    initTableHeadData: function () {
      let me = this;
      // init content for each object in tableData
      const contents = resource.expense_list.table_header;
      this.tableConfig.forEach((item) => {
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
     * @description initialize data for table foot
     * @author NVThinh 06/03/2023
     * @modified: nvthinh 02/04/2023 convert cost to number
     */
    initTableFootData: function () {
      let me = this;
      try {
        me.tFootConfigs = me.tableConfig.filter((item) => {
          return item.type === me.dataType.money;
        });
        me.tFootConfigs.forEach((item) => {
          item.value = me.tableData.reduce((acc, obj) => {
            return acc + Number(obj[item.col]);
          }, 0);
        });
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @description update isCheckedAll when click the value of header checkbox is changed
     * @param {Boolean} checked value of checkbox on table head
     * 07/03/2023
     */
    checkAll: function (checked) {
      this.isCheckedAll = checked;
    },
  },

  data() {
    return {
      isCheckedAll: false,
      tFootConfigs: [], // Config for table foot
      tableHeadData: [], // Dữ liệu cho phần header
      // resources
      dataType: myEnum.data_type,
    };
  },
};
</script>

<style scoped lang="scss">
// variables
$table__border--color: #afafaf;
$row--hover: #d1edf4;

.table {
  background-color: #fff;
  margin-bottom: 0;
  overflow: auto;
  border: 1px solid $table__border--color;
  border-radius: 8px;
  flex: 1;

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;

    thead {
      position: sticky;
      top: 0;
      height: 40px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #afafaf;
    }

    tbody {
      tr {
        height: 40px;
        border-bottom: 0.5px solid #afafaf;

        &:hover,
        &:focus {
          background-color: $row--hover;
        }
      }
      .ignoreRow {
        height: 100%;
        text-align: center;
        border: none;
      }
      .ignoreRow:hover {
        background-color: #fff;
      }
    }
  }
}
</style>