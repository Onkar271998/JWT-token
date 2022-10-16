const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/User.model");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hi");
// });

app.post("/signup", async (req, res) => {
  const { email, password, age } = req.body;

  console.log(email, password, age);
  //saveuser
  const user = new UserModel({ email, password, age });
  await user.save();

  res.send("user created ");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (!user) {
    return res.send(" Invalid ");
  }
  const token = jwt.sign(
    { email: user.email, age: user.age, id: user._id },
    "SECRET123",
    {
      expiresIn: "1 hour",
    }
  );
  res.send({ message: "login success", token });
});

//Routes

mongoose.connect("mongodb://localhost:27017/Nem201").then(() => {
  app.listen(3000, () => {
    console.log("started");
  });
});
