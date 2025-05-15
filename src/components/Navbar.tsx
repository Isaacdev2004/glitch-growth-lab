
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Linkedin, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    { icon: <Instagram size={18} />, href: "https://instagram.com" },
    { icon: <Twitter size={18} />, href: "https://twitter.com" },
    { icon: <Facebook size={18} />, href: "https://facebook.com" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-md py-3"
          : "bg-gray-900 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl md:text-2xl text-primary">
            Media<span className="text-white">Glitch</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium text-white hover:text-primary transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Social Icons and CTA Button */}
        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 shadow-lg w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 py-2">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
