import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://asrudra-backend-1.onrender.com/api/feedback";

const getAvatar = () => {
  const gender = Math.random() > 0.5 ? "men" : "women";
  const num = Math.floor(Math.random() * 90);
  return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
};

const FeedbackManager = () => {
  const navigate = useNavigate();

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  // ✅ LOAD FROM BACKEND
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ ADD / UPDATE
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (editingId) {
        // UPDATE
        const res = await fetch(`${API}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const updated = await res.json();

        setFeedbacks((prev) =>
          prev.map((fb) => (fb._id === editingId ? updated : fb))
        );

        setEditingId(null);
      } else {
        // ADD
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            avatar: getAvatar(),
          }),
        });

        const data = await res.json();

        setFeedbacks((prev) => [data, ...prev]);
      }

      setForm({ name: "", message: "", rating: 5 });
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (fb: any) => {
    setForm({
      name: fb.name,
      message: fb.message,
      rating: fb.rating,
    });
    setEditingId(fb._id);
  };

  // DELETE
  const handleDelete = async (id: string) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });

    setFeedbacks((prev) => prev.filter((fb) => fb._id !== id));
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-transparent min-h-screen text-black">

      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-3 py-1.5 text-sm bg-white/10 border border-white/10 rounded-md hover:bg-white/20 transition"
          >
            ← Back
          </button>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Feedback Manager
          </h1>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm">
          Manage all client reviews
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-[#0f172a] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-8 md:mb-10 w-full max-w-full md:max-w-2xl shadow-xl">

        <h2 className="text-base sm:text-lg font-semibold mb-4 text-white">
          {editingId ? "Edit Feedback" : "Add New Feedback"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Client Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            className="w-full bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />

          <textarea
            placeholder="Write feedback..."
            value={form.message}
            onChange={(e)=>setForm({...form,message:e.target.value})}
            className="w-full bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none text-white"
            rows={4}
          />

          {/* ⭐ */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-400">Rating:</span>
            <div className="flex gap-1 text-lg sm:text-xl cursor-pointer">
              {[1,2,3,4,5].map((s)=>(
                <span
                  key={s}
                  onClick={()=>setForm({...form,rating:s})}
                  className={s<=form.rating ? "text-yellow-400" : "text-gray-600"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:scale-105 transition text-sm sm:text-base">
            {editingId ? "Update Feedback" : "Add Feedback"}
          </button>

        </form>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        {feedbacks.map((fb)=>(
          <div
            key={fb._id} // ✅ CHANGE
            className="bg-[#0f172a] border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] transition"
          >

            <div className="flex items-center gap-3 mb-3">
              <img
                src={fb.avatar}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-white">
                  {fb.name}
                </h3>

                <div className="text-yellow-400 text-xs sm:text-sm">
                  {"★".repeat(fb.rating)}
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm italic mb-4">
              “{fb.message}”
            </p>

            <div className="flex justify-between items-center">
              <button
                onClick={()=>handleEdit(fb)}
                className="text-blue-400 text-xs sm:text-sm hover:underline"
              >
                Edit
              </button>

              <button
                onClick={()=>handleDelete(fb._id)} // ✅ CHANGE
                className="text-red-400 text-xs sm:text-sm hover:underline"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default FeedbackManager;