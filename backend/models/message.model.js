const mongoose = require("mongoose");

const Message = mongoose.Schema({
  msg: {
    type: String,
    required: true
  },
  by: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  room: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Message", Message);
