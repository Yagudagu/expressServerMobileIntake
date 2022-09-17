const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

//Models
const Household = require("./models/householdModel");

//Controllers
const householdsController = require("./controllers/householdControllers");
const authController = require("./controllers/authController");

const app = express();

// I think it pases JSON's or soemthing
app.use(express.json());

// Serving static files
app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(
  cors({
    origin: "*",
  })
);

// DOTENV
dotenv.config({ path: "./config.env" });

// CONNECTION TO DB
const DB =
  "mongodb+srv://jacmar:r3NCSEPqOwy3diU9@cluster0.y60tk.mongodb.net/mobile?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

app.get("/", (req, res) => {
  //res.redirect("https://www.jacobmartinworld.com");
  res.writeHead(200, { "Content-type": "text/html" });
  // res.end(`
  // <html>
  //   <body>for the big money!!!!?!?!?!?! one more time, give me the good stuff</body>
  // </html>`);
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// household routes
app.get(
  "/api/allHouseholds",
  authController.protect,
  householdsController.getHouseholds
);
app.post("/api/processrequest", householdsController.createHousehold);

app.patch(
  "/api/updateHousehold/:id",
  authController.protect,
  householdsController.patchHousehold
);
app.delete(
  "/api/deleteHousehold/:id",
  authController.protect,
  householdsController.deleteHousehold
);

// Auth Routes
app.post("/api/newuser", authController.protect, authController.newUser);
app.post("/api/login", authController.login);
app.post("/api/check", authController.checkToken);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
