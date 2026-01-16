import RegisterContext from "@/componets/auth/RegisterContext";
import React from "react";

export const metadata = {
  title: "Create an account",
  description:
    "Sign up to save your details, track bookings, and unlock tailored hotel offers.",
};

const Registerpage = () => {
  return (
    <div>
      <RegisterContext />
    </div>
  );
};

export default Registerpage;
