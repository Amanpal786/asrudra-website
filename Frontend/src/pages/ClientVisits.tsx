import { useEffect,useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import TableSearch from "../components/ui/TableSearch";

const ClientVisits = () => {

  const [search, setSearch] = useState("");
  const [visits,setVisits] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchVisits = async () => {
    try{
      const res = await axios.get(
        "https://asrudra-backend-1.onrender.com/api/visits"
      );
      setVisits(res.data || []);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{ fetchVisits(); },[]);

  const filteredVisits = visits.filter((visit:any) =>
    visit.client?.toLowerCase().includes(search.toLowerCase()) ||
    visit.property?.toLowerCase().includes(search.toLowerCase()) ||
    visit.phone?.includes(search)
  );

  const deleteVisit = async(id:any)=>{
    if(!confirm("Delete this visit?")) return;

    await axios.delete(
      `https://asrudra-backend-1.onrender.com/api/visits/${id}`
    );

    fetchVisits();
  };

  return(
    <DashboardLayout>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
            Client Visits
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <TableSearch
              value={search}
              onChange={setSearch}
              placeholder="Search visit..."
            />

            <button
              onClick={()=>navigate("/dashboard/add-visit")}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Visit
            </button>

          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow text-gray-700 overflow-x-auto">

          <table className="min-w-[700px] w-full">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4 text-left">Client</th>
                <th className="p-4 text-left">Property</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredVisits.map((visit:any)=>(
                <tr key={visit._id} className="border-t">

                  <td className="p-4 whitespace-nowrap">{visit.client}</td>
                  <td className="p-4">{visit.property}</td>
                  <td className="p-4 whitespace-nowrap">{visit.date}</td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {visit.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={()=>navigate(`/dashboard/edit-visit/${visit._id}`)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

                      <button
                        onClick={()=>deleteVisit(visit._id)}
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

export default ClientVisits;