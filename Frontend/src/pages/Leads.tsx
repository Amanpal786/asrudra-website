import DashboardLayout from "../components/DashboardLayout";
import LeadsTable from "../components/LeadsTable";

const Leads = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Leads Management
      </h1>

      <LeadsTable />

    </DashboardLayout>
  );
};

export default Leads;