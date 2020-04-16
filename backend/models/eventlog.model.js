const mongoose = require("mongoose");

const eventLog = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  event: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("eventLog", eventLog);
