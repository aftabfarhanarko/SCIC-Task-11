import AboutPage from "@/componets/room/Roomes";
import React from "react";

export const metadata = {
  title: "About our rooms and spaces",
  description:
    "Explore our room styles, amenities, and the details that make each stay feel elevated.",
};

const Roompage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <AboutPage />
    </div>
  );
};

export default Roompage;
