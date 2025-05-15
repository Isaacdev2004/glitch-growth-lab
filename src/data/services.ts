
import { ReactNode } from "react";
import { Users, BarChart, ArrowRight, MessageSquare, TrendingUp, UserCog } from "lucide-react";
import React from "react"; // Import React to create elements

// Define the service interface
export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon: ReactNode;
}

// Function to create icon elements properly as React elements
// We're using a function to avoid using JSX in a .ts file
const createIcon = (IconComponent: any): ReactNode => {
  // Use React.createElement instead of JSX
  return React.createElement(IconComponent, { className: "w-12 h-12" });
};

// Export the services data
export const services: Service[] = [
  {
    id: "end-to-end-campaign-management",
    title: "End-to-End Campaign Management",
    description: "Comprehensive campaign management from concept to execution, with full optimization and reporting.",
    features: [
      "Strategic campaign planning and objective setting",
      "Creator selection and relationship management",
      "Content review and approval process",
      "Real-time performance tracking",
      "Detailed post-campaign analysis and insights"
    ],
    icon: createIcon(Users)
  },
  {
    id: "premium-creator-collaborations",
    title: "Premium Creator Collaborations",
    description: "Strategic partnerships with high-impact creators and celebrities who can significantly amplify your brand message.",
    features: [
      "Access to exclusive talent network",
      "Customized collaboration agreements",
      "Professional content production support",
      "Multi-platform promotion strategies",
      "Brand integration and storytelling guidance"
    ],
    icon: createIcon(TrendingUp)
  },
  {
    id: "ugc-nano-influencer-campaigns",
    title: "UGC & Nano-Influencer Campaigns",
    description: "Scalable campaigns leveraging authentic content from micro and nano creators with highly engaged audiences.",
    features: [
      "Large-scale creator recruitment",
      "Content brief development and training",
      "Mass deployment and coordination",
      "Performance analytics across creators",
      "Rights management for extended content usage"
    ],
    icon: createIcon(ArrowRight)
  },
  {
    id: "influencer-strategy",
    title: "Influencer Strategy",
    description: "Data-driven influencer marketing strategies tailored to your brand goals, audience, and industry landscape.",
    features: [
      "Market and competitor analysis",
      "Creator landscape mapping",
      "Channel and platform recommendations",
      "Content format and style guidelines",
      "Budget allocation and ROI projections"
    ],
    icon: createIcon(BarChart)
  },
  {
    id: "social-media-strategy",
    title: "Social Media Strategy",
    description: "Comprehensive social media strategies that align with your business objectives and maximize audience engagement.",
    features: [
      "Platform-specific content strategies",
      "Community building and engagement plans",
      "Content calendar development",
      "Trend analysis and opportunity identification",
      "Performance metrics and goal setting"
    ],
    icon: createIcon(MessageSquare)
  },
  {
    id: "talent-management",
    title: "Talent Management",
    description: "Full-service management for creators and influencers looking to grow their presence and brand partnerships.",
    features: [
      "Career development and personal branding",
      "Partnership negotiation and contract management",
      "Content strategy and production support",
      "Revenue stream diversification",
      "Long-term growth planning"
    ],
    icon: createIcon(UserCog)
  }
];
