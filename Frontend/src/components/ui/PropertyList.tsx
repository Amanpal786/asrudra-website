import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:4001/Property');
        setProperties(res.data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="rounded-xl border p-4 shadow hover:shadow-lg transition-all">
            <img
              src={`https://images.unsplash.com/${property.image}?w=400&h=300&fit=crop`}
              alt={property.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{property.title}</h3>
            <p className="text-muted-foreground">{property.location}</p>
            <p className="font-semibold text-primary">{property.price}</p>
            <p className="text-sm text-gray-600 mt-2">{property.description}</p>
            <div className="text-sm mt-2">Type: {property.type}</div>
            <div className="text-sm">Area: {property.area}</div>
            {property.bedrooms && (
              <div className="text-sm">Bedrooms: {property.bedrooms}</div>
            )}
            {property.floors && (
              <div className="text-sm">Floors: {property.floors}</div>
            )}
            <div className="text-sm mt-2">⭐ Rating: {property.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
