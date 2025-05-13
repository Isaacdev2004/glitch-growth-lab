
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-secondary via-white to-accent">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 left-[15%] w-40 h-40 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-2xl"></div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute top-[30%] right-[25%] border-2 border-primary/30 w-16 h-16 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-[20%] left-[35%] border-2 border-primary/20 w-24 h-24 rounded-full"></div>
        <div className="hidden lg:block absolute top-[20%] left-[10%] w-8 h-8 bg-primary/10 rounded-md rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="lg:max-w-2xl">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Influencer Marketing Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative">
              Amplify Your Brand with <span className="relative inline-block">
                <span className="relative z-10 text-primary">Data-Driven</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-lg -z-0"></span>
              </span> Influencer Campaigns
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              From Nano-Influencer UGC to Premium Talent Partnerships – We Deliver Results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="px-6 py-6 text-lg relative overflow-hidden group">
                <Link to="/contact" className="flex items-center">
                  Book a Free Strategy Session 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0 sm:ml-2">
                <span className="inline-block h-1 w-1 rounded-full bg-primary mr-2"></span>
                No obligation, just pure value
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 hidden lg:block">
            <div className="relative">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-100 rounded-full"></div>
              
              {/* Stats floating around the circle */}
              <div className="absolute -left-10 top-1/4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <p className="font-bold text-primary text-xl">157%</p>
                <p className="text-xs text-gray-500">Avg. ROI</p>
              </div>
              
              <div className="absolute -right-5 top-1/3 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <p className="font-bold text-primary text-xl">5.2x</p>
                <p className="text-xs text-gray-500">Engagement</p>
              </div>
              
              <div className="absolute bottom-10 left-1/4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                <p className="font-bold text-primary text-xl">24K+</p>
                <p className="text-xs text-gray-500">Influencers</p>
              </div>
              
              {/* Central image placeholder */}
              <div className="h-80 w-80 rounded-full bg-gradient-to-br from-primary/10 to-purple-100 flex items-center justify-center mx-auto border border-gray-100">
                <div className="text-center">
                  <div className="font-bold text-2xl mb-1">Your Brand</div>
                  <div className="text-primary font-semibold">Amplified</div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
