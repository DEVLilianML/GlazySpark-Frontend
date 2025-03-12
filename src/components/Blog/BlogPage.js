import React, { useEffect } from "react";
import Header from "../Header"; // Import the global header
import { useParams, useNavigate } from "react-router-dom"; 
import BlogData from "./BlogData";
import "./Blog.css";


const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // Move inside the component

  const blog = BlogData.find((b) => b.slug === slug);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!blog) return <h2 className="not-found">Blog not found</h2>;

  return (
    <>
    <Header /> {/* Now header is fixed on this page too */}
    <div className="page-overall">
      {/* Blog Content */}
      <div className="blog-writeup">
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-content">{blog.content}</p>
      </div>
       

      {/* Tech Updates Section */}
      <div className="techy-news">
        <h1>Tech Trends Daily</h1>
        <p>Stay updated with the latest in technology.</p>
        <div className="techy-posts">
          <h2> AI-Powered Websites: The Future of Digital Business</h2>
          <p>Artificial Intelligence (AI) is revolutionizing how businesses operate online. From AI chatbots to smart website automation, businesses can now offer personalized experiences to customers.</p>
          <h3>Why It Matters for You:</h3>
          <ul>
            <li>AI-powered websites can boost engagement and increase sales.</li>
            <li>Automating responses can save time and reduce costs.</li>
            <li>AI-driven analytics help businesses understand customer behavior better.</li>
          </ul>
          <p>Is your website ready for the AI revolution? If not, we can help! </p>
        </div>
        <div className="techy-posts">
          <h2>The Creator Economy Boom: How People Are Making Millions Online</h2>
          <p>More people are quitting traditional jobs to become full-time content creators, influencers, and digital entrepreneurs.</p>
          <h3>Why This Matters:</h3>
          <ul>
            <li>YouTube, TikTok, and Substack have become alternative career paths.</li>
            <li>Some influencers make six figures through brand deals and sponsorships.</li>
            <li>The competition is tough, and standing out requires strategy.</li>
          </ul>
          <h3>How to Succeed in the Creator Economy:</h3>
          <ul>
            <li>Find your niche and create valuable content consistently.</li>
            <li>Engage with your audience and build a loyal community.</li>
            <li>Monetize through sponsorships, merchandise, and exclusive content.</li>
          </ul>
          <p>Is being an influencer a sustainable career, or just a passing trend? Let us know your thoughts! 🌟</p>
        </div>
        <div className="techy-posts">
          <h2>The Future of 5G and Beyond – How Faster Internet is Changing the World</h2>
          <p>5G technology is revolutionizing the way we connect, work, and communicate. With ultra-fast speeds and low latency, it’s unlocking new possibilities worldwide.</p>
          
          <h3>Why This Matters:</h3>
          <ul>
            <li>5G enables faster internet speeds —100x faster than 4G.</li>
            <li>It powers smart cities, self-driving cars, and IoT (Internet of Things).</li>
            <li>Better connectivity will boost remote work, streaming, and gaming.</li>
          </ul>

          <h3>What’s Next? 6G is Coming! </h3>
          <p>Even before 5G is fully implemented, researchers are working on 6G, which is expected to be 100x faster than 5G and improve global connectivity even in remote areas.</p>

          <h3>Will 5G Change the Internet Forever?</h3>
          <p>Many experts believe that 5G and future networks will shape the global digital economy, bringing new opportunities for businesses, content creators, and consumers worldwide.</p>
          
          <p>What do you think? Is the world ready for 5G and beyond? 🌍</p>
        </div>
        <div className="techy-postblog">
           <h2>Read our Latest Blog Posts</h2>
          <ul>
           <li><a href="/blog/can-ai-replace-web-developers">Can AI Replace Web Developers?</a></li>
           <li><a href="/blog/professional-websites-lagos-and-beyond">How to Get a Professional Website</a></li>
           <li><a href="/blog/how-nigerians-can-earn-dollars-online">How to earn in Dollars</a></li>
           <li><a href="/blog/how-to-use-social-media-for-global-customers">Learn how to Get More Customers</a></li>
           <li><a href="/blog/how-to-attract-more-customers-globally-with-seo-optimized-web-design">SEO-Optimized Web Design in 2025</a></li>
           <li><a href="/blog/best-animation-software-beginners-2025">Animation Software for Beginners</a></li>
         </ul>
        </div>
      </div>
    </div>
    
    {/* Back to Blog Button */}
    <button onClick={() => navigate(-1)} className="back-button">
          ← Back to Blogs
        </button>
    </>
  );
};

export default BlogPage;