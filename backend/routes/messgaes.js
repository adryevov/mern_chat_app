const router = require("express").Router();
let Message = require("../models/message.model");

router.route("/").get((req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const msg = req.body.msg;
  const by = req.body.by;
  const timestamp = req.body.timestamp;
  const room = req.body.room;

  const newMessage = new Message({
    msg,
    by,
    timestamp,
    room
  });

  newMessage
    .save()
    .then(() => res.json("New message added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//Editing Records routes
router.route("/:id").get((req, res) => {
  Message.findById(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.json("Message deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Message.findById(req.params.id)
    .then(message => {
      message.msg = req.body.msg;
      message.by = req.body.by;
      message.timestamp = req.body.timestamp;
      message.room = req.body.room;

      message
        .save()
        .then(() => res.json("Message Updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
