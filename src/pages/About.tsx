
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Jane Smith",
      role: "Founder & CEO",
      bio: "With over 15 years of digital marketing experience, Jane leads our team with vision and innovation.",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Michael brings his artistic eye and strategic thinking to every campaign we develop.",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Partnerships",
      bio: "Sarah has cultivated relationships with top influencers across various industries.",
      image: "/placeholder.svg",
    },
    {
      name: "David Williams",
      role: "Analytics Lead",
      bio: "David transforms complex data into actionable insights that drive campaign success.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Our Agency</span>
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to revolutionize influencer marketing through authenticity, creativity, and data-driven strategies.
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/20 rounded-lg"></div>
            <p className="text-gray-600 text-lg italic">
              "We believe in breaking the conventional mold of influencer marketing. Our approach isn't just about connecting brands with influencers—it's about creating genuine connections that resonate with audiences and drive real growth."
            </p>
            <p className="mt-4 text-right font-medium">— Jane Smith, Founder & CEO</p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl h-[400px] relative z-10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-300">Our Story</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2018 — The Beginning</h3>
                  <p className="text-gray-600">
                    Founded with the vision to challenge traditional marketing approaches and create more authentic connections between brands and audiences.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2020 — Growth & Innovation</h3>
                  <p className="text-gray-600">
                    Expanded our services to include data analytics and developed proprietary tools to measure campaign effectiveness and ROI.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">2022 — Industry Recognition</h3>
                  <p className="text-gray-600">
                    Received multiple industry awards for our innovative campaigns and continued to build our network of influential partners.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Today & Beyond</h3>
                  <p className="text-gray-600">
                    Continuing to push boundaries, embrace new technologies, and help brands connect with audiences in meaningful ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The creative minds and strategic thinkers behind our successful campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-16 h-16 opacity-30"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide our work and define our approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We believe in genuine connections and transparent communications. No fake engagement, no inflated numbers.
              </p>
            </div>
            
            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously push boundaries and explore new approaches to help our clients stand out in a crowded digital space.
              </p>
            </div>
            
            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We measure success through tangible results and ROI. Every campaign is designed with clear, measurable objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Work Together</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's discuss how we can help your brand reach new heights through innovative influencer marketing strategies.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
