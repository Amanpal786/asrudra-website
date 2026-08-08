import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

import {
  MapPin,
  Briefcase,
  Clock3,
  IndianRupee,
  Users,
  TrendingUp,
  Award,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Send,
  X,
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";

interface Job {
  title: string;
  location: string;
  salary: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    title: "Sales Executive",
    location: "Greater Noida",
    salary: "₹20,000 - ₹35,000",
    experience: "0 - 3 Years",
    type: "Full Time",
    description:
      "We are looking for an energetic and target-oriented Sales Executive to drive property sales and build strong relationships with prospective clients.",
    responsibilities: [
      "Generate and manage new sales leads",
      "Understand client requirements and recommend suitable properties",
      "Conduct property presentations and site visits",
      "Maintain regular follow-ups with prospective clients",
      "Achieve monthly sales targets",
    ],
    requirements: [
      "Good communication and interpersonal skills",
      "Strong convincing and negotiation ability",
      "Positive and target-oriented attitude",
      "Freshers with good communication skills can apply",
    ],
  },

  {
    title: "Telecaller",
    location: "Noida",
    salary: "₹18,000 - ₹28,000",
    experience: "Fresher / Experienced",
    type: "Full Time",
    description:
      "Join our growing team as a Telecaller and connect with potential customers, understand their requirements and generate qualified leads for our sales team.",
    responsibilities: [
      "Make outbound calls to potential customers",
      "Explain projects and available property options",
      "Generate and qualify sales leads",
      "Maintain customer information and call records",
      "Coordinate with the sales team for follow-ups",
    ],
    requirements: [
      "Excellent verbal communication skills",
      "Basic computer knowledge",
      "Confident and professional communication",
      "Ability to handle customer queries",
      "Freshers are welcome",
    ],
  },

  {
    title: "Digital Marketing Executive",
    location: "Greater Noida",
    salary: "₹25,000 - ₹40,000",
    experience: "1+ Years",
    type: "Full Time",
    description:
      "We are seeking a creative and performance-driven Digital Marketing Executive to manage our digital presence, campaigns and online growth.",
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Manage social media platforms and content",
      "Monitor campaign performance and analytics",
      "Work on lead generation and online branding",
      "Coordinate with creative and sales teams",
    ],
    requirements: [
      "1+ years of relevant digital marketing experience",
      "Knowledge of social media marketing",
      "Understanding of Google Ads / Meta Ads is preferred",
      "Good analytical and communication skills",
      "Creative approach towards digital campaigns",
    ],
  },
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitApplication = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!selectedJob) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Job details
    formData.append("position", selectedJob.title);
    formData.append("location", selectedJob.location);
    formData.append("experience", selectedJob.experience);
    formData.append("applicationType", "Career Application");
    formData.append("status", "Pending");

    try {
      setIsSubmitting(true);

      /*
       * IMPORTANT:
       * Content-Type manually set nahi karna.
       * Axios/browser automatically multipart boundary handle karega.
       */

      const response = await axios.post(
        "http://localhost:4001/api/hiring",
        formData
      );

      console.log("Application submitted:", response.data);

      alert(
        "Application submitted successfully! Our HR team will contact you soon."
      );

      form.reset();
      setSelectedJob(null);
    } catch (error: any) {
      console.error("Application submission error:", error);

      console.error(
        "Backend response:",
        error?.response?.data
      );

      alert(
        error?.response?.data?.message ||
          "Failed to submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white text-gray-900">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-sm font-semibold mb-6">
                <Briefcase className="w-4 h-4" />
                CAREERS AT AS RUDRA
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Build Your Career.
                <span className="block text-orange-500">
                  Build Your Future.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg lg:text-xl text-gray-300 leading-relaxed">
                Join AS Rudra Solutions Pvt. Ltd. and become part of a
                growing team where talent, dedication and performance create
                opportunities for growth.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href="#openings"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#why-us"
                  className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-orange-500 hover:text-orange-400 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
                >
                  Why Join Us?
                </a>

              </div>

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl">

              {[
                {
                  number: "10+",
                  label: "Career Opportunities",
                },
                {
                  number: "Growing",
                  label: "Work Environment",
                },
                {
                  number: "100%",
                  label: "Growth Focused",
                },
                {
                  number: "Team",
                  label: "Driven Culture",
                },
              ].map((stat) => (

                <div
                  key={stat.label}
                  className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-5"
                >
                  <div className="text-2xl font-bold text-orange-400">
                    {stat.number}
                  </div>

                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>

              ))}

            </div>

          </div>
        </section>


        {/* ================= WHY JOIN ================= */}

        <section
          id="why-us"
          className="py-20 lg:py-24 bg-gray-50"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                Why AS Rudra
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-950">
                Grow With a Team That Values You
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                We believe people are the foundation of every successful
                organization. That's why we focus on creating an environment
                where our team can learn, perform and grow.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              {[
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  text: "Build your skills and progress through meaningful career opportunities.",
                },
                {
                  icon: GraduationCap,
                  title: "Learning",
                  text: "Develop practical knowledge while working with an experienced team.",
                },
                {
                  icon: Users,
                  title: "Great Team",
                  text: "Work in a collaborative environment where everyone's contribution matters.",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  text: "Performance and dedication are valued and recognized.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >

                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>
        </section>


        {/* ================= OPENINGS ================= */}

        <section
          id="openings"
          className="py-20 lg:py-24 bg-white"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">

              <div>

                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                  Opportunities
                </span>

                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-950">
                  Current Job Openings
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl">
                  Explore our current openings and find an opportunity that
                  matches your skills, experience and career goals.
                </p>

              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                Currently Hiring
              </div>

            </div>

            <div className="space-y-6">

              {jobs.map((job) => (

                <div
                  key={job.title}
                  className="group border border-gray-200 rounded-2xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >

                  <div className="p-6 lg:p-8">

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                      <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-950">
                            {job.title}
                          </h3>

                          <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold">
                            {job.type}
                          </span>

                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 text-sm text-gray-600">

                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            {job.location}
                          </div>

                          <div className="flex items-center gap-2">
                            <IndianRupee className="w-4 h-4 text-orange-500" />
                            {job.salary}
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock3 className="w-4 h-4 text-orange-500" />
                            {job.experience}
                          </div>

                        </div>

                        <p className="mt-5 text-gray-600 leading-relaxed max-w-4xl">
                          {job.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 mt-6">

                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">

                            <MapPin className="w-4 h-4 text-orange-500" />

                            <div>
                              <p className="text-xs text-gray-500">
                                Location
                              </p>

                              <p className="font-semibold text-gray-800">
                                {job.location}
                              </p>
                            </div>

                          </div>

                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">

                            <Briefcase className="w-4 h-4 text-orange-500" />

                            <div>
                              <p className="text-xs text-gray-500">
                                Experience
                              </p>

                              <p className="font-semibold text-gray-800">
                                {job.experience}
                              </p>
                            </div>

                          </div>

                        </div>

                      </div>

                      <div className="lg:w-44 shrink-0">

                        <button
                          onClick={() => setSelectedJob(job)}
                          className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </section>


        {/* ================= HIRING PROCESS ================= */}

        <section className="py-20 lg:py-24 bg-gray-950 text-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">
                Simple Process
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                Our Hiring Process
              </h2>

              <p className="mt-4 text-gray-400">
                We keep our hiring process simple, transparent and focused on
                finding the right fit for both you and our organization.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              {[
                {
                  step: "01",
                  title: "Apply",
                  text: "Submit your application for a suitable position.",
                },
                {
                  step: "02",
                  title: "Screening",
                  text: "Our team reviews your profile and experience.",
                },
                {
                  step: "03",
                  title: "Interview",
                  text: "Meet our team and discuss the role and opportunity.",
                },
                {
                  step: "04",
                  title: "Selection",
                  text: "Selected candidates move forward to joining.",
                },
              ].map((item) => (

                <div
                  key={item.step}
                  className="relative border border-white/10 bg-white/5 rounded-2xl p-6"
                >

                  <div className="text-4xl font-extrabold text-orange-500/40">
                    {item.step}
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-400 leading-relaxed">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="py-20 bg-orange-500">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/20 flex items-center justify-center">

              <Send className="w-7 h-7 text-white" />

            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white">
              Don't See the Right Position?
            </h2>

            <p className="mt-4 text-orange-50 text-lg max-w-2xl mx-auto">
              We're always interested in meeting talented and motivated
              professionals. Send us your resume and we'll keep you in mind
              for future opportunities.
            </p>

            <a
              href="mailto:careers@asrudrasolutions.com"
              className="inline-flex items-center gap-2 mt-8 bg-white text-orange-600 hover:bg-gray-100 px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
            </a>

          </div>
        </section>


        {/* ================= APPLICATION MODAL ================= */}

        {selectedJob && (

          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              if (!isSubmitting) {
                setSelectedJob(null);
              }
            }}
          >

            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >

              {/* MODAL HEADER */}

              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">

                <div>

                  <p className="text-sm text-orange-500 font-semibold">
                    Apply for Position
                  </p>

                  <h3 className="text-xl font-bold text-gray-950 mt-1">
                    {selectedJob.title}
                  </h3>

                </div>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setSelectedJob(null)}
                  className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition disabled:opacity-50"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>


              {/* FORM */}

              <form
                className="p-6 space-y-5"
                onSubmit={submitApplication}
              >

                {/* NAME */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <div className="relative">

                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>


                {/* EMAIL */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>


                {/* PHONE */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>


                {/* RESUME */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume
                  </label>

                  <div className="relative">

                    <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg text-sm"
                    />

                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    PDF, DOC or DOCX format recommended. Maximum size: 5 MB.
                  </p>

                </div>


                {/* APPLYING FOR */}

                <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3">

                  <p className="text-xs text-gray-500">
                    Applying For
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedJob.title}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    {selectedJob.location} • {selectedJob.experience}
                  </p>

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold transition"
                >

                  <Send className="w-5 h-5" />

                  {isSubmitting
                    ? "Submitting Application..."
                    : "Submit Application"}

                </button>

              </form>

            </div>

          </div>

        )}

      </div>
    </Layout>
  );
};

export default Career;