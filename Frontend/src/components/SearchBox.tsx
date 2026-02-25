import { useState } from "react";
import { MapPin, Mic, LocateFixed } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabs = ["Buy","New Launch", "Plots/Land", "Projects"];
const categories = [
  "Independent House",
  "Apartment",
  "Villa",
  "Plot",
  "Office Space",
  "Shop",
];

const SearchBox = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Buy");
  const [category, setCategory] = useState("Independent House");
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      type: activeTab,
      category,
      location,
      keyword,
    });

    // Route to the correct page based on selected tab
    switch (activeTab) {
      case "Buy":
        navigate(`/buy?${params.toString()}`);
        break;
      case "Rent":
        navigate(`/rent?${params.toString()}`);
        break;
      // case "New Launch":
      //   navigate(`/new-launch?${params.toString()}`);
      //   break;
      case "New Launch":
        navigate(`/property/1`);
        break;


      case "Commercial":
        navigate(`/commercial?${params.toString()}`);
        break;
      case "Plots/Land":
        navigate(`/plots-land?${params.toString()}`);
        break;
      case "Projects":
        navigate(`/projects?${params.toString()}`);
        break;
      default:
        navigate(`/search?${params.toString()}`);
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-4 md:p-6 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm sm:text-base font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 border-b-2 rounded transition-all duration-200 ${
              activeTab === tab
                ? "border-cyan-600 text-cyan-700 font-semibold bg-cyan-100"
                : "border-transparent text-gray-600 hover:text-cyan-700 hover:bg-cyan-50"
            }`}
          >
            {tab}
          </button>
        ))}
        
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 p-3 border border-cyan-300 rounded-lg bg-white text-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Location */}
        <div className="relative w-full md:w-1/4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location e.g. Noida"
            className="w-full p-3 pl-10 border border-cyan-300 rounded-lg bg-white text-gray-700"
          />
          <MapPin className="absolute left-3 top-3 text-cyan-400" size={20} />
        </div>

        {/* Keyword */}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="e.g. 2BHK, Residential"
          className="w-full md:w-1/4 p-3 border border-cyan-300 rounded-lg bg-white text-gray-700"
        />

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
          Search
          </button>
          {/* <button type="button" className="text-cyan-500 hover:text-cyan-700">
            <LocateFixed />
          </button>
          <button type="button" className="text-cyan-500 hover:text-cyan-700">
            <Mic />
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
