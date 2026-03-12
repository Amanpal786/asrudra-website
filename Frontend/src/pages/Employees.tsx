import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Employees = () => {

const [employees,setEmployees] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
fetchEmployees();
},[]);

const fetchEmployees = async () => {

try{

const res = await axios.get(
"https://asrudra-backend-1.onrender.com/api/employees"
);

setEmployees(res.data);

}catch(err){
console.log(err);
}

};


/* DELETE EMPLOYEE */

const deleteEmployee = async (id:any) => {

if(!confirm("Delete this employee?")) return;

try{

await axios.delete(
`https://asrudra-backend-1.onrender.com/api/employees/${id}`
);

fetchEmployees();

}catch(err){
console.log(err);
}

};


/* EDIT PAGE NAVIGATION */

const editEmployee = (id:any)=>{
navigate(`/dashboard/edit-employee/${id}`);
};


return (

<DashboardLayout>

<div className="p-8">

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold text-blue-600">
Employees Management
</h1>

<a
href="/dashboard/add-employee"
className="bg-blue-600 text-white px-5 py-2 rounded-lg"
>
+ Add Employee
</a>

</div>

<div className="bg-white rounded-xl shadow text-gray-900">

<table className="w-full">

<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">Name</th>
<th className="p-4 text-left">Role</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Email</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{employees.map((emp:any)=>(

<tr key={emp._id} className="border-t">

<td className="p-4">{emp.name}</td>
<td className="p-4">{emp.role}</td>
<td className="p-4">{emp.phone}</td>
<td className="p-4">{emp.email}</td>

<td className="p-4">

<span className="bg-green-100 text-green-700 px-2 py-1 rounded">
{emp.status}
</span>

</td>

<td className="p-4 flex items-center gap-3">

<button
onClick={()=>editEmployee(emp._id)}
className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
>
✏ Edit
</button>

<button
onClick={()=>deleteEmployee(emp._id)}
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

);

};

export default Employees;