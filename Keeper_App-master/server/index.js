const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const TaskRoute = require("./route/taskRoute");

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/task", TaskRoute);
console.log("in the server");
app.listen(8000, () => {
  console.log("server started....");
});
