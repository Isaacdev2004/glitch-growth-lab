
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Simulate fetching post data
    const blogPosts = [
      {
        id: "1",
        title: "The Rise of Micro-Influencers: Why They Matter for Your Brand",
        content: `
          <p>In the ever-evolving landscape of influencer marketing, brands are discovering that bigger isn't always better. While celebrity endorsements and macro-influencers with millions of followers have dominated the space for years, a new trend is emerging that's proving to be more effective for many brands: micro-influencer marketing.</p>
          
          <h2>What are Micro-Influencers?</h2>
          
          <p>Micro-influencers typically have between 10,000 to 100,000 followers on their social media platforms. What they lack in reach, they make up for in engagement, authenticity, and targeted audience demographics.</p>
          
          <p>Unlike celebrities or macro-influencers whose audiences span diverse demographics and interests, micro-influencers often focus on specific niches. This specialization leads to highly engaged followers who trust their recommendations and value their expertise in particular areas.</p>
          
          <h2>Why Micro-Influencers Drive Better Results</h2>
          
          <p>The statistics speak for themselves: micro-influencers generate up to 60% higher engagement rates compared to macro-influencers. Their recommendations feel more like advice from a friend than a paid advertisement, leading to higher conversion rates and better ROI.</p>
          
          <p>Additionally, working with micro-influencers is often more cost-effective. While a single post from a celebrity might cost tens of thousands of dollars, brands can collaborate with multiple micro-influencers for the same budget, reaching diverse audience segments with more personalized content.</p>
          
          <h2>Building Authentic Connections</h2>
          
          <p>The true power of micro-influencers lies in their authenticity. Their followers have chosen to engage with them because they value their opinions, style, or expertise. When these influencers partner with brands that align with their personal brand and values, the resulting content feels genuine rather than forced.</p>
          
          <p>This authenticity is increasingly important in today's market, where consumers are becoming more skeptical of traditional advertising. They crave real experiences and honest reviews from people they trust.</p>
          
          <h2>How to Incorporate Micro-Influencers Into Your Strategy</h2>
          
          <p>To effectively leverage micro-influencers for your brand:</p>
          
          <ul>
            <li>Look beyond follower count and focus on engagement metrics and audience demographics</li>
            <li>Seek influencers whose content style and values align with your brand</li>
            <li>Consider long-term partnerships rather than one-off posts</li>
            <li>Give influencers creative freedom to maintain authenticity</li>
            <li>Track performance metrics beyond impressions, such as engagement rates and conversion</li>
          </ul>
          
          <p>At Media Glitch, we specialize in identifying the perfect micro-influencers for your brand and developing strategic campaigns that deliver measurable results. Our data-driven approach ensures that every partnership is based on genuine alignment rather than superficial metrics.</p>
          
          <h2>The Future of Influence</h2>
          
          <p>As social media platforms continue to evolve and consumer behavior shifts, the influence of micro-influencers will only grow. Brands that recognize and embrace this trend now will be positioned for success in the increasingly personalized digital marketing landscape.</p>
          
          <p>Ready to explore how micro-influencers can transform your marketing strategy? Get in touch with our team to learn more about our approach to authentic influencer partnerships.</p>
        `,
        date: "May 8, 2025",
        readTime: "5 min read",
        category: "Strategy",
        author: "Jane Smith",
        authorRole: "Founder & CEO"
      },
      {
        id: "2",
        title: "Measuring ROI in Influencer Marketing: Beyond the Numbers",
        content: `
          <p>When it comes to influencer marketing, measuring success can be challenging. While metrics like impressions, reach, and engagement provide valuable insights, they don't tell the complete story of your campaign's impact. In this article, we'll explore comprehensive approaches to measuring ROI in influencer marketing.</p>
          
          <h2>The Challenge of Measurement</h2>
          
          <p>Unlike traditional digital advertising where clicks, conversions, and sales can be directly tracked, influencer marketing often operates higher in the marketing funnel. It builds awareness, shapes perception, and establishes credibility in ways that aren't always immediately quantifiable.</p>
          
          <p>This doesn't mean you can't measure its impact—it simply requires a more nuanced approach that considers both quantitative and qualitative metrics.</p>
          
          <h2>Quantitative Metrics That Matter</h2>
          
          <p>Beyond basic engagement metrics, consider tracking:</p>
          
          <ul>
            <li><strong>Conversion Rate:</strong> How many followers took desired actions after seeing influencer content</li>
            <li><strong>Referral Traffic:</strong> Increases in website visitors from social platforms where influencers are active</li>
            <li><strong>Sales Attribution:</strong> Direct sales from tracking links, affiliate codes, or custom UTM parameters</li>
            <li><strong>Customer Acquisition Cost:</strong> How influencer-generated customers compare to other channels</li>
            <li><strong>Audience Growth:</strong> New followers gained during and after campaigns</li>
          </ul>
          
          <p>These metrics provide concrete data points to evaluate campaign performance, but they're only part of the equation.</p>
          
          <h2>Qualitative Considerations</h2>
          
          <p>Some of the most valuable impacts of influencer marketing are less tangible but equally important:</p>
          
          <ul>
            <li><strong>Brand Sentiment:</strong> How perception shifts after influencer partnerships</li>
            <li><strong>Content Quality:</strong> The value of authentic content created by influencers</li>
            <li><strong>Relationship Building:</strong> The long-term value of influencer relationships</li>
            <li><strong>Audience Insights:</strong> Valuable feedback and consumer behavior patterns</li>
          </ul>
          
          <p>These qualitative elements contribute significantly to your brand's overall digital presence and market position.</p>
          
          <h2>Setting Clear Campaign Objectives</h2>
          
          <p>Effective measurement starts with clearly defined goals. Before launching any influencer campaign, ask:</p>
          
          <ul>
            <li>Are we primarily focused on awareness, consideration, or conversion?</li>
            <li>What specific metrics will indicate success for this particular objective?</li>
            <li>How does this campaign fit into our broader marketing strategy?</li>
            <li>What is our benchmark for success based on previous campaigns or industry standards?</li>
          </ul>
          
          <p>By establishing clear objectives from the outset, you create a framework for meaningful measurement.</p>
          
          <h2>Advanced Measurement Techniques</h2>
          
          <p>To gain deeper insights into influencer campaign performance:</p>
          
          <ul>
            <li><strong>A/B Testing:</strong> Compare different influencer approaches to identify what resonates best</li>
            <li><strong>Brand Lift Studies:</strong> Measure changes in awareness, consideration, and preference</li>
            <li><strong>Customer Journey Analysis:</strong> Track how influencer touchpoints contribute to conversions</li>
            <li><strong>Social Listening:</strong> Monitor broader conversation impacts around your brand</li>
          </ul>
          
          <p>These approaches provide a more comprehensive understanding of how influencer marketing affects your brand ecosystem.</p>
          
          <h2>The Long-Term View</h2>
          
          <p>Perhaps the most overlooked aspect of influencer ROI is its compounding value over time. Unlike paid advertising that stops delivering the moment you stop paying, influencer content continues to exist, driving engagement and conversions long after a campaign officially ends.</p>
          
          <p>Additionally, sustained influencer relationships build credibility that increases with each authentic collaboration, creating lasting brand associations that pay dividends for years.</p>
          
          <h2>Your Measurement Strategy</h2>
          
          <p>At Media Glitch, we work with brands to develop custom measurement frameworks that align with their specific business objectives. Our approach combines robust analytics with strategic insight to deliver a complete picture of influencer marketing performance.</p>
          
          <p>Ready to develop a more sophisticated approach to measuring your influencer marketing ROI? Contact us to learn how our data-driven methodology can help you maximize and measure the impact of your influencer partnerships.</p>
        `,
        date: "May 2, 2025",
        readTime: "7 min read",
        category: "Analytics",
        author: "David Williams",
        authorRole: "Analytics Lead"
      },
      {
        id: "3",
        title: "How to Create Authentic Influencer Partnerships",
        content: `<p>This is placeholder content for the blog post about authentic influencer partnerships.</p>`,
        date: "April 25, 2025",
        readTime: "6 min read",
        category: "Partnerships",
        author: "Sarah Johnson",
        authorRole: "Head of Partnerships"
      },
      {
        id: "4",
        title: "The Impact of AI on Influencer Marketing",
        content: `<p>This is placeholder content for the blog post about AI in influencer marketing.</p>`,
        date: "April 18, 2025",
        readTime: "8 min read",
        category: "Innovation",
        author: "Michael Chen",
        authorRole: "Creative Director"
      },
      {
        id: "5",
        title: "Building a Long-Term Influencer Strategy",
        content: `<p>This is placeholder content for the blog post about long-term influencer strategy.</p>`,
        date: "April 10, 2025",
        readTime: "9 min read",
        category: "Strategy",
        author: "Jane Smith",
        authorRole: "Founder & CEO"
      },
      {
        id: "6",
        title: "Navigating Disclosure Requirements in Influencer Marketing",
        content: `<p>This is placeholder content for the blog post about disclosure requirements.</p>`,
        date: "April 3, 2025",
        readTime: "4 min read",
        category: "Compliance",
        author: "David Williams",
        authorRole: "Analytics Lead"
      }
    ];
    
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.id === id);
      setPost(foundPost || null);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Blog Post */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="flex items-center gap-2 hover:bg-gray-100">
              <Link to="/blog">
                <ArrowLeft size={16} />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>
          
          {/* Post Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                  <User size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar size={16} className="mr-1" />
                <span className="mr-4">{post.date}</span>
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Post Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
              <div className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            
            {/* Author Bio */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={28} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{post.author}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{post.authorRole}</p>
                  <p className="text-gray-600">
                    With years of experience in influencer marketing, {post.author.split(' ')[0]} specializes in creating 
                    authentic partnerships between brands and content creators that drive real business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts - This would be implemented in a full version */}
        </div>
      </article>
      
      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want more insights like this?
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest trends and strategies in influencer marketing.
            </p>
            <Button asChild size="lg">
              <Link to="/blog">
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
