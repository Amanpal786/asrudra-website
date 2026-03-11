import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Leads = () => {

  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  const fetchLeads = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/leads`
      );

      setLeads(response.data);

    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-blue-600">
          Leads Management
        </h1>

        <button
          onClick={() => navigate("/dashboard/add-lead")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      <LeadsTable leads={leads} fetchLeads={fetchLeads}/>

    </DashboardLayout>

  );

};

export default Leads;