"use client";

export default function DealsByReferrerChart() {
  return (
    <div className="bg-white rounded-xl p-4 border">
      <div className="flex items-center justify-between mb-4">
        <button className="text-sm text-gray-600">▮▮▮</button>
        <button className="text-xs px-3 py-1 border rounded-full">
          Filters
        </button>
      </div>

      <div className="h-[160px] flex items-end justify-around gap-4">
        {[60, 90, 45, 110].map((h, i) => (
          <div
            key={i}
            className="w-10 bg-gray-100 rounded-lg flex items-end justify-center"
            style={{ height: `${h}px` }}
          >
            <div className="w-6 h-6 bg-white rounded-md mb-2" />
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Deals amount by referrer category
      </p>
    </div>
  );
}
