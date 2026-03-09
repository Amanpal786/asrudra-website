import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import VisitsChart from "../components/VisitsChart";
import HiringChart from "../components/HiringChart";

import { Users, MapPin, CheckCircle, Briefcase } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back, Aman
          </p>
        </div>

        <div className="flex items-center gap-4">

          <input
            placeholder="Search..."
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow">
            A
          </div>

        </div>

      </div>

      {/* Stats Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-gray-500 text-sm">
              Total Leads
            </p>

            <Users size={18} className="text-blue-500" />

          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            245
          </h2>

        </div>


        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-gray-500 text-sm">
              Client Visits
            </p>

            <MapPin size={18} className="text-cyan-500" />

          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            38
          </h2>

        </div>


        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-gray-500 text-sm">
              Closed Deals
            </p>

            <CheckCircle size={18} className="text-green-500" />

          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            12
          </h2>

        </div>


        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-gray-500 text-sm">
              Employees
            </p>

            <Briefcase size={18} className="text-purple-500" />

          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            52
          </h2>

        </div>

      </div>


      {/* Charts */}

        <div className="grid grid-cols-2 gap-6 mb-10">

        <VisitsChart />

        <HiringChart />

        </div>


      {/* Leads Table */}

      <LeadsTable />

    </DashboardLayout>
  );
};

export default Dashboard;