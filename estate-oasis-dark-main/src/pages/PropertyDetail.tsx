import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import { MapPin, Home, Star, Heart, BarChart3 } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const property = {
    id: parseInt(id || "1"),
    title: "Sky Garden Residency",
    location: "Banjara Hills, Hyderabad",
    price: "₹85 Lakhs",
    area: "1250 sq ft",
    bedrooms: 3,
    floor: "12th Floor",
    facing: "East",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    ],
    description:
      "Luxury residential apartment with modern amenities and premium lifestyle.",
    features: ["Swimming Pool", "Gym", "Club House"],
    amenities: {
      Security: ["24/7 Security", "CCTV"],
      Recreational: ["Pool", "Gym"],
    },
    rating: 4.5,
    developer: "EstateHub Developers",
    possession: "Dec 2025",
    totalFloors: 18,
    totalUnits: 144,
  };

 const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Form submit triggered");

  setLoading(true);

  try {

    const res = await axios.post(
      "https://asrudra-backend-1.onrender.com/api/enquiry",
      {
        fullName: contactForm.name,
        email: contactForm.email,
        phoneNumber: contactForm.phone,
        message: contactForm.message || ""
      }
    );

    console.log("SUCCESS:", res.data);

    alert("Enquiry Submitted Successfully");

    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  } catch (err) {

    console.error("ERROR:", err);

    alert("Something went wrong");

  }

  setLoading(false);
};

  return (
    <Layout>
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-0">
                <img
                  src={property.images[0]}
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.location}
                </div>

                <div className="text-2xl font-bold text-primary mb-4">
                  {property.price}
                </div>

                <p className="text-muted-foreground">{property.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* CONTACT FORM */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Get Price Details</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleContactSubmit}>
                  
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>Message</Label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {loading ? "Processing..." : "Get Price Details"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
