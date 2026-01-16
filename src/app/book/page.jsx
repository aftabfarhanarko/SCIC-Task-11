import HotelRegistration from "@/componets/auth/HotelRegistration";
import React from "react";

export const metadata = {
  title: "Quick hotel registration",
  description:
    "Share your stay details so we can prepare your room, dates, and preferences.",
};

const Bookpage = () => {
  return (
    <div>
      <HotelRegistration />
    </div>
  );
};

export default Bookpage;
