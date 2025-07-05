// ======= server.js (Updated with MongoDB connection) =======
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nourishaid', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  orgType: String,
  userType: String // donor or receiver
});

const User = mongoose.model('User', userSchema);

// SIGNUP
app.post('/signup', async (req, res) => {
  const { username, email, password, phone, orgType, userType } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ username, email, password, phone, orgType, userType });
  await user.save();
  res.status(200).json({ message: 'Signup successful' });
});

// LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.status(200).json({ message: 'Login successful', userType: user.userType });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));