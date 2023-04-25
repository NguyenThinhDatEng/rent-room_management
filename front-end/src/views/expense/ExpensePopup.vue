<template>
  <v-popup :title="resource.expense_list.list.add.vi" :isShow="isShow">
    <!-- row 01 -->
    <div class="row">
      <div class="row__left">
        <v-autocomplete
          :placeholder="'Chọn loại chi phí'"
          :label="labels.expense_category_name.vi"
          :data="expenseCategoryList"
        />
      </div>
      <div class="row__right">
        <v-autocomplete
          :placeholder="'Chọn ' + labels.payer.vi.toLowerCase()"
          :label="labels.payer.vi"
          :data="users"
        />
      </div>
    </div>
    <!-- row 02 -->
    <div class="row">
      <div class="row__left">
        <v-input-money
          v-model="data.cost"
          :label="labels.cost.vi"
          :options="{
            currency: 'VND',
            locale: 'de-DE',
            hideGroupingSeparatorOnFocus: false,
            hideCurrencySymbolOnFocus: false,
          }"
        />
      </div>
      <div class="row__right">
        <v-date :label="labels.expense_date.vi" placeholder="Chọn ngày" />
      </div>
    </div>
    <!-- row 03 -->
    <div class="row">
      <v-input
        v-model="data.location"
        inputWidth="100%"
        hasLabel="true"
        :label="labels.expense_location.vi"
      />
    </div>
    <!-- row 04 -->
    <div class="row">
      <v-input :isTextarea="true" :label="labels.description.vi" />
    </div>
    <!-- row 5 -->
  </v-popup>
</template>

<script>
// components
import VPopup from "@/components/base/popup/VPopup.vue";
import VInputMoney from "@/components/base/input/VInputMoney.vue";
import VDate from "@/components/base/datepicker/VDate.vue";
import VInput from "@/components/base/input/VInput.vue";
import VAutocomplete from "@/components/base/autocomplete/VAutocomplete.vue";
// resources
import resource from "@/assets/js/resource";
import myEnum from "@/assets/js/enum";
// apis
import { getAllExpenseCategories } from "@/apis/expenses/expenseCategory";

export default {
  name: "ExpensePopup",
  components: { VPopup, VAutocomplete, VInputMoney, VDate, VInput },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  emits: [],
  // Functions
  created() {
    getAllExpenseCategories()
      .then((res) => {
        if (res && res.data) {
          res.data.forEach((element) => {
            this.expenseCategoryList.push({
              value: element.expense_category_name,
              expense_category_id: element.expense_category_id,
            });
          });
        }
      })
      .catch((e) => console.log(e));
  },

  methods: {},
  data() {
    return {
      data: {
        amount: 0,
        expense_date: new Date(),
        location: "",
      },
      users: [{ value: "Thịnh" }, { value: "Quân" }, { value: "Long" }],
      expenseCategoryList: [],
      // resources
      myEnum,
      resource,
      labels: resource.expense_list.table_header,
      inputType: resource.common.input_type,
    };
  },
};
</script>

<style scoped lang="scss">
$padding-left-right: 8px;

.row {
  display: flex;

  .row__left {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: $padding-left-right;

    label {
      text-align: left;
    }
  }

  .row__right {
    flex: 1;
    padding-left: $padding-left-right;
  }

  & + .row {
    margin-top: 8px;
  }
}
</style>