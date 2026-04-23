import { useState, useEffect } from "react";

const API = "https://asrudra-backend-1.onrender.com/api/feedback";

const getAvatar = () => {
  const gender = Math.random() > 0.5 ? "men" : "women";
  const num = Math.floor(Math.random() * 90);
  return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
};

const FeedbackSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

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

  // ✅ ADD FEEDBACK (BACKEND)
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          avatar: getAvatar(),
        }),
      });

      const data = await res.json();

      // UI update same design
      setFeedbacks((prev) => [data, ...prev]);

      setForm({ name: "", message: "", rating: 5 });
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const avg =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((a, b) => a + b.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white relative overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-500/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-500/20 blur-[100px] rounded-full"></div>

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10 sm:mb-14 md:mb-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Trusted by real customers across India
        </p>

        {/* ⭐ */}
        <div className="mt-3 flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-yellow-400 text-sm sm:text-lg">
          {"★".repeat(Math.round(Number(avg)))}
          {"☆".repeat(5 - Math.round(Number(avg)))}
          <span className="text-gray-400 text-xs sm:text-sm ml-1">
            {avg} ({feedbacks.length} reviews)
          </span>
        </div>
      </div>

      {/* BUTTON */}
      <div className="max-w-6xl mx-auto px-4 flex justify-center sm:justify-end mb-8 sm:mb-10 relative z-10">
        <button
          onClick={() => setShowForm(true)}
          className="w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-600 px-5 sm:px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          + Add Review
        </button>
      </div>

      {/* CARDS */}
     <div className="max-w-6xl mx-auto px-4">
     <div className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar py-6">

    {feedbacks.map((fb) => (
      <div
        key={fb._id}
        className="w-[calc(33.333%-1rem)] flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 hover:scale-[1.03] transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={fb.avatar}
            className="w-12 h-12 rounded-full border border-white/20"
          />

          <div>
            <h3 className="font-semibold text-white">
              {fb.name}
            </h3>

            <div className="text-yellow-400 text-sm">
              {[1,2,3,4,5].map((star) => (
                <span key={star}>
                  {star <= fb.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm italic">
          “{fb.message}”
        </p>
      </div>
    ))}

  </div>
</div>
      {/* MODAL SAME */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 px-4">
          <div className="bg-[#0f172a] text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl w-full max-w-md shadow-2xl border border-white/10">

            <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
              Share Your Experience
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
                className="w-full bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                placeholder="Write your feedback..."
                value={form.message}
                onChange={(e)=>setForm({...form,message:e.target.value})}
                className="w-full bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
                rows={4}
              />

              <div className="flex justify-center gap-2 text-xl sm:text-2xl cursor-pointer">
                {[1,2,3,4,5].map((star)=>(
                  <span
                    key={star}
                    onClick={()=>setForm({...form,rating:star})}
                    className={
                      star<=form.rating
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:justify-between mt-4">
                <button
                  type="button"
                  onClick={()=>setShowForm(false)}
                  className="w-full sm:w-auto px-4 py-2 bg-gray-700 rounded-lg text-sm"
                >
                  Cancel
                </button>

                <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;