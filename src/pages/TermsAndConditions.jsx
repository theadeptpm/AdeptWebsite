import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-44 md:pt-52 lg:pt-56 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-1 text-[#00b4a6] hover:text-[#00b4a6]/80 transition-colors mb-8 font-medium">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-10">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Welcome to The Adept PM Group LLC. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">2. Services</h2>
            <p>
              The Adept PM Group LLC provides AI-centric project management consulting services, including but not limited to consulting, training, and AI-powered tools. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
            </ul>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality on this website, including but not limited to text, graphics, logos, and software, are the exclusive property of The Adept PM Group LLC and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">5. Payment Terms</h2>
            <p>
              For paid services, payment is due as specified in the service agreement. All payments are processed securely through third-party payment processors. Refund policies are outlined in individual service agreements.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">6. Limitation of Liability</h2>
            <p>
              The Adept PM Group LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless The Adept PM Group LLC and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services constitutes acceptance of any modifications.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>The Adept PM Group LLC</strong><br />
              Email: <a href="mailto:hello@theadeptpmgroup.com" className="text-[#00b4a6] hover:underline">hello@theadeptpmgroup.com</a><br />
              Phone: <a href="tel:+18883adept3" className="text-[#00b4a6] hover:underline">+1-888-3ADEPT3</a><br />
              Website: <a href="https://www.theadeptpmgroup.com/" className="text-[#00b4a6] hover:underline">www.theadeptpmgroup.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}