
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p className="text-xl text-gray-600 mb-8">
              From Nano-Influencer UGC to Premium Talent Partnerships – We Deliver Results
            </p>
            <Button asChild size="lg" className="px-6 py-6 text-lg">
              <Link to="/contact">
                Book a Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tailored Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored Solutions for <span className="text-primary">Every Brand</span>
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're scaling with authentic UGC or launching high-impact campaigns with top talent, we've got you covered.
            </p>
          </div>
          
          <Tabs defaultValue={services[0].id} className="w-full max-w-6xl mx-auto">
            <TabsList className="flex flex-wrap justify-center mb-10 bg-transparent h-auto p-0 space-x-2 space-y-2 sm:space-y-0">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-3 rounded-full border border-gray-200 shadow-sm"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id}
                className="mt-10 px-4"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="lg:w-1/3">
                    <div className="bg-secondary/50 p-8 rounded-2xl">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl text-primary mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                      <h4 className="text-xl font-semibold mb-6">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              </div>
                            </div>
                            <p className="ml-3 text-gray-600">{feature}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <Button asChild>
                          <Link to="/contact">
                            Get Started With {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
