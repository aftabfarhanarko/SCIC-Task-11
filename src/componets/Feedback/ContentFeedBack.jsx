"use client";
import React from "react";
import { Star, MapPin, Phone, Mail } from "lucide-react";

const ContentFeedback = () => {
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

          <div>
            <div className="mb-6">
              <h3 className="text-sm tracking-[0.35em] uppercase text-amber-500">
                Hotel Support & Contact
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Stay support
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Need help with a reservation, early check-in, or late
                    checkout? Our team is available 24/7 to support your stay.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white border border-gray-200 p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Phone size={18} />
                      <span className="text-xs uppercase tracking-[0.25em]">
                        Front desk
                      </span>
                    </div>
                    <div className="text-gray-900 font-semibold">
                      +1 (888) 123-4567
                    </div>
                    <p className="text-gray-500 text-xs">
                      24/7 for in-house guests and arrivals.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-gray-200 p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Mail size={18} />
                      <span className="text-xs uppercase tracking-[0.25em]">
                        Reservations
                      </span>
                    </div>
                    <div className="text-gray-900 font-semibold">
                      reservations@luxestay.com
                    </div>
                    <p className="text-gray-500 text-xs">
                      For booking changes and special requests.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-4 flex gap-3">
                  <MapPin size={20} className="text-amber-600 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Guest Relations Desk
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Visit the lobby guest relations desk for on-property
                      assistance, experiences, and restaurant recommendations.
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 text-xs text-gray-500">
                  For urgent support during your stay, please contact the front
                  desk directly by phone from your room handset.
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
