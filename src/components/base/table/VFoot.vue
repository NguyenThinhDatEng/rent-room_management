<template>
  <tfoot class="table__foot">
    <tr>
      <td :colspan="noOfColspan">
        <div class="totalOfRows">Tổng số bản ghi: {{ noOfRecords }}</div>
      </td>
      <v-td
        v-for="config in configs"
        :key="config"
        :config="config"
        :content="config.value"
      />
      <td v-if="configs.length === 0">0</td>
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
    configs: {
      type: Array,
      default: () => [],
    },
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