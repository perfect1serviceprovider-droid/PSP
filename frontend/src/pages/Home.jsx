import React, { useEffect, useState, useRef } from "react";
import GoogleReviews from "../components/GoogleReviews";
import VideoTestimonials from "../components/VideoTestimonials";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Rocket,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  Search,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Target,
  Award,
  Palette,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Clock,
  ThumbsUp,
  Play,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Infinity,
  Layers,
  Briefcase,
  Code,
  PenTool,
  Monitor,
  Smartphone,
  MessageCircle,
  Calendar,
  Trophy,
  Gem,
  Flame,
  Compass,
  Send,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Workflow,
  Megaphone,
  Layout,
  BarChart,
  Settings,
} from "lucide-react";

// Enhanced Typing Animation Component (Buttons Removed)
const SlideTypingText = ({ slide, isActive, onTypingComplete }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [titleComplete, setTitleComplete] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayedTitle("");
      setDisplayedSubtitle("");
      setTitleComplete(false);
      setCurrentTitleIndex(0);
      setCurrentSubtitleIndex(0);
      return;
    }

    const typeTitle = () => {
      if (currentTitleIndex < slide.title.length) {
        setDisplayedTitle(slide.title.slice(0, currentTitleIndex + 1));
        setCurrentTitleIndex(prev => prev + 1);
      } else if (currentTitleIndex >= slide.title.length && !titleComplete) {
        setTitleComplete(true);
      }
    };

    const typeSubtitle = () => {
      if (titleComplete && currentSubtitleIndex < slide.subtitle.length) {
        setDisplayedSubtitle(slide.subtitle.slice(0, currentSubtitleIndex + 1));
        setCurrentSubtitleIndex(prev => prev + 1);
      } else if (titleComplete && currentSubtitleIndex >= slide.subtitle.length) {
        setTimeout(() => {
          if (onTypingComplete) {
            onTypingComplete();
          }
        }, 1000);
      }
    };

    const timeout = setTimeout(() => {
      if (!titleComplete) {
        typeTitle();
      } else {
        typeSubtitle();
      }
    }, titleComplete ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [isActive, currentTitleIndex, currentSubtitleIndex, titleComplete, slide, onTypingComplete]);

  const isTypingComplete = titleComplete && currentSubtitleIndex >= slide.subtitle.length;

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
        {displayedTitle}
        {!titleComplete && <span className="animate-pulse text-white">|</span>}
      </h2>
      {titleComplete && (
        <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 leading-relaxed max-w-3xl">
          {displayedSubtitle}
          {!isTypingComplete && <span className="animate-pulse text-white">|</span>}
        </p>
      )}
    </motion.div>
  );
};

