"use client"

import { Search, Menu, Globe, Plus } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
       
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder='Try searching "Insights"'
              className="w-full pl-10 pr-4 py-2 bg-white text-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

       
        <div className="flex items-center gap-3 ml-auto">
          
          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
            <Menu size={20} className="text-gray-600" />
          </button>

         
          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
            <Globe size={20} className="text-gray-600" />
          </button>

          
          <button className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
