export default {
  /**
   * @author NVThinh 11-3-2023
   * @returns current year
   */
  getCurrentYear: function () {
    var currentDate = new Date();
    return currentDate.getFullYear();
  },

  /**
   * @author NVThinh 11-3-2023
   * @returns format following money type
   */
  formatMoney: function (value) {
    return new Intl.NumberFormat("en-DE").format(value);
  },
};
