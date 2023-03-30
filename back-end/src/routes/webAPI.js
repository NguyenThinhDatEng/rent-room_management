import express from "express";
import { getAll } from "../controller/spendingListController";

var router = express.Router();

const initRoutes = (app) => {
  router.get("/", getAll); // Don't use () => Các biến truyền vào của hàm sẽ tự động gửi xuống cho hàm con

  router.get("/abc", (req, res) => {
    console.log("Hello");
    return res.send("Get abc");
  }); // Don't use () => Các biến truyền vào của hàm sẽ tự động gửi xuống cho hàm con

  app.use("/", router);
};

export default initRoutes;
