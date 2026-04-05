import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  MapPin,
  FileText,
  MessageSquare
} from "lucide-react";

const role = localStorage.getItem("role");

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", path: "/dashboard/leads", icon: Users },
  { name: "Employees", path: "/dashboard/employees", icon: UserCheck },
  { name: "Hiring", path: "/dashboard/hiring", icon: Briefcase },
  { name: "Client Visits", path: "/dashboard/visits", icon: MapPin },
  { name: "Prospectus", path: "/dashboard/prospectus", icon: FileText },
  { name: "Feedback", path: "/dashboard/feedback", icon: MessageSquare }
];

const DashboardLayout = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("dashboard-theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("dashboard-theme", newMode ? "dark" : "light");
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex h-screen overflow-hidden`}>

      {/* 🔥 MOBILE BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
      >
        ☰
      </button>

      {/* 🔥 OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR */}
      <div
        className={`
        fixed lg:relative top-0 left-0 z-50
        h-screen w-64
        bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-700
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-full flex flex-col p-6">

          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-10">
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
                    setSidebarOpen(false);

                    if (role === "admin") return;

                    if (role === "tl" && !["Leads","Employees","Client Visits"].includes(item.name)) {
                      e.preventDefault();
                      alert("Only Admin can access this tab");
                    }

                    if (role === "associate" && item.name !== "Employees") {
                      e.preventDefault();
                      alert("Access restricted");
                    }
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all
                  ${active 
                    ? "bg-blue-600 text-white shadow" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"}`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="flex flex-col flex-1 h-screen overflow-y-auto">

        <DashboardHeader toggleTheme={toggleTheme} darkMode={darkMode} />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
          {children}
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;