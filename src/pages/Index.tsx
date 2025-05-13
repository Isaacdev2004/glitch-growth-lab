
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceCarousel from "@/components/ServiceCarousel";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

// Import the services data
import { services } from "@/data/services";

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Services Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Amplify Your Brand with Data-Driven Influencer Campaigns
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From Nano-Influencer UGC to Premium Talent Partnerships – We Deliver Results
            </p>
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">Book a Free Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tailored Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored Solutions for Every Brand
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're scaling with authentic UGC or launching high-impact campaigns with top talent, we've got you covered.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Carousel */}
      <ServiceCarousel services={services} />
      
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
