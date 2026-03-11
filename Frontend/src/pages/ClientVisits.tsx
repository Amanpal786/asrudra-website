import React from "react";

const visits = [
  {
    id: 1,
    client: "Rahul Sharma",
    property: "3BHK Noida",
    date: "12 Mar 2026",
    status: "Visited"
  },
  {
    id: 2,
    client: "Amit Singh",
    property: "Villa Greater Noida",
    date: "13 Mar 2026",
    status: "Scheduled"
  },
  {
    id: 3,
    client: "Rohit Verma",
    property: "2BHK Noida",
    date: "14 Mar 2026",
    status: "Pending"
  }
];

const ClientVisits = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Client Visits
      </h1>

      <div className="bg-white rounded-xl shadow p-6 text-gray-700">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b text-black-500">
              <th>Client</th>
              <th>Property</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {visits.map((v) => (
              <tr key={v.id} className="border-b">
                <td className="py-3">{v.client}</td>
                <td>{v.property}</td>
                <td>{v.date}</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                    {v.status}
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

export default ClientVisits;