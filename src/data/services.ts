
import { ReactNode } from "react";
import { Users, BarChart, Settings, ArrowRight, Briefcase, LayoutList } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

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
    icon: <Users size={24} />
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
    icon: <ArrowRight size={24} />
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
    icon: <BarChart size={24} />
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
    icon: <LayoutList size={24} />
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
    icon: <Briefcase size={24} />
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
    icon: <Settings size={24} />
  },
];
