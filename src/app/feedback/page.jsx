import { getHotelData } from "@/actions/server/getData";
import ContentFeedback from "@/componets/Feedback/ContentFeedBack";
import React from "react";

export const metadata = {
  title: "Guest experience and feedback",
  description:
    "See why guests choose our stays, explore core features, and understand our service promise.",
};

const Feedbackpage = async () => {
  await getHotelData();

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <ContentFeedback />
    </div>
  );
};

export default Feedbackpage;
