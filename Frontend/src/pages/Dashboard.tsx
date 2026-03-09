import DashboardLayout from "../components/DashboardLayout";
import LeadsChart from "../components/LeadsChart";
import LeadsTable from "../components/LeadsTable";
import VisitsChart from "../components/VisitsChart";
import HiringChart from "../components/HiringChart";
const Dashboard = () => {
  return (
    <DashboardLayout>

       <div className="flex justify-between items-center mb-8">

            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                Dashboard
                </h1>
                <p className="text-gray-500 text-sm">
                Welcome back, Aman
                </p>
            </div>

            <div className="flex items-center gap-4">

                <input
                placeholder="Search..."
                className="border rounded-lg px-4 py-2 text-sm"
                />

                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                A
                </div>

            </div>

            </div>

        <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Total Leads</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">245</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Client Visits</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">38</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Closed Deals</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">12</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Employees</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">52</h2>
        </div>

        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">

        <VisitsChart />

        <HiringChart />

        </div>

      {/* Chart yaha add hoga */}
      {/* <LeadsChart /> */}
      <LeadsTable />

    </DashboardLayout>
  );
};

export default Dashboard;