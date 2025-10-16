// components/Payment.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CreditCard, User, Mail, Phone, Shield,
  CheckCircle, AlertCircle, Loader, Sparkles, Building2, Copy, Eye, EyeOff
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://psp-ylck.onrender.com';

const Payment = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', amount: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
  }, []);

  // Enhanced validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[6-9]\d{9}$/,
    amount: /^\d+(\.\d{1,2})?$/
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for different input types
    let processedValue = value;
    
    if (name === 'phone') {
      // Only allow digits for phone
      processedValue = value.replace(/\D/g, '');
    } else if (name === 'name') {
      // Only allow letters and spaces for name
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'amount') {
      // Allow digits and decimal point
      processedValue = value.replace(/[^0-9.]/g, '');
      // Prevent multiple decimal points
      const decimalCount = (processedValue.match(/\./g) || []).length;
      if (decimalCount > 1) {
        processedValue = processedValue.substring(0, processedValue.lastIndexOf('.'));
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Real-time validation for better UX
    if (touched[name]) {
      validateField(name, processedValue);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Full name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else if (value.trim().length > 50) {
          newErrors.name = 'Name must be less than 50 characters';
        } else if (!validationPatterns.name.test(value.trim())) {
          newErrors.name = 'Name can only contain letters and spaces';
        } else {
          delete newErrors.name;
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email address is required';
        } else if (!validationPatterns.email.test(value.trim())) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (value.length !== 10) {
          newErrors.phone = 'Phone number must be exactly 10 digits';
        } else if (!validationPatterns.phone.test(value)) {
          newErrors.phone = 'Phone number must start with 6, 7, 8, or 9';
        } else {
          delete newErrors.phone;
        }
        break;
        
      case 'amount':
        if (!value.trim()) {
          newErrors.amount = 'Amount is required';
        } else if (!validationPatterns.amount.test(value)) {
          newErrors.amount = 'Please enter a valid amount (max 2 decimal places)';
        } else {
          const numAmount = parseFloat(value);
          if (numAmount <= 0) {
            newErrors.amount = 'Amount must be greater than ₹0';
          } else if (numAmount < 1) {
            newErrors.amount = 'Minimum amount is ₹1';
          } else if (numAmount > 500000) {
            newErrors.amount = 'Maximum amount is ₹5,00,000';
          } else {
            delete newErrors.amount;
          }
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const fields = ['name', 'email', 'phone', 'amount'];
    let isValid = true;
    
    fields.forEach(field => {
      const fieldValid = validateField(field, formData[field]);
      if (!fieldValid) isValid = false;
    });
    
    // Mark all fields as touched to show errors
    const touchedFields = {};
    fields.forEach(field => {
      touchedFields[field] = true;
    });
    setTouched(touchedFields);
    
    return isValid;
  };

  const loadRazorpayScript = () => new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Better UX with temporary success message
      const button = event.target.closest('button');
      const originalContent = button.innerHTML;
      button.innerHTML = '<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
      setTimeout(() => {
        button.innerHTML = originalContent;
      }, 2000);
    } catch (err) {
      alert('Failed to copy to clipboard');
    }
  };

  const formatAmount = (amount) => {
    if (!amount) return '0';
    return new Intl.NumberFormat('en-IN').format(parseFloat(amount));
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`input[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }
    
    setLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load Razorpay script. Please check your internet connection.');
      }

      // 1) Create Order - Data will be saved to Google Forms here with order_id
      const { data } = await axios.post(`${API_BASE}/api/payment/create-order`, formData);
      if (!data.success) {
        throw new Error(data.message || 'Failed to create order');
      }

      // Show success message for data being saved
      if (data.googleFormSaved) {
        console.log('✅ Your details have been saved with Order ID:', data.orderId);
      }

      // 2) Configure Checkout
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'Perfect Service Provider',
        description: 'Payment for Digital Marketing Services',
        image: '/logo.png',
        order_id: data.orderId,
        prefill: { 
          name: formData.name.trim(), 
          email: formData.email.trim().toLowerCase(), 
          contact: formData.phone 
        },
        theme: { color: '#2563eb' },
        modal: { 
          ondismiss: () => {
            setLoading(false);
            console.log('Payment modal closed by user - Data already saved');
          }
        },
        notes: { 
          customer_name: formData.name.trim(), 
          customer_email: formData.email.trim().toLowerCase(), 
          customer_phone: formData.phone 
        },
        handler: async function (response) {
          try {
            // 3) Verify Payment (simplified - no additional Google Forms write)
            const verifyResponse = await axios.post(`${API_BASE}/api/payment/verify-payment`, {
              orderId: data.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            if (verifyResponse.data.success) {
              alert('✅ Payment successful! Your details have been saved securely.');
              // Reset form
              setFormData({ name: '', email: '', phone: '', amount: '' });
              setErrors({});
              setTouched({});
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (err) {
            console.error('Payment verification error:', err);
            alert('❌ Payment verification failed! Please contact support if money was deducted.');
          } finally {
            setLoading(false);
          }
        },
      };

      const rz = new window.Razorpay(options);
      rz.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert(error.message || 'Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
            <Shield className="h-4 w-4" />
            Secure Payment Gateway
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
            Make Your Payment
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your details are saved instantly when you proceed to payment
          </p>
        </div>
      </section>

      {/* Payment */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-aos="fade-right">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
                    <p className="text-gray-600">Fill in your information to proceed</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        maxLength="50"
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                        }`} 
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                        }`} 
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        pattern="[6-9][0-9]{9}"
                        autoComplete="tel"
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                        }`} 
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">Format: 9876543210</p>
                  </div>

                  {/* Amount Field with Rupee Symbol */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Amount <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-semibold">₹</span>
                      <input 
                        type="text" 
                        name="amount" 
                        value={formData.amount} 
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter amount"
                        className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.amount ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                        }`} 
                      />
                    </div>
                    {errors.amount && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.amount}
                      </p>
                    )}
                    {/* <p className="mt-1 text-xs text-gray-500">Range: ₹1 - ₹5,00,000</p> */}
                  </div>

                  {/* Payment Summary */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" /> Payment Summary
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-blue-800">
                        <span>Service Amount:</span>
                        <span className="font-semibold">₹{formatAmount(formData.amount)}</span>
                      </div>
                      <div className="flex justify-between items-center text-blue-800">
                        <span>Processing Fee:</span>
                        <span className="font-semibold text-green-600">Free</span>
                      </div>
                      <hr className="border-blue-200" />
                      <div className="flex justify-between items-center text-blue-900 text-lg font-bold">
                        <span>Total Amount:</span>
                        <span>₹{formatAmount(formData.amount)}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    onClick={handlePayment} 
                    disabled={loading || Object.keys(errors).length > 0}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" /> 
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Shield className="h-5 w-5" /> 
                        Pay ₹{formatAmount(formData.amount)} Securely
                      </>
                    )}
                  </button>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-800 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">100% Secure Payment</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Your payment is secured by Razorpay with 256-bit SSL encryption & PCI DSS compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Details Section */}
            <div data-aos="fade-left">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-green-600" /> 
                      Bank Transfer Details
                    </h3>
                    <button 
                      onClick={() => setShowBankDetails(!showBankDetails)} 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {showBankDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showBankDetails ? 'Hide' : 'Show'} Details
                    </button>
                  </div>

                  {showBankDetails && (
                    <div className="space-y-4" data-aos="fade-in">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Name</span>
                          <button 
                            onClick={() => copyToClipboard('Perfect Service Provider')} 
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900">Perfect Service Provider</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Account Number</span>
                          <button 
                            onClick={() => copyToClipboard('254611010000175')} 
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900 font-mono">254 6110 1000 0175</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">IFSC Code</span>
                          <button 
                            onClick={() => copyToClipboard('UBIN0825468')} 
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900 font-mono">UBIN0825468</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Bank Name</span>
                          <button 
                            onClick={() => copyToClipboard('Union bank of india')} 
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900">Union bank of india</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Branch</span>
                          <button 
                            onClick={() => copyToClipboard('Rohini sector 24')} 
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900">Rohini sector 24</p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>Note:</strong> After bank transfer, please send the transaction screenshot to our WhatsApp or email for faster processing.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">+91-89202 67022</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Support@perfectserviceprovider.com</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    Our support team is available 24/7 to assist with any payment queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
