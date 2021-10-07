const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");

//this is global middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/*", (_, res) => {
  res.json({
    data: "This is the API data",
  });
});

app.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "cliant/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server alive on port ${port}`);
});

// console.log("yessss");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);
