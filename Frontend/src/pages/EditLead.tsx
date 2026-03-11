import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLead = () => {

const navigate = useNavigate();
const { id } = useParams();

const [form,setForm] = useState({
name:"",
phone:"",
property:"",
status:"New Lead",
assigned:""
});

const handleChange = (e:any)=>{
setForm({...form,[e.target.name]:e.target.value});
};

useEffect(()=>{

const fetchLead = async()=>{

try{

const res = await axios.get(`http://127.0.0.1:4001/api/leads`);

const lead = res.data.find((l:any)=>l._id === id);

if(lead){
setForm(lead);
}

}catch(err){
console.log(err);
}

};

fetchLead();

},[id]);

const handleSubmit = async(e:any)=>{

e.preventDefault();

await axios.put(`http://127.0.0.1:4001/api/leads/${id}`,form);

navigate("/dashboard/leads");

};

return(

<DashboardLayout>

<h1 className="text-3xl font-bold text-blue-600 mb-8">
Edit Lead
</h1>

<div className="bg-white rounded-2xl shadow-lg border w-[650px]">

<div className="px-6 py-4 border-b font-semibold text-gray-700">
Update Lead Information
</div>

<form onSubmit={handleSubmit} className="p-6 space-y-5">

{/* Client Name */}

<div>

<label className="text-sm font-medium text-gray-700">
Client Name
</label>

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Client Name"
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Phone */}

<div>

<label className="text-sm font-medium text-gray-700">
Phone Number
</label>

<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Phone Number"
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Property */}

<div>

<label className="text-sm font-medium text-gray-700">
Property
</label>

<input
name="property"
value={form.property}
onChange={handleChange}
placeholder="Example: 2BHK Noida"
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Status */}

<div>

<label className="text-sm font-medium text-gray-700">
Lead Status
</label>

<select
name="status"
value={form.status}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
>

<option value="New Lead">New Lead</option>
<option value="Site Visit">Site Visit</option>
<option value="Negotiation">Negotiation</option>
<option value="Closed">Closed</option>

</select>

</div>

{/* Assigned */}

<div>

<label className="text-sm font-medium text-gray-700">
Assigned To
</label>

<input
name="assigned"
value={form.assigned}
onChange={handleChange}
placeholder="Manager / Sales Executive"
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Buttons */}

<div className="flex gap-3 pt-4">

<button
type="submit"
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
>
Update Lead
</button>

<button
type="button"
onClick={()=>navigate("/dashboard/leads")}
className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition"
>
Cancel
</button>

</div>

</form>

</div>

</DashboardLayout>

);

};

export default EditLead;