
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Micro-Influencers: Why They Matter for Your Brand",
      excerpt: "Discover why micro-influencers with smaller, more engaged audiences can often deliver better results than celebrity endorsements.",
      date: "May 8, 2025",
      readTime: "5 min read",
      category: "Strategy",
      image: "/placeholder.svg",
      author: "Jane Smith",
      authorRole: "Founder & CEO"
    },
    {
      id: 2,
      title: "Measuring ROI in Influencer Marketing: Beyond the Numbers",
      excerpt: "Learn how to effectively measure the return on investment from your influencer campaigns, including both quantitative and qualitative metrics.",
      date: "May 2, 2025",
      readTime: "7 min read",
      category: "Analytics",
      image: "/placeholder.svg",
      author: "David Williams",
      authorRole: "Analytics Lead"
    },
    {
      id: 3,
      title: "How to Create Authentic Influencer Partnerships",
      excerpt: "Authenticity is key in influencer marketing. Explore strategies for building genuine connections between your brand and influencers.",
      date: "April 25, 2025",
      readTime: "6 min read",
      category: "Partnerships",
      image: "/placeholder.svg",
      author: "Sarah Johnson",
      authorRole: "Head of Partnerships"
    },
    {
      id: 4,
      title: "The Impact of AI on Influencer Marketing",
      excerpt: "Artificial intelligence is transforming how brands approach influencer marketing. Learn about the latest innovations and trends.",
      date: "April 18, 2025",
      readTime: "8 min read",
      category: "Innovation",
      image: "/placeholder.svg",
      author: "Michael Chen",
      authorRole: "Creative Director"
    },
    {
      id: 5,
      title: "Building a Long-Term Influencer Strategy",
      excerpt: "One-off campaigns have their place, but a long-term influencer strategy can deliver more sustainable results. Here's how to build one.",
      date: "April 10, 2025",
      readTime: "9 min read",
      category: "Strategy",
      image: "/placeholder.svg",
      author: "Jane Smith",
      authorRole: "Founder & CEO"
    },
    {
      id: 6,
      title: "Navigating Disclosure Requirements in Influencer Marketing",
      excerpt: "Stay compliant with the latest regulations and best practices for transparency in influencer partnerships.",
      date: "April 3, 2025",
      readTime: "4 min read",
      category: "Compliance",
      image: "/placeholder.svg",
      author: "David Williams",
      authorRole: "Analytics Lead"
    }
  ];

  const categories = [
    "All Categories",
    "Strategy",
    "Analytics",
    "Partnerships",
    "Innovation",
    "Compliance"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Insights, strategies, and trends in influencer marketing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={post.image} alt={post.title} className="w-16 h-16 opacity-30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                ←
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-primary text-white">
                1
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Our <span className="text-primary">Newsletter</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Stay updated with the latest insights, trends, and strategies in influencer marketing.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
