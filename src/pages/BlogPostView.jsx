import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Calendar, Tag, Loader2 } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';

export default function BlogPostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch posts and find the matching ID to avoid filter errors
        const allPosts = await base44.entities.BlogPost.list();
        const found = allPosts.find(p => p.id === id);
        if (found) {
          setPost(found);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="pt-40 pb-40 text-center flex flex-col items-center"><Loader2 className="w-8 h-8 animate-spin mb-4 text-[#00b4a6]" /> Loading post...</div>;
  if (!post) return <div className="pt-40 text-center">Post not found.</div>;

  return (
    <div className="min-h-screen pt-40 pb-24" style={{ background: '#fffaee' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/Blog" className="inline-flex items-center gap-2 text-[#00b4a6] hover:text-[#00b4a6]/80 mb-10 font-bold uppercase tracking-widest text-[11px] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#00b4a6]/10 text-[#00b4a6] border border-[#00b4a6]/20">
            {post.category}
          </span>
          <span className="text-[#0d1f3c]/50 text-sm font-medium flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> {post.date || new Date(post.created_date).toLocaleDateString()}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0d1f3c] mb-10 leading-tight">
          {post.title}
        </h1>
        
        {post.featured_image && (
          <div className="w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-14 shadow-lg shadow-[#0d1f3c]/5">
            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl shadow-[#0d1f3c]/5 border border-[#0d1f3c]/5">
          {post.content ? (
            <div 
              className="[&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-medium [&>h2]:text-[#0d1f3c] [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:leading-tight [&>h3]:text-2xl [&>h3]:font-medium [&>h3]:text-[#0d1f3c] [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:text-lg [&>p]:text-[#0d1f3c]/80 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:text-lg [&>li]:text-[#0d1f3c]/80 [&>li]:mb-3 [&>strong]:font-semibold [&>strong]:text-[#0d1f3c] [&>em]:italic [&>em]:text-[#0d1f3c]/70 [&>a]:text-[#00b4a6] [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-[#00b4a6]/80 [&>blockquote]:border-l-4 [&>blockquote]:border-[#00b4a6] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-[#0d1f3c]/70 [&>blockquote]:my-8" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          ) : (
            <p className="text-xl text-[#0d1f3c]/80 leading-relaxed">{post.summary}</p>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-[#0d1f3c]/10 flex flex-wrap gap-2.5">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d1f3c]/60 bg-[#f8fbff] border border-[#0d1f3c]/10 px-4 py-2 rounded-full hover:bg-[#00b4a6]/5 hover:text-[#00b4a6] hover:border-[#00b4a6]/20 transition-colors cursor-default">
                  <Tag className="w-3.5 h-3.5" /> {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}