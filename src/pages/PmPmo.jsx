import React from 'react';
import { ArrowRight, Grid, Wrench, GraduationCap, GitMerge, Users } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';

export default function PmPmo() {
  const offerings = [
    { title: 'ADEPT Intelligence Framework™', desc: 'Our proprietary framework combines AI capabilities with proven project management methodologies to create intelligent, adaptive project systems that learn and improve over time.', icon: Grid },
    { title: 'AI-Powered PM Tools + Templates', desc: 'Streamlined templates and tools that leverage AI to simplify project management, from auto-generating project charters to predictive risk analysis and intelligent timeline estimation.', icon: Wrench },
    { title: 'PM Training Programs', desc: 'Comprehensive training that teaches project managers how to leverage AI in their daily workflows. From prompt engineering for PMs to AI-assisted reporting and analysis.', icon: GraduationCap },
    { title: 'PMO Modernization & Process Improvement', desc: 'Transform your PMO with AI-enabled processes, governance frameworks, and tools that increase efficiency while maintaining the rigor your organization needs.', icon: GitMerge },
    { title: 'Advisory Support', desc: 'Expert guidance for PMOs and project teams navigating AI adoption. We help you understand, evaluate, and implement AI solutions that fit your organizations maturity and goals.', icon: Users },
  ];

  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">Project Management & PMOs</span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Modernize Project Delivery with AI-Enabled PM Systems</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-10 leading-relaxed">
            Transform how your organization delivers projects with AI-powered tools, frameworks, and expert guidance designed for modern PMOs.
          </p>
          <a href="https://go.theadeptpmgroup.com/widget/bookings/pm-pmo-consult" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
            Book PM/PMO Consult <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#0d1f3c] mb-4">Comprehensive PM & PMO Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-[#f8fbff] p-8 rounded-3xl border border-[#0d1f3c]/5 hover:shadow-xl transition-shadow group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-[#00b4a6]" />
                </div>
                <h3 className="text-2xl font-medium text-[#0d1f3c] mb-4">{item.title}</h3>
                <p className="text-[#0d1f3c]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d1f3c] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">Built for Project Leaders</h2>
            <p className="text-white/70 text-lg">Whether you're leading a PMO or managing individual projects, we have solutions that fit your needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-medium mb-4 text-[#00b4a6]">Enterprise PMOs</h3>
              <p className="text-white/70">Organizations looking to modernize their project delivery capabilities and stay competitive in an AI-first world.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-medium mb-4 text-[#00b4a6]">Project Teams</h3>
              <p className="text-white/70">Teams seeking to improve efficiency, reduce administrative burden, and focus more time on strategic work.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-medium mb-4 text-[#00b4a6]">Individual PMs</h3>
              <p className="text-white/70">Project managers who want to upskill in AI and stay ahead of the curve in their careers.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
}