
import { ReactNode } from "react";
import { Users, BarChart, ArrowRight, LayoutList, Briefcase, Settings } from "lucide-react";
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
    icon: createIcon(Users)
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
    icon: createIcon(ArrowRight)
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
    icon: createIcon(BarChart)
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
    icon: createIcon(LayoutList)
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
    icon: createIcon(Briefcase)
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
    icon: createIcon(Settings)
  }
];
