import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AddEmployee = () => {

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
role:"",
phone:"",
email:"",
status:"Active"
});

const handleSubmit = async (e:any) => {

e.preventDefault();

try{

await axios.post(
"https://asrudra-backend-1.onrender.com/api/employees",
form
);

navigate("/dashboard/employees");

}catch(err){
console.log(err);
}

};

return(

<DashboardLayout>

<div className="p-8">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Add Employee
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
className="border p-3 rounded w-full text-gray-900"
placeholder="Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
className="border p-3 rounded w-full text-gray-900"
placeholder="Role"
onChange={(e)=>setForm({...form,role:e.target.value})}
/>

<input
className="border p-3 rounded w-full text-gray-900"
placeholder="Phone"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<input
className="border p-3 rounded w-full text-gray-900"
placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<button
type="submit"
className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition"
>
Save
</button>

</form>

</div>

</DashboardLayout>

);

};

export default AddEmployee;