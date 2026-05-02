import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, Calendar, Clock, Building2, BarChart3 } from 'lucide-react';

const consultationTypes = [
  {
    id: 'business_ai',
    title: 'Business AI Discovery Call',
    desc: 'Voice AI, automation workflows, CRM integration, and customer engagement solutions.',
    duration: '30 minutes',
    color: '#f97316',
  },
  {
    id: 'pm_pmo',
    title: 'PM & PMO Consultation',
    desc: 'AI readiness assessment, PM frameworks, training programs, and strategic advisory.',
    duration: '45 minutes',
    color: '#00b4a6',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service_interest: 'not_sure',
    message: '',
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?interest=')) {
        const interestStr = decodeURIComponent(hash.split('?interest=')[1]);
        setForm(f => ({ ...f, message: `I am interested in learning more about the ${interestStr} service.` }));
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    // Call once on mount in case they loaded page with hash
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Lead.create(form);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6" 
      style={{ background: 'linear-gradient(to bottom, #fffaee 0%, #fffaee 70%, #e0eaf5 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Direct Booking Section */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#00b4a6] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-sm border border-[#00b4a6]/10">
            <Calendar className="w-4 h-4" /> Prefer to book directly?
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-4">
            Schedule a <span className="text-[#00b4a6]">Free Consultation</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Choose the path that best fits your needs and book a time that works for you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {/* Business AI Card */}
            <a href="https://go.theadeptpmgroup.com/widget/bookings/business-ai-discovery" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl border border-[#f97316]/20 bg-[#f97316]/5 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/20 flex items-center justify-center text-[#f97316]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0d1f3c]">Business AI Discovery Call</h3>
              </div>
              <p className="text-gray-600 mb-8 flex-grow">
                Voice AI, automation workflows, CRM integration, and customer engagement solutions for your business.
              </p>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="flex items-center gap-2 text-gray-500"><Clock className="w-4 h-4" /> 30 minutes</span>
                <span className="text-[#f97316] group-hover:translate-x-1 transition-transform flex items-center gap-1">Book Now <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>

            {/* PM & PMO Card */}
            <a href="https://go.theadeptpmgroup.com/widget/bookings/pm-pmo-consult" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl border border-[#00b4a6]/20 bg-[#00b4a6]/5 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00b4a6]/20 flex items-center justify-center text-[#00b4a6]">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0d1f3c]">PM & PMO Consultation</h3>
              </div>
              <p className="text-gray-600 mb-8 flex-grow">
                AI readiness assessment, PM frameworks, training programs, and strategic advisory for project delivery.
              </p>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="flex items-center gap-2 text-gray-500"><Clock className="w-4 h-4" /> 45 minutes</span>
                <span className="text-[#00b4a6] group-hover:translate-x-1 transition-transform flex items-center gap-1">Book Now <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
          </div>
        </div>

        <div className="relative rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl isolate border border-white/50">
          {/* Radial Soft Gradient Background */}
          <div className="absolute inset-0 -z-20 bg-[#fffbf0]"></div>
          <div 
            className="absolute inset-0 -z-10 opacity-60"
            style={{ 
              background: 'radial-gradient(circle at top left, rgba(0, 180, 166, 0.15), transparent 60%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.15), transparent 60%)' 
            }}
          ></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
            {/* Left – Header & Info */}
            <div className="flex flex-col justify-between h-full space-y-10">
              <div>
                <span className="inline-block bg-[#00b4a6]/10 text-[#00b4a6] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-6 leading-tight">
                  Ready to Transform<br />Your Business?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Let's discuss how AI-powered solutions can elevate your organization. Book a free consultation today.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@theadeptpmgroup.com' },
                  { icon: Phone, label: 'Phone', value: '+1-888-3ADEPT3' },
                  { icon: MapPin, label: 'Location', value: 'Remote & On-Site' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#0d1f3c]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{label}</div>
                      <div className="text-base font-medium text-[#0d1f3c]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Booking options moved to top */}
            </div>

            {/* Right – Form */}
            <div id="contact-form" className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-white shadow-xl shadow-gray-100/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d1f3c] mb-3">Message Sent!</h3>
                  <p className="text-gray-500 max-w-xs leading-relaxed">
                    Thank you for reaching out. We'll be in touch within one business day to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">First Name *</label>
                      <input
                        required
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">Last Name</label>
                      <input
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all"
                        placeholder="+1..."
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all"
                        placeholder="Acme"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">I'm Interested In</label>
                    <select
                      name="service_interest"
                      value={form.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all appearance-none"
                    >
                      <option value="not_sure">Not Sure Yet</option>
                      <option value="business_ai">Business AI Solutions</option>
                      <option value="pm_pmo">PM & PMO Services</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border-0 bg-white shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00b4a6] text-sm transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#0d1f3c] hover:bg-[#1a3a6c] disabled:opacity-70 text-white font-medium py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <ArrowRight className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}