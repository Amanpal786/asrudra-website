import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const EditHiring = ()=>{

  const {id} = useParams();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    position:"",
    phone:"",
    status:"Pending"
  });

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const res = await axios.get(
      `https://asrudra-backend-1.onrender.com/api/hiring/${id}`
    );
    setForm(res.data);
  };

  const handleSubmit = async(e:any)=>{
    e.preventDefault();

    await axios.put(
      `https://asrudra-backend-1.onrender.com/api/hiring/${id}`,
      form
    );

    navigate("/dashboard/hiring");
  };

  return(
    <DashboardLayout>

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
        Edit Candidate
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4 text-gray-700">

          <input className="border p-3 rounded w-full"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.position}
            onChange={(e)=>setForm({...form,position:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.phone}
            onChange={(e)=>setForm({...form,phone:e.target.value})}
          />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}

export default EditHiring;