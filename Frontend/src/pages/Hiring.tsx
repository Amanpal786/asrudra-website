import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const Hiring = ()=>{
    const [search, setSearch] = useState("");

const [data,setData] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
fetchHiring();
},[]);

const filteredHiring = data.filter((item:any) =>
  item.name?.toLowerCase().includes(search.toLowerCase()) ||
  item.position?.toLowerCase().includes(search.toLowerCase()) ||
  item.phone?.includes(search)
);

const fetchHiring = async ()=>{

const res = await axios.get(
"https://asrudra-backend-1.onrender.com/api/hiring"
);

setData(res.data);

};

/* DELETE */

const deleteHiring = async(id:any)=>{

if(!confirm("Delete candidate?")) return;

await axios.delete(
`https://asrudra-backend-1.onrender.com/api/hiring/${id}`
);

fetchHiring();

};

return(

<DashboardLayout>

<div className="p-8">

<div className="flex justify-between mb-6">

<h1 className="text-3xl font-bold text-blue-600">
Hiring Management
</h1>

<TableSearch
 value={search}
 onChange={setSearch}
 placeholder="Search candidate..."
/>

<button
onClick={()=>navigate("/dashboard/add-hiring")}
className="bg-blue-600 text-white px-5 py-2 rounded-lg"
>
+ Add Candidate
</button>

</div>

<div className="bg-white rounded-xl shadow text-gray-900">

<table className="w-full">

<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">Name</th>
<th className="p-4 text-left">Position</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{filteredHiring.map((item:any)=>(

<tr key={item._id} className="border-t text-sm hover:bg-gray-50 transition">

<td className="p-4">{item.name}</td>
<td className="p-4">{item.position}</td>
<td className="p-4">{item.phone}</td>

<td className="p-4">

<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
{item.status}
</span>

</td>

<td className="p-4 flex gap-3">

<button
onClick={()=>navigate(`/dashboard/edit-hiring/${item._id}`)}
className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
✏ Edit
</button>

<button
onClick={()=>deleteHiring(item._id)}
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

export default Hiring;