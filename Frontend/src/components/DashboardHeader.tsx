import { Bell, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.jpg";

const DashboardHeader = ({ toggleTheme, darkMode }: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4 flex justify-between items-center">

      <div className="flex items-center justify-end gap-4 w-full">

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          title="Logout"
        >
          <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* 🔥 DARK MODE BUTTON */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          title="Toggle Theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Notification */}
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover border"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-white">
            AS Rudra Solutions
          </span>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;