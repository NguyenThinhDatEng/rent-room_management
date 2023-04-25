import httpClient from "../httpClient";

const END_POINT = "/login";

/**
 * API lấy danh sách tất cả loại chi phí
 * @returns res is a promise
 * @author NVThinh (02-04-2023)
 */
const login = (email, password) => {
  try {
    const res = httpClient.post(END_POINT, { email, password });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { login };
