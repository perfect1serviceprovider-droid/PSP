const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const contactRoutes = require('./routes/contactRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ CRITICAL FIX: CORS MUST COME BEFORE BODY PARSERS
const parseAllowed = (val = '') =>
  val
    .split(',')
    .map(s => s.trim().replace(/\/$/, ''))
    .filter(Boolean);

const allowedOrigins = parseAllowed(CLIENT_ORIGIN);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log('[CORS] Request from origin:', origin);

  if (!allowedOrigins.length || allowedOrigins.includes('*')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin) {
    const originNormalized = origin.replace(/\/$/, '');
    if (allowedOrigins.includes(originNormalized)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    }
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // ✅ CRITICAL FIX: Use status(200).end() instead of sendStatus(204)
  // sendStatus(204) immediately sends response WITHOUT the headers set above
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// ✅ Body parsers MUST come AFTER CORS
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Connect to MongoDB (remove deprecated options)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Routes
app.use('/api', contactRoutes);
app.use('/api/payment', paymentRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Perfect Service Provider API',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found',
    path: req.path 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(err.status || 500).json({ 
    success: false, 
    error: err.message || 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Allowed origins: ${allowedOrigins.join(', ')}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received: closing server');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB closed');
      process.exit(0);
    });
  });
});
