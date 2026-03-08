import DashboardLayout from "../components/DashboardLayout";
import LeadsChart from "../components/LeadsChart";
import LeadsTable from "../components/LeadsTable";

const Dashboard = () => {
  return (
    <DashboardLayout>

        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
                Dashboard
            </h1>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                + Add Lead
            </button>
        </div>

      <div className="grid grid-cols-4 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-500">Total Leads</p>
                    <h2 className="text-2xl font-bold text-blue-600">245</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-500">Client Visits</p>
                <h2 className="text-2xl font-bold text-blue-600">38</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-500">Closed Deals</p>
                <h2 className="text-2xl font-bold text-blue-600">12</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-500">Employees</p>
                <h2 className="text-2xl font-bold text-blue-600">52</h2>
            </div>

        </div>

      {/* Chart yaha add hoga */}
      <LeadsChart />
      <LeadsTable />

    </DashboardLayout>
  );
};

export default Dashboard;