
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";

const FAQs = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      id: "general",
      label: "General Questions",
      questions: [
        {
          question: "How does influencer marketing work with your agency?",
          answer: "We handle everything from influencer vetting to campaign execution. Share your goals, and we'll match you with creators, manage contracts, and track performance."
        },
        {
          question: "What makes you different from other agencies?",
          answer: "We blend nano-influencer scalability with premium talent access. Plus, our AI-driven analytics ensure campaigns outperform benchmarks."
        }
      ]
    },
    {
      id: "campaign",
      label: "Campaign-Specific Questions",
      questions: [
        {
          question: "How much does a campaign cost?",
          answer: "Pricing depends on packages and scales based on creator tier and deliverables."
        },
        {
          question: "Can I choose the influencers?",
          answer: "Absolutely! You'll approve every creator from our curated shortlist or give us a name of the creator and we'll close them for you. We also provide audience demographics and past campaign data."
        },
        {
          question: "How long does a campaign take to launch?",
          answer: "Most campaigns go live in 7–10 days after onboarding. Complex projects (e.g., video production) may take 2–3 weeks."
        }
      ]
    },
    {
      id: "technical",
      label: "Technical & Compliance",
      questions: [
        {
          question: "Who owns the content created by influencers?",
          answer: "You retain full rights to repurpose UGC across ads, social media, and websites. We include this in all contracts."
        },
        {
          question: "How do you ensure influencers align with my brand values?",
          answer: "Our vetting process includes manual reviews of creators' past content and audience interactions."
        },
        {
          question: "Is my data secure?",
          answer: "Yes! We're GDPR-compliant and never share client data with third parties."
        }
      ]
    },
    {
      id: "results",
      label: "Results & Reporting",
      questions: [
        {
          question: "What metrics do you track?",
          answer: "We monitor engagement rate, conversions, impressions, and ROI."
        },
        {
          question: "What if a campaign underperforms?",
          answer: "We proactively adjust targeting or content mid-campaign. If goals aren't met, we offer complimentary optimizations on future projects."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Got Questions? <span className="text-primary">We've Got Answers</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with media glitch.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full mb-8">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6">
                {faqCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-6">{category.label}</h2>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Details? Let's Chat!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us via email <a href="mailto:hello@mediaglitch.com" className="text-primary font-medium">hello@mediaglitch.com</a> or fill out the form below and someone from our team will reach you in the next 24 hours.
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="Subject of your inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQs;
