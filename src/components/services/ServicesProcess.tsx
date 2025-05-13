
const ServicesProcess = () => {
  return (
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
            <ProcessStep 
              number={1} 
              title="Discovery & Strategy" 
              description="We begin by understanding your brand, goals, and target audience. From there, we develop a customized strategy aligned with your objectives."
            />
            
            <ProcessStep 
              number={2} 
              title="Planning & Creation" 
              description="We identify the right influencers, develop compelling content strategies, and plan campaign execution timelines."
            />
            
            <ProcessStep 
              number={3} 
              title="Execution & Monitoring" 
              description="We launch your campaign and closely monitor performance in real-time, making adjustments as needed to maximize impact."
            />
            
            <ProcessStep 
              number={4} 
              title="Analysis & Optimization" 
              description="We analyze campaign performance, provide detailed reports, and offer insights for future optimization and continued growth."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
          {number}
        </div>
      </div>
      <div className="md:w-3/4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesProcess;
