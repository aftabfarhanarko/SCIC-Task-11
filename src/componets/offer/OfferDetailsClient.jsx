"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Phone,
  Users,
  User,
  CheckCircle,
  KeyRound,
  Mail,
  X,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { orderData } from "@/actions/server/getData";
import { toast } from "sonner";

export default function OfferDetailsClient({ item }) {
  const [roomType, setRoomType] = useState("Standard room");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const session = useSession();

  const images = useMemo(() => {
    const list = [];
    if (item.image) {
      list.push(item.image);
    }
    if (Array.isArray(item.gallery)) {
      list.push(...item.gallery);
    }
    return list;
  }, [item.image, item.gallery]);

  const nightlyPrice = useMemo(() => {
    if (typeof item.priceFrom !== "number") return 0;
    if (typeof item.discount === "number" && item.discount > 0) {
      return Math.round(
        item.priceFrom - (item.priceFrom * item.discount) / 100
      );
    }
    return item.priceFrom;
  }, [item.priceFrom, item.discount]);

  const nights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diff = end.getTime() - start.getTime();
    if (Number.isNaN(diff) || diff <= 0) return 1;
    return Math.round(diff / (1000 * 60 * 60 * 24));
  }, [checkInDate, checkOutDate]);

  const totalPrice = useMemo(() => {
    if (!nightlyPrice) return 0;
    const roomCount = Number.isFinite(rooms) && rooms > 0 ? rooms : 1;
    return nightlyPrice * nights * roomCount;
  }, [nightlyPrice, nights, rooms]);

  const openBooking = () => {
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const onSubmitBooking = async (data) => {
    // console.log("This is Data Form", data);
    const savedBookData = {
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      customeremail: data.email,
      firstName: data.firstName,
      guests: data.guests,
      phone: data.phone,
      roomType: data.roomType,
      rooms: data.rooms,
      specialRequests: data.specialRequests,
      roomId: item._id,
      roomName: item.title,
      orderTime: new Date().toISOString(),
    };

    const savedata = await orderData(savedBookData);
    if (savedata.insertedId) {
      toast.success("Your Order Has Been Placed Successfully");
      reset();
      setIsBookingOpen(false);
    }
    console.log(savedata);

    console.log("Saved Data From Database", savedBookData);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.section
        className="relative w-full h-52 md:h-84 lg:h-102 overflow-hidden mb-10"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${images[0] || item.image || ""}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-white">
            Archives: {item.category || item.title}
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] md:text-xs">
            <Link
              href="/"
              className="px-4 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm tracking-[0.2em] uppercase"
            >
              Home
            </Link>
            <span className="text-white/60">—</span>
            <span className="px-4 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[11px] font-semibold uppercase tracking-[0.2em]">
              {item.title}
            </span>
          </div>
        </div>
      </motion.section>
      <motion.div
        className="max-w-10/12 mx-auto px-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.header
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase ">
            <span className="h-px w-6 bg-amber-400/60" />
            Premium stay
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold ">
            {item.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-slate-100">{item.location}</span>
            </span>
            {item.address && (
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{item.address}</span>
              </span>
            )}
            {item.category && (
              <span className="inline-flex items-center rounded-full bg-amber-400/10 text-amber-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                {item.category}
              </span>
            )}
            {typeof item.availability === "boolean" && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${
                  item.availability
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-slate-700/40 text-slate-300"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {item.availability
                  ? "Available for your dates"
                  : "Currently unavailable"}
              </span>
            )}
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10">
          <motion.main
            className="space-y-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <section className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-slate-800/95 border border-slate-700 shadow-[0_30px_90px_rgba(15,23,42,0.6)]"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  key={images[activeImageIndex] || item.image}
                  src={images[activeImageIndex] || item.image}
                  alt={item.title}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                {typeof item.discount === "number" && item.discount > 0 && (
                  <motion.div
                    className="absolute top-4 left-4 rounded-full bg-amber-500/95 text-white px-4 py-1 text-xs font-semibold shadow-lg shadow-amber-500/40"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {item.discount}% off this stay
                  </motion.div>
                )}
                {item.availability === false && (
                  <motion.div
                    className="absolute top-4 right-4 rounded-full bg-slate-950/85 text-white px-4 py-1 text-xs font-semibold border border-slate-700"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    Not available
                  </motion.div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/5 to-transparent" />
              </motion.div>
              {images.length > 1 && (
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                >
                  {images.map((src, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      className={`overflow-hidden rounded-2xl border bg-slate-800/90 cursor-pointer transition-all ${
                        index === activeImageIndex
                          ? "border-amber-400 ring-2 ring-amber-400/40 shadow-[0_18px_40px_rgba(245,158,11,0.45)]"
                          : "border-slate-700 hover:border-slate-400/80 hover:shadow-[0_16px_35px_rgba(15,23,42,0.55)]"
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <img
                        src={src}
                        alt={`${item.title} image ${index + 1}`}
                        className="w-full h-24 sm:h-28 md:h-32 object-cover"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </section>

            <motion.section
              className="space-y-4 rounded-3xl bg-slate-800/95 border border-slate-700 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.55)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-slate-50">
                About this stay
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                {item.description}
              </p>
              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-slate-900/80 text-[11px] font-medium text-slate-100 border border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.section>

            <motion.section
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
            >
              <motion.div
                className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.55)]"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Stay schedule
                </p>
                <div className="flex flex-col gap-1 text-sm text-slate-100">
                  <span className="flex items=center gap-2">
                    <CalendarDays className="w-4 h-4 text-amber-400" />
                    <span>Check-in {item.checkIn}</span>
                  </span>
                  <span className="flex items=center gap-2">
                    <CalendarDays className="w-4 h-4 text-amber-400" />
                    <span>Check-out {item.checkOut}</span>
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.55)]"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Location
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-100">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{item.location}</span>
                </div>
                {item.address && (
                  <p className="text-xs text-slate-400">{item.address}</p>
                )}
              </motion.div>
              <motion.div
                className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.55)]"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Host and policy
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-100">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>{item.host}</span>
                </div>
                  {item.contact && (
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Phone className="w-4 h-4 text-amber-400" />
                    <span>{item.contact}</span>
                  </div>
                )}
                {item.cancellationPolicy && (
                  <p className="text-xs text-slate-400">
                    {item.cancellationPolicy}
                  </p>
                )}
              </motion.div>
            </motion.section>

            {Array.isArray(item.amenities) && item.amenities.length > 0 && (
              <motion.section
                className="space-y-4 rounded-3xl bg-slate-800/95 border border-slate-700 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.55)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55 }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-50">
                    Amenities
                  </h2>
                  <span className="text-xs text-slate-400">
                    {item.amenities.length} included
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {item.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-sm text-slate-100 rounded-xl bg-slate-900/60 border border-slate-700/80 px-3 py-2"
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span>{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </motion.main>

          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_28px_90px_rgba(15,23,42,0.85)] border border-slate-800 p-6 space-y-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ delay: 0.25, duration: 0.55 }}
            >
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-2xl md:text-3xl font-semibold text-slate-50">
                    {item.priceCurrency} {nightlyPrice}
                  </div>
                  {typeof item.discount === "number" && item.discount > 0 && (
                    <span className="px-3 py-1 rounded-full bg-amber-400/10 text-xs font-semibold text-amber-400 border border-amber-400/50">
                      {item.discount}% off
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  Per night, excluding local taxes and fees
                </p>
                {typeof item.stock === "number" && item.stock > 0 && (
                  <p className="text-xs font-medium text-rose-300">
                    Only {item.stock} rooms left at this price
                  </p>
                )}
                {item.availability === false && (
                  <p className="text-xs font-medium text-slate-400">
                    Fully booked for the selected dates
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border border-slate-800 rounded-2xl p-3 bg-slate-900/80 shadow-[0_16px_40px_rgba(15,23,42,0.65)]">
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">Check-in date</p>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CalendarDays className="w-4 h-4 text-amber-400" />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-transparent outline-none text-xs placeholder-slate-500"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">Check-out date</p>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CalendarDays className="w-4 h-4 text-amber-400" />
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full bg-transparent outline-none text-xs placeholder-slate-500"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-slate-300">Guests and rooms</span>
                  <span className="inline-flex items-center gap-1 text-slate-100">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>
                      {rooms} room{rooms > 1 ? "s" : ""}, {guests} guest
                      {guests > 1 ? "s" : ""}
                    </span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-100">
                    Room type
                  </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                    >
                    <option>Standard room</option>
                    <option>Deluxe room</option>
                    <option>Suite</option>
                    <option>Penthouse</option>
                    <option>Family room</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-100">
                      Rooms
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={rooms}
                      onChange={(e) =>
                        setRooms(
                          Math.max(1, parseInt(e.target.value || "1", 10))
                        )
                      }
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-100">
                      Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={guests}
                      onChange={(e) =>
                        setGuests(
                          Math.max(1, parseInt(e.target.value || "1", 10))
                        )
                      }
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                className="space-y-3 rounded-2xl bg-slate-900/80 border border-slate-800 p-4 text-xs text-slate-100 shadow-[0_16px_42px_rgba(15,23,42,0.7)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Stay overview
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>
                      {typeof item.stock === "number" && item.stock > 0
                        ? `${item.stock} room${
                            item.stock > 1 ? "s" : ""
                          } available`
                        : "Rooms available for your dates"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>
                      {rooms} room{rooms > 1 ? "s" : ""} for {guests} guest
                      {guests > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>
                      {nights} night{nights > 1 ? "s" : ""} stay selected
                    </span>
                  </div>
                  {item.availability !== false && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span>Instant confirmation after booking</span>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-3 rounded-2xl bg-slate-900/95 border border-slate-800 p-4 text-sm text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {item.priceCurrency} {nightlyPrice} × {nights} night
                    {nights > 1 ? "s" : ""} × {rooms} room
                    {rooms > 1 ? "s" : ""}
                  </span>
                  <motion.span
                    className="font-semibold text-amber-400"
                    key={totalPrice}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.priceCurrency} {totalPrice}
                  </motion.span>
                </div>
                <p className="text-xs text-slate-400">
                  Estimated total. Final amount and local taxes are confirmed on
                  the next step.
                </p>
              </motion.div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={openBooking}
                    className="w-full rounded-lg bg-amber-500 text-slate-950 text-sm font-semibold py-3 shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
                    whileHover={{ y: -1, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book now
                  </button>
                <p className="text-xs text-slate-400">
                  You will confirm guest details and payment information on the
                  next step.
                </p>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </motion.div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog open={isBookingOpen} className="modal modal-bottom z-60">
        <div className="modal-box bg-transparent border-none p-0">
          <motion.div
            className="py-10 pt-30 inset-0 z-40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-3xl mx-4 bg-slate-900/90 backdrop-blur rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <KeyRound className="text-amber-500" />
                  <div>
                    <h2 className="text-2xl font-serif font-bold">
                      Hotel registration
                    </h2>
                    <p className="text-xs text-white/60 mt-1">{item.title}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="text-white/60 hover:text-white rounded-full p-1 border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmitBooking)}
                className="p-8 space-y-6 text-sm text-white"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">First Name</label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="text"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        readOnly
                        defaultValue={session?.data?.user?.name}
                        className={`w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-white/20"
                        } focus:outline-none`}
                        placeholder="Enter your first name"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Number of rooms
                    </label>
                    <input
                      type="number"
                      min={1}
                      {...register("rooms", {
                        required: "Please enter number of rooms",
                        min: {
                          value: 1,
                          message: "At least 1 room is required",
                        },
                      })}
                      className={`w-full pl-3 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                        errors.rooms ? "border-red-500" : "border-white/20"
                      } focus:outline-none`}
                      placeholder="Enter number of rooms"
                    />
                    {errors.rooms && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.rooms.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        readOnly
                        defaultValue={session?.data?.user?.email}
                        className={`w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                          errors.email ? "border-red-500" : "border-white/20"
                        } focus:outline-none`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className={`w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                          errors.phone ? "border-red-500" : "border-white/20"
                        } focus:outline-none`}
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Check-in date
                    </label>
                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="date"
                        {...register("checkIn", {
                          required: "Check-in date is required",
                        })}
                        className={`w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                          errors.checkIn ? "border-red-500" : "border-white/20"
                        } focus:outline-none`}
                      />
                    </div>
                    {errors.checkIn && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.checkIn.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Check-out date
                    </label>
                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="date"
                        {...register("checkOut", {
                          required: "Check-out date is required",
                        })}
                        className={`w-full pl-9 pr-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border ${
                          errors.checkOut ? "border-red-500" : "border-white/20"
                        } focus:outline-none`}
                      />
                    </div>
                    {errors.checkOut && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.checkOut.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Guests and Room Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">
                      Number of guests
                    </label>
                    <div className="relative">
                      <Users
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <select
                        {...register("guests", {
                          required: "Please select number of guests",
                        })}
                        className={`w-full pl-9 pr-3 py-2 rounded-md focus:outline-none border ${
                          errors.guests ? "border-red-500" : "border-slate-700"
                        } bg-slate-900/80 px-3 text-sm text-slate-100`}
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5+ guests</option>
                      </select>
                    </div>
                    {errors.guests && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.guests.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Room type</label>
                    <div className="relative">
                      <select
                        {...register("roomType", {
                          required: "Please select room type",
                        })}
                        className={`w-full pr-3 py-2 rounded-md focus:outline-none border ${
                          errors.roomType
                            ? "border-red-500"
                            : "border-slate-700"
                        } bg-slate-900/80 px-3 text-sm text-slate-100`}
                      >
                        <option value="">Select room type</option>
                        <option value="standard">Standard room</option>
                        <option value="deluxe">Deluxe room</option>
                        <option value="suite">Suite</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="family">Family room</option>
                      </select>
                    </div>
                    {errors.roomType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.roomType.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">
                    Special requests
                  </label>
                  <textarea
                    rows={4}
                    {...register("specialRequests")}
                    className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none resize-none"
                    placeholder="Any special requirements or preferences..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition-all"
                  >
                    Confirm booking
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </dialog>
    </div>
  );
}
