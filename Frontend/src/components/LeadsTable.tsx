import axios from "axios";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";

const LeadsTable = ({ leads, fetchLeads }) => {

  const downloadPDF = () => {
  const doc = new jsPDF();

  doc.text("Leads Report", 14, 10);

  const tableColumn = ["Name", "Phone", "Email", "Message", "Status"];

  const tableRows = [];

  leads.forEach((lead) => {
    const leadData = [
      lead.fullName,
      lead.phoneNumber,
      lead.email,
      lead.message,
      "New"
    ];
    tableRows.push(leadData);
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });

  doc.save("leads.pdf");
};
  const navigate = useNavigate();

  // ❌ delete अभी leads API use कर रहा था
  // ✅ enquiry delete कर
  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`
    );

    fetchLeads();
  };

  // status default (kyuki enquiry me nahi hai)
  const getStatusColor = (status) => {
    if (status === "New") return "bg-blue-100 text-blue-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white mt-8 rounded-2xl shadow-lg border">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Leads
        </h2>
        <div className="flex items-center gap-3">

          <span className="text-sm text-gray-500">
            {leads?.length || 0} Leads
          </span>

          {/* 🔥 DOWNLOAD BUTTON */}
          

        </div>

        
        <button
              onClick={downloadPDF}
              title="Download PDF"
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl 
              bg-white border border-gray-200 shadow-sm 
              hover:bg-green-50 hover:border-green-300 
              transition-all duration-200"
            >
              <Download size={18} className="text-gray-600 group-hover:text-green-600" />

              {/* 🔥 Tooltip */}
              <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 
              bg-black text-white text-xs px-2 py-1 rounded-md transition">
                Download PDF
              </span>
          </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Phone</th>
              <th className="px-6 py-3 text-left font-semibold">Email</th>
              <th className="px-6 py-3 text-left font-semibold">Message</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads?.map((lead) => (
              <tr
                key={lead._id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* ✅ FIXED FIELDS */}
                <td className="px-6 py-4 font-medium text-gray-900">
                  {lead.fullName}
                </td>

                <td className="px-6 py-4">
                  {lead.phoneNumber}
                </td>

                <td className="px-6 py-4">
                  {lead.email}
                </td>

                <td className="px-6 py-4">
                  {lead.message}
                </td>

                {/* default status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusColor(
                      "New"
                    )}`}
                  >
                    New
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    
                    {/* edit अभी disable रख (kyuki enquiry edit route nahi hai) */}
                    <button
                      className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-1.5 rounded-md text-xs font-semibold"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => deleteLead(lead._id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
                    >
                      🗑 Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;