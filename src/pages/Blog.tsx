
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationPrevious, 
  PaginationNext 
} from "@/components/ui/pagination";
import { Search, Calendar, Clock, Tag, User } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  
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

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/20 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">
              Our Blog
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Insights, strategies, and trends in influencer marketing.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border-none bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-all ${
                  category === selectedCategory 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 h-full min-h-[300px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-24 h-24 opacity-30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span>{filteredPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-1" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-2">
                      <Link to={`/blog/${filteredPosts[0].id}`} className="hover:text-primary transition-colors">
                        {filteredPosts[0].title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {filteredPosts[0].excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <User size={20} className="text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{filteredPosts[0].author}</p>
                        <p className="text-xs text-gray-500">{filteredPosts[0].authorRole}</p>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${filteredPosts[0].id}`} 
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium mb-4">No posts found</h3>
              <p className="text-gray-600 mb-8">Try changing your search or selecting a different category.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skip the first post if it's shown as featured */}
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={post.image} alt={post.title} className="w-16 h-16 opacity-30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Tag size={14} className="mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                          <User size={16} className="text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {/* Pagination - Using shadcn UI pagination component */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
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
              <Button type="submit" className="sm:flex-shrink-0">Subscribe</Button>
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
