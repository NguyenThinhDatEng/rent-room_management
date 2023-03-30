// import packages
import express from "express";
require("dotenv").config();
import initRoutes from "./src/routes/webAPI";
import connection from "./src/services/connectDB";

// create App
const app = express();
const port = process.env.PORT;

// init routes for web api
initRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
