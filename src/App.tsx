import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Import service category pages
import Nails from "./pages/services/Nails";
import Facials from "./pages/services/Facials";
import Lashes from "./pages/services/Lashes";
import Waxing from "./pages/services/Waxing";
import ManicuresPedicures from "./pages/services/ManicuresPedicures";
import HydraFacial from "./pages/services/HydraFacial";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* Service category routes */}
      <Route path="/services/nails" element={<Nails />} />
      <Route path="/services/facials" element={<Facials />} />
      <Route path="/services/lashes" element={<Lashes />} />
      <Route path="/services/waxing" element={<Waxing />} />
      <Route
        path="/services/manicures-pedicures"
        element={<ManicuresPedicures />}
      />
      <Route path="/services/hydrafacial" element={<HydraFacial />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
