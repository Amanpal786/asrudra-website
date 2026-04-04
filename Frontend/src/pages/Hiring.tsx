import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const Hiring = ()=>{

  const [search, setSearch] = useState("");
  const [data,setData] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchHiring = async ()=>{
    try{
      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/hiring"
      );
      setData(res.data || []);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{ fetchHiring(); },[]);

  const filteredHiring = data.filter((item:any) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.position?.toLowerCase().includes(search.toLowerCase()) ||
    item.phone?.includes(search)
  );

  const deleteHiring = async(id:any)=>{
    if(!confirm("Delete candidate?")) return;

    await axios.delete(
      `https://asrudra-backend-1.onrender.com/api/hiring/${id}`
    );

    fetchHiring();
  };

  return(
    <DashboardLayout>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
            Hiring Management
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <TableSearch
              value={search}
              onChange={setSearch}
              placeholder="Search candidate..."
            />

            <button
              onClick={()=>navigate("/dashboard/add-hiring")}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Candidate
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow text-gray-900 overflow-x-auto">

          <table className="min-w-[700px] w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Position</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredHiring.map((item:any)=>(
                <tr key={item._id} className="border-t text-sm hover:bg-gray-50">

                  <td className="p-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-4">{item.position}</td>
                  <td className="p-4 whitespace-nowrap">{item.phone}</td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={()=>navigate(`/dashboard/edit-hiring/${item._id}`)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

                      <button
                        onClick={()=>deleteHiring(item._id)}
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

export default Hiring;