require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const recipesRouter = require("./routes/recipes.cjs");
const cors = require("cors");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
  family: 4,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use("/recipes", recipesRouter);

app.listen(3000, () => console.log("Server started"));
