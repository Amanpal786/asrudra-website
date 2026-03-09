import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { role: "Manager", count: 6 },
  { role: "TL", count: 10 },
  { role: "Associate", count: 18 }
];

const HiringChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Hiring Status
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="role" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="count" fill="#6366F1" radius={[6,6,0,0]} />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default HiringChart;