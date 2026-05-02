import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LogoStrip from '../components/home/LogoStrip';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import FrameworkSection from '../components/home/FrameworkSection';
import BenefitsSection from '../components/home/BenefitsSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <StatsSection />
      <ServicesSection />
      <FrameworkSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}