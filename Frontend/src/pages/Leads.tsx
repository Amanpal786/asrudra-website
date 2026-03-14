import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Leads = () => {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchLeads = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/leads`
      );

      console.log("API DATA:", res.data);   // DEBUG

      setLeads(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) =>
  lead.name?.toLowerCase().includes(search.toLowerCase()) ||
  lead.phone?.includes(search)
);

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-blue-600">
          Leads Management
        </h1>
        <input
        type="text"
        placeholder="Search lead..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

        <button
          onClick={() => navigate("/dashboard/add-lead")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      <LeadsTable leads={filteredLeads} fetchLeads={fetchLeads} />

    </DashboardLayout>

  );

};

export default Leads;