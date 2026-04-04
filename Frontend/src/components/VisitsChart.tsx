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
    <div className="bg-white p-4 sm:p-6 rounded-xl border shadow w-full overflow-hidden">

      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        Client Visits
      </h2>

      <div className="w-full h-[220px] sm:h-[280px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
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

    </div>
  );
};

export default VisitsChart;