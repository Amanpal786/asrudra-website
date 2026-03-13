import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AddProspect = ()=>{

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
phone:"",
interest:"",
status:"New"
});

const handleSubmit = async(e:any)=>{

e.preventDefault();

await axios.post(
"https://asrudra-backend-1.onrender.com/api/prospects",
form
);

navigate("/dashboard/prospectus");

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Add Prospect
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Name"
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Phone"
className="border p-3 w-full    text-gray-700"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<input
placeholder="Interest"
className="border p-3 w-full text-gray-700"
onChange={(e)=>setForm({...form,interest:e.target.value})}
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

export default AddProspect;