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

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
        Add Prospect
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4">

          <input className="border p-3 rounded w-full"
            placeholder="Name"
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            placeholder="Phone"
            onChange={(e)=>setForm({...form,phone:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            placeholder="Interest"
            onChange={(e)=>setForm({...form,interest:e.target.value})}
          />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}

export default AddProspect;