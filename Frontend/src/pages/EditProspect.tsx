import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const EditProspect = ()=>{

const {id} = useParams();
const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
phone:"",
interest:"",
status:""
});

useEffect(()=>{
fetchProspect();
},[]);

const fetchProspect = async()=>{

const res = await axios.get(
`https://asrudra-backend-1.onrender.com/api/prospects/${id}`
);

setForm(res.data);

};

const handleSubmit = async(e:any)=>{

e.preventDefault();

await axios.put(
`https://asrudra-backend-1.onrender.com/api/prospects/${id}`,
form
);

navigate("/dashboard/prospectus");

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Edit Prospect
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
value={form.name}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
value={form.phone}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<input
value={form.interest}
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,interest:e.target.value})}
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

export default EditProspect;