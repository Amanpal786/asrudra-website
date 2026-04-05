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

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
        Add Client Visit
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4 text-gray-700">

          <input className="border p-3 rounded w-full"
            placeholder="Client Name"
            onChange={(e)=>setForm({...form,client:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            placeholder="Property"
            onChange={(e)=>setForm({...form,property:e.target.value})}
          />

          <input type="date"
            className="border p-3 rounded w-full"
            onChange={(e)=>setForm({...form,date:e.target.value})}
          />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}

export default AddVisit;