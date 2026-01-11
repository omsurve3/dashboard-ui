"use client";

import PeopleActionBar from "@/components/Dashcomp/PeopleActionBar";
import RevenueHeader from "./Dashcomp/RevenueHeader";

import DealsByPlatformList from "./charts/DealsByPlatformChart";
import DealsByReferrerChart from "./charts/DealsByRefferrerChart";
import PlatformValueChart from "./charts/PlatformValueChart";

import SalesRow from "./charts/SalesRow";
import SalesProfileCard from "./charts/SalesProfileCard";
import SalesDynamicChart from "./charts/SalesDynamicChart";

export default function MainDashboard() {
  return (
    <div className="min-h-screen bg-[#e7e2de] p-6">
      
      <div className="bg-white rounded-[24px] px-8 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">

        
        <PeopleActionBar />
        <RevenueHeader />

        
        <div className="mt-10 grid grid-cols-[3fr_2fr] gap-6">

          
          <div className="space-y-6">

            
            <div className="grid grid-cols-2 gap-6">
              <DealsByPlatformList />
              <DealsByReferrerChart />
            </div>

            
            <PlatformValueChart />

          </div>

         
          <div className="space-y-6">

           
            <div className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr_1fr] text-xs text-gray-400 px-4">
              <span>Sales</span>
              <span>Revenue</span>
              <span>Leads</span>
              <span>KPI</span>
              <span>W/L</span>
            </div>

            
            <SalesRow
              name="Armin A."
              revenue="$209,633"
              leads="41 / 118"
              kpi="0.84"
              wl="31% 12 / 29"
            />

            <SalesRow
              name="Mikasa A."
              revenue="$156,841"
              leads="54 / 103"
              kpi="0.89"
              wl="39% 21 / 33"
              highlight
            />

           
            <SalesProfileCard />

          
            <SalesDynamicChart />

            <SalesRow
              name="Eren Y."
              revenue="$117,115"
              leads="22 / 84"
              kpi="0.79"
              wl="32% 7 / 15"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
