import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import ServicesSlideshow from "@/components/ServicesSlideshow";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PhoneCall, Users, UserCheck, Rocket, ChartBar } from "lucide-react";

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

  const processSteps = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Discovery Call",
      description: "We understand your brand goals, target audience, and expectations for influencer partnerships."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Analysis",
      description: "We analyze your audience demographics and identify the right influencer categories for optimal reach."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Influencer Matching",
      description: "We handpick creators whose audience and content style aligns with your brand identity."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Campaign Launch",
      description: "We manage all logistics, creative briefs, and coordinate content publishing schedules."
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Reporting & Optimization",
      description: "We track performance metrics and provide insights for future campaign optimization."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Amplify Your Brand with <span className="text-primary">Data-Driven Influencer Campaigns</span>
            </h1>
            <p className="text-xl text-gray-600">
              From Nano-Influencer UGC to Premium Talent Partnerships – We Deliver Results
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">Book a Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Slideshow Section */}
      <ServicesSlideshow />
      
      {/* What Makes Us Different Section */}
      <DifferentiatorSection />
      
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
      
      {/* Process Section - Updated to "How It Works" Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our proven process delivers exceptional results for your influencer marketing campaigns.
            </p>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-10"></div>
            
            {/* Scrollable Timeline */}
            <ScrollArea className="w-full pb-6" orientation="horizontal">
              <div className="flex gap-4 md:gap-0 min-w-max px-2">
                {processSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="relative flex flex-col items-center w-[260px] px-4 md:px-0"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-20 flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full shadow-lg border-2 border-primary">
                      <span className="text-primary text-2xl font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-3 p-3 bg-primary/10 rounded-full">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
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
