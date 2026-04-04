import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
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
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow mt-6 w-full overflow-hidden">

      <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
        Leads Growth
      </h2>

      <div className="w-full h-[220px] sm:h-[280px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            {/* 🔥 Grid add kiya for better UI */}
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
            />

            <YAxis 
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="leads"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default LeadsChart;