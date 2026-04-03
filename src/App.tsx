import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/dashboard/Sidebar";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import EventForm from "./components/dashboard/EventForm";
import EventTable from "./components/dashboard/EventTable";
import SearchBar from "./components/dashboard/SearchBar";
import Event from "./types/Event";
import type { EventFormData } from "./lib/validators/EventSchema";

const STORAGE_KEY = "soc-dashboard-incidents"; 
function App() {
  const [events, setEvents] = useState<Event[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY); 
      return saved ? JSON.parse(saved) : []; 
    } catch (error) {
      console.error("localStorage okunamadı:", error);
      return []; 
    }
  });

  const [search, setSearch] = useState(""); 

  useEffect(() => { 
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error("localStorage yazılamadı:", error);
    }
  }, [events]);

  const handleAdd = (data: EventFormData) => { 
    const normalizedIp = data.ip.trim().toLowerCase(); 

    const alreadyExists = events.some( 
      (item) => item.ip.trim().toLowerCase() === normalizedIp
    );

    if (alreadyExists) {
      return false;
    }

    const newItem: Event = {
      id: crypto.randomUUID(),
      ip: data.ip.trim(),
      date: data.date,
    };

    setEvents((prev) => [newItem, ...prev]); 
    return true;
  };

  const handleDelete = (id: string) => {
    setEvents((prev) => prev.filter((item) => item.id !== id));  
  };

  const filtered = useMemo(() => { 
    return events.filter((item) =>
      item.ip.toLowerCase().includes(search.toLowerCase()) 
    );
  }, [events, search]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="min-h-screen flex-1 space-y-4 bg-slate-100 p-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <EventForm onAdd={handleAdd} />
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <EventTable data={filtered} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default App