import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const EditVisit = ()=>{

const {id} = useParams();
const navigate = useNavigate();

const [form,setForm] = useState({
client:"",
property:"",
date:"",
status:""
});

useEffect(()=>{
fetchVisit();
},[]);

const fetchVisit = async ()=>{

const res = await axios.get(
`https://asrudra-backend-1.onrender.com/api/visits/${id}`
);

setForm(res.data);

};

const handleSubmit = async(e:any)=>{

e.preventDefault();

await axios.put(
`https://asrudra-backend-1.onrender.com/api/visits/${id}`,
form
);

navigate("/dashboard/visits");

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Edit Visit
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
value={form.client}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,client:e.target.value})}
/>

<input
value={form.property}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,property:e.target.value})}
/>

<input
type="date"
value={form.date}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<button
className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500 transition"
>
Update
</button>

</form>

</div>

</DashboardLayout>

)

}

export default EditVisit;