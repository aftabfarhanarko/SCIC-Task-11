import React from "react";
import Link from "next/link";

const Not_found = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-300 mb-3">
          404 · Page not found
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          We could not find that page
        </h1>
        <p className="text-sm md:text-base text-slate-300 mb-6">
          The link might be broken, expired, or the page may have been moved.
          You can go back to the home page or explore current offers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-sm font-semibold shadow-md shadow-amber-500/30 hover:bg-amber-600 transition-colors"
          >
            Go back home
          </Link>
          <Link
            href="/offers"
            className="px-5 py-2.5 rounded-xl border border-slate-600 text-sm font-semibold text-slate-100 hover:bg-slate-900 transition-colors"
          >
            View current offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Not_found;
