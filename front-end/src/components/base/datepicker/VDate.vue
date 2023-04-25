<template>
  <div class="myDate">
    <label for="">{{ label }}</label>
    <el-date-picker
      v-model="expenseDate"
      type="date"
      popper-class="date-picker"
      format="DD/MM/YYYY"
      size="large"
      style="width: 100%"
      :placeholder="placeholder"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
// el components

export default {
  name: "DatePicker",
  props: {
    label: {
      type: String,
    }, // label of components
    placeholder: {
      type: String,
      default: "",
    }, // placeholder of component
  },
  components: {},

  created() {},
  emits: [],
  methods: {
    /**
     * @returns the period time that is disabled
     * @param {Date} time
     * @author NVThinh 11/3/2023
     */
    disabledDate: function (time) {
      return time.getTime() > Date.now();
    },
  },
  data() {
    return {
      expenseDate: new Date(),
      shortcuts: [
        {
          text: "Today",
          value: new Date(),
        },
        {
          text: "Yesterday",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "A week ago",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.myDate {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
  }
}

.date-picker {
  font-family: T Regular;
}
</style>