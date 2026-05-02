import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Users, TrendingDown, Clock, ShieldCheck, Rocket, BarChart2, MessageSquare, ArrowUpRight } from 'lucide-react';

const tabs = [
  {
    id: 'business',
    num: '1',
    label: 'FOR BUSINESS OWNERS',
    bgColor: 'bg-[#0d1f3c]',
    textColor: 'text-white',
    descColor: 'text-gray-300',
    iconColor: 'text-white',
    iconBg: 'bg-white/20',
    benefits: [
      { icon: Zap, title: 'Operational Efficiency', desc: 'Automate repetitive tasks so your team focuses on revenue-driving work.' },
      { icon: MessageSquare, title: 'Voice & Conversational AI', desc: 'Engage customers 24/7 with intelligent AI for lead capture and support.' },
      { icon: Users, title: 'Scale Without Headcount', desc: 'Grow your capacity without proportionally increasing staff.' },
      { icon: BarChart2, title: 'Cost Control & Visibility', desc: 'Real-time visibility into operations while reducing costs through automation.' },
    ],
  },
  {
    id: 'pm',
    num: '2',
    label: 'FOR PROJECT TEAMS',
    bgColor: 'bg-[#f97316]',
    textColor: 'text-white',
    descColor: 'text-orange-100',
    iconColor: 'text-white',
    iconBg: 'bg-white/20',
    benefits: [
      { icon: TrendingDown, title: 'Increased Predictability', desc: 'AI-driven insights help anticipate issues before they escalate.' },
      { icon: Clock, title: 'Save Valuable Time', desc: 'Automate repetitive tasks so your team focuses on strategic thinking.' },
      { icon: ShieldCheck, title: 'Mitigate Risks', desc: 'Predictive analytics identify potential pitfalls before they become problems.' },
      { icon: Rocket, title: 'Move Faster', desc: 'Accelerate project delivery with intelligent automation and streamlined processes.' },
    ],
  },
];

export default function BenefitsSection() {
  const [active, setActive] = useState('business');
  const tab = tabs.find((t) => t.id === active);

  return (
    <section id="benefits" className="py-24 px-6 overflow-hidden" style={{ background: '#fffaee' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6 max-w-2xl leading-tight">
            Why AI-Powered Systems Matter
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Practical AI that improves how businesses operate and how projects get delivered.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center border-b border-gray-200 mb-8 w-full max-w-3xl mx-auto"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 sm:px-12 py-4 border-b-2 font-medium tracking-wider text-sm flex items-center gap-3 transition-colors ${
                active === t.id
                  ? 'border-[#0d1f3c] text-[#0d1f3c]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className={active === t.id ? 'text-gray-400' : 'text-gray-300'}>{t.num}</span> 
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Container */}
        <div className="bg-transparent rounded-[2rem] p-4 sm:p-8 overflow-hidden">
          <motion.div 
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-4"
          >
            {tab.benefits.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${tab.bgColor} rounded-3xl p-8 transition-all flex flex-col min-h-[240px] cursor-default shadow-sm hover:shadow-xl`}
              >
                <div className="mb-8 flex justify-between items-start">
                  <div className="relative">
                    <div className={`absolute -top-1.5 -left-2 w-7 h-7 rounded-full ${tab.iconBg}`} />
                    <Icon className={`w-6 h-6 relative z-10 ${tab.iconColor}`} />
                  </div>
                  {idx === 1 && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <ArrowUpRight className={`w-4 h-4 ${tab.iconColor}`} />
                    </div>
                  )}
                </div>
                <div className="mt-auto">
                  <h4 className={`${tab.textColor} text-xl font-medium mb-2`}>{title}</h4>
                  <p className={`${tab.descColor} text-sm leading-relaxed`}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Footer inside container */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center gap-4 px-4 py-2"
          >
            <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
              Used By <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}