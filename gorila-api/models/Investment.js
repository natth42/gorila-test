const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestmentSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("investments", InvestmentSchema);