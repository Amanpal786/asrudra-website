import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const EditEmployee = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    role:"",
    phone:"",
    email:"",
    status:"Active"
  });

  useEffect(()=>{
    fetchEmployee();
  },[]);

  const fetchEmployee = async () => {
    try{
      const res = await axios.get(
        `https://asrudra-backend-1.onrender.com/api/employees/${id}`
      );
      setForm(res.data);
    }catch(err){
      console.log(err);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try{
      await axios.put(
        `https://asrudra-backend-1.onrender.com/api/employees/${id}`,
        form
      );
      navigate("/dashboard/employees");
    }catch(err){
      console.log(err);
    }
  };

  return(
    <DashboardLayout>

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
        Edit Employee
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4">

          <input className="border p-3 rounded w-full"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.role}
            onChange={(e)=>setForm({...form,role:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.phone}
            onChange={(e)=>setForm({...form,phone:e.target.value})}
          />

          <input className="border p-3 rounded w-full"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default EditEmployee;