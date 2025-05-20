
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-24 md:pt-28">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 lg:max-w-2xl">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Glitch</span> 
                <span className="animate-glitch text-primary" data-text="The System">The System</span>
                <span className="block">Grow your brand</span>
              </h1>
            </div>
            
            <div className="animate-fade-up-delay-1">
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Amplify Your Brand with Data-Driven Influencer Campaigns. From Nano-Influencer UGC to Premium Talent Partnerships – We Deliver Results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/influencer-network">Influencer Network</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/brand-agency">Brand/Agency</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden animate-fade-up-delay-1">
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-blue-500/20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square border-2 border-primary rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square border-2 border-primary rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/4472301d-78bd-474d-a8eb-8997c9cee054.png')" }}>
                {/* Background image is now applied via inline style */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
