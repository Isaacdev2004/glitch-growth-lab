
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
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
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
