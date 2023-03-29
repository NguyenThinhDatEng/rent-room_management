import { Router } from "express";
import { getAll } from "../controller/spendingListController";

var router = Router();

const initRoutes = (app) => {
  router.get("/", getAll); // Don't use () => Các biến truyền vào của hàm sẽ tự động gửi xuống cho hàm con
};

export default initRoutes;
