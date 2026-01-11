import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/MainDashboard";
import './globals.css';
export default function Home() {
  return (
     <div className="flex h-screen bg-gray-50">
      <Sidebar />
       <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
      
    </div>
  );
}
