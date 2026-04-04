import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const Employees = () => {

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/employees"
      );
      setEmployees(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((emp: any) =>
    emp.name?.toLowerCase().includes(search.toLowerCase()) ||
    emp.phone?.includes(search) ||
    emp.email?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteEmployee = async (id: any) => {
    if (!confirm("Delete this employee?")) return;

    try {
      await axios.delete(
        `https://asrudra-backend-1.onrender.com/api/employees/${id}`
      );
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
            Employees Management
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <TableSearch
              value={search}
              onChange={setSearch}
              placeholder="Search employee..."
            />

            <button
              onClick={() => navigate("/dashboard/add-employee")}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Employee
            </button>

          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow text-gray-900 overflow-x-auto">

          <table className="min-w-[800px] w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp: any) => (
                <tr key={emp._id} className="border-t">

                  <td className="p-4 whitespace-nowrap">{emp.name}</td>
                  <td className="p-4">{emp.role}</td>
                  <td className="p-4 whitespace-nowrap">{emp.phone}</td>
                  <td className="p-4">{emp.email}</td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {emp.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={() => navigate(`/dashboard/edit-employee/${emp._id}`)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteEmployee(emp._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Employees;