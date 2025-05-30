
import { useState, useEffect, useRef, TouchEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

const serviceSlides: ServiceSlide[] = [{
  id: "campaign-management",
  title: "End-to-End Campaign Management",
  description: "We formulate creative campaigns that reinforce your brand strategy to drive reach, engagement and conversions.",
  image: "/lovable-uploads/72b8279e-ac3c-40e8-bd4b-91335b644a61.png"
}, {
  id: "premium-creators",
  title: "Premium Creator Collaborations",
  description: "Working with the best influencers around the globe to deliver top results and value to brands meeting all KPIs.",
  image: "/lovable-uploads/599e6f18-2223-4356-8077-ea425835ea20.png"
}, {
  id: "ugc-campaigns",
  title: "UGC & Nano-Influencer Campaigns",
  description: "Scale your brand with authentic user-generated content and nano-influencers for maximum authenticity and engagement.",
  image: "/lovable-uploads/d1a58762-ca99-406b-b7a7-9ef359464e64.png"
}, {
  id: "influencer-strategy",
  title: "Influencer Strategy",
  description: "Develop a comprehensive influencer strategy tailored to your brand goals, target audience, and industry niche.",
  image: "/lovable-uploads/fda1ffa0-9aa8-4d33-acb6-40152c7ecbd1.png"
}, {
  id: "social-media-strategy",
  title: "Social Media Strategy",
  description: "Create a cohesive social media presence that complements your influencer campaigns for maximum impact.",
  image: "/lovable-uploads/52d641f6-e1bc-4614-a16d-90b7f339ace9.png"
}, {
  id: "talent-management",
  title: "Talent Management",
  description: "Expert management of influencer relationships to ensure long-term partnerships and consistent brand messaging.",
  image: "/lovable-uploads/4472301d-78bd-474d-a8eb-8997c9cee054.png"
}];

const ServicesSlideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setActiveSlide(prev => prev === serviceSlides.length - 1 ? 0 : prev + 1);
  };
  
  const prevSlide = () => {
    setActiveSlide(prev => prev === 0 ? serviceSlides.length - 1 : prev - 1);
  };

  // Touch event handlers
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Solutions for <span className="text-primary">Every Brand</span>
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're scaling with authentic UGC or launching high-impact campaigns with top talent, we've got you covered.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl shadow-lg bg-secondary/10 mb-8"
            ref={slideRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative min-h-[500px] md:min-h-[600px] w-full flex items-center">
              {/* Service Slides */}
              {serviceSlides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 w-full h-full transition-opacity duration-500 flex flex-col md:flex-row ${activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                  <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-gray-700 mb-6">{slide.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-12">
                    <div className="h-full rounded-xl overflow-hidden bg-white">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous service</span>
            </Button>
            
            <div className="flex space-x-2">
              {serviceSlides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? "bg-primary scale-125" : "bg-gray-300"}`} onClick={() => setActiveSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
            
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full text-left">
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next service</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default ServicesSlideshow;
