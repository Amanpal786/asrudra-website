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

      <h2 className="text-lg font-semibold mb-4">
        Recent Leads
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Name</th>
            <th>Phone</th>
            <th>Property</th>
            <th>Status</th>
            <th>Assigned</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">

              <td className="py-3">{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.property}</td>
              <td>{lead.status}</td>
              <td>{lead.assigned}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default LeadsTable;