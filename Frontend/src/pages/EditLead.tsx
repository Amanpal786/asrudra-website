import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLead = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // ✅ correct form (match with enquiries DB)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Handle input change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Fetch single lead
  const fetchLead = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4001/api/leads/${id}`
      );

      const lead = res.data;

      // ✅ mapping correct
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

  // 🔹 Update lead
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:4001/api/leads/${id}`,
        {
          fullName: form.name,
          phoneNumber: form.phone,
          email: form.email,
          message: form.message
        }
      );

    //   alert("Lead Updated Successfully 🔥");
      navigate("/dashboard/leads");
    } catch (err) {
      console.error(err);
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
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Edit Lead
      </h1>

      <div className="bg-white rounded-2xl shadow-lg border w-[650px]">
        <div className="px-6 py-4 border-b font-semibold text-gray-700">
          Update Lead Information
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">

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
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
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
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
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
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Update Lead
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard/leads")}
              className="bg-gray-200 px-6 py-2 rounded-lg bg-darkred-300 text-gray-700"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditLead;