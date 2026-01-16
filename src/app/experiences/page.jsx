import ExperiencesNow from "@/componets/experiences/Experiencespage";
import React from "react";

export const metadata = {
  title: "Experiences during your stay",
  description:
    "Discover spa journeys, rooftop evenings, curated city tours, and wellness experiences.",
};

const Experiencespage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <ExperiencesNow />
    </div>
  );
};

export default Experiencespage;
