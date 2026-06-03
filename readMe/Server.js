const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();

// ── Middleware ────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────────────────
app.use('/api/auth',    require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

// ── Health check ──────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ message: 'VSA Coaching API is running.' });
});

// ── DB + Server ───────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });