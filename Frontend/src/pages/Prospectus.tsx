import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const Prospectus = ()=>{

  const [search, setSearch] = useState("");
  const [prospects,setProspects] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchProspects = async()=>{
    try{
      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/prospects"
      );
      setProspects(res.data || []);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{ fetchProspects(); },[]);

  const filteredProspects = prospects.filter((item:any) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.phone?.includes(search) ||
    item.interest?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteProspect = async(id:any)=>{
    if(!confirm("Delete this prospect?")) return;

    await axios.delete(
      `https://asrudra-backend-1.onrender.com/api/prospects/${id}`
    );

    fetchProspects();
  };

  return(
    <DashboardLayout>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
            Prospectus
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <TableSearch
              value={search}
              onChange={setSearch}
              placeholder="Search prospect..."
            />

            <button
              onClick={()=>navigate("/dashboard/add-prospect")}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Prospect
            </button>

          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow text-gray-700 overflow-x-auto">

          <table className="min-w-[700px] w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Interest</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProspects.map((item:any)=>(
                <tr key={item._id} className="border-t">

                  <td className="p-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-4 whitespace-nowrap">{item.phone}</td>
                  <td className="p-4">{item.interest}</td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={()=>navigate(`/dashboard/edit-prospect/${item._id}`)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

                      <button
                        onClick={()=>deleteProspect(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </DashboardLayout>
  )
}

export default Prospectus;