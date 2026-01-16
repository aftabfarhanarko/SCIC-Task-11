"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { contactData } from "@/actions/server/getData";

const SetContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  //

  const onSubmit = async (data) => {
    const savedData = {
      email: data.email,
      message: data.message,
      name: data.name,
      phone: data.phone,
      subject: data.subject,
      sendTime: new Date().toISOString(),
    };
    console.log("Contact form submitted:", savedData);
    const result = await contactData(savedData);
    if (result.insertedId) {
      toast.success("Thank you for reaching out. We will contact you soon.");
      reset();
    }
    // console.log(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100  mt-3 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-amber-700 uppercase">
              <MessageSquare className="w-4 h-4" />
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              We are here to help with your next stay
            </h1>
            <p className="text-slate-600 text-sm md:text-base">
              Share your questions about bookings, group stays, special
              requests, or experiences. Our team will respond as soon as
              possible.
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    Call us
                  </p>
                  <p className="text-slate-900 font-medium text-sm md:text-base">
                    +00 123 456 789
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm">
                    24/7 support for urgent booking questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    Email
                  </p>
                  <p className="text-slate-900 font-medium text-sm md:text-base">
                    support@luxestay.com
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    Visit
                  </p>
                  <p className="text-slate-900 font-medium text-sm md:text-base">
                    123 City Center, Luxury District
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Concierge desk available for in-person assistance.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    Hours
                  </p>
                  <p className="text-slate-900 font-medium text-sm md:text-base">
                    Mon–Sun: 08:00 – 22:00
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Outside these hours, you can still send us a message.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              Send us a message
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Fill in the form and our team will follow up with you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-amber-500 w-4 h-4" />
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-amber-500 w-4 h-4" />
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone number
                </label>
                <div className="relative">
                  <Phone className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-amber-500 w-4 h-4" />
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                    placeholder="+00 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                  placeholder="Booking question, group stay, special request..."
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm resize-none"
                  placeholder="Tell us how we can help with your stay."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetContactFrom;
