const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/profile");

// Dotenv init to hide MongoDB credentials
dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Succesfully connected to DB");
  }
);

// MiddleWare
app.use(express.json());

// Route MiddleWare
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

// Express listening port init
app.listen(3000, () => console.log("Server is up and running..."));
