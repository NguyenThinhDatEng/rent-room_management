<template>
  <div class="content">
    <div class="functionBar">
      <div class="functionBar__left">
        <h2>Danh sách chi phí</h2>
      </div>
      <div class="functionBar__right">
        <v-button content="Thêm mới chi phí" @click="openPopup()" />
      </div>
    </div>
    <v-table :tableConfig="tableConfig" :tableData="tableData"></v-table>
    <expense-popup :isShow="isShowPopup" />
  </div>
</template>

<script>
// components
import VTable from "../base/table/VTable.vue";
import VButton from "../base/button/VButton.vue";
import ExpensePopup from "@/views/expense/ExpensePopup.vue";
// resources
import resource from "@/assets/js/resource";
import myEnum from "@/assets/js/enum";
import dictionary from "@/assets/js/resource/dictionary";
// apis
import { getAllExpense } from "@/apis/expenses";

export default {
  name: "TheContent",
  components: {
    VTable,
    VButton,

    // Views
    ExpensePopup,
  },

  created() {
    // call api to get data for table
    getAllExpense()
      .then((res) => {
        if (res && res.data) {
          this.tableData = res.data;
        }
      })
      .catch((e) => {
        console.log(e);
      });

    fetch("http://localhost:3000/api/v1")
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  },

  methods: {
    /**
     * @description show Popup
     * @author NVThinh 9/3/2023
     */
    openPopup: function () {
      this.isShowPopup = !this.isShowPopup;
    },
  },

  data() {
    return {
      isShowPopup: false, // show/hide popup
      tableData: [],
      // resource
      tableConfig: [
        {
          col: "checkbox",
          type: myEnum.data_type._checkbox,
          tooltip: dictionary.numerical_order.vi,
          width: 40,
        },
        {
          col: resource.expense_list.table_header.numerical_order.en,
          type: myEnum.data_type.number,
          width: 50,
        },
        {
          col: resource.expense_list.table_header.expense_category_name.en,
          type: myEnum.data_type.text,
          width: 150,
          textAlign: "left",
          padding: "0 0 0 8px",
        },
        {
          col: resource.expense_list.table_header.description.en,
          type: myEnum.data_type.text,
          textAlign: "left",
        },
        {
          col: resource.expense_list.table_header.cost.en,
          type: myEnum.data_type.money,
          width: 200,
        },
        {
          col: resource.expense_list.table_header.payer.en,
          type: myEnum.data_type.text,
          width: 150,
        },
        {
          col: resource.expense_list.table_header.expense_date.en,
          type: myEnum.data_type.date,
          width: 120,
        },
        {
          col: resource.expense_list.table_header.expense_location.en,
          type: myEnum.data_type.text,
          width: 150,
          textAlign: "left",
        },
        {
          col: resource.expense_list.table_header.attach_images.en,
          type: myEnum.data_type._icon,
          width: 108,
        },
        {
          col: resource.expense_list.table_header.feature.en,
          type: myEnum.data_type._function,
          width: 100,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
$func-bar--mb: 16px;

.content {
  display: flex;
  flex-direction: column;
  flex: 8.5;
  height: fit-content;
  padding: 8px;
  height: calc(100vh - 66px);

  .functionBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $func-bar--mb;
  }

  h1,
  h2 {
    width: max-content;
  }
}
</style>
