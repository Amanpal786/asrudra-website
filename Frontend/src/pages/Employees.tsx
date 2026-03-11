import React from "react";

const employees = [
  {
    id: 1,
    name: "Aman Pal",
    role: "Manager",
    phone: "9876543201",
    email: "aman@asrudra.com",
    status: "Active"
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Sales Associate",
    phone: "9876543202",
    email: "rohit@asrudra.com",
    status: "Active"
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Team Leader",
    phone: "9876543203",
    email: "amit@asrudra.com",
    status: "On Leave"
  }
];

const Employees = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Employees Management
      </h1>

      <div className="bg-white rounded-xl shadow p-6 text-gray-700">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b text-black-500">
              <th>Name</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="py-3">{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.phone}</td>
                <td>{emp.email}</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm text-black-500">
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Employees;