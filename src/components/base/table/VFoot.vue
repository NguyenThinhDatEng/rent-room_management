<template>
  <tfoot class="table__foot">
    <tr>
      <td :colspan="noOfColspan">
        <div class="totalOfRows">Tổng số bản ghi: {{ noOfRecords }}</div>
      </td>
      <v-td :config="tmpConfig" :content="200000" />
      <td :colspan="100" />
    </tr>
  </tfoot>
</template>
  
<script>
// Components
import VTd from "./VTd.vue";
// Resources
import myEnum from "@/assets/js/enum";

export default {
  name: "TableFoot",
  components: { VTd },
  props: {
    noOfColspan: {
      type: Number,
      default: 0,
    }, // number of collapsed td
    noOfRecords: {
      type: Number,
      default: 0,
    }, // number of records
  },

  created() {
    this.tmpConfig.type = this.dataType.money;
  },

  watch: {},

  methods: {},

  data() {
    return {
      tmpConfig: { type: 0 },
      // resources
      dataType: myEnum.data_type,
    };
  },
};
</script>
  
  <style scoped lang="scss">
.table__foot {
  position: sticky;
  bottom: 0;
  background-color: #f5f5f5;
  height: 40px;

  td {
    .totalOfRows {
      text-align: left;
      padding-left: 13px;
    }
  }
}
</style>