"use client";
import React, { useState } from "react";
import {
  Bath,
  UtensilsCrossed,
  Wine,
  Sun,
  BedDouble,
  Users,
  CarFront,
  Leaf,
  Accessibility,
  Calendar,
  Star,
  Music,
  Bike,
  Dumbbell,
} from "lucide-react";

const highlightFeatures = [
  {
    title: "Signature Spa Journey",
    desc: "90-minute personalized rituals",
    Icon: Bath,
    category: "wellness",
    tag: "Wellness & Spa",
    duration: "90 min",
  },
  {
    title: "Chef’s Table Experience",
    desc: "8-course seasonal tasting menu",
    Icon: UtensilsCrossed,
    category: "culinary",
    tag: "Culinary",
    duration: "Evening",
  },
  {
    title: "Rooftop Sunset Lounge",
    desc: "Champagne & panoramic golden hour",
    Icon: Sun,
    category: "rooftop",
    tag: "Sunset Lounge",
    duration: "Golden hour",
  },
  {
    title: "Private Mixology",
    desc: "Craft signature cocktails with our bartender",
    Icon: Wine,
    category: "culinary",
    tag: "Mixology",
    duration: "60 min",
  },
  {
    title: "Curated City Journeys",
    desc: "Exclusive local insider experiences",
    Icon: Bike,
    category: "explore",
    tag: "City Discovery",
    duration: "Half day",
  },
  {
    title: "Wellness Sanctuary",
    desc: "Yoga, sound healing & private training",
    Icon: Dumbbell,
    category: "wellness",
    tag: "Mind & Body",
    duration: "Morning & evening",
  },
];

const experienceCategories = [
  { key: "all", label: "All", Icon: Star },
  { key: "wellness", label: "Wellness", Icon: Bath },
  { key: "culinary", label: "Culinary", Icon: UtensilsCrossed },
  { key: "rooftop", label: "Rooftop", Icon: Sun },
  { key: "explore", label: "Explore City", Icon: Bike },
];

const categoryDescriptions = {
  all: "Preview our most-loved experiences across spa, dining and city discovery.",
  wellness:
    "Slow down with immersive spa rituals, yoga sessions and mindful movement.",
  culinary:
    "Follow the flavors from chef’s table to rooftop cocktails and late-night bites.",
  rooftop:
    "Chase golden-hour light, skyline views and live music above the city.",
  explore:
    "Head out with concierge-curated city journeys and local insider access.",
};

const keyHighlights = [
  { value: "4.9/5", label: "Guest Experience Rating", Icon: Star },
  { value: "200+", label: "Curated Experiences", Icon: Calendar },
  { value: "24/7", label: "Personal Concierge", Icon: Users },
  { value: "Carbon Neutral", label: "Since 2024", Icon: Leaf },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    quote:
      "The rooftop sunset with champagne and the spa ritual made this the most memorable stay of my life.",
    location: "Dubai",
  },
  {
    name: "James Chen",
    quote:
      "Chef’s Table was an absolute masterpiece. Worth planning the whole trip around.",
    location: "Singapore",
  },
];

const quickFacts = [
  { title: "Signature Spa", desc: "Open daily 9 AM – 10 PM", Icon: Bath },
  { title: "Rooftop Lounge", desc: "Sunset session 5:30 – 8:00 PM", Icon: Sun },
  {
    title: "Chef’s Table",
    desc: "Thu–Sun | Reservation required",
    Icon: UtensilsCrossed,
  },
  {
    title: "Private Transfer",
    desc: "Complimentary for suites",
    Icon: CarFront,
  },
];

const experienceThemes = [
  {
    title: "Wellness Escape",
    desc: "Morning yoga, spa rituals and calming in-suite moments.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    tag: "Slow & Restful",
    time: "Ideal for 1–2 days",
    Icon: Bath,
  },
  {
    title: "Culinary Journey",
    desc: "Chef-driven tasting menus, rooftop cocktails and late-night bites.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    tag: "Taste & Indulge",
    time: "Evening into night",
    Icon: UtensilsCrossed,
  },
  {
    title: "City & Rooftop Nights",
    desc: "Golden-hour views, live music and curated city adventures.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    tag: "Explore & Celebrate",
    time: "From sunset onward",
    Icon: Music,
  },
];

const ExperiencesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredHighlights =
    selectedCategory === "all"
      ? highlightFeatures
      : highlightFeatures.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section with background image */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/rR6y9LgS/image.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-white" />

        <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Curated Experiences
          </h1>
          <p className="mt-5 text-xl text-amber-100 max-w-2xl mx-auto">
            Moments of refined luxury, authentic discovery, and deep relaxation
          </p>
          <div className="mt-7 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-amber-100 border border-white/20">
              <Calendar className="w-3.5 h-3.5" />
              <span>Choose your experience focus</span>
            </div>
            <div className="flex w-full max-w-3xl gap-3 overflow-x-auto pb-1 justify-center">
              {experienceCategories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap ${
                    selectedCategory === cat.key
                      ? "bg-amber-500 text-slate-950 border-amber-300 shadow-md shadow-amber-300/40"
                      : "bg-white/5 text-amber-50 border-white/20 hover:bg-white/10"
                  }`}
                >
                  <cat.Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Signature Collections
            </h2>
            <p className="mt-1 text-sm text-slate-500 max-w-xl">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>
          <p className="text-xs md:text-sm text-slate-500">
            Showing {filteredHighlights.length} curated experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredHighlights.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-amber-100/60 p-7 hover:border-amber-300 transition-all duration-300 hover:shadow-xl"
            >
              <item.Icon
                className="w-9 h-9 text-amber-600 mb-5"
                strokeWidth={1.8}
              />
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-800 font-medium">
                  <Star className="w-3.5 h-3.5" />
                  {item.tag}
                </span>
                <span className="text-amber-600 font-semibold">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Experience Themes
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 max-w-xl">
              Choose an energy for your stay, from deep rest to celebration
              under the city lights.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {experienceThemes.map((theme, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden border border-amber-50 shadow-sm group"
            >
              <div className="absolute inset-0">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-50 border border-white/20">
                    <theme.Icon className="w-4 h-4" />
                    <span>{theme.tag}</span>
                  </span>
                  <span className="text-[11px] text-amber-100 font-medium">
                    {theme.time}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-amber-50/90">{theme.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50/40 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {keyHighlights.map((stat, i) => (
              <div key={i}>
                <stat.Icon className="w-6 h-6 text-amber-600 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - full width feel */}
      <section className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
            "https://images.unsplash.com/photo-1578683015146-b644c1c9b0c0",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6",
            "https://images.unsplash.com/photo-1611892440504-42a792a0327d",
            "https://images.unsplash.com/photo-1571896349842-077c29d8acb3",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-amber-50 shadow-sm"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts / Schedule */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">At a Glance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-amber-50 p-6 text-center hover:shadow-md transition"
            >
              <item.Icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - fewer but stronger */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Moments</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-amber-50 shadow-sm"
            >
              <p className="text-lg italic text-slate-700 mb-6">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Signature Journey
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Limited availability for signature experiences — reserve your dates
            today
          </p>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-amber-50 transition">
            View Available Experiences & Book
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
