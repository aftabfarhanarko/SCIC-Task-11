"use client";
import { LogIn, LogOut, Mail, User, UserPlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthButtons = () => {
  const session = useSession();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(session.data?.user);

  return (
    <div className="flex gap-2 items-center">
      {session.status === "authenticated" ? (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={session.data.user.image || "https://github.com/shadcn.png"}
              alt={session.data.user.name || "User"}
              className="w-12 h-12 rounded-full border-2 border-amber-400/50 hover:border-amber-400 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </button>

          {/* Backdrop */}
          {isDropdownOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsDropdownOpen(false)}
            />
          )}

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-72 bg-[#0f1629] border border-amber-400/20 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
              isDropdownOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {/* User Info Section */}
            <div className="px-5 py-6 bg-gradient-to-br from-amber-400/15 via-amber-500/10 to-transparent border-b border-amber-400/20">
              <div className="flex flex-col items-center text-center">
                <img
                  src={
                    session.data.user.image || "https://github.com/shadcn.png"
                  }
                  alt={session.data.user.name || "User"}
                  className="w-20 h-20 rounded-full border-2 border-amber-400 shadow-lg mb-3"
                />
                <h3 className="text-white font-semibold text-base mb-1">
                  {session.data.user.name || "User"}
                </h3>
                <p className="text-white/60 text-sm truncate w-full px-2">
                  {session.data.user.email}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                signOut();
              }}
              className="w-full px-5 py-4 text-left text-white/90 hover:bg-amber-400/10 transition-all duration-200 flex items-center gap-3 text-sm group"
            >
              <LogOut
                size={18}
                className="text-amber-400 group-hover:translate-x-1 transition-transform duration-200"
              />
              <span className="uppercase tracking-wider font-medium group-hover:text-amber-400 transition-colors duration-200">
                Sign Out
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/login")}
            className="text-white hover:text-amber-400 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center gap-2 border border-white/20 hover:border-amber-400/50 rounded-lg group"
          >
            <LogIn
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
            <span>Sign In</span>
          </button>
          <button
            onClick={() => router.push("/register")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 flex items-center gap-2 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 group"
          >
            <UserPlus
              size={16}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            <span>Sign Up</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
{
  /* <button
  onClick={() => router.push("/book")}
  className="relative bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 overflow-hidden group"
>
  <span className="relative z-10">Reserve Now</span>
  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button> */
}
