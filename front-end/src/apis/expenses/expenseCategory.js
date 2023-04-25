import httpClient from "../httpClient";

const END_POINT = "/expense_category";

/**
 * API lấy danh sách tất cả loại chi phí
 * @returns res is a promise
 * @author NVThinh (02-04-2023)
 */
const getAllExpenseCategories = () => {
  try {
    const res = httpClient.get(END_POINT);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getAllExpenseCategories };
