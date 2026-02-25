import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Comparison from "./pages/Comparison";
import Residential from "./pages/Residential";
import OfficeSpaces from "./pages/OfficeSpaces";
import Plots from "./pages/Plots";
import PropertyDetail from "./pages/PropertyDetail";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Wishlist from "./pages/Wishlist";
import Exclusive from "./pages/Exclusive";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/plots" element={<Plots />} />
          <Route path="/exclusive" element={<Exclusive />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
