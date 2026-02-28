import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Comparison from "./pages/Comparison";
import Residential from "./pages/Residential";
import OfficeSpaces from "./pages/OfficeSpaces";
import Plots from "./pages/Plots";
import Exclusive from "./pages/Exclusive";
import Buy from "./pages/Buy"; // ✅ Buy Page
import PropertyDetail from "./components/PropertyDetail";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import NotFound from "./pages/NotFound";
import Rent from "./pages/Rent"; // ✅ Buy Page
// import NewLaunch from "./pages/NewLaunch";// new launch page
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = "A S Rudra Solutions";
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/office-spaces" element={<OfficeSpaces />} />
          <Route path="/commercial" element={<OfficeSpaces />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/exclusive" element={<Exclusive />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          {/* <Route path="/new-launch" element={<NewLaunch />} /> */}


          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
