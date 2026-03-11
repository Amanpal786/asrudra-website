import DashboardLayout from "../components/DashboardLayout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLead = () => {

const navigate = useNavigate();

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

const handleSubmit = async(e:any)=>{
e.preventDefault();

await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, form);

navigate("/dashboard/leads");
};

return(

<DashboardLayout>

<h1 className="text-3xl font-bold text-blue-600 mb-8">
Add New Lead
</h1>

{/* Card same as Leads table */}

<div className="bg-white rounded-2xl shadow-lg border w-[650px]">

<div className="px-6 py-4 border-b font-semibold text-gray-700">
Lead Information
</div>

<form onSubmit={handleSubmit} className="p-6 space-y-5">

{/* Client Name */}

<div>
<label className="text-sm font-medium text-gray-700">
Client Name
</label>

<input
name="name"
placeholder="Enter client name"
onChange={handleChange}
required
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Phone */}

<div>
<label className="text-sm font-medium text-gray-700">
Phone Number
</label>

<input
name="phone"
placeholder="Enter phone number"
onChange={handleChange}
required
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Property */}

<div>
<label className="text-sm font-medium text-gray-700">
Property
</label>

<input
name="property"
placeholder="Example: 2BHK Noida"
onChange={handleChange}
required
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
placeholder="Manager / Sales Executive"
onChange={handleChange}
required
className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>

</div>

{/* Buttons */}

<div className="flex gap-3 pt-4">

<button
type="submit"
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
>
Save Lead
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

export default AddLead;