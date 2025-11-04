import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Globe, 
  Palette, 
  Zap, 
  Sparkles, 
  Menu, 
  X,
  CreditCard,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  ArrowRight,
  Layers,
  Star,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Shield,
  Rocket
} from "lucide-react";

// Custom WhatsApp SVG Component
const WhatsAppIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceItems = [
    {
      title: "Website Development",
      description: "Custom web solutions that scale",
      icon: Globe,
      link: "/services/web-development",
      color: "blue",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Responsive Design", "SEO Optimized"]
    },
    {
      title: "Graphics & Media",
      description: "Creative designs that inspire",
      icon: Palette,
      link: "/services/graphics-media",
      color: "orange",
      bgGradient: "from-orange-50 to-red-50",
      features: ["Brand Identity", "Motion Graphics"]
    },
    {
      title: "Digital Marketing",
      description: "Grow your digital footprint",
      icon: TrendingUp,
      link: "/services/digital-marketing",
      color: "green",
      bgGradient: "from-green-50 to-emerald-50",
      features: ["Social Media", "PPC Campaigns"]
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/Perfectserviceprovidercompany/", 
      label: "Facebook", 
      color: "text-blue-600 hover:text-white",
      bgHover: "hover:bg-blue-600",
      glowColor: "hover:shadow-facebook-glow"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/perfect.service.provider/", 
      label: "Instagram", 
      color: "text-pink-600 hover:text-white",
      bgHover: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      glowColor: "hover:shadow-instagram-glow"
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@PerfectServiceProvider", 
      label: "YouTube", 
      color: "text-red-600 hover:text-white",
      bgHover: "hover:bg-red-600",
      glowColor: "hover:shadow-youtube-glow"
    },
    { 
      icon: WhatsAppIcon, 
      href: "https://wa.me/918920267022?text=Hello%20Perfect%20Service%20Provider!%20I%20would%20like%20to%20know%20more%20about%20your%20services.", 
      label: "WhatsApp", 
      color: "text-green-600 hover:text-white",
      bgHover: "hover:bg-green-500",
      glowColor: "hover:shadow-whatsapp-glow"
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918920267022" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91-89202 67022</span>
            </a>
            <a href="mailto:Support@perfectserviceprovider.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Mail className="h-3 w-3" />
              <span>Support@perfectserviceprovider.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
            <span className="text-blue-100">Premium Digital Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 md:gap-4 group flex-shrink-0" 
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 overflow-hidden p-1 sm:p-2">
                  <img 
                    src="/logo.png" 
                    alt="PSP Logo" 
                    className="w-full h-full object-contain rounded-md sm:rounded-lg"
                  />
                </div>
                <div className="absolute -inset-1 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                  Perfect Service Provider
                </h1>
              </div>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden xl:flex items-center">
              <div className="flex items-center bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-inner border border-gray-200/50">
                
                <Link 
                  to="/" 
                  className="px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-full font-semibold transition-all duration-300 relative group text-sm lg:text-base"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                {/* Services Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to="/services" 
                    className="flex items-center gap-2 px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base relative group"
                  >
                    <span className="relative z-10">Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 relative z-10 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[450px] transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                  }`}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      
                      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient p-4 lg:p-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Layers className="h-5 w-5 lg:h-6 lg:w-6" />
                          </div>
                          <h3 className="text-base lg:text-lg font-bold">Our Services</h3>
                        </div>
                        <p className="text-blue-100 text-xs lg:text-sm">Comprehensive digital solutions for your success</p>
                      </div>

                      <div className="p-3 lg:p-4">
                        {serviceItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl hover:shadow-lg transition-all duration-300 group bg-gradient-to-r ${item.bgGradient} hover:scale-[1.02] mb-2 last:mb-0 border border-transparent hover:border-${item.color}-200`}
                          >
                            <div className={`p-2 lg:p-3 rounded-xl bg-white shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                              <item.icon className={`h-5 w-5 lg:h-6 lg:w-6 text-${item.color}-600`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm lg:text-base">
                                {item.title}
                              </h4>
                              <p className="text-xs lg:text-sm text-gray-600 mt-1">{item.description}</p>
                              <div className="flex gap-3 mt-2">
                                {item.features.map((feature, idx) => (
                                  <span key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                                    <CheckCircle className="h-3 w-3 text-green-500" />
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>

                      <div className="px-4 lg:px-6 py-3 lg:py-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-xs lg:text-sm group"
                        >
                          <Rocket className="h-3 w-3 lg:h-4 lg:w-4 group-hover:animate-bounce" />
                          Explore All Services
                          <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/about" 
                  className="px-4 lg:px-6 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-full font-semibold transition-all duration-300 relative group text-sm lg:text-base"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              
              {/* Social Media Links - Enhanced with beautiful glowing shadows */}
              <div className="hidden xl:flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 bg-gray-50/80 backdrop-blur-sm rounded-full border border-gray-200/50">
                {socialLinks.map((social, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon-btn p-1.5 lg:p-2 rounded-lg ${social.color} ${social.bgHover} transition-all duration-500 transform hover:scale-110 hover:-translate-y-0.5 block relative ${social.glowColor}`}
                      title={social.label}
                    >
                      <social.icon className="h-3 w-3 lg:h-4 lg:w-4 relative z-10" />
                    </a>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <Link 
                to="/contact" 
                className="hidden xl:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-sm lg:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Mail className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Contact</span>
              </Link>

              {/* Payment Button */}
              <Link
                to="/payment"
                className="hidden lg:flex items-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <CreditCard className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
                <span className="hidden lg:inline relative z-10">Pay Now</span>
                <span className="lg:hidden relative z-10">Pay</span>
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </Link>

              {/* Compact Payment Button - Small screens */}
              <Link
                to="/payment"
                className="flex lg:hidden items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm relative"
              >
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Pay</span>
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="xl:hidden relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <span className={`absolute top-1 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? 'rotate-45 top-2.5 sm:top-3' : ''}`}></span>
                  <span className={`absolute top-2.5 sm:top-3 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                  <span className={`absolute top-4 sm:top-5 left-0 w-5 sm:w-6 h-0.5 bg-gray-700 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? '-rotate-45 top-2.5 sm:top-3' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2 sm:space-y-3">
                <Link 
                  to="/" 
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-600 font-bold text-sm">H</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
                
                <div className="space-y-2">
                  <Link 
                    to="/services" 
                    className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    onClick={closeMobileMenu}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                  </Link>
                  
                  {/* Mobile Service Items */}
                  <div className="pl-3 sm:pl-4 ml-3 sm:ml-4 border-l-2 border-gradient-to-b from-blue-200 to-purple-200 space-y-2">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`flex items-center gap-3 text-gray-600 hover:text-blue-600 py-2 px-3 sm:px-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 bg-gradient-to-r ${item.bgGradient} group`}
                        onClick={closeMobileMenu}
                      >
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all duration-300`}>
                          <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 text-${item.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                        <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/about" 
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
                  onClick={closeMobileMenu}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                </Link>
                {/* 
                <Link
                  to="/payment"
                  className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] lg:hidden relative"
                  onClick={closeMobileMenu}
                >
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                  Make Payment
                  <span className="absolute top-2 right-4 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                </Link> */}
              </div>

              {/* Mobile Social Links - Enhanced with glowing shadows */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 text-center">Connect With Us</p>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon-mobile p-2.5 sm:p-3 bg-white rounded-xl shadow-md transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group ${social.glowColor}`}
                      title={social.label}
                    >
                      <social.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${social.color.split(' ')[0]} group-hover:text-white transition-colors duration-300`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-center">
                <a href="tel:+918920267022" className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91-89202 67022</span>
                </a>
                <a href="mailto:Support@perfectserviceprovider.com" className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Support@perfectserviceprovider.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add required styles for animations and glowing effects */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        /* Beautiful glowing shadow effects for social icons */
        .social-icon-btn {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Facebook glow */
        .hover\\:shadow-facebook-glow:hover {
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.5),
            0 0 40px rgba(59, 130, 246, 0.3),
            0 0 60px rgba(59, 130, 246, 0.1),
            0 4px 15px rgba(59, 130, 246, 0.2);
        }
        
        /* Instagram glow - multi-color */
        .hover\\:shadow-instagram-glow:hover {
          box-shadow: 
            0 0 20px rgba(236, 72, 153, 0.4),
            0 0 40px rgba(168, 85, 247, 0.3),
            0 0 60px rgba(251, 146, 60, 0.2),
            0 4px 15px rgba(236, 72, 153, 0.3);
        }
        
        /* YouTube glow */
        .hover\\:shadow-youtube-glow:hover {
          box-shadow: 
            0 0 20px rgba(239, 68, 68, 0.5),
            0 0 40px rgba(239, 68, 68, 0.3),
            0 0 60px rgba(239, 68, 68, 0.1),
            0 4px 15px rgba(239, 68, 68, 0.2);
        }
        
        /* WhatsApp glow */
        .hover\\:shadow-whatsapp-glow:hover {
          box-shadow: 
            0 0 20px rgba(34, 197, 94, 0.5),
            0 0 40px rgba(34, 197, 94, 0.3),
            0 0 60px rgba(34, 197, 94, 0.1),
            0 4px 15px rgba(34, 197, 94, 0.2);
        }
        
        /* Mobile social icons glow effects */
        .social-icon-mobile {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-icon-mobile.hover\\:shadow-facebook-glow:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          box-shadow: 
            0 0 25px rgba(59, 130, 246, 0.6),
            0 0 50px rgba(59, 130, 246, 0.4),
            0 4px 20px rgba(59, 130, 246, 0.3);
        }
        
        .social-icon-mobile.hover\\:shadow-instagram-glow:hover {
          background: linear-gradient(135deg, #ec4899, #a855f7, #fb923c);
          box-shadow: 
            0 0 25px rgba(236, 72, 153, 0.5),
            0 0 50px rgba(168, 85, 247, 0.4),
            0 4px 20px rgba(251, 146, 60, 0.3);
        }
        
        .social-icon-mobile.hover\\:shadow-youtube-glow:hover {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          box-shadow: 
            0 0 25px rgba(239, 68, 68, 0.6),
            0 0 50px rgba(239, 68, 68, 0.4),
            0 4px 20px rgba(239, 68, 68, 0.3);
        }
        
        .social-icon-mobile.hover\\:shadow-whatsapp-glow:hover {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 
            0 0 25px rgba(34, 197, 94, 0.6),
            0 0 50px rgba(34, 197, 94, 0.4),
            0 4px 20px rgba(34, 197, 94, 0.3);
        }
        
        /* Add subtle animation on hover */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .social-icon-btn:hover,
        .social-icon-mobile:hover {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </>
  );
}
