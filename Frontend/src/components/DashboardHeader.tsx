import { Bell, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.jpg";

const DashboardHeader = ({ toggleTheme, darkMode }: any) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/enquiries`);
      const total = res.data.length;
      setTotalLeads(total);

      const seen = parseInt(localStorage.getItem("seenLeadsCount") || "0");
      const newCount = Math.max(0, total - seen);

      setCount(newCount);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeads();
    const interval = setInterval(fetchLeads, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleBellClick = () => {
    localStorage.setItem("seenLeadsCount", totalLeads.toString());
    setCount(0);
    navigate("/dashboard/leads");
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-4">

      <div className="flex items-center justify-between">

        {/* LEFT (optional title ya empty) */}
        <div className="text-sm font-semibold text-gray-700 dark:text-white">
          Dashboard
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Logout */}
          <button onClick={handleLogout}>
            <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Bell */}
          <div className="relative cursor-pointer" onClick={handleBellClick}>
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />

            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {count}
              </span>
            )}
          </div>

          {/* Profile */}
          <div className="hidden sm:flex items-center gap-2">
            <img src={logo} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-white">
              AS Rudra Solutions
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;