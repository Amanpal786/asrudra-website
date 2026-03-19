import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const LeadsTable = ({ leads, fetchLeads }) => {

  const navigate = useNavigate();
  const [showDownload, setShowDownload] = useState(false);

  // ✅ PDF DOWNLOAD
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Leads Report", 14, 10);

    const tableColumn = ["Name", "Phone", "Email", "Message", "Status"];

    const tableRows = leads.map((lead) => [
      lead.fullName,
      lead.phoneNumber,
      lead.email,
      lead.message,
      "New",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("leads.pdf");
  };

  // ✅ CSV DOWNLOAD (EXCEL)
  const downloadCSV = () => {
    const headers = ["Name", "Phone", "Email", "Message", "Status"];

    const rows = leads.map((lead) => [
      lead.fullName,
      lead.phoneNumber,
      lead.email,
      lead.message,
      "New",
    ]);

    const csvContent =
      "\uFEFF" +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "leads.csv";
    link.click();
  };

  // ✅ DELETE
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

  const getStatusColor = (status) => {
    if (status === "New") return "bg-blue-100 text-blue-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white mt-8 rounded-2xl shadow-lg border">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Leads
        </h2>

        <div className="flex items-center gap-3 relative">
          <span className="text-sm text-gray-500">
            {leads?.length || 0} Leads
          </span>

          {/* 🔥 DOWNLOAD DROPDOWN */}
          <button
            onClick={() => setShowDownload(!showDownload)}
            className="p-2 bg-green-100 rounded-md hover:bg-green-200"
          >
            ⬇️
          </button>

          {showDownload && (
            <div className="absolute right-0 top-10 w-40 bg-white border rounded shadow-lg z-10">
              <button
                onClick={() => {
                  downloadPDF();
                  setShowDownload(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                📄 Download PDF
              </button>

              <button
                onClick={() => {
                  downloadCSV();
                  setShowDownload(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                📊 Download CSV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TABLE */}
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
                    <button className="bg-yellow-400 text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => deleteLead(lead._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold"
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