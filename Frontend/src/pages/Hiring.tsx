import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const API_URL = "https://asrudra-backend-1.onrender.com";

const Hiring = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /* =========================
     FETCH HIRING DATA
  ========================= */

  const fetchHiring = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/hiring`
      );

      setData(res.data || []);
    } catch (err) {
      console.error(
        "Failed to fetch hiring data:",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHiring();
  }, []);

  /* =========================
     SEARCH
  ========================= */

  const filteredHiring = data.filter(
    (item: any) =>
      item.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.position
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.phone?.includes(search) ||
      item.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  /* =========================
     DELETE
  ========================= */

  const deleteHiring = async (id: string) => {
    if (!confirm("Delete candidate?")) {
      return;
    }

    try {
      await axios.delete(
        `${API_URL}/api/hiring/${id}`
      );

      alert("Candidate deleted successfully.");

      fetchHiring();
    } catch (err) {
      console.error(
        "Delete hiring error:",
        err
      );

      alert(
        "Failed to delete candidate. Please try again."
      );
    }
  };

  /* =========================
     RESUME URL
  ========================= */

  const getResumeUrl = (item: any) => {
    if (!item?.resume?.filePath) {
      return null;
    }

    return `${API_URL}${item.resume.filePath}`;
  };

  return (
    <DashboardLayout>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
            Hiring Management
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <TableSearch
              value={search}
              onChange={setSearch}
              placeholder="Search candidate..."
            />

            <button
              onClick={() =>
                navigate("/dashboard/add-hiring")
              }
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              + Add Candidate
            </button>

          </div>

        </div>

        {/* =========================
            TABLE
        ========================= */}

        <div className="bg-white rounded-xl shadow text-gray-900 overflow-x-auto">

          <table className="min-w-[1000px] w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Position
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Resume
                </th>

                <th className="p-4 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {/* =========================
                  LOADING
              ========================= */}

              {loading && (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8 text-center text-gray-500"
                  >
                    Loading candidates...
                  </td>
                </tr>
              )}

              {/* =========================
                  DATA
              ========================= */}

              {!loading &&
                filteredHiring.map(
                  (item: any) => {

                    const resumeUrl =
                      getResumeUrl(item);

                    return (
                      <tr
                        key={item._id}
                        className="border-t text-sm hover:bg-gray-50"
                      >

                        {/* NAME */}

                        <td className="p-4 whitespace-nowrap font-medium">
                          {item.name || "-"}
                        </td>

                        {/* POSITION */}

                        <td className="p-4">
                          {item.position || "-"}
                        </td>

                        {/* PHONE */}

                        <td className="p-4 whitespace-nowrap">
                          {item.phone || "-"}
                        </td>

                        {/* EMAIL */}

                        <td className="p-4">
                          {item.email || "-"}
                        </td>

                        {/* STATUS */}

                        <td className="p-4">

                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                            {item.status || "Pending"}
                          </span>

                        </td>

                        {/* RESUME */}

                        <td className="p-4">

                          {resumeUrl ? (

                            <div className="flex gap-2">

                              <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition"
                              >
                                View
                              </a>

                              <a
                                href={resumeUrl}
                                download={
                                  item.resume
                                    ?.originalName ||
                                  "Resume"
                                }
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition"
                              >
                                Download
                              </a>

                            </div>

                          ) : (

                            <span className="text-gray-400 text-xs">
                              No Resume
                            </span>

                          )}

                        </td>

                        {/* ACTION */}

                        <td className="p-4">

                          <div className="flex gap-2">

                            <button
                              onClick={() =>
                                navigate(
                                  `/dashboard/edit-hiring/${item._id}`
                                )
                              }
                              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-xs transition"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() =>
                                deleteHiring(
                                  item._id
                                )
                              }
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition"
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>
                    );
                  }
                )}

              {/* =========================
                  NO DATA
              ========================= */}

              {!loading &&
                filteredHiring.length === 0 && (
                  <tr>

                    <td
                      colSpan={7}
                      className="p-8 text-center text-gray-500"
                    >
                      No candidates found.
                    </td>

                  </tr>
                )}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Hiring;