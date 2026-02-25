import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rentProperties = [
  {
    id: 1,
    name: "NX One Office",
    location: "Greater Noida",
    type: "Office Space",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", // Pexels image
  },
  {
    id: 2,
    name: "Grande Office",
    location: "Sector 129, Noida",
    type: "Office Space",
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg", // Pexels image
  },
  {
    id: 3,
    name: "Green Villa",
    location: "Sector 150, Noida",
    type: "Villa",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg", // Pexels image
  },
  {
    id: 4,
    name: "La Residancia",
    location: "Noida Extension",
    type: "Apartment",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg", // Pexels image
  },
  {
    id: 5,
    name: "Sikka Office Space",
    location: "Sector 98, Noida",
    type: "Office Space",
    image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg", // Pexels image
  },
];

const Rent = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const location = query.get("location")?.toLowerCase() || "";
  const category = query.get("category") || "";
  const keyword = query.get("keyword")?.toLowerCase() || "";

  const [filteredProperties, setFilteredProperties] = useState(rentProperties);

  useEffect(() => {
    const results = rentProperties.filter((property) => {
      const matchesLocation = location ? property.location.toLowerCase().includes(location) : true;
      const matchesCategory = category ? property.type.includes(category) : true;
      const matchesKeyword = keyword
        ? property.name.toLowerCase().includes(keyword) || property.type.toLowerCase().includes(keyword)
        : true;

      return matchesLocation && matchesCategory && matchesKeyword;
    });

    setFilteredProperties(results);
  }, [location, category, keyword]);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-sky-50 via-cyan-100 to-sky-200 min-h-screen pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-cyan-900 mb-10 tracking-tight drop-shadow">
            Properties for Rent
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="bg-white/90 shadow-xl rounded-3xl overflow-hidden border border-cyan-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-56 object-cover object-center rounded-t-3xl"
                  />
                  <span className="absolute top-4 right-4 bg-cyan-700 text-white text-xs px-3 py-1 rounded-full shadow">
                    {property.type}
                  </span>
                </div>
                <CardHeader className="pb-2 pt-4 px-6">
                  <CardTitle className="text-cyan-900 text-2xl font-semibold">
                    {property.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 text-gray-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z" />
                    </svg>
                    <span className="font-medium">Location:</span>
                    <span className="text-cyan-700">{property.location}</span>
                  </div>
                  <button className="mt-4 w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 rounded-xl shadow transition-colors duration-200">
                    View Details
                  </button>
                </CardContent>
              </Card>
            ))}
            {filteredProperties.length === 0 && (
              <p className="col-span-full text-center text-cyan-700 text-lg font-medium">
                No properties match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rent;
