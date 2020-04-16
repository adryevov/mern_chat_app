const mongoose = require("mongoose");

const Room = mongoose.Schema({
  roomName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  dateAdded: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model("Room", Room);
