import React, { useState, useEffect } from 'react';
import { ArrowRight, Tag, Loader2 } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

const categories = [
  'All Posts',
  'AI Strategy & Implementation',
  'AI for Small Businesses',
  'Project Management & Execution',
  'AI + Project Management',
  'Business Automation & Systems',
  'Frameworks & Tools',
  'Thought Leadership & Insights',
  'Case Studies & Use Cases',
  'Announcements & Milestones',
  'Resources & Guides',
  'AI Compliance & Governance',
];

const posts = [
  {
    title: "Your PMO Has a New Workforce. Is Your Governance Ready?",
    category: "AI + Project Management",
    date: "Apr 8, 2026",
    tags: ["Artificial Intelligence", "Project Management", "AI Project Management", "PMO", "AI Governance", "Future of Work", "AI Adoption", "Digital Transformation", "Responsible AI"],
    summary: "AI agents are no longer sitting on the sideline of your project workflows. They're scheduling, flagging risks, generating reports, and making resource decisions inside the systems your team depends on. But most organizations are still governing them like software subscriptions — no training protocols, no performance metrics, no oversight structure. That's not a technology gap. It's a governance vacuum. Here's a practical framework for treating AI agents like the workforce they've already become.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1775665226676-93rg79v6qdi.png",
    url: "https://theadeptpmgroup.com/blog/your-pmo-has-a-new-workforce",
  },
  {
    title: "How AI Tools Can Transform Your April Stress Into Strategic Success",
    category: "AI Strategy & Implementation",
    date: "Apr 1, 2026",
    tags: ["AI Strategy", "Artificial Intelligence", "Project Management", "Business Automation", "Operational Excellence", "AI Adoption", "Future of Work", "Digital Transformation"],
    summary: "Discover how AI project management tools can reduce work stress by up to 68% during Stress Awareness Month. Evidence-based strategies for calmer, more effective PM.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1775061895335-7i5peljnkz5.png",
    url: "https://theadeptpmgroup.com/blog/how-ai-tools-can-transform-your-april-stress-into-strategic-success",
  },
  {
    title: "AI Compliance: What Regulated Businesses Need to Know Right Now",
    category: "AI Compliance & Governance",
    date: "Mar 26, 2026",
    tags: ["AI Compliance", "AI Governance", "Regulated Industries", "Risk Management", "EU AI Act", "HITRUST", "Audit Trails"],
    summary: "2026 is the most consequential year for AI regulation in history. If your business operates in a regulated industry, here's what you need to know, what you need to do, and where the risk actually lives.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1774544551968-f2zgyg5pc9.png",
    url: "https://theadeptpmgroup.com/blog/ai-compliance-what-regulated-businesses-need-to-know-right-now",
  },
  {
    title: "The Hidden Cost of Disorganized Operations",
    category: "AI for Small Businesses",
    date: "Mar 18, 2026",
    tags: ["Artificial Intelligence", "AI Strategy", "AI Implementation", "Business Automation", "Small Business AI", "Operational Excellence", "Competitive Advantage"],
    summary: "Nobody decides to run a disorganized business. It happens one workaround at a time. Here's what it's actually costing you.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1773855913397-wp05a82lm0e.png",
    url: "https://theadeptpmgroup.com/blog/the-hidden-cost-of-disorganized-operations",
  },
  {
    title: "Why Most Businesses Fail at Automation",
    category: "Business Automation & Systems",
    date: "Mar 11, 2026",
    tags: ["Business Automation", "Small Business AI", "Competitive Advantage", "AI Implementation", "Operational Excellence"],
    summary: "Automation promises efficiency and scale, yet many businesses fail to see results. Discover the five most common automation mistakes and the framework successful companies use to automate the right way.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1773246851205-cgyyalr2r3i.png",
    url: "https://theadeptpmgroup.com/blog/why-most-businesses-fail-at-automation",
  },
  {
    title: "How AI Can Replace 5 Administrative Roles in a Small Business",
    category: "AI for Small Businesses",
    date: "Mar 4, 2026",
    tags: ["AI Strategy", "Operational Excellence", "Business Automation", "Small Business AI", "AI Implementation"],
    summary: "Hiring isn't the only way to scale. See how AI is quietly replacing five administrative roles small businesses can no longer afford to staff manually.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1772647210428-jzk4kqs473g.png",
    url: "https://theadeptpmgroup.com/blog/how-ai-can-replace-5-roles",
  },
  {
    title: "We Built an AI Compliance Officer for Georgia Medical Offices. Here's What We Found.",
    category: "AI Compliance & Governance",
    date: "Feb 25, 2026",
    tags: ["AI Compliance", "AI Strategy", "HIPAA Compliance", "Healthcare AI", "RBAC Security", "AI Governance", "Regulated Industries"],
    summary: "Most Georgia medical practices are already using AI, but very few are using it compliantly. This case study explains how we designed a jurisdiction-specific AI Compliance Officer to close the governance gap, reduce regulatory exposure, and deliver enterprise-level compliance infrastructure without the cost of a full-time hire.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1772035168283-7w4l0gwco6m.png",
    url: "https://theadeptpmgroup.com/blog/ai-compliance-officer-georgia-medical-practices",
  },
  {
    title: "Stop Waiting for the 'Right Time' to Use AI — Your Competitors Aren't",
    category: "AI Strategy & Implementation",
    date: "Feb 19, 2026",
    tags: ["Artificial Intelligence", "AI Strategy", "Small Business AI", "Digital Transformation", "AI Adoption", "Competitive Advantage"],
    summary: "A Practical AI Strategy Guide for Small Business Owners. The competitive window for early AI adoption is narrowing. Here's how to act with confidence before it closes.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1771533941126-1093i90uc2jg.jpg",
    url: "https://theadeptpmgroup.com/blog/stop-waiting",
  },
  {
    title: "AI Is No Longer a Pilot Project",
    category: "Thought Leadership & Insights",
    date: "Feb 11, 2026",
    tags: ["Digital Transformation", "Small Business AI", "AI Strategy", "AI Adoption"],
    summary: "AI has moved from experimentation to execution. Here's how serious organizations are embedding intelligence into their operating model.",
    image: null,
    url: "https://theadeptpmgroup.com/blog/ai-is-no-longer",
  },
  {
    title: "AI, Energy, and the Environment: Why This Conversation Matters More Than Ever",
    category: "Thought Leadership & Insights",
    date: "Feb 4, 2026",
    tags: ["AI Strategy", "Artificial Intelligence", "Responsible AI", "Sustainability", "Future of Work"],
    summary: "Artificial intelligence is transforming how we work and innovate, but it runs on real energy and water infrastructure. This piece explores the environmental impact of AI and what responsible, forward-thinking leadership looks like as adoption scales.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1770224790834-hdsleq16in.jpg",
    url: "https://theadeptpmgroup.com/blog/ai-energy-and-the-environment",
  },
  {
    title: "Turning AI Certification Into Real-World Business Impact",
    category: "AI Strategy & Implementation",
    date: "Jan 28, 2026",
    tags: ["AI Strategy", "AI Implementation", "AI Consultant", "Business Automation", "The Adept PM", "AI Adoption", "Operational Excellence"],
    summary: "I'm excited to share a recent milestone in my professional journey: I've officially earned my AI Consultant Certification. Here's what it means, what I learned, and how I'm putting it to work for clients.",
    image: "https://hwcymuxadccwaweasjjq.supabase.co/storage/v1/object/public/blog-images/featured/1769619019177-ltm7ujc01t.png",
    url: "https://theadeptpmgroup.com/blog/turning-ai-certification",
  },
];

