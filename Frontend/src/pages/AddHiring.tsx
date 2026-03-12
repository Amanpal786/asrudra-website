import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AddHiring = () => {

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
position:"",
phone:"",
status:"Pending"
});

const handleSubmit = async(e:any)=>{
e.preventDefault();

await axios.post(
"https://asrudra-backend-1.onrender.com/api/hiring",
form
);

navigate("/dashboard/hiring");

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6">
Add Candidate
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
className="border p-2 w-full"
placeholder="Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
className="border p-2 w-full"
placeholder="Position"
onChange={(e)=>setForm({...form,position:e.target.value})}
/>

<input
className="border p-2 w-full"
placeholder="Phone"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Save
</button>

</form>

</div>

</DashboardLayout>

)

}

export default AddHiring;