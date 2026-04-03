import {LayoutDashboard, ShieldAlert} from "lucide-react";

function Sidebar(){
    return(
        <div className="w-64 h-screen bg-slate-900 text-white p-4"> 
        <div className="flex items-center gap-2 mb-6">
            <ShieldAlert /> 
            <h2 className="font-bold">SOC Panel</h2>       
        </div>

        <ul className="space-y-3"> 
            <li className="flex items-center gap-2">
                <LayoutDashboard size={16}/> 
                Dashboard
            </li>
            <li>Alerts</li>
            <li>Reports</li>
            <li>Settings</li>
        </ul>
        </div>
    );
}

export default Sidebar