"use client";

import React, { useEffect, useState } from "react";

const bannerImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?q=80&w=2070&auto=format&fit=crop",
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (bannerImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {bannerImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${src}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Welcome to Paradise
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            LUXE STAY
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 opacity-90">
            Experience the epitome of luxury and comfort in the heart of the
            city.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300">
            Explore Rooms
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
