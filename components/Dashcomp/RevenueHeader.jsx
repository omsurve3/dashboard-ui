"use client";

import { ChevronDown, Star } from "lucide-react";

export default function RevenueSection() {
  return (
    <div className="mt-10">

      
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-gray-300 text-2xl font-semibold">
          New report
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-10 h-5 bg-gray-200 rounded-full relative">
              <div className="w-4 h-4 bg-black rounded-full absolute right-0.5 top-0.5" />
            </div>
            Timeframe
          </div>

          <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm">
            Sep 1 – Nov 30, 2023
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      
      <div className="flex items-start justify-between gap-8">

        
        <div className="min-w-[360px]">
          <p className="text-sm text-gray-500 mb-2">Revenue</p>

          <div className="flex items-center gap-3">
            <h2 className="text-[34px] font-semibold tracking-tight">
              $528,976<span className="text-gray-300">.82</span>
            </h2>

            <span className="h-6 px-2 rounded-full bg-red-500 text-white text-xs flex items-center">
              ▲ 7.9%
            </span>

            <span className="h-6 px-2 rounded-full border border-red-500 text-red-500 text-xs flex items-center">
              $27,335.09
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            vs prev. $501,641.73 &nbsp; Jun 1 – Aug 31, 2023
          </p>
        </div>

        
        <div className="flex items-center gap-3 flex-wrap">

          <MiniCard>
            <p className="text-xs text-gray-400">Top sales</p>
            <p className="text-sm font-semibold mt-1">72</p>
            <p className="text-xs text-gray-500 mt-1">Mikasa</p>
          </MiniCard>

          <MiniCard dark>
            <Star size={12} className="absolute top-2 right-2 opacity-60" />
            <p className="text-xs text-gray-400">Best deal</p>
            <p className="text-sm font-semibold mt-1">$4,230</p>
            <p className="text-xs text-gray-300 mt-1">Rolf Inc.</p>
          </MiniCard>

          <MiniCard>
            <p className="text-xs text-gray-400">Deals</p>
            <p className="text-sm font-semibold mt-1">256</p>
            <p className="text-xs text-gray-400 mt-1">5</p>
          </MiniCard>

          <MiniCard highlight>
            <p className="text-xs text-gray-400">Value</p>
            <p className="text-sm font-semibold mt-1">528k</p>
            <p className="text-xs text-red-500 mt-1">▲ 7.9%</p>
          </MiniCard>

          <MiniCard>
            <p className="text-xs text-gray-400">Win rate</p>
            <p className="text-sm font-semibold mt-1">44%</p>
            <p className="text-xs text-gray-400 mt-1">▲ 1.2%</p>
          </MiniCard>

        </div>
      </div>

      
      <div className="mt-6 flex items-center gap-3">
        <ProgressPill value="$209,633" percent="39.63%" />
        <ProgressPill value="$156,841" percent="29.65%" />
        <ProgressPill value="$117,115" percent="22.14%" />
        <ProgressPill value="$45,386" percent="8.58%" />

        <button className="ml-2 h-10 px-5 rounded-full bg-black text-white text-sm">
          Details
        </button>
      </div>
    </div>
  );
}

function MiniCard({ children, dark, highlight }) {
  return (
    <div
      className={`relative w-[140px] h-[88px] rounded-xl px-4 py-3 border ${
        dark
          ? "bg-black text-white border-black"
          : highlight
          ? "border-red-500"
          : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}

function ProgressPill({ value, percent }) {
  return (
    <div className="flex-1 h-10 rounded-full bg-gray-100 px-4 flex items-center justify-between text-sm">
      <span className="font-medium">{value}</span>
      <span className="text-gray-400">{percent}</span>
    </div>
  );
}
