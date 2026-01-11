"use client";

export default function SalesProfileCard() {
  return (
    <div className="bg-[#fff5f7] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-medium">Mikasa A.</p>
        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
          $156,841
        </span>
      </div>

      <div className="flex gap-2 mb-4">
        <span className="text-xs bg-white rounded-full px-2 py-1">
          Top sales 💪
        </span>
        <span className="text-xs bg-white rounded-full px-2 py-1">
          Sales streak 🔥
        </span>
        <span className="text-xs bg-white rounded-full px-2 py-1">
          Top review 👍
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Dribbble</span>
          <span>$44,072</span>
        </div>
        <div className="flex justify-between">
          <span>Instagram</span>
          <span>$22,114</span>
        </div>
        <div className="flex justify-between">
          <span>Google</span>
          <span>$8,469</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Other</span>
          <span>$11,135</span>
        </div>
      </div>
    </div>
  );
}
