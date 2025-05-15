
import { LineChart, Users, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DifferentiatorSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Us <span className="text-primary">Different</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our unique approach combines technology, relationships, and dedicated support
            to deliver exceptional results for your brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Data-Backed Strategies */}
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-primary/10 rounded-full">
                <LineChart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Backed Strategies</h3>
              <p className="text-gray-600">
                We don't guess – our AI tools predict campaign performance before launch.
              </p>
            </CardContent>
          </Card>
          
          {/* Exclusive Influencer Network */}
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-primary/10 rounded-full">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Influencer Network</h3>
              <p className="text-gray-600">
                Access 10,000+ pre-vetted creators across niches like gaming, beauty, and tech.
              </p>
            </CardContent>
          </Card>
          
          {/* Dedicated Support */}
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-primary/10 rounded-full">
                <HeartHandshake className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Your success manager handles everything – no more agency runaround.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
