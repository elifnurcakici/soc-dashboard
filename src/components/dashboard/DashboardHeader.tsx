function DashboardHeader() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#111827] px-6 py-5 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Security Dashboard
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Monitor incidents, blocked IPs and recent activity.
      </p>
    </div>
  );
}

export default DashboardHeader