const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

router.get("/", verify, (req, res) => {
  res.send(req.user);
  //   const currentUser = User.findOne({ _id: req.user });
  //   console.log(currentUser);
  //   res.send(currentUser.tree.name);
});

module.exports = router;
