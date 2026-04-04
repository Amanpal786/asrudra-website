import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const LeadsTable = ({ leads, fetchLeads }: any) => {

  const navigate = useNavigate();
  const [showDownload, setShowDownload] = useState(false);

  // PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Leads Report", 14, 10);

    const tableColumn = ["Name", "Phone", "Email", "Message", "Status"];

    const tableRows = leads.map((lead: any) => [
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

  // CSV
  const downloadCSV = () => {
    const headers = ["Name", "Phone", "Email", "Message", "Status"];

    const rows = leads.map((lead: any) => [
      lead.fullName,
      `="${lead.phoneNumber}"`,
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

  const getStatusColor = () => {
    return "bg-blue-100 text-blue-600";
  };

  return (
    <div className="bg-white mt-6 rounded-2xl shadow-lg border w-full overflow-hidden">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 sm:px-6 py-4 border-b">

        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          Recent Leads
        </h2>

        <div className="flex items-center gap-3 relative">

          <span className="text-sm text-gray-500">
            {leads?.length || 0} Leads
          </span>

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
        <table className="min-w-[800px] w-full text-sm text-gray-700">

          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold">Phone</th>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold">Email</th>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold">Message</th>
              <th className="px-4 sm:px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-4 sm:px-6 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads?.map((lead: any) => (
              <tr key={lead._id} className="border-t hover:bg-gray-50 transition">

                <td className="px-4 sm:px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {lead.fullName}
                </td>

                <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                  {lead.phoneNumber}
                </td>

                <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                  {lead.email}
                </td>

                <td className="px-4 sm:px-6 py-3 max-w-[200px] truncate">
                  {lead.message}
                </td>

                <td className="px-4 sm:px-6 py-3">
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusColor()}`}>
                    New
                  </span>
                </td>

                <td className="px-4 sm:px-6 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => navigate(`/dashboard/edit-lead/${lead._id}`)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Edit
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