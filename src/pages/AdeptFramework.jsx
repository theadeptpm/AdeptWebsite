import React from 'react';
import { ArrowRight, FolderOpen, RefreshCw, TriangleAlert, TrendingDown, LayoutGrid, CheckCircle2, ChevronRight, BarChart3, Database, ShieldAlert, Cpu } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';

export default function AdeptFramework() {
  const problems = [
    { title: 'Siloed Documentation', desc: 'Lessons learned, risk registers, and post-mortems live in separate repositories and never connected, rarely consulted.', icon: FolderOpen },
    { title: 'Repeated Mistakes', desc: 'The same failure patterns recur across projects because historical insights aren\'t accessible when decisions are made.', icon: RefreshCw },
    { title: 'Missed Warning Signs', desc: 'Early indicators exist in meeting notes and status reports, but without synthesis, they don\'t surface until it\'s too late.', icon: TriangleAlert },
    { title: 'Lost Institutional Knowledge', desc: 'When team members leave, critical context and pattern recognition disappear—the organization forgets what it learned.', icon: TrendingDown },
  ];

  const pillars = [
    { name: 'Capture™', subtitle: 'Structured Signal Ingestion', desc: 'Systematically collect project signals from lessons learned, risk registers, status reports, and post-mortems into a unified intelligence layer.', icon: Database },
    { name: 'Interpret™', subtitle: 'AI-Driven Pattern Analysis', desc: 'Apply AI analysis to identify recurring patterns, correlations, and warning signs that manual review would miss across your project portfolio.', icon: Cpu },
    { name: 'Predict™', subtitle: 'Forward-Looking Insights', desc: 'Transform historical patterns into predictive intelligence. Know which current projects carry the DNA of past failures.', icon: BarChart3 },
    { name: 'Align™', subtitle: 'Strategy-Execution Connection', desc: 'Bridge the gap between strategic intent and project reality. Surface misalignments before they derail outcomes.', icon: LayoutGrid },
    { name: 'Protect™', subtitle: 'Early Warning Systems', desc: 'Monitor active projects against identified risk patterns. Escalate concerns to executives with evidence, not gut feelings.', icon: ShieldAlert },
  ];

  const outcomes = [
    'Evidence-Based Escalation',
    'Portfolio Visibility',
    'Predictive Capability',
    'Institutional Memory',
    'Faster Decisions',
    'Executive Clarity'
  ];

  return (
    <div className="">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0d1f3c] to-[#1a3a6c] pt-40 md:pt-48 pb-24 px-6 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00b4a6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f97316]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Cpu className="w-4 h-4 text-[#00b4a6]" />
            <span className="text-sm font-medium text-white/90 uppercase tracking-wider">AI-Powered Project Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium mb-8 leading-tight">
            Stop Repeating the Same Failures.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4a6] to-[#f97316]">Start Learning from Every Project.</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
            The ADEPT Intelligence Framework™ transforms your existing project documentation into actionable insights by revealing the patterns, risks, and warning signs hiding in plain sight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
              Request Your Free Audit <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/10">
              See How It Works
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div>
              <div className="text-4xl font-medium text-[#00b4a6] mb-2">70%</div>
              <p className="text-sm text-white/60">of project failures show warning signs 3-12 months before collapse</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#00b4a6] mb-2">100%</div>
              <p className="text-sm text-white/60">of analyzed failures had documented indicators that weren't synthesized</p>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#00b4a6] mb-2">$500M+</div>
              <p className="text-sm text-white/60">in losses from a single project failure (FoxMeyer case study)</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#f97316] uppercase tracking-wider mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6">Your Project Data Is Rich with Insights, But Trapped in Silos</h2>
            <p className="text-lg text-[#0d1f3c]/70">Most PMOs have the data they need. They just can't access what it's telling them.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center shrink-0">
                    <prob.icon className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#0d1f3c] mb-3">{prob.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Framework Pillars */}
      <section id="how-it-works" className="py-24 px-6 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#00b4a6] uppercase tracking-wider mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6">The ADEPT Intelligence Framework™</h2>
            <p className="text-lg text-[#0d1f3c]/70">Five integrated pillars that transform dormant documentation into decision-ready intelligence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#00b4a6]/10 hover:border-[#00b4a6]/30 hover:shadow-lg transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-50 leading-none -mt-4 -mr-4 pointer-events-none select-none">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#00b4a6]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-7 h-7 text-[#00b4a6]" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#0d1f3c] mb-1">{pillar.name}</h3>
                  <div className="text-[#00b4a6] text-sm font-medium mb-4">{pillar.subtitle}</div>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-[#0d1f3c] to-[#1a3a6c] p-8 rounded-3xl text-white flex flex-col justify-center">
              <h3 className="text-2xl font-medium mb-4">Outcomes Delivered</h3>
              <ul className="space-y-3">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00b4a6] shrink-0" />
                    <span className="text-white/90">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#fffbf0] rounded-[3rem] p-10 md:p-16 border border-amber-100 relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0d1f3c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10">
              <div className="mb-10 text-center">
                <span className="text-sm font-semibold text-[#f97316] uppercase tracking-wider mb-2 block">Pattern Detection in Action</span>
                <h2 className="text-3xl md:text-4xl font-medium text-[#0d1f3c]">What the Framework Reveals</h2>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-medium text-[#0d1f3c] mb-4">Case Study: FoxMeyer Drugs – $5B to Bankruptcy</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  A $5 billion pharmaceutical distributor destroyed by an ERP implementation. Our framework analysis revealed that every critical failure indicator was documented months before collapse. <strong className="text-[#0d1f3c] font-semibold">The warning signs weren't hidden. They were siloed.</strong>
                </p>
                
                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-[#f97316]">
                    <h4 className="text-lg font-medium text-[#0d1f3c] mb-2">Scope Escalation</h4>
                    <p className="text-gray-600">UHC contract added post-initiation, increasing transaction volume requirements 42x beyond tested capacity.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-[#00b4a6]">
                    <h4 className="text-lg font-medium text-[#0d1f3c] mb-2">Testing Gap</h4>
                    <p className="text-gray-600">System could process 10,000 orders/night vs. 420,000 required. Documented but not escalated.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-[#0d1f3c]">
                    <h4 className="text-lg font-medium text-[#0d1f3c] mb-2">Consultant Dependency</h4>
                    <p className="text-gray-600">50+ consultants with high turnover and minimal knowledge transfer was flagged in project reviews but unaddressed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 px-6 bg-[#0d1f3c] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#00b4a6] uppercase tracking-wider mb-4 block">The Process</span>
            <h2 className="text-4xl font-medium mb-6">From Documents to Decisions in Four Steps</h2>
            <p className="text-lg text-white/70">We work with what you already have. No new systems. No additional data collection.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Document Collection', desc: 'Share your existing project documentation like lessons learned registers, risk logs, post-mortems, and close-out reports. Most PMOs have 80% of what we need already.' },
              { title: 'AI-Powered Analysis', desc: 'Our framework processes your documentation through the five ADEPT pillars, identifying patterns, correlations, and warning signs that manual review would miss.' },
              { title: 'Intelligence Synthesis', desc: 'We synthesize findings into an Executive Intelligence Briefing with concrete patterns, specific risks, and actionable recommendations tailored to your organization.' },
              { title: 'Implementation Support', desc: 'Receive a roadmap for embedding intelligence practices into your PMO operations, including early warning indicators to monitor on active projects.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-light text-white/10 mb-6">{i + 1}</div>
                <h3 className="text-xl font-medium mb-3 text-white">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#f8fbff] to-[#e0eaf5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6 leading-tight">See What Your Project Data Is Trying to Tell You</h2>
          <p className="text-xl text-[#0d1f3c]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary Lessons Learned Intelligence Audit. We'll analyze a sample of your project documentation and show you the patterns hiding in your data, no commitment required.
          </p>
          <div className="flex flex-col items-center justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg mb-6">
              Request Your Free Audit <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm font-medium text-[#0d1f3c]/60">30-minute consultation • Sample analysis included • No obligation</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}