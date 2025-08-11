import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UrbaniaBooking from "./pages/UrbaniaBooking";
import TermsAndConditions from './pages/TermsAndConditions';
import { ServiceCard } from "./components/ServiceCard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global wrapper with equal side spacing */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/urbania-rental-in-guwahati" element={<Index />} />
            <Route path="/urbania-booking" element={<UrbaniaBooking />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    
           {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
