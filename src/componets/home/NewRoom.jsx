import React from "react";
import Link from "next/link";

const NewRoom = () => {
  const news = [
    {
      date: { day: "3", month: "DEC" },
      title: "Magna pars studiorum",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore...",
      href: "/news/magna-pars",
    },
    {
      date: { day: "3", month: "DEC" },
      title: "Sedial eiusmod tempor",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore...",
      href: "/news/sedial-eiusmod",
    },
    {
      date: { day: "13", month: "NOV" },
      title: "Gallery Post Format Title",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore...",
      href: "/news/gallery-format",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    "https://i.ibb.co.com/fb6pgBh/image.png",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",

    "https://i.ibb.co.com/sdD61jC6/image.png",
    "https://i.ibb.co.com/fYZ6yXxQ/image.png",
    "https://i.ibb.co.com/LhHHCwrk/image.png",
    "https://i.ibb.co.com/Ng6Z9bpk/image.png",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-sm tracking-[0.35em] uppercase text-amber-500">
                News From Us
              </h3>
              <div className="mt-1 h-px w-12 bg-amber-500"></div>
            </div>
            <div className="space-y-8">
              {news.map((item) => (
                <Link key={item.title} href={item.href} className="group block">
                  <div className="flex items-start gap-6 pb-8 border-b border-white/10">
                    <div className="bg-amber-600 text-white w-16 h-16 rounded-md flex flex-col items-center justify-center">
                      <span className="text-xl font-bold">{item.date.day}</span>
                      <span className="text-xs tracking-wide">
                        {item.date.month}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif font-semibold group-hover:text-amber-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/70 mt-2 text-sm">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="underline underline-offset-4">
                    Read All News
                  </span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-sm tracking-[0.35em] uppercase text-amber-500">
                Gallery
              </h3>
              <div className="mt-1 h-px w-12 bg-amber-500"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((src, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 0 ? "col-span-3 md:col-span-2 row-span-2" : ""
                  } overflow-hidden rounded-lg`}
                >
                  <img
                    src={src}
                    alt="Gallery"
                    className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRoom;
