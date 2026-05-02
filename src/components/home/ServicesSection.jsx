import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, Phone, MessageCircle, Calendar, Mail, Cpu, Wrench, Grid, GitMerge, GraduationCap, Users, X, Quote, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 'business_ai',
    label: 'AI for Businesses',
    badge: 'AUTOMATE & SCALE',
    headline: 'Automate Your Operations with Intelligent AI Systems',
    description: 'We build custom AI systems that work around the clock — capturing leads, booking appointments, and running your workflows so your team can focus on growth.',
    bgColor: 'bg-[#0d1f3c]',
    cards: [
      { 
        title: 'Voice AI Receptionist', 
        desc: 'Inbound call handling with human-like conversational agents.', 
        icon: Phone,
        details: {
          caseStudy: "Reduced missed calls by 100% for a dental practice, capturing $15k/mo in previously lost revenue.",
          testimonial: "It sounds so human, our patients don't even realize they're talking to AI.",
          author: "Dr. Emily R.",
          cta: "Audit Your Calls"
        }
      },
      { 
        title: 'Conversational AI', 
        desc: 'Automated lead qualification and intelligent follow-up sequences.', 
        icon: MessageCircle,
        details: {
          caseStudy: "Automated 80% of lead qualification for a real estate agency, doubling agent productivity.",
          testimonial: "Our agents only talk to qualified leads now. It's a game changer.",
          author: "Mark S., Broker",
          cta: "Automate Your Leads"
        }
      },
      { 
        title: 'Appointment Booking', 
        desc: 'Smart routing and scheduling integrated directly with your calendar.', 
        icon: Calendar,
        details: {
          caseStudy: "Saved 20 hours/week of admin time for a consulting firm by automating scheduling.",
          testimonial: "No more email ping-pong. My calendar just fills up.",
          author: "Sarah L., Consultant",
          cta: "Streamline Scheduling"
        }
      },
      { 
        title: 'Workflow Automation', 
        desc: 'SMS and email automation workflows to pipeline management.', 
        icon: Mail,
        details: {
          caseStudy: "Connected CRM and Email tools to automatically nurture leads, increasing conversion by 25%.",
          testimonial: "The systems just work. We make money while we sleep.",
          author: "James T., E-commerce Owner",
          cta: "Build Your Workflow"
        }
      },
      { 
        title: 'Custom AI Solutions', 
        desc: 'Tailored artificial intelligence integrated across your tech stack.', 
        icon: Cpu,
        details: {
          caseStudy: "Built a custom knowledge base bot for an internal legal team, reducing research time by 40%.",
          testimonial: "It's like having a senior partner available 24/7.",
          author: "David K., General Counsel",
          cta: "Discuss Your Solution"
        }
      },
    ]
  },
  {
    id: 'pm_pmo',
    label: 'PM & PMO Services',
    badge: 'DELIVER & MODERNIZE',
    headline: 'Modernize Project Delivery with AI-Enabled Frameworks',
    description: 'From PMO buildouts to AI-powered project tools, we help teams deliver projects with more confidence, speed, and predictability.',
    bgColor: 'bg-[#f97316]',
    cards: [
      { 
        title: 'AI-Powered PM Tools', 
        desc: 'Next-generation templates and tools enhanced by artificial intelligence.', 
        icon: Wrench,
        details: {
          caseStudy: "Deployed AI risk assessment tools that predicted 90% of project delays before they happened.",
          testimonial: "We stopped firefighting and started planning.",
          author: "Rachel M., Program Director",
          cta: "Upgrade Your Toolkit"
        }
      },
      { 
        title: 'ADEPT Framework™', 
        desc: 'Our proprietary 5-step methodology for scaling AI capabilities.', 
        icon: Grid,
        details: {
          caseStudy: "Guided a Fortune 500 company through full AI adoption across their PMO in 6 months.",
          testimonial: "The framework gave us a clear roadmap in a chaotic landscape.",
          author: "Tom H., VP of Operations",
          cta: "Learn the Framework"
        }
      },
      { 
        title: 'PMO Modernization', 
        desc: 'Process improvement and structural upgrades for project management offices.', 
        icon: GitMerge,
        details: {
          caseStudy: "Restructured a legacy PMO, shifting from administrative oversight to strategic value delivery.",
          testimonial: "Our PMO is finally seen as a value driver, not a cost center.",
          author: "Lisa B., PMO Lead",
          cta: "Modernize Now"
        }
      },
      { 
        title: 'AI Training for PMs', 
        desc: 'Upskill your project managers to leverage AI for better delivery.', 
        icon: GraduationCap,
        details: {
          caseStudy: "Trained 50+ PMs on Generative AI, resulting in a 30% reduction in documentation time.",
          testimonial: "The most practical training we've ever had.",
          author: "Kevin J., HR Director",
          cta: "Train Your Team"
        }
      },
      { 
        title: 'Advisory Support', 
        desc: 'Expert guidance for PMOs and project teams navigating complex initiatives.', 
        icon: Users,
        details: {
          caseStudy: "Provided strategic oversight for a $50M digital transformation program.",
          testimonial: "Their guidance was the difference between failure and success.",
          author: "Amanda C., CIO",
          cta: "Get Expert Advice"
        }
      },
    ]
  }
];

