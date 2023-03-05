<template>
  <div class="content">
    <div class="functionBar">
      <div class="functionBar__left">
        <h2>Danh sách chi phí</h2>
      </div>
      <div class="functionBar__right">
        <v-button content="Thêm mới chi phí" />
      </div>
    </div>
    <v-table :tableHeadData="tableHeadData"></v-table>
  </div>
</template>

<script>
// components
import VTable from "../base/table/VTable.vue";
import VButton from "../base/button/VButton.vue";
// resources
import resource from "@/assets/js/resource";
import myEnum from "@/assets/js/enum";
import dictionary from "@/assets/js/resource/dictionary";

export default {
  name: "TheContent",
  components: {
    VTable,
    VButton,
  },

  created() {
    this.initTableData();
  },

  methods: {
    /**
     * @description initialize data for columns in table
     * @author NVThinh
     * 05/03/2023
     */
    initTableData: function () {
      // init content for each object in tableHeadData
      const headerContent = resource.spending_list.table_header;
      this.tableHeadData.forEach((item) => {
        item.content = headerContent[item.col]?.vi;
      });
    },
  },

  data() {
    return {
      tableHeadData: [
        {
          col: "checkbox",
          type: myEnum.data_type._checkbox,
          tooltip: dictionary.numerical_order.vi,
          width: 40,
        },
        {
          col: resource.spending_list.table_header.numerical_order.en,
          type: myEnum.data_type.number,
          width: 40,
        },
        {
          col: resource.spending_list.table_header.spending_category.en,
          type: myEnum.data_type.text,
          width: 200,
        },
        {
          col: resource.spending_list.table_header.description.en,
          type: myEnum.data_type.text,
        },
        {
          col: resource.spending_list.table_header.amount.en,
          type: myEnum.data_type.money,
          width: 200,
        },
        {
          col: resource.spending_list.table_header.spending_date.en,
          type: myEnum.data_type.date,
          width: 100,
        },
        {
          col: resource.spending_list.table_header.payer.en,
          type: myEnum.data_type.text,
          width: 100,
        },
        {
          col: resource.spending_list.table_header.location.en,
          type: myEnum.data_type.text,
          width: 200,
        },
        {
          col: resource.spending_list.table_header.images.en,
          type: myEnum.data_type._icon,
          width: 72,
        },
        {
          col: resource.spending_list.table_header.feature.en,
          type: myEnum.data_type._functions,
          width: 100,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  flex: 8.5;
  height: fit-content;
  padding: 0 8px;

  .functionBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1,
  h2 {
    width: max-content;
  }
}
</style>
