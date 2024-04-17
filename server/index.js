const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const cors = require('cors')
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.json("Hello");
});


app.post("/login", async (req, res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    try {
        await client.connect()
        const database = client.db("tinder-app-data");
        const users = database.collection("users");
        const user = await users.findOne({email})

        if (!user) {
            // If no user found, return an error
            return res.status(400).json('Invalid Credentials');
        }

        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({token, userId: user.user_id, email })
        }
        res.status(400).json('Invalid Credentials')
    } catch (err) {
        console.log(err)
    } 
})



app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await client.connect();
    const database = client.db("tinder-app-data");
    const users = database.collection("users");
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User already exists. Please login");
    }
    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };
    const insertedUser = await users.insertOne(data);
    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId , email:sanitizedEmail});
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("tinder-app-data");
    const users = database.collection("users");

    // const query = {user_id: userId}
    const returnedUser = await users.find().toArray();
    res.send(returnedUser);
  } finally {
    await client.close();
  }
});



app.listen(PORT, () => console.log("Server running on PORT " + PORT));
