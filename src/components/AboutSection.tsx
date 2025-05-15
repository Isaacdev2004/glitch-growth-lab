
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-secondary rounded-2xl h-[400px] relative z-10 overflow-hidden">
                <img 
                  src="/lovable-uploads/c64ee5e6-889d-4125-973d-105018c2a033.png" 
                  alt="Farhan Malik - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 border-2 border-primary/30 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Disrupting</span> Traditional Influencer Marketing
            </h2>
            
            <p className="text-gray-600 mb-6">
              Founded by Farhan Malik on the principle of genuine connection and authentic engagement, Media Glitch 
              takes a different approach to influencer marketing. We see beyond the metrics and dive deep into 
              the relationships that power real brand growth.
            </p>
            
            <p className="text-gray-600 mb-8">
              With a background in mechanical engineering and entrepreneurship, Farhan combines analytical precision 
              with creative strategy to create influencer marketing campaigns that don't just generate buzz—they 
              drive measurable results and foster lasting brand-audience relationships.
            </p>
            
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
