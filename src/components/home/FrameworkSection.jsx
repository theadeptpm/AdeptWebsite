import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Search, Sparkles, Target, Shield } from 'lucide-react';

const steps = [
  { icon: Download, word: 'Capture™', subtitle: 'Structured Signal Ingestion', desc: 'Systematically collect project signals from lessons learned, risk registers, status reports, and post-mortems into a unified intelligence layer.' },
  { icon: Search, word: 'Interpret™', subtitle: 'AI-Driven Pattern Analysis', desc: 'Apply AI analysis to identify recurring patterns, correlations, and warning signs that manual review would miss across your project portfolio.' },
  { icon: Sparkles, word: 'Predict™', subtitle: 'Forward-Looking Insights', desc: 'Transform historical patterns into predictive intelligence. Know which current projects carry the DNA of past failures.' },
  { icon: Target, word: 'Align™', subtitle: 'Strategy-Execution Connection', desc: 'Bridge the gap between strategic intent and project reality. Surface misalignments before they derail outcomes.' },
  { icon: Shield, word: 'Protect™', subtitle: 'Early Warning Systems', desc: 'Monitor active projects against identified risk patterns. Escalate concerns to executives with evidence, not gut feelings.' },
];

export default function FrameworkSection() {
  return (
    <section style={{ background: '#fffaee' }} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316] mb-3">
            The Solution
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-4">
            The ADEPT Intelligence Framework™
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Five integrated pillars that transform dormant documentation into decision-ready intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={step.word} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center text-center px-4 pb-8 group cursor-default"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[50%] w-full h-px bg-[#0d1f3c]/10 z-0" />
              )}

              {/* Triangle */}
              <div className="relative z-10 w-[90px] h-[90px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                  {/* Outer Ring */}
                  <path d="M50 15 L85 80 L15 80 Z" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="18" strokeLinejoin="round" />
                  {/* Main Shape */}
                  <path d="M50 15 L85 80 L15 80 Z" fill="#f97316" stroke="#f97316" strokeWidth="12" strokeLinejoin="round" />
                </svg>
                <step.icon className="relative z-20 w-7 h-7 text-white mt-2" strokeWidth={2.5} />
              </div>

              <h4 className="font-bold text-[#0d1f3c] text-xl mb-1 transition-colors duration-300 group-hover:text-[#f97316]">{step.word}</h4>
              <div className="text-[#0d1f3c]/80 font-semibold text-[13px] mb-3 leading-snug">{step.subtitle}</div>
              <p className="text-gray-500 text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors"
          >
            See the Framework in Action <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}