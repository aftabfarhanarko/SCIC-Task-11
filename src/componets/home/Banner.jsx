import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative  min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

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
