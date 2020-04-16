const router = require("express").Router();
let Events = require("../models/eventlog.model");

router.route("/").get((req, res) => {
  Events.find()
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const type = req.body.type;
  const date = req.body.date;
  const event = req.body.event;
  const user = req.body.user;

  const newEvent = new Events({
    type,
    date,
    event,
    user
  });

  newEvent
    .save()
    .then(() => res.json("New event added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//Editing Records routes
router.route("/:id").get((req, res) => {
  Events.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Events.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Events.findById(req.params.id)
    .then(event => {
      event.type = req.body.type;
      event.date = req.body.date;
      event.event = req.body.event;
      event.user = req.body.user;

      event
        .save()
        .then(() => res.json("Event updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
