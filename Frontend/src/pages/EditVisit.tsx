import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const EditVisit = ()=>{

  const {id} = useParams();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    client:"",
    property:"",
    date:"",
    status:""
  });

  useEffect(()=>{
    fetchVisit();
  },[]);

  const fetchVisit = async ()=>{
    const res = await axios.get(
      `https://asrudra-backend-1.onrender.com/api/visits/${id}`
    );
    setForm(res.data);
  };

  const handleSubmit = async(e:any)=>{
    e.preventDefault();

    await axios.put(
      `https://asrudra-backend-1.onrender.com/api/visits/${id}`,
      form
    );

    navigate("/dashboard/visits");
  };

  return(
    <DashboardLayout>

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
        Edit Visit
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4">

          <input className="border p-3 rounded w-full"
            value={form.client}
            onChange={(e)=>setForm({...form,client:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.property}
            onChange={(e)=>setForm({...form,property:e.target.value})}
          />

          <input type="date"
            className="border p-3 rounded w-full"
            value={form.date}
            onChange={(e)=>setForm({...form,date:e.target.value})}
          />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}

export default EditVisit;