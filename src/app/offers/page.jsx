import { getHotelData } from "@/actions/server/getData";
import NewOffer from "@/componets/offer/NewOffer";
import React from "react";

export const metadata = {
  title: "Hotel offers and deals",
  description:
    "Browse limited-time hotel offers, discounts, and curated stays to match your next trip.",
};

const Offerspage = async () => {
  const data = await getHotelData();
  console.log("This is Da", data);
  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-32 pb-16">
      <NewOffer data={data} />
    </div>
  );
};

export default Offerspage;
