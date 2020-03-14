const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

router.get("/", verify, (req, res) => {
  User.findOne({ _id: req.user }, function(err, result) {
    if (!result) {
      res.sendStatus(404).send(err);
    }
    return res.send({ id: result.id, name: result.name, email: result.email });
  });
});

module.exports = router;
