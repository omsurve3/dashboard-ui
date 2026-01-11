"use client";

import { useState } from "react";
import {
  Star,
  Clock,
  Briefcase,
  ShoppingBag,
  BarChart3,
  FileText,
  HelpCircle,
  Settings,
  ChevronDown,
  Plus,
  Home,
  Grid,
  MessageCircle,
} from "lucide-react";

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState({
    dashboard: true,
    reports: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
     
      <aside className="w-20 bg-gray-100 flex flex-col items-center py-4 gap-6 border-r border-gray-200">
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <Settings size={20} />
        </button>

        <button className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <Plus size={24} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <Briefcase size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <Grid size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <Home size={20} />
        </button>

        <div className="flex-1" />

        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <MessageCircle size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-200">
          <Settings size={20} />
        </button>
      </aside>

      
      <aside className="w-64 bg-gray-50 text-gray-800 overflow-y-auto flex flex-col">
       
        <div className="p-6 border-b border-gray-200">
          <button className="flex items-center gap-2 w-full">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-semibold text-sm flex-1 text-left">
              Codename.com
            </span>
            <ChevronDown size={14} className="text-gray-500" />
          </button>
        </div>

        
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Try searching 'Insights'"
            className="w-full px-3 py-2 bg-white border border-gray-300 text-xs rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        
        <nav className="flex-1 py-2 border-b border-gray-200">
          <MenuItem icon={<Star size={16} />} label="Starred" />
          <MenuItem icon={<Clock size={16} />} label="Recent" />
          <MenuItem icon={<Briefcase size={16} />} label="Sales list" />
          <MenuItem icon={<ShoppingBag size={16} />} label="Goods" />

          
          <button
            onClick={() => toggleSection("dashboard")}
            className="w-full px-6 py-2.5 flex items-center justify-between text-sm hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={16} />
              <span>Dashboard</span>
            </div>
            <Plus size={14} />
          </button>

          {expandedSections.dashboard && (
            <SubMenu
              items={[
                "Codename",
                "Shared with me",
                "Cargozip",
                "Idioma",
                "Syllables",
                "x-Ob",
              ]}
              badgeItem="Cloudz3r"
              badgeValue={2}
            />
          )}

       
          <button
            onClick={() => toggleSection("reports")}
            className="w-full px-6 py-2.5 flex items-center justify-between text-sm hover:bg-gray-100 mt-2"
          >
            <div className="flex items-center gap-3">
              <FileText size={16} />
              <span>Reports</span>
            </div>
            <Plus size={14} />
          </button>

          {expandedSections.reports && (
            <SubMenu
              items={[
                "Share with me",
                "Deals by user",
                "Deal duration",
                "My reports",
                "Emails received",
                "New report",
              ]}
              badgeItem="Analytics"
              badgeValue={2}
            />
          )}
        </nav>

       
        <div className="px-6 py-4 space-y-3">
          <HelpCircle size={18} className="text-gray-500" />
          <Settings size={18} className="text-gray-500" />
        </div>
      </aside>
    </div>
  );
}


function MenuItem({ icon, label }) {
  return (
    <button className="w-full px-6 py-2.5 flex items-center gap-3 text-sm hover:bg-gray-100">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SubMenu({ items, badgeItem, badgeValue }) {
  return (
    <div className="pl-6 py-1 space-y-1">
      {items.map((label) => (
        <button
          key={label}
          className="w-full px-6 py-1.5 text-sm text-gray-600 hover:bg-gray-100 text-left"
        >
          {label}
        </button>
      ))}

      {badgeItem && (
        <button className="w-full px-6 py-1.5 flex justify-between text-sm text-gray-600 hover:bg-gray-100">
          <span>{badgeItem}</span>
          <span className="bg-pink-500 text-white text-xs px-2 rounded-full">
            {badgeValue}
          </span>
        </button>
      )}
    </div>
  );
}
