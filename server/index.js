const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const bodyParser = require("body-parser");
const db = require("./src/config/db");
const app = express();
const appRouter = require("./src/routes");
const responseMiddleware=require("./src/middleware/response.middleware");
const errorMiddleware=require("./src/middleware/error.middleware");
//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Establishing DB connection
db(process.env.DB_URI);
app.use("/api", appRouter);

// RESPONSE MIDDLEWARE
responseMiddleware(app);
// ERROR MIDDLEWARE
errorMiddleware(app);

// Listen on provided port
const port = process.env.PORT || 3000;
app.listen(port);

process.on("uncaughtException", err => {
  console.error(err, "Unhandled Exception");
});

process.on("uncaughtRejection", (err, promise) => {
  console.error(err, "Unhandled Rejection");
});
module.exports = app;
