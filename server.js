const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8900;
const url = "mongodb://localhost/MyDescriptionDB";
const app = express();
const CodeLab = require("./Router/router");

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Everything is working Fine and Well");
});

app.use(cors());
app.use(express.json());
app.use("/", CodeLab);

app.listen(PORT, () => {
  console.log(`PORT is runnning on ${PORT}`);
});
