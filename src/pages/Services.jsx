import React from 'react';
import { ArrowRight, Bot, Briefcase, Phone, MessageSquare, Calendar, Mail, Cpu, Target, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import ContactSection from '../components/home/ContactSection';

export default function Services() {
  return (
    <div className="">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Choose Your Path</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-10 leading-relaxed">
            We offer two distinct paths to help you leverage AI. Select the one that best fits your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Business AI Card */}
          <div className="bg-[#f8fbff] rounded-[2.5rem] border border-[#0d1f3c]/10 p-10 flex flex-col hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0d1f3c] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-medium text-[#0d1f3c]">AI for Businesses</h3>
            </div>
            
            <p className="text-[#0d1f3c]/80 text-lg mb-8 leading-relaxed">
              Automate customer engagement, streamline operations, and scale your business with intelligent AI systems built for SMBs.
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Phone className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Voice AI receptionist + inbound call handling</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><MessageSquare className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Conversational AI for lead qualification + follow-up</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Calendar className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Appointment booking + routing</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Mail className="w-5 h-5 text-[#00b4a6] mt-0.5" /> SMS/email automation workflows + pipelines</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Cpu className="w-5 h-5 text-[#00b4a6] mt-0.5" /> Custom AI solutions using other AI tech stacks</li>
            </ul>
            
            <div className="flex flex-col gap-4">
              <a href="https://go.theadeptpmgroup.com/widget/bookings/business-ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-colors w-full">
                Book Business Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/BusinessAI" className="inline-flex items-center justify-center gap-2 text-[#0d1f3c] hover:text-[#00b4a6] font-medium py-2 transition-colors w-full">
                See Business AI Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* PM & PMO Card */}
          <div className="bg-[#f8fbff] rounded-[2.5rem] border border-[#0d1f3c]/10 p-10 flex flex-col hover:shadow-xl transition-shadow group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#00b4a6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-medium text-[#0d1f3c]">Project Management & PMOs</h3>
            </div>
            
            <p className="text-[#0d1f3c]/80 text-lg mb-8 leading-relaxed">
              Modernize project delivery and PMO operations with AI-enabled tools, frameworks, and expert guidance.
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Cpu className="w-5 h-5 text-[#0d1f3c] mt-0.5" /> AI-powered PM tools + templates</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Target className="w-5 h-5 text-[#0d1f3c] mt-0.5" /> ADEPT Intelligence Framework™</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Briefcase className="w-5 h-5 text-[#0d1f3c] mt-0.5" /> PMO modernization + process improvement</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><BookOpen className="w-5 h-5 text-[#0d1f3c] mt-0.5" /> Training: teach PMs how to leverage AI</li>
              <li className="flex items-start gap-3 text-[#0d1f3c]/80"><Users className="w-5 h-5 text-[#0d1f3c] mt-0.5" /> Advisory support for PMOs and project teams</li>
            </ul>
            
            <div className="flex flex-col gap-4">
              <a href="https://go.theadeptpmgroup.com/widget/bookings/pm-pmo-consult" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#0d1f3c] hover:bg-[#00b4a6] text-white font-semibold px-8 py-4 rounded-full transition-colors w-full">
                Book PM/PMO Consult <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/PmPmo" className="inline-flex items-center justify-center gap-2 text-[#0d1f3c] hover:text-[#00b4a6] font-medium py-2 transition-colors w-full">
                Explore PM & PMO Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center max-w-2xl mx-auto bg-[#e0eaf5] p-10 rounded-[2rem]">
          <h3 className="text-2xl font-medium text-[#0d1f3c] mb-4">Not sure which path is right for you?</h3>
          <Link to="/FitCheck" className="inline-flex items-center gap-2 text-[#f97316] font-semibold hover:underline underline-offset-4">
            Take the 60-Second Fit Check <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <ContactSection />
    </div>
  );
}