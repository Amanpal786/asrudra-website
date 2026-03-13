import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AddVisit = ()=>{

const navigate = useNavigate();

const [form,setForm] = useState({
client:"",
property:"",
date:"",
status:"Scheduled"
});

const handleSubmit = async(e:any)=>{

e.preventDefault();

await axios.post(
"https://asrudra-backend-1.onrender.com/api/visits",
form
);

navigate("/dashboard/visits");

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Add Client Visit
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Client Name"
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,client:e.target.value})}
/>

<input
placeholder="Property"
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,property:e.target.value})}
/>

<input
type="date"
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<button
className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500 transition"
>
Save
</button>

</form>

</div>

</DashboardLayout>

)

}

export default AddVisit;