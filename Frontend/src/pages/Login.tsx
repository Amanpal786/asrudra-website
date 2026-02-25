import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MessageSquare, Home, MapPin, CheckCircle, ArrowRight, Clock, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://asrudra-backend-1.onrender.com/enquiry", formData);
      
      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          propertyInterest: ""
        });
      }
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      setError("Failed to submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Connect With Us
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Whether you're looking for your dream home or have questions about our services, our team is here to help.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <span>Send a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {submitSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-8"
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-slate-600 mb-6">
                          We've received your enquiry and will get back to you within 24 hours.
                        </p>
                        <Button
                          onClick={() => setSubmitSuccess(false)}
                          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-1">
                            <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-slate-400" />
                              </div>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="pl-10 border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-400" />
                              </div>
                              <Input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className="pl-10 border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-slate-400" />
                              </div>
                              <Input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="pl-10 border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor="propertyInterest" className="text-slate-700">Property Interest (Optional)</Label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Home className="h-5 w-5 text-slate-400" />
                              </div>
                              <Input
                                id="propertyInterest"
                                name="propertyInterest"
                                value={formData.propertyInterest}
                                onChange={handleChange}
                                placeholder="Property name or reference"
                                className="pl-10 border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor="message" className="text-slate-700">Your Message</Label>
                            <div className="relative">
                              <div className="absolute top-3 left-3">
                                <MessageSquare className="h-5 w-5 text-slate-400" />
                              </div>
                              <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your requirements..."
                                className="pl-10 border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                                required
                              />
                            </div>
                          </div>

                          {error && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-600 text-sm"
                            >
                              {error}
                            </motion.p>
                          )}

                          <Button
                            type="submit"
                            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 text-base font-medium shadow-sm hover:shadow-md transition-all"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center justify-center gap-2">
                                Send Message <ArrowRight className="w-4 h-4" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      <span>Our Offices</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                        <Home className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Headquarters</h3>
                        <p className="text-slate-600">
                          Luxe Towers, 15th Floor<br />
                          Sector 62, Noida<br />
                          Uttar Pradesh 201309
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Business Hours</h3>
                        <p className="text-slate-600">
                          Monday - Friday: 9:00 AM - 7:00 PM<br />
                          Saturday: 10:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Contact</h3>
                        <p className="text-slate-600">
                          <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 98765 43210</a><br />
                          <a href="tel:+911123456789" className="hover:text-blue-600 transition-colors">+91 11 2345 6789</a><br />
                          <a href="mailto:hello@luxerealty.com" className="hover:text-blue-600 transition-colors">hello@luxerealty.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-slate-200">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913125413!2d77.36716041508043!3d28.50288998247095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sNoida%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1629960000000!5m2!1sen!2sin"
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-pink-600" />
                      <span>Regional Offices</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Mumbai</h3>
                      <p className="text-slate-600 text-sm">
                        Ocean View Plaza, 10th Floor<br />
                        Bandra Kurla Complex<br />
                        Mumbai 400051
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Bangalore</h3>
                      <p className="text-slate-600 text-sm">
                        Tech Park Tower, 7th Floor<br />
                        Whitefield<br />
                        Bangalore 560066
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Delhi</h3>
                      <p className="text-slate-600 text-sm">
                        Capital Heights, 12th Floor<br />
                        Connaught Place<br />
                        New Delhi 110001
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Hyderabad</h3>
                      <p className="text-slate-600 text-sm">
                        Hitech City Center, 5th Floor<br />
                        Gachibowli<br />
                        Hyderabad 500032
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;