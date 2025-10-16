// ...existing code...
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Configure CORS safely
const allowedOrigins = CLIENT_ORIGIN.split(',')
  .map(o => o.trim().replace(/\/$/, ''))
  .filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes('*')) {
      return callback(null, true);
    }
    const normalized = origin.replace(/\/$/, '');
    if (allowedOrigins.includes(normalized)) {
      return callback(null, true);
    } else {
      console.log('❌ Blocked by CORS:', origin);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200, // ✅ fixes Render 204 bug
};

app.use(cors(corsOptions));

// ✅ Body parsers
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// ✅ Routes
app.use('/api', contactRoutes);
app.use('/api/payment', paymentRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.redirect('/api');
});

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
