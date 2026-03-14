import { Bell, Moon } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.jpg";


const DashboardHeader = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("role");
  navigate("/");
  };
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">

      {/* <input
        placeholder="Search or type command..."
        className="border border-gray-200 rounded-lg px-4 py-2 w-80 text-sm"
      /> */}

      <div className="flex items-center justify-end gap-4 w-full">
        <button
        onClick={handleLogout}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Logout"
        >
        <LogOut className="w-5 h-5 text-gray-600" />
        </button>

        <Moon size={18} className="text-gray-600 cursor-pointer" />

        <Bell size={18} className="text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-2">
          <img
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full object-cover border"
          />
          <span className="text-sm font-medium text-gray-700">
            AS Rudra Solutions
          </span>
        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;