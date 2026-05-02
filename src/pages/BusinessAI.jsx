import React from 'react';
import { ArrowRight, Phone, MessageCircle, Calendar, Mail, Cpu, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import ContactSection from '../components/home/ContactSection';

export default function BusinessAI() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does it take to implement Voice AI?",
      answer: "Most implementations take between 2 to 4 weeks, depending on the complexity of your call flows and existing systems. We work quickly to ensure minimal disruption to your operations."
    },
    {
      question: "Do I need technical knowledge to use these tools?",
      answer: "Not at all. We handle all the technical heavy lifting, from initial setup to ongoing optimization. We deliver a fully functional, ready-to-use system and train your team on how to use it."
    },
    {
      question: "What platforms do you integrate with?",
      answer: "Our AI systems can integrate with almost any modern software, including major CRMs (Salesforce, HubSpot, GoHighLevel), calendar applications, email platforms, and custom internal tools via API."
    },
    {
      question: "What's the typical ROI for business AI automation?",
      answer: "While results vary by industry, most clients see a positive return on investment within the first 60 days. This comes from recovering missed opportunities, saving hundreds of administrative hours, and increasing overall conversion rates."
    },
    {
      question: "Can I try before committing to a full implementation?",
      answer: "Yes, we often start with a proof-of-concept or a phased rollout. This allows you to experience the value and reliability of the AI systems before committing to a full-scale deployment."
    }
  ];

  const offerings = [
    { title: 'Voice AI Receptionist', desc: 'Never miss a call again. Our AI-powered voice receptionist handles inbound calls 24/7, answers questions, and routes callers to the right person—all while sounding natural and professional.', icon: Phone },
    { title: 'Conversational AI Lead Qualification', desc: 'Engage leads instantly via chat or SMS. Our conversational AI qualifies prospects, answers common questions, and schedules appointments—so you can focus on closing deals.', icon: MessageCircle },
    { title: 'Appointment Booking & Routing', desc: 'Streamline your scheduling with intelligent booking systems that integrate with your calendar, handle rescheduling, and route appointments to the right team members.', icon: Calendar },
    { title: 'SMS/Email Automation', desc: 'Build powerful automation workflows that nurture leads, send reminders, and keep customers engaged—all running on autopilot while you sleep.', icon: Mail },
    { title: 'Custom AI Solutions', desc: 'Need something unique? We design and implement custom AI solutions tailored to your specific business challenges using the latest AI technologies.', icon: Cpu },
  ];

  return (
    <div className="">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] pt-40 md:pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">AI for Businesses</span>
          <h1 className="text-5xl md:text-6xl font-medium text-[#0d1f3c] mb-8 leading-tight">Automate Growth with Voice AI + Conversational AI</h1>
          <p className="text-xl text-[#0d1f3c]/80 mb-10 leading-relaxed">
            Never miss a lead. Never miss a call. We build intelligent automation systems that engage customers, qualify leads, and book appointments—24/7.
          </p>
          <a href="https://go.theadeptpmgroup.com/widget/bookings/business-ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
            Book Business Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#0d1f3c] mb-4">AI Solutions Built for Real Business Results</h2>
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

      {/* Process */}
      <section className="py-24 px-6 bg-[#0d1f3c] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">How It Works</h2>
            <p className="text-white/70 text-lg">A proven 3-step process to transform your operations with AI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-light text-[#00b4a6] mb-6">1</div>
              <h3 className="text-2xl font-medium mb-4">Assess</h3>
              <p className="text-white/70">We analyze your current workflows, identify automation opportunities, and map out a clear path to AI-powered efficiency.</p>
            </div>
            <div>
              <div className="text-6xl font-light text-[#00b4a6] mb-6">2</div>
              <h3 className="text-2xl font-medium mb-4">Build</h3>
              <p className="text-white/70">Our team designs and implements your custom AI solutions, integrating seamlessly with your existing tools and processes.</p>
            </div>
            <div>
              <div className="text-6xl font-light text-[#00b4a6] mb-6">3</div>
              <h3 className="text-2xl font-medium mb-4">Optimize</h3>
              <p className="text-white/70">We continuously monitor performance, refine automations, and scale successful solutions as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">FAQ</span>
            <h2 className="text-4xl font-medium text-[#0d1f3c] mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-[#0d1f3c] pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-[#0d1f3c] text-white' : 'bg-gray-100 text-[#0d1f3c]'}`}>
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0d1f3c] via-[#1a3a6c] to-[#0d1f3c] text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4a6]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Ready to Automate Your Growth?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how AI can transform your business operations. Book a free discovery call today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://go.theadeptpmgroup.com/widget/bookings/business-ai-discovery" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
              Book Business Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/Services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm border border-white/20">
              View All Services
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
}