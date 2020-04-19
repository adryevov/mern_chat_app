const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const uri = 'mongodb+srv://chat-admin:chat-password@cluster0-ege5m.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const eventRouter = require("./routes/events");
const messageRouter = require("./routes/messages");
const roomRouter = require("./routes/room");

app.use("/events", eventRouter);
app.use("/messages", messageRouter);
app.use("/rooms", roomRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
