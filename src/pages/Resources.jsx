import React from 'react';
import { ArrowRight, BookOpen, PenTool as Tool, GraduationCap, Layout, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';

export default function Resources() {
  const resourceCategories = [
    {
      title: "AI Tools & Assistants",
      description: "Our recommended artificial intelligence tools for daily project management.",
      icon: Tool,
      items: [
        {
          name: "ChatGPT Plus",
          desc: "General-purpose AI assistant for writing, research, analysis, and problem-solving within project management workflows.",
          link: "https://chatgpt.com",
          tags: ["AI", "Productivity"]
        },
        {
          name: "Claude by Anthropic",
          desc: "Excellent for analyzing large documents, summarizing meeting notes, and writing complex project documentation.",
          link: "https://claude.ai",
          tags: ["AI", "Analysis"]
        },
        {
          name: "Perplexity AI",
          desc: "AI-powered research engine perfect for market analysis, vendor comparison, and technical feasibility studies.",
          link: "https://perplexity.ai",
          tags: ["Research", "AI"]
        }
      ]
    },
    {
      title: "Adept PM Resources",
      description: "Exclusive frameworks and tools developed by our team.",
      icon: BookOpen,
      items: [
        {
          name: "Free PM Notes + Action Tracker",
          desc: "An AI-powered notes and action item tracking system designed for project managers to streamline documentation.",
          link: "/PmNoteTools",
          tags: ["Free", "Template"]
        },
        {
          name: "The ADEPT Intelligence Framework™",
          desc: "Our proprietary project management framework consisting of five stages: Capture, Interpret, Predict, Align, and Protect.",
          link: "/AdeptFramework",
          tags: ["Framework", "Methodology"]
        },
        {
          name: "FoxMeyer Drugs Case Study",
          desc: "A detailed analysis of a $5B project failure, focusing on scope escalation, testing gaps, and consultant dependency.",
          link: "#",
          tags: ["Case Study", "Learning"]
        }
      ]
    },
    {
      title: "Project Management Platforms",
      description: "Enterprise and team collaboration software we trust.",
      icon: Layout,
      items: [
        {
          name: "Monday.com",
          desc: "Highly customizable work OS perfect for teams that need visual project tracking and automated workflows.",
          link: "https://monday.com",
          tags: ["Software", "Collaboration"]
        },
        {
          name: "ClickUp",
          desc: "All-in-one productivity platform that replaces multiple apps with one comprehensive workspace.",
          link: "https://clickup.com",
          tags: ["Software", "Planning"]
        },
        {
          name: "Smartsheet",
          desc: "Enterprise-grade work management platform offering powerful reporting and data synthesis capabilities.",
          link: "https://smartsheet.com",
          tags: ["Enterprise", "Management"]
        }
      ]
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#00b4a6]/10 text-[#00b4a6] px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Partner Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Recommended Resources</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            A curated collection of tools, services, and resources to help you streamline your project management and business operations.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            <strong className="text-[#0d1f3c]">Affiliate Disclosure:</strong> Some of the links on this page are affiliate links, which means we may earn a commission if you make a purchase through them. This comes at no additional cost to you and helps support our work. We only recommend products and services we genuinely believe can help you succeed.
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {resourceCategories.map((category, idx) => (
            <div key={idx} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#00b4a6]/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-[#00b4a6]" />
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-[#0d1f3c]">{category.title}</h2>
                  <p className="text-gray-500 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-[#f8fbff] rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#00b4a6]/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-[#00b4a6]" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, t) => (
                        <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#0d1f3c]/60 border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-medium text-[#0d1f3c] mb-3 group-hover:text-[#00b4a6] transition-colors">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-[#0d1f3c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">Looking for tailored recommendations?</h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Book a consultation and we'll evaluate your current tech stack, suggesting the right AI tools and PM platforms for your specific needs.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
            Book Tech Stack Review <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}