export default function ServicesSection() {
  const [active, setActive] = useState('business_ai');
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const svc = services.find((s) => s.id === active);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (e) => {
    const icon = e.currentTarget.querySelector('.service-icon');
    if (icon) {
      gsap.to(icon, {
        scale: 1.15,
        rotation: 5,
        y: -10,
        opacity: 0.4,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    }
  };

  const handleMouseLeave = (e) => {
    const icon = e.currentTarget.querySelector('.service-icon');
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        y: 0,
        opacity: 0.2,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#e0eaf5] to-[#fffaee] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex border-b border-gray-200 mb-16 w-full max-w-3xl overflow-x-auto scrollbar-hide"
        >
          {services.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-6 sm:px-12 py-4 border-b-2 font-medium tracking-wider text-sm flex items-center gap-3 transition-colors whitespace-nowrap ${
                active === s.id
                  ? 'border-[#0d1f3c] text-[#0d1f3c]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className={active === s.id ? 'text-gray-400' : 'text-gray-300'}>{idx + 1}</span> 
              {s.label.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div 
          key={active}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
        >
          <div className="max-w-2xl">
            <span className="inline-block bg-gray-200/60 text-gray-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              {svc.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6 leading-tight">
              {svc.headline}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              {svc.description}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#0d1f3c]" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-[#0d1f3c] text-white flex items-center justify-center hover:bg-[#0d1f3c]/90 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Cards Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {svc.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={`${active}-${idx}`}
                layoutId={`card-${active}-${idx}`}
                onClick={() => setSelectedCard({ ...card, color: svc.bgColor })}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`min-w-[300px] w-[300px] h-[400px] md:min-w-[350px] md:w-[350px] md:h-[450px] rounded-[2rem] p-8 flex flex-col justify-between shrink-0 snap-start ${svc.bgColor} cursor-pointer hover:shadow-2xl transition-shadow relative overflow-hidden group`}
              >
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-8 leading-snug">{card.title}</h3>
                
                <div className="flex-grow flex items-center justify-center">
                  <Icon className="service-icon w-32 h-32 text-white opacity-20 stroke-[0.5]" />
                </div>
                
                <p className="text-white/90 text-sm leading-relaxed mt-8">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedCard} onOpenChange={(open) => !open && setSelectedCard(null)}>
          <DialogContent className="bg-white p-0 border-none rounded-[2rem] max-w-2xl overflow-hidden">
            {selectedCard && (
              <div className="flex flex-col">
                <div className={`${selectedCard.color} p-8 md:p-12 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <selectedCard.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{selectedCard.title}</h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                      {selectedCard.desc}
                    </p>
                  </div>
                  <selectedCard.icon className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10 stroke-[0.5]" />
                </div>
                
                <div className="p-8 md:p-12 space-y-8 bg-white">
                  {/* Case Study */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Grid className="w-4 h-4" /> Case Study
                    </h4>
                    <p className="text-[#0d1f3c] text-lg font-medium leading-relaxed">
                      "{selectedCard.details.caseStudy}"
                    </p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <Quote className="w-8 h-8 text-[#00b4a6]/20 mb-3" />
                    <p className="text-gray-600 italic mb-4">
                      {selectedCard.details.testimonial}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b4a6] to-[#0d1f3c] flex items-center justify-center text-white text-xs font-bold">
                        {selectedCard.details.author.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-[#0d1f3c] uppercase tracking-wide">
                        {selectedCard.details.author}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex justify-end">
                     <a
                        href={`#contact?interest=${encodeURIComponent(selectedCard.title)}`}
                        onClick={() => {
                          setSelectedCard(null);
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`inline-flex items-center gap-2 ${selectedCard.color} text-white font-semibold px-8 py-4 rounded-full text-sm transition-transform hover:scale-105 shadow-lg`}
                      >
                        {selectedCard.details.cta} <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}