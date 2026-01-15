import React from "react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";

const NewSectionns = () => {
  const amenities = [
    { label: "Complimentary Wi‑Fi" },
    { label: "24/7 Concierge" },
    { label: "Airport Transfer" },
    { label: "Valet Parking" },
    { label: "Fitness Studio" },
    { label: "Business Lounge" },
  ];

  const rooms = [
    {
      title: "Presidential Suite",
      desc: "Private terrace • City panorama",
      image:
        "https://i.ibb.co.com/yc05tcQ8/image.png",
      href: "/rooms/presidential",
      price: "$899",
      rating: 5,
    },
    {
      title: "Grand Deluxe",
      desc: "King bed • Marble bathroom",
      image:
        "https://i.ibb.co.com/dwqwNntP/image.png",
      href: "/rooms/grand-deluxe",
      price: "$399",
      rating: 4.8,
    },
    {
      title: "Ocean View",
      desc: "Balcony • Sunrise vistas",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      href: "/rooms/ocean-view",
      price: "$499",
      rating: 4.9,
    },
  ];

  const dining = [
    {
      title: "Signature Restaurant",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
      href: "/dining/restaurant",
    },
    {
      title: "Sky Bar",
      image:
        "https://i.ibb.co.com/Lz6QvTNh/image.png",
      href: "/dining/sky-bar",
    },
    {
      title: "Afternoon Tea",
      image:
        "https://i.ibb.co.com/Rkc35HvG/image.png",
      href: "/dining/afternoon-tea",
    },
  ];

  const wellness = [
    {
      title: "Holistic Spa",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
      href: "/spa",
    },
    {
      title: "Infinity Pool",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
      href: "/pool",
    },
    {
      title: "Yoga Pavilion",
      image:
        "https://i.ibb.co.com/Y42wk81Q/image.png",
      href: "/wellness/yoga",
    },
  ];

  const attractions = [
    {
      title: "Paris",
      subtitle: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
      href: "/destinations/paris",
    },
    {
      title: "Tokyo",
      subtitle: "Japan",
      image: "https://images.unsplash.com/photo-1503899036084-7e55386a53b0?q=80&w=1600&auto=format&fit=crop",
      href: "/destinations/tokyo",
    },
    {
      title: "Dubai",
      subtitle: "United Arab Emirates",
      image: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?q=80&w=1600&auto=format&fit=crop",
      href: "/destinations/dubai",
    },
    {
      title: "New York",
      subtitle: "United States",
      image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1600&auto=format&fit=crop",
      href: "/destinations/new-york",
    },
  ];
  
  const events = [
    {
      title: "Grand Ballroom",
      desc: "500 guests • Crystal chandeliers",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
      href: "/events/ballroom",
    },
    {
      title: "Executive Boardroom",
      desc: "16 seats • AV suite",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
      href: "/events/boardroom",
    },
    {
      title: "Garden Terrace",
      desc: "Al fresco • Sunset receptions",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
      href: "/events/terrace",
    },
  ];
  
  const testimonials = [
    {
      name: "Amelia R.",
      text: "Impeccable service and truly serene spaces. Our anniversary felt magical.",
      rating: 5,
    },
    {
      name: "Luca M.",
      text: "Dining was outstanding and the spa experience was unforgettable.",
      rating: 5,
    },
    {
      name: "Hana K.",
      text: "Rooms are refined and the staff anticipate every need.",
      rating: 5,
    },
  ];
  
  const awards = [
    { year: "2025", title: "World Luxury Hotel Awards" },
    { year: "2024", title: "Condé Nast Readers’ Choice" },
    { year: "2024", title: "Michelin Guide – Dining" },
  ];
  
  const location = {
    address: "12 Regent Avenue, City Center, 10010",
    phone: "+1 (888) 123-4567",
    email: "reservations@luxestay.com",
    mapImage: "https://i.ibb.co.com/Z46Qng8/image.png",
  };
  
  const membership = [
    { perk: "Members-only rates" },
    { perk: "Late checkout" },
    { perk: "Complimentary upgrades" },
    { perk: "Exclusive dining invites" },
  ];

  const deals = [
    {
      title: "Early Bird Escape",
      desc: "Save 25% when you book 30+ days in advance.",
      tag: "Limited Time",
      href: "/offers",
    },
    {
      title: "Stay Longer, Save More",
      desc: "Stay 4 nights, pay for 3 on select suites.",
      tag: "Popular",
      href: "/offers",
    },
    {
      title: "Weekend Getaway",
      desc: "Complimentary breakfast and late checkout.",
      tag: "Exclusive",
      href: "/offers",
    },
  ];

  const categories = [
    { label: "Luxury", desc: "Flagship suites and premium locations." },
    { label: "Budget", desc: "Smart stays with essential comforts." },
    { label: "Family", desc: "Spacious rooms and kid-friendly perks." },
    { label: "Business", desc: "Work-ready desks and fast Wi‑Fi." },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Search destinations",
      desc: "Choose your city, dates, and number of guests.",
    },
    {
      step: "02",
      title: "Pick your stay",
      desc: "Compare hotels, room types, and guest reviews.",
    },
    {
      step: "03",
      title: "Secure your booking",
      desc: "Confirm details and receive instant confirmation.",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Signature Amenities
            </h2>
            <p className="text-gray-600 mt-4">
              Thoughtfully curated services for an effortless stay.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 text-center"
              >
                <span className="text-slate-900 font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Featured Hotels
            </h2>
            <Link href="/rooms" className="text-amber-600 font-semibold">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link
                key={room.title}
                href={room.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-slate-200 hover:ring-slate-300 transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-serif font-semibold">
                      {room.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{room.desc}</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="text-slate-900 font-medium block">
                      From {room.price}
                    </span>
                    <div className="flex items-center gap-1 text-amber-600 text-xs mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={14}
                          className={
                            index + 1 <= Math.round(room.rating)
                              ? "fill-amber-500 text-amber-500"
                              : "text-slate-300"
                          }
                        />
                      ))}
                      <span className="text-slate-500 ml-1">
                        {room.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <span className="text-amber-600 font-semibold text-sm">
                    View details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Deals & Offers
            </h2>
            <Link href="/offers" className="text-amber-400 font-semibold">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <Link
                key={deal.title}
                href={deal.href}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-amber-400/60 hover:bg-white/10 transition-all shadow-[0_18px_45px_rgba(15,23,42,0.8)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-400">
                    {deal.tag}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">
                  {deal.title}
                </h3>
                <p className="text-white/75 text-sm">{deal.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Dining & Bar
            </h2>
            <Link href="/dining" className="text-amber-600 font-semibold">
              Reserve
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dining.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-slate-200 hover:ring-slate-300 transition-all"
              >
                <div className="relative h-56">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-serif font-semibold">
                      {d.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-white">Spa & Wellness</h2>
            <p className="text-white/70 mt-4">
              Restorative rituals and tranquil spaces for inner balance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellness.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-all"
              >
                <div className="relative h-56">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-serif font-semibold">
                      {w.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/spa" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-bold">
              View Treatments
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Popular Destinations
            </h2>
            <Link href="/experiences" className="text-amber-600 font-semibold">
              Explore More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-slate-200 hover:ring-slate-300 transition-all"
              >
                <div className="relative h-56">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-serif font-semibold">
                      {a.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{a.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Events & Meetings
            </h2>
            <Link href="/events" className="text-amber-600 font-semibold">
              Plan An Event
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-slate-200 hover:ring-slate-300 transition-all"
              >
                <div className="relative h-56">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-serif font-semibold">{e.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{e.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Customer Reviews
            </h2>
            <p className="text-gray-600 mt-4">
              Authentic ratings and comments from recent stays.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6"
              >
                <div className="flex items-center gap-2 text-amber-600 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-600 text-amber-600"
                    />
                  ))}
                </div>
                <p className="text-slate-700">{t.text}</p>
                <div className="mt-4 text-slate-500 text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Awards & Recognition</h2>
            <Link href="/awards" className="text-amber-500 font-semibold">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-amber-500 text-sm">{a.year}</div>
                <div className="text-white mt-2 font-medium">{a.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src={location.mapImage}
                alt="Map"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Contact & Support
              </h2>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin size={20} className="text-amber-600" />
                  <span>{location.address}</span>
                </div>
                <div>{location.phone}</div>
                <div>{location.email}</div>
                <div>24/7 customer support for bookings and inquiries.</div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-sm font-bold">
                  Contact Us
                </Link>
                <Link href="https://maps.google.com" className="border border-slate-300 hover:border-slate-400 text-slate-900 px-6 py-3 text-sm font-bold">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Membership & Privileges</h2>
            <p className="text-gray-600 mt-4">Unlock exclusive benefits and personalized experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membership.map((m) => (
              <div key={m.perk} className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 text-center">
                <span className="text-slate-900 font-medium">{m.perk}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/membership" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-bold">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                How It Works
              </h2>
              <p className="text-gray-600 mt-4">
                A simple, clear booking journey from discovery to confirmation.
              </p>
            </div>
            <div className="space-y-4">
              {howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">{step.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Get the best deals in your inbox
              </h2>
              <p className="text-white/70 mt-4">
                Subscribe to receive member-only offers, flash sales, and travel tips.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full px-4 py-3 text-sm bg-white text-slate-900 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-amber-500 hover:bg-amber-600 text-sm font-semibold text-slate-950 px-6 py-3"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-xs text-white/60 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/15 p-6">
              <h3 className="text-white font-semibold mb-3">Hotel Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl bg-slate-950/70 border border-white/10 p-4"
                  >
                    <div className="text-amber-400 font-semibold text-sm">
                      {c.label}
                    </div>
                    <p className="text-white/75 text-xs mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Book on the go
              </h2>
              <p className="text-slate-600 mt-4">
                Manage your bookings, discover stays, and receive live alerts with our
                mobile app.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 text-left">
                  <div className="text-xs">
                    <div className="uppercase text-[9px] text-white/70">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 text-left">
                  <div className="text-xs">
                    <div className="uppercase text-[9px] text-white/70">
                      Get it on
                    </div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
                alt="Mobile booking"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSectionns;
