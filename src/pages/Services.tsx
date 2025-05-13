
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Services = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "influencer-partnerships",
      title: "Influencer Partnerships",
      description: "Strategic collaborations between your brand and carefully selected influencers who align with your values and target audience.",
      features: [
        "Custom influencer selection based on brand alignment",
        "Authentic content creation and storytelling",
        "Strategic campaign planning and execution",
        "Comprehensive performance tracking",
        "Relationship management and nurturing"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Compelling, platform-optimized content that resonates with your target audience and drives engagement.",
      features: [
        "Platform-specific content strategies",
        "Visual storytelling and brand narrative development",
        "Video production and editing",
        "Photography and graphic design",
        "SEO-optimized content for maximum reach"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      id: "campaign-strategy",
      title: "Campaign Strategy",
      description: "Comprehensive, data-driven campaign strategies that align with your business objectives and maximize ROI.",
      features: [
        "Market and competitor analysis",
        "Target audience profiling",
        "Campaign objective setting and KPI development",
        "Multi-channel strategy planning",
        "Budget optimization and allocation"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and actionable insights to measure campaign impact and drive continuous improvement.",
      features: [
        "Real-time campaign monitoring",
        "Custom performance dashboards",
        "Engagement and conversion tracking",
        "ROI analysis and optimization recommendations",
        "Competitor benchmarking"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "brand-development",
      title: "Brand Development",
      description: "Strategic brand positioning and identity development to help you stand out in a crowded market.",
      features: [
        "Brand strategy and positioning",
        "Visual identity development",
        "Brand voice and messaging guidelines",
        "Brand story and narrative creation",
        "Brand consistency across channels"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "crisis-management",
      title: "Crisis Management",
      description: "Swift and effective response strategies to protect your brand reputation during challenging situations.",
      features: [
        "Crisis prevention planning",
        "Real-time monitoring and alerts",
        "Response strategy development",
        "Stakeholder communication management",
        "Post-crisis reputation recovery"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Innovative solutions designed to amplify your brand's voice and drive meaningful engagement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-secondary rounded-2xl p-8 relative">
                    <div className="absolute -top-8 -left-8 w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md text-primary">
                      {service.icon}
                    </div>
                    <div className="pt-8">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] bg-gray-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-300">{service.title}</span>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                <a href="/contact">Schedule a Consultation</a>
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
