<template>
  <v-popup :title="resource.spending_list.list.add.vi" :isShow="isShow">
    <div class="row">
      <div class="row__left">
        <v-combobox
          :label="'Loại chi phí'"
          :items="['Mua sắm', 'Đóng tiền trọ']"
          active="true"
        />
      </div>
      <div class="row__right">
        <v-input
          :label="'Tổng chi phí'"
          :has-label="true"
          :input-width="'100%'"
        />
      </div>
    </div>
    <div class="row">
      <div class="row__left">
        <v-combobox
          :label="'Loại chi phí'"
          :items="['Mua sắm', 'Đóng tiền trọ']"
          active="true"
        />
      </div>
      <div class="row__right">
        <v-input
          :label="'Tổng chi phí'"
          :has-label="true"
          :input-width="'100%'"
        />
      </div>
    </div>
  </v-popup>
</template>

<script>
// components
import VPopup from "@/components/base/popup/VPopup.vue";
import VCombobox from "@/components/base/combobox/VCombobox.vue";
import VInput from "@/components/base/input/VInput.vue";
// resources
import resource from "@/assets/js/resource";

export default {
  name: "ExpensePopup",
  components: { VPopup, VCombobox, VInput },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  created() {},
  emits: [],
  methods: {},
  data() {
    return {
      // resources
      resource,
    };
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;

  .row__left {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 4px;

    label {
      text-align: left;
    }
  }

  .row__right {
    flex: 1;
    padding-left: 4px;
  }

  & + .row {
    margin-top: 8px;
  }
}
</style>