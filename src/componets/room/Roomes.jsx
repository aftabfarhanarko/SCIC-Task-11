"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Heart,
  Star,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  Sparkles,
  Trophy,
  Target,
  Eye,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpSoft = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const stats = [
    {
      number: "25+",
      label: "Years of Excellence",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "50K+",
      label: "Happy Guests",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "150+",
      label: "Luxury Rooms",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Exceptional Service",
      description:
        "We believe in providing personalized service that exceeds expectations, making every guest feel valued and special.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Safety",
      description:
        "Your safety and security are our top priorities. We maintain the highest standards in cleanliness and guest protection.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and sustainable tourism that respects our environment and local communities.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Experience",
      description:
        "Premium amenities and world-class facilities designed to provide an unforgettable luxury experience.",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      position: "General Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      description: "20+ years in luxury hospitality management",
    },
    {
      name: "Sarah Mitchell",
      position: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      description: "Expert in operational excellence",
    },
    {
      name: "Michael Chen",
      position: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400",
      description: "Award-winning culinary specialist",
    },
    {
      name: "Emily Roberts",
      position: "Guest Relations Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      description: "Dedicated to exceptional guest experiences",
    },
  ];

  const milestones = [
    {
      year: "1998",
      event: "Grand Opening",
      description: "Opened our doors with 50 rooms",
    },
    {
      year: "2005",
      event: "First Award",
      description: "Received Best Luxury Hotel Award",
    },
    {
      year: "2010",
      event: "Major Expansion",
      description: "Expanded to 150+ rooms",
    },
    {
      year: "2015",
      event: "Sustainability Initiative",
      description: "Launched eco-friendly programs",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Introduced smart room technology",
    },
    {
      year: "2024",
      event: "Global Recognition",
      description: "Ranked Top 10 Hotels Worldwide",
    },
  ];

  const amenities = [
    "24/7 Concierge Service",
    "Infinity Pool & Spa",
    "Fine Dining Restaurant",
    "Fitness Center & Yoga Studio",
    "Business Conference Rooms",
    "Airport Shuttle Service",
    "Rooftop Bar & Lounge",
    "Kids Play Area",
    "Complimentary WiFi",
    "Valet Parking",
    "Room Service 24/7",
    "Wedding & Event Venues",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <motion.div
        className="relative h-[70vh] bg-gradient-to-r from-slate-950 to-slate-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-800/85" />

        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-amber-100 border border-white/15 mb-5 tracking-[0.25em] uppercase">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>About Luxestay</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent">
              Where your stay feels designed for you
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-6">
              A modern luxury hotel brand crafted for effortless stays, warm
              service, and memorable city moments.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-amber-50 border border-white/15">
                <CheckCircle className="w-4 h-4 text-emerald-300" />
                Premium rooms and suites
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-amber-50 border border-white/15">
                <Clock className="w-4 h-4 text-amber-300" />
                24/7 concierge support
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-amber-50 border border-white/15">
                <Globe className="w-4 h-4 text-sky-300" />
                Connected to the heart of the city
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition shadow-xl hover:shadow-2xl transform hover:scale-105">
                Book your stay
              </button>
              <button className="px-8 py-4 border-2 border-white/80 text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition">
                Meet our team
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-amber-100 text-center group"
              variants={fadeInUpSoft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl mb-4 text-amber-600">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Founded in 1998, our hotel has been a beacon of luxury and
              hospitality for over two decades. What started as a vision to
              create an extraordinary hospitality experience has grown into one
              of the most renowned luxury hotels in the region.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At Luxestay, we blend timeless elegance with modern comfort so
              every arrival feels personal and every stay feels effortless.
              Our commitment to excellence has earned us numerous accolades
              and, more importantly, the trust of thousands of guests.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Today, we continue to set new standards in hospitality, combining
              world-class service, exceptional dining, and luxurious
              accommodations to create memories that last a lifetime.
            </p>
          </div>
          <motion.div
            className="relative"
            variants={fadeInUpSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
              alt="Hotel Lobby"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="font-semibold">Years of excellence in stays</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide exceptional hospitality experiences that exceed
                expectations, creating lasting memories for our guests through
                personalized service, luxurious accommodations, and attention to
                every detail.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be recognized globally as the premier destination for luxury
                hospitality, setting industry standards for excellence,
                sustainability, and innovation while enriching the communities
                we serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide everything we do and define who we are
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl mb-6 text-amber-600 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline/Milestones */}
      <div className="bg-gradient-to-br from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              Key milestones in our remarkable story
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  <div
                    className={`md:w-1/2 ${
                      idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-100 hover:shadow-xl transition-shadow">
                      <span className="inline-block px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-bold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-amber-500 rounded-full items-center justify-center shadow-lg z-10">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dedicated professionals committed to making your stay exceptional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-amber-600 font-semibold mb-2">
                {member.position}
              </p>
              <p className="text-slate-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities & Facilities */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need for a perfect stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border-2 border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-600">
            Recognized for excellence in hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-amber-200">
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Best Luxury Hotel 2024
            </h3>
            <p className="text-slate-600">Travel Excellence Awards</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-amber-200">
            <Star className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              5-Star Rating
            </h3>
            <p className="text-slate-600">Global Hotel Standards</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-amber-200">
            <Trophy className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Top 10 Hotels Worldwide
            </h3>
            <p className="text-slate-600">Luxury Travel Magazine</p>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default AboutPage;
