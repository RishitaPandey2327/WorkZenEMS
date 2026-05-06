const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  message: String,

  startDate: {
    type: Date,
    default: Date.now
  },

  endDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Notice", noticeSchema);