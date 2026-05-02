import React from 'react';
import { Check } from 'lucide-react';

export default function PmNoteTools() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">PM Note Tools</span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Choose Your PM Note Plan</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-10 leading-relaxed">
            Transform your meeting notes into actionable project insights with AI-powered analysis. Extract action items, identify risks, track dependencies, and keep your projects on track.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="border border-[#0d1f3c]/10 rounded-[2.5rem] p-10 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-medium text-[#0d1f3c] mb-2">Free</h3>
            <p className="text-gray-500 mb-6">For project managers getting started</p>
            <div className="text-6xl font-bold text-[#0d1f3c] mb-8">$0<span className="text-lg font-normal text-gray-500"> forever</span></div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Up to 3 projects</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Basic meeting notes processing</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Action item extraction</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> CSV & Markdown export</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Email support</li>
            </ul>
            
            <button className="w-full py-4 rounded-full border-2 border-[#0d1f3c] text-[#0d1f3c] font-semibold hover:bg-[#0d1f3c] hover:text-white transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-[#0d1f3c] rounded-[2.5rem] p-10 shadow-2xl text-white flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-8 right-8 bg-[#f97316] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <h3 className="text-3xl font-medium mb-2">Premium</h3>
            <p className="text-white/70 mb-6">For project managers who demand excellence</p>
            <div className="text-6xl font-bold mb-8">$29<span className="text-lg font-normal text-white/70"> /month</span></div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Unlimited projects</li>
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> AI-powered meeting analysis</li>
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Action items, risks & dependencies</li>
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Export to PDF, Excel, Word, PowerPoint</li>
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Advanced analytics dashboard</li>
              <li className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Priority support</li>
            </ul>
            
            <button className="w-full py-4 rounded-full bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}