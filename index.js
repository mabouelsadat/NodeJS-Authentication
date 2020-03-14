const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/profile");
const resturantsRoute = require("./routes/resturants");

// Dotenv init to hide MongoDB credentials
dotenv.config();

// Connect to DB
try {
  mongoose.connect(
    process.env.DB_CONNECTT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Succesfully connected to DB");
    }
  );
} catch (error) {
  console.log(error);
}

// MiddleWare
app.use(express.json());

// Route MiddleWare
app.use("/", authRoute);
app.use("/profile", postRoute);
app.use("/resturants", resturantsRoute);

// Express listening port init
app.listen(3000, () => console.log("Server is up and running..."));
