
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that element
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Innovative solutions designed to amplify your brand's voice and drive meaningful engagement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  activeService === index 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveService(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Active Service Display */}
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`transition-opacity duration-300 ${
                  activeService === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative h-[300px] bg-secondary/30 rounded-2xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-primary w-32 h-32">
                          {service.icon}
                        </div>
                      </div>
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full"></div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features?.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-4">
                      <Button asChild>
                        <Link to="/contact">Request This Service</Link>
                      </Button>
                      <Button variant="outline" onClick={() => {
                        const nextIndex = (activeService + 1) % services.length;
                        setActiveService(nextIndex);
                      }}>
                        Next Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  activeService === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">
              How we work with you to deliver exceptional results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Discovery & Strategy</h3>
                    <p className="text-gray-600">
                      We begin by understanding your brand, goals, and target audience. From there, we develop a customized strategy aligned with your objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Planning & Creation</h3>
                    <p className="text-gray-600">
                      We identify the right influencers, develop compelling content strategies, and plan campaign execution timelines.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Execution & Monitoring</h3>
                    <p className="text-gray-600">
                      We launch your campaign and closely monitor performance in real-time, making adjustments as needed to maximize impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">4</div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Analysis & Optimization</h3>
                    <p className="text-gray-600">
                      We analyze campaign performance, provide detailed reports, and offer insights for future optimization and continued growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-primary">Elevate Your Brand</span>?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your marketing goals and drive meaningful growth for your business.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
