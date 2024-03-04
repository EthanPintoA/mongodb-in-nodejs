const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    related_value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "budget",
  }
);

module.exports = mongoose.model("budget", budgetSchema);
