import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-28 bg-gradient-to-b from-[#f8fbff] to-[#e0eaf5]">

      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          className="absolute right-0 bottom-0 opacity-[0.07] w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          {Array.from({ length: 20 }).map((_, r) =>
          Array.from({ length: 20 }).map((_, c) =>
          <circle
            key={`${r}-${c}`}
            cx={c * 32 + 16}
            cy={r * 32 + 16}
            r={2.5}
            fill="#0d1f3c" />

          )
          )}
        </svg>
        <svg
          className="absolute left-0 top-20 opacity-[0.05] w-[400px] h-[400px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          {Array.from({ length: 14 }).map((_, r) =>
          Array.from({ length: 14 }).map((_, c) =>
          <circle
            key={`l${r}-${c}`}
            cx={c * 30 + 15}
            cy={r * 30 + 15}
            r={2}
            fill="#00b4a6" />

          )
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Announcement badge */}
        




        {/* Headline */}
        <h1 className="text-5xl md:text-7xl text-[#0d1f3c] leading-[1.08] tracking-tight mb-4">
          AI Solutions for Businesses.
        </h1>
        <h2 className="text-4xl md:text-6xl text-[#00b4a6] leading-tight tracking-tight mb-8">
          AI-Driven Systems for Project Leaders.
        </h2>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          We design, implement, and teach practical AI solutions — whether you're scaling a business or modernizing project delivery. Move faster, work smarter, and grow with confidence.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="/#contact"
            className="flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-lg shadow-orange-200">

            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/Services"
            className="flex items-center gap-2 border-2 border-[#0d1f3c] text-[#0d1f3c] hover:bg-[#0d1f3c] hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">

            Explore Services
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          {[
          { dot: '#f97316', label: 'Certified PMP & AI Consultant' },
          { dot: '#00b4a6', label: 'Minority, Woman-Owned' },
          { dot: '#0d1f3c', label: 'AI-First Approach' }].
          map(({ dot, label }) =>
          <span key={label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: dot }} />
              {label}
            </span>
          )}
        </div>
      </div>
    </section>);

}