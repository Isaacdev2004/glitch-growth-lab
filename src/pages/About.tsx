
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/AboutSection";
import { Link } from "react-router-dom";

const About = () => {
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
              About <span className="text-primary">Media Glitch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Breaking conventional influencer marketing with data-driven matchmaking and authentic relationships
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/20 rounded-lg"></div>
            <p className="text-gray-600 text-lg italic">
              "We cut through the noise of vanity metrics and pay-to-play algorithms, using data-driven matchmaking to pair brands with influencers who genuinely align with their values, audience, and goals."
            </p>
            <p className="mt-4 text-right font-medium">— Farhan Malik, Founder & CEO</p>
          </div>
        </div>
      </section>
      
      {/* Founder Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="/lovable-uploads/c64ee5e6-889d-4125-973d-105018c2a033.png" 
                    alt="Farhan Malik - Founder & CEO" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-40 h-40 border-2 border-primary/30 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Farhan Malik</h2>
              <p className="text-primary font-bold text-xl mb-6">Founder & CEO @ Media Glitch</p>
              
              <div className="space-y-6 text-gray-600">
                <p>I've always been obsessed with two things: meaningful connections and disrupting the status quo.</p>
                
                <p>As a mechanical engineer turned entrepreneur, I spent years mastering the art of solving complex problems—first with machinery at OGDCL, then by building Dispatch Geniuses, an offshore logistics company that streamlined truck dispatching for North American clients. But while scaling that business, I noticed a glaring gap: brands and influencers struggled to find authentic partnerships in a crowded, impersonal digital world.</p>
                
                <p>That's why I launched Media Glitch. We cut through the noise of vanity metrics and pay-to-play algorithms, using data-driven matchmaking to pair brands with influencers who genuinely align with their values, audience, and goals. No more wasted budgets. No more awkward collaborations. Just real relationships that drive ROI.</p>
                
                <p>Today, I blend engineering-grade precision with creative storytelling to turn influencer campaigns into growth engines. I'm not just another agency—I'm your partner in "glitching" outdated marketing playbooks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Work With Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Work With <span className="text-primary">Media Glitch</span>
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
                    <p className="text-gray-600">No hidden fees or black-box strategies. You'll always know exactly what's happening with your campaigns and why.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hyper-Relevant Matches</h3>
                    <p className="text-gray-600">AI tools + human intuition = perfect partnerships. We combine technology with deep industry knowledge for ideal brand-influencer matches.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Results You Can Measure</h3>
                    <p className="text-gray-600">Track engagement, conversions, and brand loyalty with our comprehensive reporting dashboards and analytics.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 text-center">
                <p className="text-xl font-bold mb-6">Let's rewrite the rules together.</p>
                <p className="text-2xl font-bold text-primary mb-8">Glitch the system. Grow your brand.</p>
                <Button size="lg" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Glitch the System</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's discuss how Media Glitch can transform your influencer marketing strategy and drive real results for your brand.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
