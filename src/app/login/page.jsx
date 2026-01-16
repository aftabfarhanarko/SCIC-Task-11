import LoginForm from "@/componets/auth/LoginContext";
import React from "react";

export const metadata = {
  title: "Sign in to your account",
  description:
    "Log in to manage your bookings, save favorite stays, and view trip details.",
};

const Loginpage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Loginpage;
