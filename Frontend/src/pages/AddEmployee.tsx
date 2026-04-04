import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AddEmployee = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    status: "Active"
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://asrudra-backend-1.onrender.com/api/employees",
        form
      );
      navigate("/dashboard/employees");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>

      <h1 className="text-xl sm:text-2xl font-bold text-blue-600 mb-6">
        Add Employee
      </h1>

      <div className="flex justify-center">

        <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-6 rounded-xl shadow space-y-4">

          <input className="border p-3 rounded w-full" placeholder="Name"
            onChange={(e)=>setForm({...form,name:e.target.value})} />

          <input className="border p-3 rounded w-full" placeholder="Role"
            onChange={(e)=>setForm({...form,role:e.target.value})} />

          <input className="border p-3 rounded w-full" placeholder="Phone"
            onChange={(e)=>setForm({...form,phone:e.target.value})} />

          <input className="border p-3 rounded w-full" placeholder="Email"
            onChange={(e)=>setForm({...form,email:e.target.value})} />

          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default AddEmployee;