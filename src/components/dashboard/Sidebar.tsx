import {
  LayoutDashboard,
  ShieldAlert,
  Search,
  FileText,
  Settings,
  LogOut,
  Shield,
  CircleUserRound,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  active?: boolean;
};

const primaryItems: MenuItem[] = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Incidents",
    icon: ShieldAlert,
  },
  {
    label: "Search",
    icon: Search,
  },
  {
    label: "Reports",
    icon: FileText,
  },
];

const secondaryItems: MenuItem[] = [
  {
    label: "Settings",
    icon: Settings,
  },
  {
    label: "Logout",
    icon: LogOut,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col justify-between border-r border-white/10 bg-[#07111f] p-4 lg:flex">
      <div>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.12)]">
            <Shield size={20} />
          </div>

          <div>
            <h1 className="text-sm font-semibold text-white">
              SOC Dashboard
            </h1>
            <p className="text-xs text-slate-400">Security Monitoring</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-3 px-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Navigation
            </p>

            <nav className="space-y-1.5">
              {primaryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-green-500 text-slate-950 shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-green-400"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="mb-3 px-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              System
            </p>

            <nav className="space-y-1.5">
              {secondaryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-green-400"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0f1b2d] text-green-400">
            <CircleUserRound size={20} />
          </div>

          <div>
            <p className="text-sm font-medium text-white">SOC Analyst</p>
            <p className="text-xs text-green-400">Monitoring active</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;