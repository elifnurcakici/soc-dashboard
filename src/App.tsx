import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/dashboard/Sidebar";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import StatsCard from "./components/dashboard/StatsCard";
import EventFormCard from "./components/dashboard/EventFormCard";
import SearchCard from "./components/dashboard/SearchCard";
import EventTableCard from "./components/dashboard/EventTableCard";
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

  const today = new Date().toISOString().split("T")[0];
  const todayCount = events.filter((item) => item.date === today).length;

  return (
    <div className="flex min-h-screen bg-[#2a2f39]">
      <Sidebar />

      <div className="flex-1 p-6 ml-64">
        <div className="mx-auto max-w-7xl space-y-6">
          <DashboardHeader />

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Total Events"
              value={String(events.length)}
              description="All recorded incidents"
            />
            <StatsCard
              title="Added Today"
              value={String(todayCount)}
              description="Created today"
            />
            <StatsCard
              title="Filtered Results"
              value={String(filtered.length)}
              description="Visible in the table"
            />
            <StatsCard
              title="Stored Records"
              value={String(events.length)}
              description="Saved in localStorage"
            />
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <EventFormCard onAdd={handleAdd} />
            </div>

            <div className="lg:col-span-2">
              <SearchCard value={search} onChange={setSearch} />
            </div>
          </section>

          <section>
            <EventTableCard data={filtered} onDelete={handleDelete} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;