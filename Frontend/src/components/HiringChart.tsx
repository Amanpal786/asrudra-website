import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { role: "Manager", count: 6 },
  { role: "TL", count: 10 },
  { role: "Associate", count: 18 }
];

const HiringChart = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border shadow w-full overflow-hidden">

      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        Hiring Status
      </h2>

      <div className="w-full h-[220px] sm:h-[280px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="role" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />

            <Bar
              dataKey="count"
              fill="#6366F1"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default HiringChart;