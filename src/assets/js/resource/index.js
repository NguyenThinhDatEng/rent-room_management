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
  spending_list: {
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
      spending_category: {
        vi: "Loại chi phí",
        en: "spending_category",
      },
      description: {
        vi: myDictionary.description.vi,
        en: myDictionary.description.en,
      },
      amount: {
        vi: "Tổng chi phí",
        en: "amount",
      },
      spending_date: {
        vi: "Ngày chi",
        en: "spending_date",
      },
      payer: {
        vi: "Người chi",
        en: myDictionary.payer.en,
      },
      location: {
        vi: myDictionary.location.vi,
        en: myDictionary.location.en,
      },
      images: {
        vi: "Ảnh đính kèm",
        en: "images",
      },
      feature: {
        vi: myDictionary.feature.vi,
        en: myDictionary.feature.en,
      },
    },
  },
};
