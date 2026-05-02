import React from 'react';
export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#fffaee' }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#e0eaf5] rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-sm relative">
          {/* Emblem Background */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-16 lg:-right-48 w-[150%] max-w-[650px] lg:max-w-[910px] z-0 pointer-events-none flex items-center justify-end h-full">
            <img 
              src="https://media.base44.com/images/public/699e90b60f8a8db170a7fa0c/c5a4905ee_hf_20260225_053059_d93e6fc8-9681-43e2-986f-206bd4f2b92b.png" 
              alt="Adept Logo Wireframe" 
              className="w-full h-auto object-contain drop-shadow-2xl opacity-70 hover:opacity-100 transition-opacity duration-700 ease-in-out"
            />
          </div>

          <div className="relative z-20 md:w-3/4 lg:w-2/3 bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-sm">
            {/* Left – text */}
            <div>
              <span className="inline-block bg-[#f4f1a1] text-[#0d1f3c] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8 shadow-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6 leading-tight drop-shadow-sm">
                Where Expertise<br />Meets Innovation
              </h2>
              <div className="space-y-6 text-[#0d1f3c]/90 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  As a certified Project Management Professional and lifelong PM enthusiast, we've seen firsthand how teams struggle — not because they lack talent, but because they lack structure, clarity, and modern tools that match today's pace.
                </p>
                <p>
                  The Adept PM Group was founded on a simple belief: <span className="font-bold text-[#0d1f3c]">AI doesn't replace project managers — it elevates them.</span> By combining proven PM methodologies with cutting-edge AI, we make expert-level skills accessible to anyone. Today, our work extends to helping small-business owners modernize operations, streamline processes, and unlock AI-driven growth.
                </p>
                {/* Quote */}
                <blockquote className="border-l-4 border-[#0d1f3c]/30 pl-5 italic text-[#0d1f3c]/90 text-base leading-relaxed mt-8">
                  "I'm passionate about how AI helps people transform the way they work — from project delivery to small-business operations. With intelligent tools and strategic consulting, leaders can move faster, reduce overwhelm, and scale with greater clarity."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}