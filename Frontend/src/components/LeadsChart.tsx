import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", leads: 30 },
  { month: "Feb", leads: 45 },
  { month: "Mar", leads: 60 },
  { month: "Apr", leads: 80 },
  { month: "May", leads: 100 },
];

const LeadsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">Leads Growth</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeadsChart;