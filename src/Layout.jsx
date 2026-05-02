import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const AdeptLogo = ({ className = "" }) => (
  <img 
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e90b60f8a8db170a7fa0c/8b51d4ba1_AdeptLogo3x.png" 
    alt="The Adept PM Group Logo" 
    className={`h-10 md:h-12 w-auto object-contain ${className}`}
  />
);


export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);

    // SEO: Dynamic title and description
    let title = "The Adept PM Group | AI Solutions & PMO Services";
    let desc = "AI-powered project management and business automation solutions. We design, implement, and teach practical AI solutions to scale businesses and modernize project delivery.";
    if (currentPageName && currentPageName !== 'Home') {
      title = `${currentPageName.replace(/([A-Z])/g, ' $1').trim()} | The Adept PM Group`;
    }
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    return () => window.removeEventListener('scroll', onScroll);
  }, [currentPageName]);

  const navLinks = [
    { label: 'Services', path: 'Services' },
    { label: 'Business AI', path: 'BusinessAI' },
    { label: 'PM & PMO', path: 'PmPmo' },
    { label: 'PM Notes', path: 'PmNoteTools' },
    { label: 'Fit Check', path: 'FitCheck' },
    { label: 'Resources', path: 'Resources' },
    { label: 'Blog', path: 'Blog' }
  ];

  const isDarkHero = currentPageName === 'AdeptFramework' && !scrolled;
  const navTextClass = isDarkHero 
    ? "text-white hover:text-[#f97316]" 
    : "text-[#0d1f3c] hover:text-[#00b4a6]";
  const logoClass = isDarkHero ? "brightness-0 invert" : "";


  return (
    <div style={{ background: '#fffaee' }} className="min-h-screen">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600&display=swap');
        h1, h1 * { font-family: 'Source Serif Pro', serif !important; font-weight: 200 !important; }
        h2, h2 * { font-family: 'Source Serif Pro', serif !important; font-weight: 300 !important; }
        h3, h3 * { font-family: 'Source Serif Pro', serif !important; font-weight: 300 !important; }
        h4, h4 * { font-family: 'Source Serif Pro', serif !important; font-weight: 400 !important; }
        button, button *, a.rounded-full { font-family: 'Source Serif Pro', serif !important; font-weight: 400 !important; }
        `}
      </style>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`
        }>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link to="/">
            <AdeptLogo className={logoClass} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${navTextClass}`}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <span className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 cursor-pointer ${navTextClass}`}>
                Services <ChevronDown className="w-4 h-4" />
              </span>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <Link to="/Services" className="block px-5 py-3 text-sm font-medium text-[#0d1f3c] hover:bg-[#f8fbff] hover:text-[#00b4a6] transition-colors border-b border-gray-50">All Services</Link>
                <Link to="/BusinessAI" className="block px-5 py-3 text-sm text-[#0d1f3c]/80 hover:bg-[#f8fbff] hover:text-[#00b4a6] transition-colors border-b border-gray-50">Business AI</Link>
                <Link to="/PmPmo" className="block px-5 py-3 text-sm text-[#0d1f3c]/80 hover:bg-[#f8fbff] hover:text-[#00b4a6] transition-colors border-b border-gray-50">PM & PMO Services</Link>
                <Link to="/AdeptFramework" className="block px-5 py-3 text-sm text-[#0d1f3c]/80 hover:bg-[#f8fbff] hover:text-[#00b4a6] transition-colors">ADEPT Intelligence Framework™</Link>
              </div>
            </div>

            {navLinks.filter(l => !['Services', 'Business AI', 'PM & PMO'].includes(l.label)).map((l) =>
            <Link
              key={l.label}
              to={`/${l.path}`}
              className={`text-sm font-medium transition-colors ${navTextClass}`}>

                {l.label}
              </Link>
            )}
            <a href="https://audit.theadeptpmgroup.com" target="_blank" rel="noopener noreferrer" className={`text-sm font-medium transition-colors ${navTextClass}`}>
              Audit Tool
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden md:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">

            Book Consultation <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6 text-[#0d1f3c]" /> : <Menu className={`w-6 h-6 ${isDarkHero ? 'text-white' : 'text-[#0d1f3c]'}`} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen &&
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 border-t border-amber-100" style={{ background: '#fffaee' }}>
            <Link to="/" className="block text-[#0d1f3c] font-medium py-1" onClick={() => setMobileOpen(false)}>Home</Link>
            
            <div className="py-2">
              <div className="text-[#0d1f3c] font-bold text-xs mb-3 uppercase tracking-wider">Services</div>
              <div className="pl-4 space-y-3 border-l-2 border-[#0d1f3c]/10">
                <Link to="/Services" className="block text-[#0d1f3c] font-medium text-sm" onClick={() => setMobileOpen(false)}>All Services</Link>
                <Link to="/BusinessAI" className="block text-[#0d1f3c]/80 text-sm" onClick={() => setMobileOpen(false)}>Business AI</Link>
                <Link to="/PmPmo" className="block text-[#0d1f3c]/80 text-sm" onClick={() => setMobileOpen(false)}>PM & PMO Services</Link>
                <Link to="/AdeptFramework" className="block text-[#0d1f3c]/80 text-sm" onClick={() => setMobileOpen(false)}>ADEPT Intelligence Framework™</Link>
              </div>
            </div>

            {navLinks.filter(l => !['Services', 'Business AI', 'PM & PMO'].includes(l.label)).map((l) =>
          <Link
            key={l.label}
            to={`/${l.path}`}
            className="block text-[#0d1f3c] font-medium py-1"
            onClick={() => setMobileOpen(false)}>

                {l.label}
              </Link>
          )}
            <a
              href="https://audit.theadeptpmgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#0d1f3c] font-medium py-1"
              onClick={() => setMobileOpen(false)}>
              Audit Tool
            </a>
            <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#f97316] text-white font-semibold px-6 py-2.5 rounded-full text-sm"
            onClick={() => setMobileOpen(false)}>

              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        }
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#e0eaf5] to-[#f8fbff] text-[#0d1f3c] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto border-t border-[#0d1f3c]/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10">
            {/* Column 1: Logo & Socials */}
            <div className="md:col-span-1 pr-8">
              <div className="mb-10">
                <AdeptLogo />
              </div>
              <div className="flex gap-5 text-[11px] font-bold text-[#0d1f3c]/80 tracking-wider">
                
                
                
              </div>
            </div>

            {/* Columns 2-5: Links */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-[#0d1f3c]/10">
              {/* Services */}
              <div className="md:pl-8">
                <h4 className="text-[11px] font-bold text-[#0d1f3c]/60 uppercase tracking-widest mb-6">Services</h4>
                <ul className="space-y-4 text-[13px] font-medium text-[#0d1f3c]/80">
                  <li><Link to="/Services" className="hover:text-[#00b4a6] transition-colors uppercase">All Services</Link></li>
                  <li><Link to="/BusinessAI" className="hover:text-[#00b4a6] transition-colors uppercase">Business AI Solutions</Link></li>
                  <li><Link to="/PmPmo" className="hover:text-[#00b4a6] transition-colors uppercase">PM & PMO Services</Link></li>
                  <li><Link to="/AdeptFramework" className="hover:text-[#00b4a6] transition-colors uppercase">ADEPT Framework</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div className="md:pl-8">
                <h4 className="text-[11px] font-bold text-[#0d1f3c]/60 uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-4 text-[13px] font-medium text-[#0d1f3c]/80">
                  <li><Link to="/" className="hover:text-[#00b4a6] transition-colors uppercase">Home</Link></li>
                  <li><Link to="/PrivacyPolicy" className="hover:text-[#00b4a6] transition-colors uppercase">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-conditions" className="hover:text-[#00b4a6] transition-colors uppercase">Terms and Conditions</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="md:pl-8">
                <h4 className="text-[11px] font-bold text-[#0d1f3c]/60 uppercase tracking-widest mb-6">Resources</h4>
                <ul className="space-y-4 text-[13px] font-medium text-[#0d1f3c]/80">
                  <li><Link to="/Resources" className="hover:text-[#00b4a6] transition-colors uppercase">Resources</Link></li>
                  <li><Link to="/PmNoteTools" className="hover:text-[#00b4a6] transition-colors uppercase">PM Notes</Link></li>
                  <li><Link to="/FitCheck" className="hover:text-[#00b4a6] transition-colors uppercase">Fit Check</Link></li>
                  <li><Link to="/Blog" className="hover:text-[#00b4a6] transition-colors uppercase">Blog</Link></li>
                  <li><a href="https://audit.theadeptpmgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4a6] transition-colors uppercase">Audit Tool</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="md:pl-8">
                <h4 className="text-[11px] font-bold text-[#0d1f3c]/60 uppercase tracking-widest mb-6">Contact</h4>
                <ul className="space-y-4 text-[13px] font-medium text-[#0d1f3c]/80">
                  <li><a href="/#contact" className="hover:text-[#00b4a6] transition-colors uppercase">Book Consultation</a></li>
                  <li><a href="mailto:hello@theadeptpmgroup.com" className="hover:text-[#00b4a6] transition-colors uppercase">Email Us</a></li>
                  <li><a href="tel:+18883adept3" className="hover:text-[#00b4a6] transition-colors uppercase">+1-888-3ADEPT3</a></li>
                  <li><span className="text-[#0d1f3c]/60 uppercase">Remote & On-Site</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle section with status */}
          












          {/* Bottom section */}
          <div className="mt-8 border-t border-[#0d1f3c]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-[#0d1f3c]/70 gap-4">
            <div className="uppercase tracking-wide">© ALL RIGHTS RESERVED, THE ADEPT PM GROUP 2026.</div>
            <div className="flex gap-6">
              <Link to="/terms-and-conditions" className="hover:text-[#0d1f3c] transition-colors">Terms and Conditions</Link>
              <Link to="/PrivacyPolicy" className="hover:text-[#0d1f3c] transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Fine print */}
          <div className="mt-8 text-[10px] text-gray-500 leading-relaxed max-w-5xl text-justify">
            AI-powered project management and business automation solutions for forward-thinking organizations. The Adept PM Group designs, implements, and teaches practical AI solutions to scale businesses and modernize project delivery. We are a certified Minority, Woman-Owned Business. For a complete list of our services and capabilities, visit our services page or contact us directly.
          </div>
        </div>
      </footer>
    </div>);

}