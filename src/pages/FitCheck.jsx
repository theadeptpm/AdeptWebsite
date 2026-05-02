import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactSection from '../components/home/ContactSection';
import { Link } from 'react-router-dom';

export default function FitCheck() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">60-Second Fit Check</span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Find the Right Path for You</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-16 leading-relaxed">
            Not sure whether you need Business AI solutions or PMO modernization? Take our quick assessment to find the perfect fit.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Link to="/BusinessAI" className="bg-white p-10 rounded-[2.5rem] border border-[#0d1f3c]/10 hover:border-[#00b4a6] hover:shadow-xl transition-all group block">
              <h3 className="text-3xl font-medium text-[#0d1f3c] mb-6 group-hover:text-[#00b4a6] transition-colors">I want to grow my business</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Automate lead capture</li>
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Implement Voice AI</li>
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Streamline booking</li>
              </ul>
              <div className="font-semibold text-[#f97316] flex items-center gap-2 group-hover:gap-4 transition-all">Explore Business AI <ArrowRight className="w-4 h-4" /></div>
            </Link>
            
            <Link to="/PmPmo" className="bg-white p-10 rounded-[2.5rem] border border-[#0d1f3c]/10 hover:border-[#00b4a6] hover:shadow-xl transition-all group block">
              <h3 className="text-3xl font-medium text-[#0d1f3c] mb-6 group-hover:text-[#00b4a6] transition-colors">I manage projects/teams</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Improve PMO efficiency</li>
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Integrate AI PM tools</li>
                <li className="flex items-center gap-3 text-[#0d1f3c]/80"><CheckCircle className="w-5 h-5 text-[#00b4a6]" /> Upskill my project team</li>
              </ul>
              <div className="font-semibold text-[#f97316] flex items-center gap-2 group-hover:gap-4 transition-all">Explore PM & PMO <ArrowRight className="w-4 h-4" /></div>
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}