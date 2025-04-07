const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/signup", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  
  // Check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  
  res.json({ message: "Signup successful! Please log in." });
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
  // Find user
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  
  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  
  res.json({ message: "Login successful!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









// const express = require('express')
// const mongoose = require('mongoose')
// const path = require('path')
// const port = 2000

// const app = express();
// app.use('/static',express.static(path.join(__dirname,"/src/public")));
// app.use(express.static('/src'));
// app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/students')
// const db = mongoose.connection
// db.once('open', () => {
//     console.log('mongodb connection successful')
// })
// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String,
//     cpassword: String
// })


// const Users = mongoose.model("user", userSchema)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"signup.html"))
// })
// app.post("/signup", async (req, res) => {
//     console.log(req.body)
//     const {username, email, password, cpassword } = req.body;
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
//     // Basic validation
//   if (!email || !password || !cpassword) {
//     return res.status(400).send("All fields are required!");
//   }
  
// //   Email validation
//   if (!emailPattern.test(email)) {
//     return res.status(400).send("Email format must be gmail.com");
//   }
    
//     const existuser = await Users.findOne({email})
//     if (existuser) {
//         return res.status(400).send("Email already existed.");
//     }
//   // Password match check
//   if (password !== cpassword) {
//       return res.status(400).send("Passwords do not match.");
//   }

//   // Password length check
//   if (password.length < 6) {
//       return res.status(400).send("Password must be at least 6 characters long.");
//     }
//     const user = new Users({
//         email,
//         password,
//         cpassword
//     })
//     await user.save();
//     console.log("user registered successfully")
//     res.send("registered successfully");

    
// })
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,"/src/public/login.html"))
// })
// app.post("/login", async (req, res) => {
//     console.log(req.body)
//     const { email, password } = req.body;
//     console.log("get info");
//     if (!email || !password) {
//         console.log("enter email and password")
//         return res.status(400).send("Email and password are required");
//       }
//     const existinguser = await Users.findOne({ email })
//     if (!existinguser) {
//         console.log("enter valid email")
//         return res.status(400).send("Invalid Email");
//     }
//     if (password !== existingUser.password) {
//         console.log("enter valid password")
//         return res.status(400).json({ error: "Invalid Password" });
//     }    
//         return res.status(200).send("Logged in successful")

// })
// app.listen(port, () => {
//     console.log("server started")
// })