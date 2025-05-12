
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FAQs = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is influencer marketing?",
          answer: "Influencer marketing is a form of social media marketing involving endorsements and product placements from individuals who have a dedicated social following and are viewed as experts within their niche. It leverages the trust that influencers have built with their audience to promote brands and products in an authentic way."
        },
        {
          question: "How is your agency different from others?",
          answer: "We take a disruptive approach to influencer marketing, focusing on authentic connections and data-driven strategies. We don't just match brands with influencers based on follower count; we create strategic partnerships that align with your brand values and resonate with your target audience. Our proprietary analytics tools also provide unprecedented insights into campaign performance and ROI."
        },
        {
          question: "What industries do you work with?",
          answer: "We work with clients across various industries including fashion, beauty, lifestyle, technology, food and beverage, travel, fitness, and more. Our diverse network of influencers allows us to create effective campaigns regardless of your industry or niche."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive suite of services including influencer partnerships, content creation, campaign strategy, analytics and reporting, brand development, and crisis management. Each service can be tailored to your specific needs and objectives."
        },
        {
          question: "Do you work with micro-influencers?",
          answer: "Yes, we work with influencers of all sizes, from micro-influencers to celebrities. We believe that the right influencer for your brand isn't always the one with the most followers, but the one whose audience aligns best with your target market and who can create authentic content that resonates with their followers."
        },
        {
          question: "Can you handle international campaigns?",
          answer: "Absolutely! We have experience managing international campaigns across multiple countries and languages. Our global network of influencers allows us to create localized content that resonates with audiences around the world."
        }
      ]
    },
    {
      category: "Process",
      questions: [
        {
          question: "How do you select influencers for a campaign?",
          answer: "Our influencer selection process involves a thorough analysis of various factors including audience demographics, engagement rates, content quality, brand alignment, and historical performance. We also conduct background checks to ensure that all influencers adhere to ethical standards and have genuine followers."
        },
        {
          question: "How long does a typical campaign take to execute?",
          answer: "The timeline varies depending on the scope and complexity of the campaign. A simple influencer partnership can be executed in as little as 2-4 weeks, while more comprehensive campaigns involving multiple influencers and content types might take 6-8 weeks from initial strategy to execution."
        },
        {
          question: "How do you measure campaign success?",
          answer: "We use a combination of metrics tailored to your specific goals. These might include engagement rates, reach, impressions, website traffic, conversion rates, sales, brand sentiment, and ROI. Our detailed reporting provides both quantitative data and qualitative insights about campaign performance."
        }
      ]
    },
    {
      category: "Investment",
      questions: [
        {
          question: "How much does it cost to work with your agency?",
          answer: "Our pricing is customized based on your specific needs and objectives. We offer various service packages starting from $5,000 per month for ongoing management, while individual campaigns typically start at $10,000. During our initial consultation, we'll discuss your goals and budget to create a tailored proposal."
        },
        {
          question: "Do you require long-term contracts?",
          answer: "We offer both project-based engagements and ongoing retainer relationships. While we find that clients achieve the best results with consistent, long-term influencer strategies, we understand that some businesses prefer to start with a single campaign. We're flexible and can accommodate different working arrangements."
        },
        {
          question: "What's the typical ROI for influencer marketing campaigns?",
          answer: "ROI varies significantly based on campaign objectives, industry, and execution. According to industry data, businesses earn an average of $5.78 for every dollar spent on influencer marketing. However, the true value extends beyond direct sales to include increased brand awareness, improved sentiment, and valuable content creation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our agency and influencer marketing.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                    {category.category} Questions
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const index = categoryIndex * 10 + faqIndex;
                      return (
                        <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                          >
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <svg
                              className={`w-5 h-5 transition-transform ${openFAQ === index ? 'transform rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          {openFAQ === index && (
                            <div className="p-6 pt-0 border-t border-gray-100">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Still Have Questions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have <span className="text-primary">Questions</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We're here to help! Contact our team for personalized assistance with your inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="mailto:info@influenceragency.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQs;
