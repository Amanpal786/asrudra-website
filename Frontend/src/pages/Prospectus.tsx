import React from "react";

const prospects = [
  {
    id: 1,
    name: "Ankit Gupta",
    phone: "9876543210",
    interest: "3BHK Apartment",
    status: "Hot Lead"
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "9876543211",
    interest: "Villa",
    status: "Follow Up"
  },
  {
    id: 3,
    name: "Deepak Verma",
    phone: "9876543212",
    interest: "2BHK",
    status: "New"
  }
];

const Prospectus = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Prospectus
      </h1>

      <div className="bg-white rounded-xl shadow p-6 text-gray-700">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b text-black-500">
              <th>Name</th>
              <th>Phone</th>
              <th>Interest</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {prospects.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-3">{p.name}</td>
                <td>{p.phone}</td>
                <td>{p.interest}</td>
                <td>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                    {p.status}
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

export default Prospectus;