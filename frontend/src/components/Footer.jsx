import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Globe,
  Palette,
  TrendingUp,
  Clock,
  Users,
  Heart,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  Code,
  Megaphone,
  ChevronRight,
  Send,
  Rocket
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          
          {/* Brand Card - Spans 2 columns */}
          <div className="col-span-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full">
              {/* Logo Section - Fixed to show logo.png */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-md opacity-60 animate-pulse" />
                  <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <img 
                      src="/logo.png" 
                      alt="PSP Logo" 
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if logo doesn't load */}
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PSP</h3>
                  <p className="text-[10px] text-gray-400 font-medium tracking-wider">PERFECT SERVICE PROVIDER</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Transforming visions into digital reality with innovation and excellence
              </p>
              
              {/* Stats with animated counters */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3 text-center group/stat hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">350+</p>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center group/stat hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Award className="w-3 h-3 text-green-400" />
                    <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">500+</p>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="col-span-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold mb-4 text-white flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                Our Services
              </h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800/50 group/service transition-all">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover/service:bg-blue-500/20 transition-colors">
                    <Megaphone className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="flex-1 font-medium">Digital Marketing</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/service:opacity-100 group-hover/service:translate-x-0 transition-all" />
                </a>
                <a href="#" className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800/50 group/service transition-all">
                  <div className="p-1.5 bg-green-500/10 rounded-lg group-hover/service:bg-green-500/20 transition-colors">
                    <Code className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="flex-1 font-medium">Web Development</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/service:opacity-100 group-hover/service:translate-x-0 transition-all" />
                </a>
                <a href="#" className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800/50 group/service transition-all">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg group-hover/service:bg-purple-500/20 transition-colors">
                    <Palette className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span className="flex-1 font-medium">Graphics Design</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/service:opacity-100 group-hover/service:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card - Spans 2 columns */}
          <div className="col-span-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold mb-4 text-white flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                Quick Contact
              </h4>
              <div className="space-y-3">
                <a href="tel:+918920267022" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 text-xs text-gray-400 hover:text-white transition-all group/contact">
                  <div className="p-1.5 bg-green-500/10 rounded-lg group-hover/contact:bg-green-500/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">+91-89202 67022</p>
                    <p className="text-[10px] text-gray-500">Call us directly</p>
                  </div>
                </a>
                <a href="mailto:Support@perfectserviceprovider.com" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 text-xs text-gray-400 hover:text-white transition-all group/contact">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover/contact:bg-blue-500/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">support@perfectserviceprovider.com</p>
                    <p className="text-[10px] text-gray-500">Email support</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-gray-400">
                  <div className="p-1.5 bg-orange-500/10 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300">Mon - Sat</p>
                    <p className="text-[10px] text-gray-500">9:00 AM - 8:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="col-span-2 lg:col-span-3 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold mb-4 text-white flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Heart className="w-4 h-4 text-pink-400" />
                </div>
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.facebook.com/Perfectserviceprovider" 
                  className="group/social relative w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-600/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover/social:text-blue-400 transition-colors" />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.instagram.com/perfect.service.provider/" 
                  className="group/social relative w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover/social:text-pink-400 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-md opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.youtube.com/@PerfectServiceProvider" 
                  className="group/social relative w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-red-500/50 hover:bg-red-600/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gray-400 group-hover/social:text-red-400 transition-colors" />
                  <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-md opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
                
              </div>
              <p className="text-[10px] text-gray-500 mt-3">Follow us for updates and insights</p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="col-span-2 lg:col-span-3 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 overflow-hidden h-full">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              <div className="relative">
                <h4 className="text-sm font-semibold mb-2 text-white flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Ready to Start Your Project?
                </h4>
                <p className="text-[11px] text-blue-100 mb-4">
                  Let's transform your ideas into reality
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-xl text-xs font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Now
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-gray-400 flex items-center gap-2">
              <span className="text-gray-500">©</span>
              <span className="font-medium">{currentYear} Perfect Service Provider</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">All rights reserved</span>
            </p>
            
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1 group">
                Privacy
                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="/terms-conditions" className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1 group">
                Terms
                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="/refund-policy" className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1 group">
                Refund
                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
            
            {/* Updated attribution text */}
            <p className="flex items-center gap-1.5 text-gray-400">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by Perfect Service Provider</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}