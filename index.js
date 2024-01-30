const express = require("express");
const connectDB = require("./connectMongo");
const User = require("./models/user.model");
require("dotenv").config();

const app = express();
app.use(express.json());
connectDB();

app.get("/", (req, res) => {  
  res.json({success: true, message: "Hello World"});
});

app.post("/create", async (req, res) => {
  const {email, password, username, role, avatar} = req.body
  const user = await User.create({email, password, username, role, avatar});
  res.json({success: true, user});
})

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({success: true, users});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
