import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Input } from "@/components/ui/input";
import { Property } from "@/types";
import BuyPropertySection from "@/components/BuyPropertySection";
import EmiCalculator from "../components/calculator";

const Buy = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const sampleProperties: Property[] = [
      {
        id: 1008,
        title: "NX One Office",
        location: "Greater Noida",
        price: "₹45 Lakh",
        type: "commercial",
        area: "856 sq.ft",
        image:
          "https://i.ytimg.com/vi/L4lBdeL_1J8/maxresdefault.jpg",
        features: ["Lift", "CCTV", "Parking"],
        rating: 4.2,
        bedrooms: 0,
        bathrooms: 1,
        floors: 7,
      },
      {
        id: 102,
        title: "Golden Grande Office",
        location: "Noida Extension",
        price: "₹52 Lakh",
        type: "commercial",
        area: "700 sq.ft",
        image:
          "https://www.commercialnoida.com/assets/upload/property/9a37bc42da15bf8b3727e2bf3db800f7.webp",
        features: ["24/7 Security", "Lift", "Power Backup"],
        rating: 4.4,
        bedrooms: 0,
        bathrooms: 1,
        floors: 8,
      },
      {
        id: 103,
        title: "La Residencia",
        location: "Sector 150, Noida",
        price: "₹1.3 Cr",
        type: "residential",
        area: "1800 sq.ft",
        image:
          "https://atninfratech.com/amrapali-laresidentia/images/01.jpg",
        features: ["Clubhouse", "Swimming Pool", "Gym"],
        rating: 4.6,
        bedrooms: 3,
        bathrooms: 3,
        floors: 5,
      },
      {
        id: 104,
        title: "Sikka Office Space",
        location: "Sector 98, Noida",
        price: "₹40 Lakh",
        type: "commercial",
        area: "600 sq.ft",
        image:
          "https://64.media.tumblr.com/61302f9751b7a5ec719c376fa0d7068e/6c12b79becabffa9-46/s1280x1920/1693f5ee3c5eafe7eabc9929bb75e0b39f8fcd44.jpg",
        features: ["Security", "Lift", "Power Backup"],
        rating: 4.1,
        bedrooms: 0,
        bathrooms: 1,
        floors: 6,
      },
      {
        id: 105,
        title: "Green Villa",
        location: "Sector 137, Noida",
        price: "₹1.7 Cr",
        type: "residential",
        area: "2200 sq.ft",
        image:
          "https://www.greenvillasnoida.com/img/green-villa-2.webp",
        features: ["Garden", "Parking", "Power Backup"],
        rating: 4.3,
        bedrooms: 4,
        bathrooms: 4,
        floors: 2,
      },
      {
        id: 106,
        title: "Elegant 2BHK Apartment",
        location: "Whitefield, Bangalore",
        price: "₹75 Lakh",
        type: "residential",
        area: "1100 sq.ft",
        image: "https://www.a2zproperty.in/Gujarat/Surat/loyadham-homes/image-1862-2.jpg",
        features: ["Gym", "Swimming Pool", "24/7 Security"],
        rating: 4.5,
        bedrooms: 2,
        bathrooms: 2,
        floors: 1,
      },
      {
        id: 107,
        title: "Luxury Villa",
        location: "Koramangala, Bangalore",
        price: "₹2.1 Cr",
        type: "residential",
        area: "3000 sq.ft",
        image: "https://croatia-exclusive.com/storage/app/uploads/public/643/59b/bd9/64359bbd95cf4593472387.jpg",
        features: ["Garden", "Garage", "Home Theater"],
        rating: 4.8,
        bedrooms: 4,
        bathrooms: 4,
        floors: 2,
      },
      {
        id: 108,
        title: "Golden Office",
        location: "Greater Noida West",
        price: "₹55 Lakh",
        type: "commercial",
        area: "950 sq.ft",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        features: ["Power Backup", "Ample Parking"],
        rating: 4.5,
        bedrooms: 0,
        bathrooms: 1,
        floors: 12,
      },
    ];

    setProperties(sampleProperties);
  }, []);

  const filteredProperties = properties.filter((property) => {
    const query = searchTerm.toLowerCase();
    return (
      property.title.toLowerCase().includes(query) ||
      property.type.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query) ||
      property.bedrooms.toString().includes(query) ||
      property.features.some((f) => f.toLowerCase().includes(query))
    );
  });

  return (
    <Layout>
      <div className="bg-[#EAF4FB] px-4 py-0 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Heading and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center my-6">
            <h1 className="text-3xl font-bold text-[#112D4E] mb-4 sm:mb-0">
              Properties for Sale
            </h1>
            <Input
              type="text"
              placeholder="Search 2BHK, Villa, Residential..."
              className="w-full sm:w-80 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-[#3F72AF] bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden"
              >
                <img
                  src={property.image}
                  alt={property.title.replace(/[^a-zA-Z0-9 ]/g, "")}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="text-xs text-white bg-green-600 rounded-full w-fit px-2 py-0.5 mb-2 font-semibold">
                    ✓ RERA
                  </div>
                  <h3 className="text-lg font-semibold text-[#112D4E]">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-[#3F72AF] font-bold text-base my-2">
                    {property.price}
                  </p>
                  <a
                    href={`/exclusive/${property.id}`}
                    className="inline-block text-sm bg-[#3F72AF] text-white px-4 py-2 rounded-full hover:bg-[#305f91] transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>

      {/* EMI Calculator */}
      <EmiCalculator />

      {/* Horizontal Scroll Section */}
      <div className="text-center ">
        <BuyPropertySection />
      </div>
      
    </Layout>
  );
};

export default Buy;
