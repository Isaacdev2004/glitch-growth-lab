
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCarousel = ({ services }: { services: ServiceInfo[] }) => {
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
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full">
                  <Card className="h-full border border-gray-100 hover:border-primary/20 transition-all">
                    <CardContent className="p-6">
                      <AspectRatio ratio={16/9} className="bg-primary/10 flex items-center justify-center rounded-lg mb-5">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </AspectRatio>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
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
