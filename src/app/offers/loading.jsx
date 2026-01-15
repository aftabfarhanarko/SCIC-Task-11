import React from "react";

const SkeletonCard = () => {
  return (
    <div className="max-w-sm rounded-3xl bg-slate-950/95 border border-slate-800 shadow-[0_22px_70px_rgba(15,23,42,0.7)] overflow-hidden animate-pulse">
      <div className="h-64 w-full bg-slate-800" />
      <div className="p-5 space-y-4">
        <div className="h-4 w-3/4 bg-slate-800 rounded-md" />
        <div className="h-3 w-1/2 bg-slate-800 rounded-md" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-800 rounded-md" />
          <div className="h-3 w-5/6 bg-slate-800 rounded-md" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-slate-800 rounded-full" />
          <div className="h-6 w-12 bg-slate-800 rounded-full" />
          <div className="h-6 w-20 bg-slate-800 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-slate-800 rounded-md" />
            <div className="h-3 w-32 bg-slate-800 rounded-md" />
          </div>
          <div className="h-9 w-24 bg-slate-800 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

const Cardloading = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative text-white overflow-hidden bg-slate-950">
        <div className="h-[320px] md:h-[400px] w-full">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="relative container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="h-10 w-56 bg-white/30 rounded-full animate-pulse" />
              <div className="space-y-4">
                <div className="h-10 w-64 bg-white/40 rounded-md animate-pulse" />
                <div className="h-10 w-80 bg-white/30 rounded-md animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="h-16 w-32 bg-white/15 rounded-2xl animate-pulse" />
                <div className="h-16 w-32 bg-white/15 rounded-2xl animate-pulse" />
                <div className="h-16 w-32 bg-white/15 rounded-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="h-12 w-full max-w-md bg-gray-200 rounded-xl animate-pulse" />
            <div className="flex gap-3 w-full md:w-auto">
              <div className="h-12 flex-1 md:w-40 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-12 flex-1 md:w-36 bg-gray-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="h-8 w-56 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="h-6 w-44 bg-gray-200 rounded-md animate-pulse" />
      </div>

      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 px-4 pb-16">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cardloading;
