import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const ClientVisits = () => {
    const [search, setSearch] = useState("");

const [visits,setVisits] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
fetchVisits();
},[]);
const filteredVisits = visits.filter((visit:any) =>
  visit.client?.toLowerCase().includes(search.toLowerCase()) ||
  visit.property?.toLowerCase().includes(search.toLowerCase()) ||
  visit.phone?.includes(search)
);

const fetchVisits = async () => {

const res = await axios.get(
"https://asrudra-backend-1.onrender.com/api/visits"
);

setVisits(res.data);

};

const deleteVisit = async(id:any)=>{

if(!confirm("Delete this visit?")) return;

await axios.delete(
`https://asrudra-backend-1.onrender.com/api/visits/${id}`
);

fetchVisits();

};

return(

<DashboardLayout>

<div className="p-8">

<div className="flex justify-between mb-6">

<h1 className="text-3xl font-bold text-blue-600">
Client Visits
</h1>
<TableSearch
 value={search}
 onChange={setSearch}
 placeholder="Search visit..."
/>

<button
onClick={()=>navigate("/dashboard/add-visit")}
className="bg-blue-600 text-white px-5 py-2 rounded-lg"
>
+ Add Visit
</button>
</div>

<div className="bg-white rounded-xl shadow text-gray-700">

<table className="w-full ">

<thead className="bg-black-100 text-gray-600 font-medium">

<tr>

<th className="p-4 text-left">Client</th>
<th className="p-4 text-left">Property</th>
<th className="p-4 text-left">Date</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{filteredVisits.map((visit:any)=>(

<tr key={visit._id} className="border-t">

<td className="p-4">{visit.client}</td>
<td className="p-4">{visit.property}</td>
<td className="p-4">{visit.date}</td>

<td className="p-4">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded">
{visit.status}
</span>
</td>

<td className="p-4 flex gap-3">

<button
onClick={()=>navigate(`/dashboard/edit-visit/${visit._id}`)}
className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
✏ Edit
</button>

<button
onClick={()=>deleteVisit(visit._id)}
className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
🗑 Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</DashboardLayout>

)

}

export default ClientVisits;