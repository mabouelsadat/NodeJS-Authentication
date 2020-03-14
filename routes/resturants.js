const router = require("express").Router();
const verify = require("./verifyToken");
const Resturant = require("../model/Resturants");
const User = require("../model/User");

// Create resturants
router.post("/", verify, async (req, res) => {
  // Checking if resturant already exist
  const resturantExist = await Resturant.findOne({ name: req.body.name });
  if (resturantExist) {
    return res.status(400).send({ error: "Resturant already exists" });
  }

  const resturants = new Resturant({
    name: req.body.name,
    ownerId: req.user._id
  });
  try {
    const createdResturants = await resturants.save();
    res.send({
      id: resturants._id,
      name: resturants.name,
      ownerId: req.user._id
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Fetch all resturants
router.get("/", verify, (req, res) => {
  Resturant.find({}).then(function(resturants) {
    res.send(resturants);
  });
});

module.exports = router;
