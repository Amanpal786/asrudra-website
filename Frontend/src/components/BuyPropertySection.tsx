import React from "react";
import { Property } from "@/types";

const properties: Property[] = [
  {
    id: 101,
    title: "Elegant 2BHK Apartment",
    location: "Whitefield, Bangalore",
    price: "₹75 Lakh",
    type: "residential",
    area: "1100 sq.ft",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    features: ["Gym", "Swimming Pool", "24/7 Security"],
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
  },
  {
    id: 102,
    title: "Luxury Villa",
    location: "Koramangala, Bangalore",
    price: "₹2.1 Cr",
    type: "residential",
    area: "3000 sq.ft",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    features: ["Garden", "Garage", "Home Theater"],
    rating: 4.8,
    bedrooms: 4,
    bathrooms: 4,
    floors: 2,
  },
  {
    id: 103,
    title: "NX One Office",
    location: "Noida Extension",
    price: "₹48 Lakh",
    type: "commercial",
    area: "800 sq.ft",
    image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    features: ["Lift", "24x7 Security"],
    rating: 4.2,
    bedrooms: 0,
    bathrooms: 1,
    floors: 8,
  },
  {
    id: 104,
    title: "Golden Grande Office",
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
  {
    id: 105,
    title: "La Residencia",
    location: "Techzone 4 Greater Noida West, Greater Noida",
    price: "₹70Lakh",
    type: "residential",
    area: "1010 sq.ft",
    image: "	https://newprojects.99acres.com/projects/3c/La_Residentia/images/h12.jpg",
    features: ["Park", "Clubhouse"],
    rating: 4.6,
    bedrooms: 3,
    bathrooms: 3,
    floors: 4,
  },
  {
    id: 106,
    title: "Sikka Office Space",
    location: "Sector 98, Noida",
    price: "₹60 Lakh",
    type: "commercial",
    area: "1000 sq.ft",
    image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg",
    features: ["Central AC", "High-Speed Elevator"],
    rating: 4.3,
    bedrooms: 0,
    bathrooms: 1,
    floors: 10,
  },
  {
    id: 107,
    title: "Green Villa",
    location: "Noida Extension",
    price: "₹95 Lakh",
    type: "residential",
    area: "1800 sq.ft",
    image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
    features: ["Private Garden", "Modular Kitchen"],
    rating: 4.4,
    bedrooms: 3,
    bathrooms: 3,
    floors: 2,
  },
];

const BuyPropertySection = () => {
  return (
    <section className="bg-sky-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
              Buy Properties in Noida & Bangalore
            </h2>
            
          </div>
          <a
            href="/buy"
            className="text-blue-800 font-medium hover:underline text-sm"
          >
            View All
          </a>
        </div>

        {/* Property Cards */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2">
          {properties.map((property) => (
            <div
              key={property.id}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] bg-white shadow-md hover:shadow-xl transition rounded-xl p-4 text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto overflow-hidden rounded-full border-4 border-white shadow">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow -mb-2">
                  ✔ RERA
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold mt-3 text-blue-900 truncate">
                {property.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 truncate">
                {property.location}
              </p>
              <p className="text-sm text-blue-800 font-semibold mt-1">
                {property.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyPropertySection;
