import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", sales: 200 },
  { month: "Feb", sales: 400 },
  { month: "Mar", sales: 300 },
  { month: "Apr", sales: 450 },
  { month: "May", sales: 350 },
  { month: "Jun", sales: 500 }
];

const SalesChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Monthly Sales
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="sales" fill="#4F46E5" radius={[6,6,0,0]} />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SalesChart;