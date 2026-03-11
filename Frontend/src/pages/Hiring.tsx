import React from "react";

const candidates = [
  {
    id: 1,
    name: "Vikas Kumar",
    position: "Sales Executive",
    phone: "9876543210",
    status: "Interview Scheduled"
  },
  {
    id: 2,
    name: "Neha Sharma",
    position: "Sales Manager",
    phone: "9876543211",
    status: "Selected"
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "Field Executive",
    phone: "9876543212",
    status: "Pending"
  }
];

const Hiring = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Hiring Management
      </h1>

      <div className="bg-white rounded-xl shadow p-6 text-gray-700">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b text-black-500">
              <th>Name</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {candidates.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="py-3">{c.name}</td>
                <td>{c.position}</td>
                <td>{c.phone}</td>
                <td>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                    {c.status}
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

export default Hiring;