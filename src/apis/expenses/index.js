import httpClient from "../httpClient";

const END_POINT = "/Expense";

/**
 * API lấy danh sách tất cả chi phí
 * @returns res is a promise
 * @author NVThinh (08-03-2023)
 */
const getAllExpense = () => {
  try {
    const res = httpClient.get(END_POINT);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getAllExpense };
