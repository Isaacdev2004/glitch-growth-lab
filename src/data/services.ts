
import React from "react";
import type { ReactNode } from "react";

// Define the service interface
export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon: ReactNode;
}

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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
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
    )
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
    )
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
    )
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
    )
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
    )
  }
];
