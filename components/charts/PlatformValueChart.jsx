"use client";

export default function PlatformValueChart() {
  const data = [
    {
      month: "Sep",
      bars: [6901, 5200, 4300],
      label: "$6,901",
    },
    {
      month: "Oct",
      bars: [7200, 11035, 6800],
      label: "$11,035",
      highlight: true,
    },
    {
      month: "Nov",
      bars: [6100, 9288, 7500],
      label: "$9,288",
    },
  ];

  return (
    <div className="bg-[#f3f3f1] rounded-xl border p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-pink-500">◯</span>
          Platform value
          <span className="text-gray-400">Dribbble ▼</span>
        </div>

        <div className="flex gap-1">
          <button className="px-3 py-1 text-xs rounded-full bg-black text-white">
            Revenue
          </button>
          <button className="px-3 py-1 text-xs rounded-full bg-white border">
            Leads
          </button>
          <button className="px-3 py-1 text-xs rounded-full bg-white border">
            W/L
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative w-[150px] bg-[#e11d48] text-white rounded-xl px-5 py-6">
          <span className="absolute left-[-34px] top-1/2 -translate-y-1/2 -rotate-90 text-xs opacity-70">
            Average monthly
          </span>

          <p className="text-xs opacity-80">Revenue</p>
          <p className="text-xl font-semibold">$18,552</p>

          <div className="mt-5">
            <p className="text-xs opacity-80">Leads</p>
            <p className="text-sm">373 / 276</p>
          </div>

          <div className="mt-4">
            <p className="text-xs opacity-80">Win / lose</p>
            <p className="text-sm">16% 51 / 318</p>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
            <span>$14,500</span>
            <span>$11,000</span>
            <span>$7,500</span>
            <span>$4,000</span>
          </div>

          <div className="flex items-end gap-8 h-[160px] pr-12">
            {data.map((m) => (
              <div key={m.month} className="flex flex-col items-center">
                <span className="mb-2 text-xs px-2 py-1 rounded-md bg-pink-500 text-white">
                  {m.label}
                </span>

                <div className="flex items-end gap-2">
                  {m.bars.map((v, i) => (
                    <div
                      key={i}
                      className={`w-5 rounded-md ${
                        m.highlight && i === 1
                          ? "bg-[repeating-linear-gradient(45deg,#d1d5db_0,#d1d5db_6px,#e5e7eb_6px,#e5e7eb_12px)]"
                          : "bg-gray-300"
                      }`}
                      style={{ height: v / 85 }}
                    />
                  ))}
                </div>

                <div className="flex -space-x-1 mt-2">
                  <div className="w-4 h-4 rounded-full bg-gray-700 border border-[#f3f3f1]" />
                  <div className="w-4 h-4 rounded-full bg-gray-500 border border-[#f3f3f1]" />
                  <div className="w-4 h-4 rounded-full bg-gray-400 border border-[#f3f3f1]" />
                </div>

                <span className="text-xs text-gray-400 mt-1">{m.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
