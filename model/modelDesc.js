const express = require("express");
const mongoose = require("mongoose");

const descModel = mongoose.Schema({
  desc: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("myDesc", descModel);
