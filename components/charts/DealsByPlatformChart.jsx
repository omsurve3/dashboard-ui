"use client";

export default function DealsByPlatformList() {
  const items = [
    { name: "Dribbble", value: "$227,459", percent: "43%" },
    { name: "Instagram", value: "$142,823", percent: "27%" },
    { name: "Behance", value: "$89,935", percent: "11%" },
    { name: "Google", value: "$37,028", percent: "7%" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 border">
      <div className="flex items-center justify-between mb-4">
        <button className="text-sm text-gray-600">≡</button>
        <button className="text-xs px-3 py-1 border rounded-full">
          Filters
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
          >
            <span className="text-sm">{item.name}</span>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium">{item.value}</span>
              <span className="text-gray-400">{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
