const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');

// Load environment variables from .env
// dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/instagramDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('API is working 🎉');
});

app.use('/api/auth', require('./routes/auth'));

// Routes (you’ll add more later like auth, posts etc)
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes); // Example: http://localhost:5000/api/auth/register

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
