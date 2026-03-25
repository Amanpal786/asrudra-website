import { Bell, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.jpg";

const DashboardHeader = ({ toggleTheme, darkMode }: any) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔥 fetch leads
  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/leads`);

      const total = res.data.length;
      setTotalLeads(total);

      let seen = localStorage.getItem("seenLeadsCount");

      // 👉 first time open
      if (seen === null) {
        localStorage.setItem("seenLeadsCount", total.toString());
        setCount(0);
      } else {
        const seenCount = parseInt(seen);

        if (total > seenCount) {
          setCount(total - seenCount);
        } else {
          setCount(0);
        }
      }

      setLoading(false);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeads();

    // 🔥 polling
    const interval = setInterval(fetchLeads, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  // 🔥 bell click → mark all seen
  const handleBellClick = () => {
    localStorage.setItem("seenLeadsCount", totalLeads.toString());
    setCount(0);
    navigate("/dashboard/leads");
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4 flex justify-between items-center">

      <div className="flex items-center justify-end gap-4 w-full">

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

        {/* 🔥 FIXED BELL */}
        <div className="relative cursor-pointer" onClick={handleBellClick}>
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />

          {!loading && count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {count}
            </span>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-full" />
          <span className="text-sm font-medium text-gray-700 dark:text-white">
            AS Rudra Solutions
          </span>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;