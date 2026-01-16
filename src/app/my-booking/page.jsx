import { mybookingData } from "@/actions/server/getData";
import BookigData from "@/componets/my-booking/BookigData";
import React from "react";

export const metadata = {
  title: "My bookings",
  description:
    "Review your upcoming and past hotel bookings, download details, and manage stays.",
};

const My_bookingpage = async () => {
  const data = await mybookingData();

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-30 pb-12">
      <BookigData data={data} />
    </div>
  );
};

export default My_bookingpage;
