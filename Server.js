const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth-demo', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Password: String,
  Confirmpassword: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { Firstname, Lastname, Password, Confirmpassword } = req.body;
  const newUser = new User({ Firstname, Lastname, Password, Confirmpassword });
  await newUser.save();
  res.json({ success: true });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
