// ======= server.js =======
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// === Middleware ===
app.use(cors());
app.use(express.json());

// === MongoDB Atlas Connection ===
mongoose.connect('mongodb+srv://preethiusha007:I9usxddkfW2QtCmy@cluster0.cmhgybo.mongodb.net/nourishaid?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// === Mongoose User Schema ===
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  orgType: String,
  userType: String // donor or receiver
});

const User = mongoose.model('User', userSchema);

// === Routes ===

// POST /signup
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password, phone, orgType, userType } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ username, email, password, phone, orgType, userType });
    await user.save();

    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// POST /login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      userType: user.userType,
      username: user.username
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// === Serve Frontend (for Render/Production) ===
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
