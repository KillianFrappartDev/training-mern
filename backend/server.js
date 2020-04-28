const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// TEST
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  age: {
      type: Number,
      required: true
  }
});

const User = mongoose.model('username', userSchema);

const uri = "mongodb+srv://KillianFrappartDev:3698dd2de@cluster0-qo3vu.gcp.mongodb.net/sample_user";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


// TEST

app.get("/", (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(5000, () => console.log("Running on port 5000"));