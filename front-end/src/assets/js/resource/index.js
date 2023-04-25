import myDictionary from "./dictionary";

export default {
  common: {
    input_type: {
      number: "number",
      text: "text",
    },
    data_type: {
      number: "number",
      text: "string",
      array: "object",
      object: "object",
    },
  },
  expense_list: {
    list: {
      add: {
        vi: "Thêm mới chi phí",
        en: "add",
      },
    },
    table_header: {
      numerical_order: {
        vi: "STT",
        en: "numerical_order",
      },
      expense_category_name: {
        vi: "Loại chi phí",
        en: "expense_category_name",
      },
      description: {
        vi: myDictionary.description.vi,
        en: myDictionary.description.en,
      },
      cost: {
        vi: "Tổng chi phí",
        en: "cost",
      },
      expense_date: {
        vi: "Ngày chi",
        en: "expense_date",
      },
      payer: {
        vi: "Người chi",
        en: myDictionary.payer.en,
      },
      expense_location: {
        vi: myDictionary.location.vi,
        en: "expense_location",
      },
      attach_images: {
        vi: "Ảnh đính kèm",
        en: "attach_images",
      },
      feature: {
        vi: myDictionary.feature.vi,
        en: myDictionary.feature.en,
      },
    },
  },
};
