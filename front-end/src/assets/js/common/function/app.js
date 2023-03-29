export default {
  /**
   * @description convert to style in css
   * @param {object} config includes width, colName, ...
   * 07/03/2023
   */
  getStyle: function (config) {
    let tmpArr = [];
    let style = "";
    if (config.width) tmpArr.push("width: " + config.width + "px");
    if (config.textAlign) tmpArr.push("text-align: " + config.textAlign);
    if (config.padding) tmpArr.push("padding: " + config.padding);
    style = tmpArr.join(";");
    return style;
  },
};
