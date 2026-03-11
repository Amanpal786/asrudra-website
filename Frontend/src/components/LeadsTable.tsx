import axios from "axios";
import { useNavigate } from "react-router-dom";

const LeadsTable = ({ leads, fetchLeads }) => {

const navigate = useNavigate();

const deleteLead = async(id:any)=>{

const confirmDelete = window.confirm("Are you sure you want to delete this lead?");

if(!confirmDelete) return;

await axios.delete(`http://127.0.0.1:4001/api/leads/${id}`);

fetchLeads();

};

const getStatusColor = (status:any)=>{

if(status === "New Lead") return "bg-blue-100 text-blue-600";
if(status === "Site Visit") return "bg-purple-100 text-purple-600";
if(status === "Negotiation") return "bg-orange-100 text-orange-600";
if(status === "Closed") return "bg-green-100 text-green-600";

return "bg-gray-100 text-gray-600";

};

return (

<div className="bg-white mt-8 rounded-2xl shadow-lg border">

<div className="flex justify-between items-center px-6 py-4 border-b">

<h2 className="text-lg font-semibold text-gray-800">
Recent Leads
</h2>

<span className="text-sm text-gray-500">
{leads?.length || 0} Leads
</span>

</div>

<div className="overflow-x-auto">

<table className="w-full text-sm text-gray-700">

<thead className="bg-gray-50 text-gray-600">

<tr>

<th className="px-6 py-3 text-left font-semibold">Name</th>
<th className="px-6 py-3 text-left font-semibold">Phone</th>
<th className="px-6 py-3 text-left font-semibold">Property</th>
<th className="px-6 py-3 text-left font-semibold">Status</th>
<th className="px-6 py-3 text-left font-semibold">Assigned</th>
<th className="px-6 py-3 text-center font-semibold">Action</th>

</tr>

</thead>

<tbody>

{leads?.map((lead:any)=>(

<tr
key={lead._id}
className="border-t hover:bg-gray-50 transition"
>

<td className="px-6 py-4 font-medium text-gray-900">
{lead.name}
</td>

<td className="px-6 py-4">
{lead.phone}
</td>

<td className="px-6 py-4">
{lead.property}
</td>

<td className="px-6 py-4">

<span className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusColor(lead.status)}`}>
{lead.status}
</span>

</td>

<td className="px-6 py-4">
{lead.assigned}
</td>

<td className="px-6 py-4">

<div className="flex justify-center gap-3">

<button
onClick={()=>navigate(`/dashboard/edit-lead/${lead._id}`)}
className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
✏ Edit
</button>

<button
onClick={()=>deleteLead(lead._id)}
className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
🗑 Delete
</button>

</div>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);

};

export default LeadsTable;