const router = require("express").Router();
let admin = require("../models/admin.model");

router.route("/").get((req, res) => {
  admin.find()
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/authenticate").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if(username == 'admin@gmail.com' && password == 'chatpassword'){
        return true;
    }else{
        return false;
    }
  
  });
  
module.exports = router;