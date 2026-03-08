import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserCheck,
  MapPin,
  FileText
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", path: "/dashboard/leads", icon: Users },
  { name: "Employees", path: "/dashboard/employees", icon: UserCheck },
  { name: "Hiring", path: "/dashboard/hiring", icon: Briefcase },
  { name: "Client Visits", path: "/dashboard/visits", icon: MapPin },
  { name: "Prospectus", path: "/dashboard/prospectus", icon: FileText },
];

const DashboardLayout = ({ children }: any) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">

        <h2 className="text-xl font-bold text-blue-600 mb-10">
          Asrudra CRM
        </h2>

        <div className="flex flex-col gap-2">

          {menu.map((item, index) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition
                ${
                  active
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;