// Enhanced Image Slider with Better Colors
const LargeImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // {
    //   // Ultra-modern digital marketing dashboard
    //   image: "slider/slider1.jpg",
    //   title: "Digital Marketing Revolution",
    //   subtitle: "Transform your brand with cutting-edge strategies that drive engagement and deliver measurable results"
    // },
    {
      // Performance analytics with growing charts
      image: "slider/slider3.jpg",
      title: "Performance-Driven Advertising",
      subtitle: "Maximize ROI with precision-targeted campaigns that convert prospects into loyal customers"
    },
    {
      // Clean, modern workspace with multiple devices
      image: "slider/slider2.jpg",
      title: "Next-Gen Web Solutions",
      subtitle: "Create stunning digital experiences that captivate users and accelerate business growth"
    },
    {
      // Google search interface with SEO elements
      image: "slider/slider4.jpg",
      title: "SEO Domination Strategy",
      subtitle: "Rule search results and multiply organic traffic with our proven optimization techniques"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-gray-900">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-5xl text-white">
                      <SlideTypingText
                        slide={slide}
                        isActive={index === currentSlide}
                        onTypingComplete={() => { }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-12 left-8 flex items-center gap-6">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-3 transition-all duration-500 ${index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/40 hover:bg-white/60'
                } rounded-full overflow-hidden`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
                  layoutId="activeSlide"
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="text-white/80 text-sm font-medium flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/50">/</span>
          <span className="text-white/60">{String(slides.length).padStart(2, '0')}</span>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-24 right-8 text-white/60 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="h-5 w-5 rotate-90" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return [ref, isInView];
};

export default function Home() {
  const [statsRef, statsInView] = useScrollAnimation();
  const [aboutRef, aboutInView] = useScrollAnimation();
  const [servicesRef, servicesInView] = useScrollAnimation();
  const [processRef, processInView] = useScrollAnimation();
  const [contactRef, contactInView] = useScrollAnimation();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider */}
      <section className="w-full">
        <LargeImageSlider />
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative -mt-20 z-20 py-8" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            animate={statsInView ? "animate" : "initial"}
          >
            {[
              { icon: Trophy, number: "500+", label: "Projects Delivered", gradient: "from-amber-400 to-orange-500" },
              { icon: Users, number: "350+", label: "Happy Clients", gradient: "from-blue-400 to-indigo-500" },
              { icon: Award, number: "99%", label: "Success Rate", gradient: "from-emerald-400 to-green-500" },
              { icon: Gem, number: "24/7", label: "Support", gradient: "from-purple-400 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden group"
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${stat.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />

                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-xl`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Redesigned About Section */}
      <section className="py-24 px-6 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-bold shadow-xl mb-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            >
              <Compass className="h-4 w-4" />
              WHO WE ARE
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-900">Digital Innovation</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Perfect Service Provider revolutionizes digital marketing with cutting-edge strategies,
              creative excellence, and data-driven results that transform businesses.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visual Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main Image with Overlay Stats */}
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <motion.img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Cards */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={aboutInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Flame className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-gray-900">5+ Years</div>
                        <div className="text-sm text-gray-600">Excellence</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={aboutInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-gray-900">99%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-2xl opacity-50" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "500+", label: "Projects", icon: Briefcase, color: "from-blue-500 to-indigo-600" },
                  { number: "350+", label: "Clients", icon: Users, color: "from-green-500 to-emerald-600" },
                  { number: "24/7", label: "Support", icon: Clock, color: "from-purple-500 to-pink-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:shadow-xl transition-all`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-2xl font-black text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Features List */}
              <div className="space-y-4">
                {[
                  {
                    icon: Lightbulb,
                    title: "Innovation First",
                    desc: "Cutting-edge solutions that push digital boundaries and set new industry standards",
                    gradient: "from-yellow-400 to-amber-500"
                  },
                  {
                    icon: Shield,
                    title: "Proven Results",
                    desc: "Track record of successful brand transformations with measurable impact",
                    gradient: "from-green-400 to-emerald-500"
                  },
                  {
                    icon: Infinity,
                    title: "Unlimited Growth",
                    desc: "Scalable strategies designed for sustainable long-term success",
                    gradient: "from-blue-400 to-indigo-500"
                  },
                  {
                    icon: Heart,
                    title: "Client-Centric",
                    desc: "Your success is our primary mission, with personalized attention to every detail",
                    gradient: "from-pink-400 to-rose-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                    variants={scaleIn}
                    whileHover={{ x: 8 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                  <p className="text-gray-300 mb-6">Join hundreds of successful brands that trust us with their digital growth.</p>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket className="h-5 w-5" />
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-6 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            >
              <Layers className="h-4 w-4" />
              OUR SERVICES
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-900">Complete Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive digital services that drive measurable growth and lasting success.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            animate={servicesInView ? "animate" : "initial"}
          >
            {[
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                desc: "Strategic campaigns across social media and digital platforms to maximize your reach and engagement.",
                features: ["Social Media Strategy", "Content Creation", "Community Management", "Analytics & Reporting"],
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50"
              },
              {
                icon: Target,
                title: "Google Ads Management",
                desc: "Performance-driven advertising campaigns optimized for conversions and ROI with continuous monitoring.",
                features: ["Campaign Setup", "Keyword Research", "A/B Testing", "Performance Tracking"],
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                icon: Code,
                title: "Web Development",
                desc: "Modern, responsive websites built with cutting-edge technology to provide exceptional user experiences.",
                features: ["Responsive Design", "Fast Loading", "SEO Optimized", "CMS Integration"],
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                icon: Search,
                title: "SEO Optimization",
                desc: "Comprehensive search engine optimization to improve your visibility and drive organic traffic.",
                features: ["On-page SEO", "Technical SEO", "Local SEO", "Link Building"],
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50"
              },
              {
                icon: PenTool,
                title: "Creative Design",
                desc: "Stunning visual identity and creative assets that capture your brand essence and engage your audience.",
                features: ["Brand Identity", "Graphics Design", "UI/UX Design", "Motion Graphics"],
                gradient: "from-pink-500 to-rose-600",
                bgGradient: "from-pink-50 to-rose-50"
              },

            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >

                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">

                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  {/* CTA */}
                  <motion.a
                    href="/about"
                    className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-xl font-bold group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-24 px-6 bg-white relative overflow-hidden" ref={processRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
            >
              <Calendar className="h-4 w-4" />
              OUR PROCESS
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-900">Simple & Effective</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step methodology ensures successful project delivery and exceptional results every time.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" />

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              variants={staggerContainer}
              animate={processInView ? "animate" : "initial"}
            >
              {[
                {
                  icon: MessageCircle,
                  title: "Discovery",
                  desc: "We dive deep into understanding your business, goals, and target audience to create a solid foundation.",
                  step: "01",
                  gradient: "from-blue-500 to-cyan-600",
                  tasks: ["Market Research", "Competitor Analysis", "Goal Setting"]
                },
                {
                  icon: Lightbulb,
                  title: "Strategy",
                  desc: "Develop a custom roadmap with clear objectives, timelines, and measurable success metrics.",
                  step: "02",
                  gradient: "from-green-500 to-emerald-600",
                  tasks: ["Strategic Planning", "Resource Allocation", "KPI Definition"]
                },
                {
                  icon: Rocket,
                  title: "Implementation",
                  desc: "Execute the strategy with precision, maintaining regular communication and milestone tracking.",
                  step: "03",
                  gradient: "from-purple-500 to-pink-600",
                  tasks: ["Campaign Launch", "Content Creation", "Performance Monitoring"]
                },
                {
                  icon: BarChart3,
                  title: "Optimize",
                  desc: "Continuously analyze performance data and refine strategies for sustained growth and success.",
                  step: "04",
                  gradient: "from-orange-500 to-red-600",
                  tasks: ["A/B Testing", "Performance Analysis", "Strategy Refinement"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={scaleIn}
                >
                  {/* Step Number - Mobile */}
                  <div className="lg:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-black shadow-lg border-4 border-gray-100">
                      {item.step}
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <motion.div
                    className="relative mx-auto mb-8 lg:mb-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full shadow-2xl flex items-center justify-center relative mx-auto`}>
                      <item.icon className="h-16 w-16 text-white" />

                      {/* Step Number - Desktop */}
                      <motion.div
                        className="hidden lg:flex absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full items-center justify-center text-gray-900 font-black shadow-xl border-4 border-gray-100"
                        initial={{ scale: 0 }}
                        animate={processInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 mt-8"
                    whileHover={{ y: -8 }}
                  >
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tasks */}
                    <div className="space-y-2">
                      {item.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`} />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <VideoTestimonials />

      {/* Enhanced Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden" ref={contactRef}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <MessageCircle className="h-4 w-4" />
              GET IN TOUCH
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Ready to Start Your</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve extraordinary digital growth.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            animate={contactInView ? "animate" : "initial"}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                info: "Support@perfectserviceprovider.com",
                link: "mailto:Support@perfectserviceprovider.com",
                gradient: "from-blue-500 to-cyan-500",
                action: "Send Email",
                description: "Get in touch for project inquiries"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+91-89202 67022",
                link: "tel:+918920267022",
                gradient: "from-green-500 to-emerald-500",
                action: "Call Now",
                description: "Speak directly with our experts"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "B-8/21, Near Mount Abu School, Rohini Sector 5, New Delhi - 110085",
                link: "https://maps.app.goo.gl/v3UhSwscFc1pN5cFA",
                gradient: "from-purple-500 to-pink-500",
                action: "Get Directions",
                description: "Meet us at our office"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
              >

                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">

                  <div className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{contact.title}</h3>

                  <p className="text-gray-400 text-sm mb-4 text-center">{contact.description}</p>

                  <p className="text-white text-xl font-semibold mb-6 text-center">{contact.info}</p>

                  {contact.link ? (
                    <motion.a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${contact.gradient} text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{contact.action}</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.a>
                  ) : (
                    <motion.button
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{contact.action}</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.button>
                  )}
                </div>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${contact.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl max-w-2xl mx-auto">
              <div className="bg-gray-900 rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Create Something Amazing Together
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Join 350+ successful brands that have transformed their digital presence with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-5 w-5" />
                    Start Free Consultation
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
