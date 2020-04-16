  
const router = require('express').Router();
let Room = require('../models/room.model');

router.route('/').get((req, res) => {
  Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const roomName = req.body.roomName;
  const status = req.body.status;
  const dateAdded = req.body.dateAdded;

  const newRoom = new Room({
    roomName,
    status,
    dateAdded
  })

  newRoom.save()
    .then(() => res.json('New Room added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Editing Records routes
router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
      .then(room => res.json(room))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
      .then(() => res.json('Room deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Room.findById(req.params.id)
    .then(room => {
        room.roomName = req.body.roomName;
        room.status = req.body.status;
        room.dateAdded = req.body.dateAdded;

      room.save()
      .then(() => res.json('Room Updated!'))
      .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err))
  })

module.exports = router;