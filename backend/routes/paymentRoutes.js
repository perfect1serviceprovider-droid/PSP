const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const axios = require('axios');
const { checkSchema, validationResult } = require('express-validator');

const router = express.Router();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Validation schemas with FIXED duplicate custom validators
const createOrderSchema = checkSchema({
  name: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'name is required' },
    isLength: { options: { min: 2, max: 100 }, errorMessage: 'name must be 2-100 chars' },
  },
  email: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'email is required' },
    isEmail: { errorMessage: 'invalid email' },
    normalizeEmail: true,
  },
  phone: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'phone is required' },
    isMobilePhone: { options: ['en-IN'], errorMessage: 'invalid Indian phone' },
  },
  amount: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'amount is required' },
    isFloat: { 
      options: { min: 1, max: 500000 }, 
      errorMessage: 'amount must be between ₹1 and ₹5,00,000' 
    },
  },
});

const verifyPaymentSchema = checkSchema({
  orderId: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'orderId is required' },
  },
  razorpayPaymentId: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'razorpayPaymentId is required' },
  },
  razorpaySignature: {
    in: ['body'],
    trim: true,
    notEmpty: { errorMessage: 'razorpaySignature is required' },
  },
});

// Submit to Google Forms
const submitToGoogleForms = async (formData) => {
  try {
    const googleFormData = new URLSearchParams();
    googleFormData.append('entry.472239098', formData.name);
    googleFormData.append('entry.1899256565', formData.email);
    googleFormData.append('entry.160783658', formData.phone);
    googleFormData.append('entry.1347762767', String(formData.amount));
    googleFormData.append('entry.2018147522', formData.order_id);

    await axios.post(process.env.PAYMENT_GOOGLE_FORM_URL, googleFormData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 5000,
    });

    return { success: true };
  } catch (error) {
    console.error('Google Forms error:', error?.response?.status, error.message);
    return { success: false, message: error.message };
  }
};

// Create Razorpay order
router.post('/create-order', createOrderSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  try {
    const { amount, name, email, phone } = req.body;

    const normalized = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
    };

    const amountInINR = Number(amount);
    const amountInPaise = Math.round(amountInINR * 100);
    
    if (!Number.isInteger(amountInPaise) || amountInPaise < 100) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount. Must be at least ₹1.',
      });
    }

    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: { 
        name: normalized.name, 
        email: normalized.email, 
        phone: normalized.phone 
      },
    };

    const order = await razorpay.orders.create(options);

    // Save to Google Forms
    const formData = {
      name: normalized.name,
      email: normalized.email,
      phone: normalized.phone,
      amount: amountInINR,
      order_id: order.id,
    };

    const googleFormResult = await submitToGoogleForms(formData);
    if (!googleFormResult.success) {
      console.error('Google Forms failed:', googleFormResult.message);
    }

    return res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
      googleFormSaved: googleFormResult.success,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    });
  }
});

// Verify payment
router.post('/verify-payment', verifyPaymentSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  try {
    const { orderId, razorpayPaymentId, razorpaySignature } = req.body;

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${razorpayPaymentId}`)
      .digest('hex');

    const isValid = generatedSignature === razorpaySignature;

    if (isValid) {
      return res.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpayPaymentId,
      });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: 'Payment verification failed' 
      });
    }
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message,
    });
  }
});

module.exports = router;
