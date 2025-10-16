// ...existing code...
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

// Body parsers
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ✅ Fixed CORS middleware: supports multiple origins & sends headers for 204 responses
const parseAllowed = (val = '') =>
  val
    .split(',')
    .map(s => s.trim().replace(/\/$/, ''))
    .filter(Boolean);

const allowedOrigins = parseAllowed(CLIENT_ORIGIN);

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (!allowedOrigins.length || allowedOrigins.includes('*')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin) {
    const originNormalized = origin.replace(/\/$/, '');
    if (allowedOrigins.includes(originNormalized)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    }
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type,Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // ✅ Fixed: send headers before ending OPTIONS response
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err =>
    console.error('MongoDB connection error:', err.message)
  );

// Routes
app.use('/api', contactRoutes);
app.use('/api/payment', paymentRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, error: 'Something went wrong!' });
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
