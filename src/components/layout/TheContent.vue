<template>
  <div class="content">
    <h1>Danh sách chi phí</h1>
    <v-table></v-table>
  </div>
</template>

<script>
import VTable from "../base/table/VTable.vue";

export default {
  name: "TheContent",
  components: {
    VTable,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  flex: 8.5;
  background-color: palegreen;

  h1 {
    width: max-content;
  }
}
</style>
