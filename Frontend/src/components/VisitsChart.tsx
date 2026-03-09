import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Site Visit", value: 45 },
  { name: "Virtual Visit", value: 30 },
  { name: "Follow Up", value: 25 }
];

const COLORS = ["#4F46E5", "#06B6D4", "#22C55E"];

const VisitsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">

    <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Client Visits
    </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default VisitsChart;

