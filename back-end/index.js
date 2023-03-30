// import packages
import express from "express";
require("dotenv").config();
import initRoutes from "./src/route/webAPI";

// create App
const app = express();
const port = process.env.PORT;

// init routes for web api
initRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
