"use client";

export default function SalesRow({ name, revenue, leads, kpi, wl }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border">
      <span className="w-32">{name}</span>
      <span className="w-24 font-medium">{revenue}</span>
      <span className="w-16 text-center">{leads}</span>
      <span className="w-16 text-center">{kpi}</span>
      <span className="w-20 text-center">{wl}</span>
    </div>
  );
}
