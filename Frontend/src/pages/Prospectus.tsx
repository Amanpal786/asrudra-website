import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Prospectus = ()=>{

const [prospects,setProspects] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
fetchProspects();
},[]);

const fetchProspects = async()=>{

const res = await axios.get(
"https://asrudra-backend-1.onrender.com/api/prospects"
);

setProspects(res.data);

};

const deleteProspect = async(id:any)=>{

if(!confirm("Delete this prospect?")) return;

await axios.delete(
`https://asrudra-backend-1.onrender.com/api/prospects/${id}`
);

fetchProspects();

};

return(

<DashboardLayout>

<div className="p-8">

<div className="flex justify-between mb-6">

<h1 className="text-3xl font-bold text-blue-600">
Prospectus
</h1>

<button
onClick={()=>navigate("/dashboard/add-prospect")}
className="bg-blue-600 text-white px-5 py-2 rounded-lg"
>
+ Add Prospect
</button>

</div>

<div className="bg-white rounded-xl shadow text-gray-700">

<table className="w-full text-gray-700">

<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">Name</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Interest</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{prospects.map((p:any)=>(

<tr key={p._id} className="border-t">

<td className="p-4">{p.name}</td>
<td className="p-4">{p.phone}</td>
<td className="p-4">{p.interest}</td>

<td className="p-4">

<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
{p.status}
</span>

</td>

<td className="p-4 flex gap-3">

<button
onClick={()=>navigate(`/dashboard/edit-prospect/${p._id}`)}
className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
✏ Edit
</button>

<button
onClick={()=>deleteProspect(p._id)}
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

export default Prospectus;