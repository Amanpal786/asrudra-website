import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLead = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(true);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 FETCH
  const fetchLead = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`
      );

      const lead = res.data;

      setForm({
        name: lead.fullName || "",
        phone: lead.phoneNumber || "",
        email: lead.email || "",
        message: lead.message || ""
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) fetchLead();
  }, [id]);

  // 🔥 UPDATE
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`,
        {
          fullName: form.name,
          phoneNumber: form.phone,
          email: form.email,
          message: form.message
        }
      );

      navigate("/dashboard/leads");
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <p className="p-6 text-gray-600">Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-6">
        Edit Lead
      </h1>

      {/* CENTER */}
      <div className="flex justify-center">

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-lg border w-full max-w-2xl">

          <div className="px-4 sm:px-6 py-4 border-b font-semibold text-gray-700">
            Update Lead Information
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Client Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Update Lead
              </button>

              <button
                type="button"
                onClick={() => navigate("/dashboard/leads")}
                className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      </div>

    </DashboardLayout>
  );
};

export default EditLead;