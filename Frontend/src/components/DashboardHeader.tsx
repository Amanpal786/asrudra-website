import { Bell, Moon } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">

      <input
        placeholder="Search or type command..."
        className="border border-gray-200 rounded-lg px-4 py-2 w-80 text-sm"
      />

      <div className="flex items-center gap-4">

        <Moon size={18} className="text-gray-600 cursor-pointer" />

        <Bell size={18} className="text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            Aman
          </span>
        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;