const categoryColors = {
  "AI Strategy & Implementation": "bg-blue-100 text-blue-700",
  "AI for Small Businesses": "bg-purple-100 text-purple-700",
  "Project Management & Execution": "bg-green-100 text-green-700",
  "AI + Project Management": "bg-teal-100 text-teal-700",
  "Business Automation & Systems": "bg-orange-100 text-orange-700",
  "Frameworks & Tools": "bg-indigo-100 text-indigo-700",
  "Thought Leadership & Insights": "bg-rose-100 text-rose-700",
  "Case Studies & Use Cases": "bg-amber-100 text-amber-700",
  "Announcements & Milestones": "bg-lime-100 text-lime-700",
  "Resources & Guides": "bg-cyan-100 text-cyan-700",
  "AI Compliance & Governance": "bg-red-100 text-red-700",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await base44.entities.BlogPost.list('-created_date', 100);
        // Fallback to -created_date if date doesn't sort perfectly
        const sorted = data.sort((a,b) => new Date(b.date || b.created_date) - new Date(a.date || a.created_date));
        setPosts(sorted);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filtered = activeCategory === 'All Posts'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Insights & Updates
          </span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-6 leading-tight">
            The Adept PM Blog
          </h1>
          <p className="text-xl text-[#0d1f3c]/70 leading-relaxed">
            Expert insights on project management, leadership, and driving successful outcomes. Stay ahead with the latest strategies and best practices.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gray-100 px-6 py-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#0d1f3c] text-white border-[#0d1f3c]'
                    : 'bg-white text-[#0d1f3c]/70 border-gray-200 hover:border-[#0d1f3c] hover:text-[#0d1f3c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-6 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
             <div className="text-center py-24 text-[#0d1f3c]/50 text-lg"><Loader2 className="w-8 h-8 animate-spin mx-auto text-[#00b4a6]" /> Loading posts...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-[#0d1f3c]/50 text-lg">No posts in this category yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => {
                const Wrapper = Link;
                const wrapperProps = { to: `/Blog/${post.id}` };

                return (
                <Wrapper
                  key={post.id || i}
                  {...wrapperProps}
                  className="group bg-[#f8fbff] rounded-[2rem] overflow-hidden border border-[#0d1f3c]/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden bg-gradient-to-br from-[#e0eaf5] to-[#f8fbff] flex-shrink-0 relative">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#0d1f3c]/20 text-5xl font-light">A</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                      <span className="text-[#0d1f3c]/40 text-xs font-semibold">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0d1f3c] mb-3 leading-snug group-hover:text-[#00b4a6] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[#0d1f3c]/60 text-sm leading-relaxed flex-grow mb-6">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(post.tags || []).slice(0, 3).map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-medium text-[#0d1f3c]/50 bg-white border border-[#0d1f3c]/10 px-2.5 py-1 rounded-full shadow-sm">
                          <Tag className="w-2.5 h-2.5" /> {tag}
                        </span>
                      ))}
                      {(post.tags || []).length > 3 && (
                        <span className="text-[10px] font-medium text-[#0d1f3c]/40 px-2 py-1">+{(post.tags || []).length - 3} more</span>
                      )}
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-[#f97316] text-sm font-bold group-hover:gap-3 transition-all pt-4 border-t border-[#0d1f3c]/5">
                      Read full article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Wrapper>
              )})}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}