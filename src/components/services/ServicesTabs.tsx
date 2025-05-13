
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/data/services";

const ServicesTabs = () => {
  return (
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
  );
};

export default ServicesTabs;
