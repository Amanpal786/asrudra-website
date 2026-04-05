import { useState, useEffect } from "react";

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

  // ✅ LOAD DATA
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    setFeedbacks(stored);
  }, []);

  // ✅ ADD FEEDBACK
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newFeedback = {
      ...form,
      id: Date.now(),
      avatar: getAvatar(),
    };

    const old = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    const updated = [...old, newFeedback];

    localStorage.setItem("feedbacks", JSON.stringify(updated));
    setFeedbacks(updated);

    setForm({ name: "", message: "", rating: 5 });
    setShowForm(false);
  };

  const avg =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((a, b) => a + b.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : "0.0";

 return (
  <section className="w-full py-28 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white relative overflow-hidden">

    {/* 🔥 GLOW BACKGROUND */}
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

    {/* HEADER */}
    <div className="max-w-6xl mx-auto px-4 text-center mb-16 relative z-10">
      <h2 className="text-4xl font-bold tracking-tight">
        What Our Clients Say
      </h2>

      <p className="text-gray-400 mt-2">
        Trusted by real customers across India
      </p>

      {/* ⭐ AVG */}
      <div className="mt-3 flex justify-center items-center gap-2 text-yellow-400 text-lg">
        {"★".repeat(Math.round(Number(avg)))}
        {"☆".repeat(5 - Math.round(Number(avg)))}
        <span className="text-gray-400 text-sm ml-2">
          {avg} ({feedbacks.length} reviews)
        </span>
      </div>
    </div>

    {/* BUTTON */}
    <div className="max-w-6xl mx-auto px-4 flex justify-end mb-10 relative z-10">
      <button
        onClick={() => setShowForm(true)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
      >
        + Add Review
      </button>
    </div>

    {/* CARDS */}
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
      {feedbacks.map((fb) => (
        <div
          key={fb.id}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 hover:scale-[1.03] transition duration-300"
        >

          {/* USER */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={fb.avatar}
              className="w-12 h-12 rounded-full object-cover border border-white/20"
            />

            <div>
              <h3 className="font-semibold text-white">
                {fb.name}
              </h3>

              <div className="flex text-yellow-400 text-sm">
                {[1,2,3,4,5].map((star) => (
                  <span key={star}>
                    {star <= fb.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <p className="text-gray-300 text-sm leading-relaxed italic">
            “{fb.message}”
          </p>
        </div>
      ))}
    </div>

    {/* MODAL */}
    {showForm && (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50">
        <div className="bg-[#0f172a] text-white p-6 rounded-2xl w-full max-w-md shadow-2xl border border-white/10">

          <h2 className="text-xl font-semibold text-center mb-4">
            Share Your Experience
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e)=>
                setForm({...form,name:e.target.value})
              }
              className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              placeholder="Write your feedback..."
              value={form.message}
              onChange={(e)=>
                setForm({...form,message:e.target.value})
              }
              className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={4}
            />

            {/* ⭐ STARS */}
            <div className="flex justify-center gap-2 text-2xl cursor-pointer">
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

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={()=>setShowForm(false)}
                className="px-4 py-2 bg-gray-700 rounded-lg"
              >
                Cancel
              </button>

              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
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