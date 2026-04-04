import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Leads = () => {

  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const leadsPerPage = 10;
  const navigate = useNavigate();

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/enquiries"
      );
      setLeads(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // 🔥 FILTER
  const filteredLeads = leads.filter((lead: any) =>
    lead.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    lead.phoneNumber?.includes(search)
  );

  // 🔥 PAGINATION
  const totalPages = Math.max(1, Math.ceil(filteredLeads.length / leadsPerPage));

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <DashboardLayout>

      {/* 🔥 HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
          Leads Management
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          <input
            type="text"
            placeholder="Search lead..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-64 border px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            onClick={() => navigate("/dashboard/add-lead")}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Lead
          </button>

        </div>

      </div>

      {/* TABLE */}
      <LeadsTable leads={currentLeads} fetchLeads={fetchLeads} />

      {/* PAGINATION */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 px-2">

        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>

        <div className="flex flex-wrap gap-2 justify-center">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {/* NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === num
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Leads;