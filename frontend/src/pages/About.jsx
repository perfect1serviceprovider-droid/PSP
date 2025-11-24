import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  Shield,
  TrendingUp,
  Clock,
  Star,
  Compass,
  Zap,
  Rocket,
  Globe,
  Award,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import teamMembers from "../components/TeamMembers";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      offset: 50,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <Sparkles className="h-4 w-4" />
                Digital Marketing Agency
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                We're Perfect
                <span className="block text-blue-600">Service Provider</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Transforming businesses through innovative digital strategies that 
                deliver measurable results and sustainable growth for long-term success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Start Your Journey
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <Eye className="h-6 w-6" />
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                  alt="Our team working together"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20" data-aos="fade-up" data-aos-delay="200">
            {[
              { number: "500+", label: "Projects Completed", icon: Rocket },
              { number: "350+", label: "Happy Clients", icon: Users },
              { number: "99%", label: "Success Rate", icon: Star }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-black text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the way we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation Driven",
                description: "Cutting-edge strategies that keep you ahead of the competition",
                color: "blue"
              },
              {
                icon: Target,
                title: "Results Focused",
                description: "Every campaign designed to deliver measurable business growth",
                color: "purple"
              },
              {
                icon: Heart,
                title: "Client First",
                description: "Your success is our mission - we're invested in your journey",
                color: "green"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 bg-${card.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <card.icon className={`h-8 w-8 text-${card.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Born from a passion for digital excellence, Perfect Service Provider 
                emerged with a mission to bridge the gap between ambitious businesses 
                and their digital potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We've transformed hundreds of brands, helping them navigate the 
                complex digital landscape with strategies that actually work.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global Reach", desc: "Serving clients worldwide" },
                  { icon: Shield, title: "Trusted Partner", desc: "Reliable and transparent" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                alt="Team strategy session"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower businesses with digital marketing strategies that don't 
                just look good on paper, but deliver real, measurable growth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Zap, label: "Fast Results", desc: "See impact within 30 days" },
                  { icon: Clock, label: "24/7 Support", desc: "Always here when you need us" },
                  { icon: Star, label: "Quality Guarantee", desc: "Excellence in every project" },
                  { icon: TrendingUp, label: "Growth Focused", desc: "Strategies that scale" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left" className="lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=600&auto=format&fit=crop"
                alt="Digital marketing analytics"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-purple-700 font-semibold text-sm mb-6 border border-purple-100">
              <Users className="h-4 w-4" />
              Our Amazing Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Meet the Creative Minds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of digital experts brings creativity, strategy, 
              and technical excellence to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 6).map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/3] bg-gray-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Why Choose Perfect Service Provider
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine expertise, creativity, and dedication to deliver exceptional results 
                that drive real business growth and create lasting success stories.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "Proven Results", desc: "500+ successful projects", color: "blue" },
                  { icon: Users, title: "Expert Team", desc: "Skilled professionals", color: "green" },
                  { icon: Clock, title: "Fast Delivery", desc: "On-time completion", color: "purple" },
                  { icon: Shield, title: "Quality Guarantee", desc: "100% satisfaction", color: "red" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                alt="Team working together on projects"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-white rounded-3xl p-16 shadow-lg border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's create something amazing together. Join hundreds of businesses who've 
              transformed their digital presence and achieved remarkable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="h-6 w-6" />
                Start Your Journey
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Eye className="h-6 w-6" />
                Explore Our Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Call Us</div>
                <a href="tel:+918920267022" className="text-blue-600 hover:text-blue-700">
                  +91-89202 67022
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Email Us</div>
                <a href="mailto:Support@perfectserviceprovider.com" className="text-green-600 hover:text-green-700">
                  Support@perfectserviceprovider.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">Visit Us</div>
                <span className="text-purple-600">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
