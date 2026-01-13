"use client";
import React, { useState } from "react";
import { Star, Send } from "lucide-react";

const ContentFeedback = () => {
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const testimonials = [
    {
      name: "Amelia R.",
      text: "Serene spaces and impeccable service.",
      rating: 5,
    },
    { name: "Luca M.", text: "Outstanding dining and warm staff.", rating: 5 },
    {
      name: "Hana K.",
      text: "Refined rooms, effortless experience.",
      rating: 5,
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { ...form, rating });

    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setRating(5);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-white text-gray-900 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-amber-500 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-amber-500 text-amber-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-gray-900 via-amber-700 to-gray-900 bg-clip-text text-transparent">
            Your Voice Matters
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Help us craft unforgettable experiences through your insights
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">1,248</div>
              <div className="text-sm text-gray-500">Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">4.9</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">98%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Reviews */}
          <div>
            <div className="mb-6">
              <h3 className="text-sm tracking-[0.35em] uppercase text-amber-500">
                Guest Feedback
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-serif font-bold text-gray-900">
                  4.9
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-500 text-amber-500"
                      />
                    ))}
                </div>
                <div className="text-gray-600 text-sm">(1,248 reviews)</div>
              </div>

              <div className="mt-6 space-y-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl bg-white border border-gray-200 p-5"
                  >
                    <div className="flex items-center gap-2 text-amber-500 mb-2">
                      {Array(t.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-amber-500 text-amber-500"
                          />
                        ))}
                    </div>
                    <p className="text-gray-800">{t.text}</p>
                    <div className="mt-2 text-gray-500 text-sm">— {t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="mb-6">
              <h3 className="text-sm tracking-[0.35em] uppercase text-amber-500">
                Share Your Experience
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your feedback..."
                  rows={5}
                  className="w-full rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="mt-5">
                <div className="text-gray-700 text-sm mb-2 font-medium">
                  Your Rating
                </div>
                <div className="flex items-center gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => {
                      const value = i + 1;
                      const isActive = value <= (hoveredStar || rating);

                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRating(value)}
                          onMouseEnter={() => setHoveredStar(value)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className={`transition-all transform hover:scale-110 ${
                            isActive
                              ? "text-amber-500"
                              : "text-gray-300 hover:text-gray-400"
                          }`}
                          aria-label={`Rate ${value} star`}
                        >
                          <Star
                            size={28}
                            className={isActive ? "fill-amber-500" : ""}
                          />
                        </button>
                      );
                    })}
                  <span className="ml-3 text-gray-600 text-sm">
                    {rating} out of 5
                  </span>
                </div>
              </div>

              {submitted && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 text-sm flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thank you! Your feedback has been submitted successfully.
                </div>
              )}

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <button
                  onClick={handleSubmit}
                  className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white px-6 py-3 text-sm font-semibold rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  <Send size={18} />
                  Submit Feedback
                </button>
                <div className="text-gray-500 text-sm">
                  We truly value your experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFeedback;
