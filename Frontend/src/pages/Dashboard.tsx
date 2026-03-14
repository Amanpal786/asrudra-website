import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import VisitsChart from "../components/VisitsChart";
import HiringChart from "../components/HiringChart";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../logo.jpg";

import { Users, MapPin, CheckCircle, Briefcase } from "lucide-react";

const Dashboard = () => {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {

    try {

      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/leads"
      );

      setLeads(res.data);

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead:any)=>
  lead.name?.toLowerCase().includes(search.toLowerCase()) ||
  lead.phone?.includes(search) ||
  lead.property?.toLowerCase().includes(search.toLowerCase())
);

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
            placeholder="Search leads..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          <img
            src={logo}
            alt="AS Rudra"
            className="w-10 h-10 rounded-full object-cover shadow"
          />

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
            {leads.length}
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


      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl shadow border border-gray-100">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-lg font-semibold text-gray-800">
            Recent Leads
          </h2>

          <span className="text-sm text-gray-500">
            {leads.length} Leads
          </span>

        </div>

        <LeadsTable leads={filteredLeads.slice(0,5)} fetchLeads={fetchLeads}/>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;