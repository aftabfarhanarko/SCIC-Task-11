import React from "react";
import Link from "next/link";

const Content = () => {
  const items = [
    {
      title: "Ocean View Suite",
      subtitle: "Private balcony • King bed • 75m²",
      image: "https://i.ibb.co.com/rKgBRhMj/image.png",
      href: "/rooms",
    },
    {
      title: "Signature Dining",
      subtitle: "Chef’s table • Seasonal menu",
      image: "https://i.ibb.co.com/9m90KvvF/image.png",
      href: "/dining",
    },
    {
      title: "Spa & Wellness",
      subtitle: "Thermal circuit • Holistic treatments",
      image: "https://i.ibb.co.com/ZphTF148/image.png",
      href: "/experiences",
    },
    {
      title: "Infinity Pool",
      subtitle: "Sunset lounge • Mixology bar",
      image: "https://i.ibb.co.com/xqS2fjHL/image.png",
      href: "/experiences",
    },
    {
      title: "Exclusive Offers",
      subtitle: "Members-only rates • Complimentary perks",
      image: "https://i.ibb.co.com/b0GQRH5/image.png",
      href: "/offers",
    },
  ];
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-600 tracking-[0.35em] uppercase text-xs mb-3">Discover</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Refined Comfort & Timeless Luxury</h2>
          <p className="text-gray-600 leading-relaxed mt-6">
            Curated spaces and experiences crafted for serenity. Elevate your stay with signature suites,
            culinary artistry, and wellness rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-slate-200 hover:ring-slate-300 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-serif font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <span className="text-slate-900 font-medium">Explore</span>
                <span className="text-amber-600 font-semibold">From $299</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Link
            href="/book"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
