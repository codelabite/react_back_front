const express = require("express");
const mongoose = require("mongoose");

const myDesc = require("../model/modelDesc");

const router = express.Router();

router.get("/", async (req, res) => {
  const saveData = await myDesc.find();
  res.status(200).json(saveData);
});

router.post("/", async (req, res) => {
  const saveData = await myDesc.create(req.body);
  res.status(201).json(saveData);
});

module.exports = router;
