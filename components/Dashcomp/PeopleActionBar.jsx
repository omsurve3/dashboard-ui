"use client";

import {
  Plus,
  SlidersHorizontal,
  Download,
  Share2,
} from "lucide-react";

export default function PeopleActionBar() {
  return (
    <div className="flex items-center justify-between">

     
      <div className="flex items-center gap-2">

        <CircleButton>
          <Plus size={16} />
        </CircleButton>

        
        <UserPill name="Armin A." />
        <UserPill name="Eren Y." />
        <UserPill name="Mikasa A." />

     
        <div className="flex items-center justify-center h-9 px-3 rounded-full bg-black text-white text-sm font-semibold">
          C
        </div>
      </div>

      <div className="flex items-center gap-2">
        <CircleButton>
          <SlidersHorizontal size={16} />
        </CircleButton>
        <CircleButton>
          <Download size={16} />
        </CircleButton>
        <CircleButton>
          <Share2 size={16} />
        </CircleButton>
      </div>
    </div>
  );
}


function CircleButton({ children }) {
  return (
    <button className="
      h-9 w-9
      rounded-full
      border border-gray-200
      flex items-center justify-center
      text-gray-700
      hover:bg-gray-100
      transition
    ">
      {children}
    </button>
  );
}

function UserPill({ name }) {
  return (
    <div className="
      h-9
      px-3
      flex items-center gap-2
      rounded-full
      border border-gray-200
      bg-white
      text-sm
      text-gray-800
    ">
     
      <div className="h-5 w-5 rounded-full bg-gray-300" />

    
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}
