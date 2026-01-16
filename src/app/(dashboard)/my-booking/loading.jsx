import React from "react";

const MyBookingLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-slate-300 border-t-amber-500 animate-spin" />
        <p className="text-xs text-slate-500 tracking-[0.2em] uppercase">
          Loading bookings
        </p>
      </div>
    </div>
  );
};

export default MyBookingLoading;

