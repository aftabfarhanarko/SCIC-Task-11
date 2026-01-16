import SetContactFrom from "@/componets/contact/SetContactFrom";
import React from "react";
import { Phone, Mail, MapPin, Headset, Star, Clock } from "lucide-react";

const Contactpage = () => {
  return (
    <>
      <section className="pt-48 pb-12 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-amber-300 uppercase">
                <Headset className="w-4 h-4" />
                Contact Center
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">
                Talk to our guest experience team
              </h1>
              <p className="text-slate-300 text-sm md:text-base max-w-xl">
                Whether it&apos;s a new booking, a change in your plans, or a
                special occasion, our team is here to make every stay feel
                effortless.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs md:text-sm">
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>24/7 guest support</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs md:text-sm">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Avg. response time &lt; 1 hour</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs md:text-sm">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span>4.9 / 5 guest satisfaction</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
                  <Phone className="w-4 h-4 text-emerald-300" />
                  Hotline
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  +00 123 456 789
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Priority support for upcoming check-ins.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
                  <Mail className="w-4 h-4 text-amber-300" />
                  Email
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  support@luxestay.com
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  For itinerary changes, billing, and group inquiries.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
                  <MapPin className="w-4 h-4 text-sky-300" />
                  Concierge desk
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  123 City Center, Luxury District — visit us for in-person
                  assistance, recommendations, and last-minute upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SetContactFrom />
    </>
  );
};

export default Contactpage;
