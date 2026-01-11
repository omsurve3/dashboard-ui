"use client";

export default function SalesDynamicChart() {
  return (
    <div className="bg-[#fff5f5] rounded-xl p-4">

     
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium">Sales dynamic</p>
        <span className="text-gray-400 text-sm">↗</span>
      </div>

      <div className="relative h-[160px]">

        
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-300">
          <span>w1</span>
          <span>w3</span>
          <span>w5</span>
          <span>w7</span>
          <span>w9</span>
          <span>w11</span>
        </div>

       
        <svg
          viewBox="0 0 600 160"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
         
          <path
            d="M0,80 C80,60 160,90 240,70 320,50 400,90 480,60 560,50 600,40"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="2"
            opacity="0.6"
          />

        
          <path
            d="M0,90 C80,70 160,100 240,80 320,60 400,100 480,70 560,60 600,50"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
          />
        </svg>

      
        <div className="absolute bottom-[26px] left-[32%]">
          <div className="w-5 h-5 rounded-full bg-white border flex items-center justify-center text-[10px]">
            Be
          </div>
        </div>

        <div className="absolute bottom-[26px] left-[50%]">
          <div className="w-5 h-5 rounded-full bg-white border flex items-center justify-center text-[10px]">
            IG
          </div>
        </div>

        <div className="absolute bottom-[26px] left-[78%]">
          <div className="w-5 h-5 rounded-full bg-white border flex items-center justify-center text-[10px]">
            G
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex h-[4px] rounded-full overflow-hidden">
          <div className="w-1/3 bg-green-400" />
          <div className="w-1/3 bg-yellow-400" />
          <div className="w-1/3 bg-red-400" />
        </div>
      </div>
    </div>
  );
}
