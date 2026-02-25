import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { PropertyCard } from "../components/PropertyCard";

interface Property {
  _id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  description: string;
  images: string[];
  owner: {
    _id: string;
    name: string;
    phone: string;
  };
  createdAt: string;
  status: "available" | "sold" | "pending";
}

const ResalePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "my-listings">("buy");
  const [resaleProperties, setResaleProperties] = useState<Property[]>([]);
  const [myProperties, setMyProperties] = useState<Property[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    images: [] as File[],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        if (activeTab === "buy") {
          const res = await axios.get("http://https://asrudra-backend-1.onrender.com/api/properties");
          setResaleProperties(res.data);
        } else if (activeTab === "my-listings" && user) {
          const res = await axios.get(`http://https://asrudra-backend-1.onrender.com/api/properties/user/${user._id}`);
          setMyProperties(res.data);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, [activeTab, user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to list your property");
      return;
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        (value as File[]).forEach((file) => form.append("images", file));
      } else {
        form.append(key, value as string);
      }
    });

    try {
      setIsLoading(true);
      await axios.post("http://https://asrudra-backend-1.onrender.com/api/properties", form, {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
      alert("Property listed successfully!");
      setFormData({
        title: "",
        type: "",
        location: "",
        price: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        description: "",
        images: [],
      });
      // Refresh my listings
      const res = await axios.get(`http://https://asrudra-backend-1.onrender.com/api/properties/user/${user._id}`);
      setMyProperties(res.data);
      setActiveTab("my-listings");
    } catch (err) {
      console.error("Error uploading property:", err);
      alert("Error listing property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProperty = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://https://asrudra-backend-1.onrender.com/api/properties/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setMyProperties(myProperties.filter(property => property._id !== id));
        alert("Property deleted successfully");
      } catch (err) {
        console.error("Error deleting property:", err);
        alert("Error deleting property");
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === "buy"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy Resale
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === "sell"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("sell")}
          >
            Sell Resale
          </button>
          {user && (
            <button
              className={`px-6 py-2 rounded-full font-semibold ${
                activeTab === "my-listings"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("my-listings")}
            >
              My Listings
            </button>
          )}
        </div>

        {/* Buy Resale Section */}
        {activeTab === "buy" && (
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : resaleProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resaleProperties.map((property) => (
                  <PropertyCard 
                    key={property._id} 
                    property={property} 
                    showContact={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No properties available at the moment</p>
              </div>
            )}
          </div>
        )}

        {/* Sell Resale Form */}
        {activeTab === "sell" && (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-6 shadow rounded-lg space-y-4"
          >
            <h2 className="text-2xl font-bold text-center mb-6">List Your Property</h2>
            
            <div>
              <Label>Property Title*</Label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g. Spacious 3BHK Apartment in Sector 62"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Property Type*</Label>
                <Input
                  type="text"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  placeholder="e.g. Apartment, Villa, Office"
                  required
                />
              </div>
              <div>
                <Label>Location*</Label>
                <Input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Noida Sector 62"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Price (₹)*</Label>
                <Input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="e.g. 7500000"
                  required
                />
              </div>
              <div>
                <Label>Area (sq.ft)*</Label>
                <Input
                  type="text"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  placeholder="e.g. 1500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Bedrooms*</Label>
                <Input
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                  placeholder="e.g. 3"
                  required
                />
              </div>
              <div>
                <Label>Bathrooms*</Label>
                <Input
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: e.target.value })
                  }
                  placeholder="e.g. 2"
                  required
                />
              </div>
            </div>

            <div>
              <Label>Description*</Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe your property in detail..."
                rows={5}
                required
              />
            </div>

            <div>
              <Label>Upload Images* (Max 5)</Label>
              <Input 
                type="file" 
                multiple 
                onChange={handleFileChange} 
                accept="image/*"
                required
              />
              <p className="text-sm text-gray-500 mt-1">First image will be used as cover photo</p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Listing..." : "List My Property"}
            </Button>

            {!user && (
              <p className="text-sm text-gray-500 text-center">
                Note: You need to be logged in to list your property
              </p>
            )}
          </form>
        )}

        {/* My Listings Section */}
        {activeTab === "my-listings" && (
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : myProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myProperties.map((property) => (
                  <div key={property._id} className="relative">
                    <PropertyCard property={property} showContact={false} />
                    <div className="flex space-x-2 mt-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          // Implement edit functionality
                          alert("Edit functionality coming soon");
                        }}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        className="w-full"
                        onClick={() => handleDeleteProperty(property._id)}
                      >
                        Delete
                      </Button>
                    </div>
                    {property.status !== "available" && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {property.status === "pending" ? "Under Review" : "Sold"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">You haven't listed any properties yet</p>
                <Button onClick={() => setActiveTab("sell")}>
                  List Your First Property
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ResalePage;