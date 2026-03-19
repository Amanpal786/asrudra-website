import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";

const Leads = () => {

  // ✅ STATES (yahin hone chahiye component ke andar)
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const leadsPerPage = 10;

  const navigate = useNavigate();

  // ✅ FETCH DATA
  const fetchLeads = async () => {
    try {
      const res = await axios.get("https://asrudra-backend-1.onrender.com/api/enquiries");
      console.log("API DATA:", res.data);
      setLeads(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ✅ SEARCH FILTER
  const filteredLeads = leads.filter((lead) =>
    lead.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    lead.phoneNumber?.includes(search)
  );

  // ✅ PAGINATION LOGIC
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

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
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // ✅ search pe page reset
          }}
          className="border px-4 py-2 rounded-lg w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={() => navigate("/dashboard/add-lead")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      {/* ✅ TABLE */}
      <LeadsTable leads={currentLeads} setLeads={setLeads} />

      {/* ✅ PAGINATION UI */}
      <div className="flex justify-between items-center mt-6 px-2">

        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages || 1}
        </span>

        <div className="flex gap-2">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border text-sm bg-white hover:bg-gray-100 disabled:opacity-50 text-gray-500"
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded-lg text-sm  ${
                currentPage === num
                  ? "bg-blue-600 text-gray-100 border-blue-600"
                  : "bg-white border text-gray-500 hover:bg-gray-100"
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
            className="px-3 py-1 rounded-lg border text-sm bg-white hover:bg-gray-100 disabled:opacity-50 text-gray-500"
          >
            Next
          </button>

        </div>
      </div>

    </DashboardLayout>
  );
};

export default Leads;