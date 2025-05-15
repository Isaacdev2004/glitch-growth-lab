
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import type { Service } from "@/data/services";
import { useState, useEffect } from "react";

const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    // Get initial index
    setActiveIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-secondary" id="service-carousel">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we can help your brand grow through strategic influencer marketing.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full">
                  <Card className={`h-full border ${activeIndex === index ? 'border-primary shadow-lg scale-105' : 'border-gray-100'} hover:border-primary/20 transition-all duration-300`}>
                    <CardContent className="p-6">
                      <AspectRatio ratio={16/9} className="bg-primary/10 flex items-center justify-center rounded-lg mb-5">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </AspectRatio>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      {service.features && (
                        <ul className="space-y-2 mt-4">
                          {service.features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/services#${service.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
          </div>
        </Carousel>
        
        <div className="flex justify-center mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 mx-1 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
