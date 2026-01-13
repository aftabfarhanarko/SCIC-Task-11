"use client";
import { useState } from "react";
import { User, Mail, Phone, CalendarDays, Users, KeyRound } from "lucide-react";

export default function HotelRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "standard",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted! Check console for details.");
  };

  const handleGoogleLogin = () => {
    alert("Google Sign-In would be integrated here");
  };

  return (
    <div className="min-h-screen relative pt-40 pb-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-slate-900/80 backdrop-blur rounded-2xl ring-1 ring-white/10 shadow-2xl">
          <div className="px-8 py-6 border-b border-white/10">
            <div className="flex items-center gap-3 text-white">
              <KeyRound className="text-amber-500" />
              <h1 className="text-3xl font-serif font-bold">
                Hotel Registration
              </h1>
            </div>
            <p className="text-white/70 mt-2">
              Book your perfect stay with refined comfort.
            </p>
          </div>

          <div className="p-8">
            <div className="text-center text-white/60 text-xs tracking-widest mb-6">
              OR REGISTER MANUALLY
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">First Name</label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Last Name</label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Email Address</label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Phone Number</label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Check-In Date</label>
                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">
                    Check-Out Date
                  </label>
                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none"
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <label className="text-white/80 text-sm">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none resize-none"
                  placeholder="Any special requirements or preferences..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition-all"
              >
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
