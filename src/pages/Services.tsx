
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesTabs />
      <ServicesProcess />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
