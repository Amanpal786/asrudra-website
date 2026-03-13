import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Hiring from "./pages/Hiring";
import AddLead from "./pages/AddLead";
import EditLead from "./pages/EditLead";
import AdminLogin from "./pages/AdminLogin";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import AddHiring from "./pages/AddHiring";
import EditHiring from "./pages/EditHiring";
import ClientVisits from "./pages/ClientVisits";
import AddVisit from "./pages/AddVisit";
import EditVisit from "./pages/EditVisit";
import Prospectus from "./pages/Prospectus";
import AddProspect from "./pages/AddProspect";
import EditProspect from "./pages/EditProspect";

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
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
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
          {/* <Route path="/rent" element={<Rent />} /> */}
          <Route path="/rental" element={<Rent />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          {/* <Route path="/new-launch" element={<NewLaunch />} /> */}
          <Route
          path="/dashboard"
          element={localStorage.getItem("role") ? <Dashboard /> : <AdminLogin />}
          />
          <Route path="/dashboard/leads" element={<Leads />} />
          <Route path="/dashboard/employees" element={<Employees />} />
          <Route path="/dashboard/hiring" element={<Hiring />} />
          <Route path="/dashboard/visits" element={<ClientVisits />} />
          <Route path="/dashboard/prospectus" element={<Prospectus />} />
          <Route path="/dashboard/add-lead" element={<AddLead />} />
          <Route path="/dashboard/edit-lead/:id" element={<EditLead />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard/add-employee" element={<AddEmployee />} />
          <Route path="/dashboard/edit-employee/:id" element={<EditEmployee />} /> 
          <Route path="/dashboard/add-hiring" element={<AddHiring />} />
          <Route path="/dashboard/edit-hiring/:id" element={<EditHiring />} /> 
          <Route path="/dashboard/visits" element={<ClientVisits />} />
          <Route path="/dashboard/add-visit" element={<AddVisit />} />
          <Route path="/dashboard/edit-visit/:id" element={<EditVisit />} />
          <Route path="/dashboard/prospectus" element={<Prospectus/>}/>
          <Route path="/dashboard/add-prospect" element={<AddProspect/>}/>
          <Route path="/dashboard/edit-prospect/:id" element={<EditProspect/>}/>
                    

          <Route
          path="/dashboard/edit-employee/:id"
          element={<EditEmployee />}
          />
          


          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
