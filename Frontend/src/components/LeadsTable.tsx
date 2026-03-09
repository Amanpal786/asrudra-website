const leads = [
  {
    name: "Rahul Sharma",
    phone: "9876543210",
    property: "3BHK Noida",
    status: "New Lead",
    assigned: "Manager"
  },
  {
    name: "Amit Singh",
    phone: "9876543211",
    property: "Villa Greater Noida",
    status: "Site Visit",
    assigned: "TL"
  },
  {
    name: "Rohit Verma",
    phone: "9876543212",
    property: "2BHK Noida",
    status: "Negotiation",
    assigned: "Associate"
  }
];

const LeadsTable = () => {
  return (
    <div className="bg-white mt-8 rounded-xl shadow p-6">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Leads
      </h2>

      <table className="w-full text-sm text-gray-700">

        <thead>
          <tr className="text-left border-b text-gray-700">
            <th className="py-3">Name</th>
            <th>Phone</th>
            <th>Property</th>
            <th>Status</th>
            <th>Assigned</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr
              key={index}
              className="border-b hover:bg-blue-50 transition"
            >
              <td className="py-3 text-gray-800 font-medium">
                {lead.name}
              </td>

              <td className="text-gray-700">
                {lead.phone}
              </td>

              <td className="text-gray-700">
                {lead.property}
              </td>

              <td>
                <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                  {lead.status}
                </span>
              </td>

              <td className="text-gray-700">
                {lead.assigned}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default LeadsTable;