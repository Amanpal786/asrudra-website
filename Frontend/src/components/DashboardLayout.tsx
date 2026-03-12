import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  MapPin,
  FileText
} from "lucide-react";
const role = localStorage.getItem("role");

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", path: "/dashboard/leads", icon: Users },
  { name: "Employees", path: "/dashboard/employees", icon: UserCheck },
  { name: "Hiring", path: "/dashboard/hiring", icon: Briefcase },
  { name: "Client Visits", path: "/dashboard/visits", icon: MapPin },
  { name: "Prospectus", path: "/dashboard/prospectus", icon: FileText }
];


const DashboardLayout = ({ children }: any) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-6">

        <h2 className="text-xl font-bold text-gray-800 mb-10">
          Asrudra CRM
        </h2>

        <div className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={(e) => {

                  if(role === "admin") return;

                  if(role === "tl" && !["Leads","Employees","Client Visits"].includes(item.name)){
                    e.preventDefault();
                    alert("Only Admin can access this tab");
                  }

                  if(role === "associate" && item.name !== "Employees"){
                    e.preventDefault();
                    alert("Access restricted");
                  }

                }}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all
                ${active ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-blue-50"}`}
                >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        <DashboardHeader />

        <div className="p-10">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;