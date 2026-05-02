import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-44 md:pt-52 lg:pt-56 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-1 text-[#00b4a6] hover:text-[#00b4a6]/80 transition-colors mb-8 font-medium">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-medium text-[#0d1f3c] mb-10">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              The Adept PM Group LLC ("we," "our," "us") is committed to protecting your privacy and safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, and protect information when you interact with our services, including when you provide consent to receive SMS/text messages from us.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information, payment information, and usage data when you opt in to receive SMS messages, request services, or engage with our business. Information collected can include the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification Information:</strong> E.g., name, email address, phone number, company name, and job title when you fill out forms, subscribe to services, or contact us.</li>
              <li><strong>Payment Information:</strong> Processed securely via third-party payment processors like Stripe and PayPal. We do not store full credit card details on our servers.</li>
              <li><strong>Usage Data:</strong> E.g., IP address, browser type, pages visited, and time spent collected through cookies and analytics tools to help improve website performance and user experience.</li>
            </ul>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver SMS/text messages related to consultations, service updates, reminders, resources, promotions, or other business communications.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Improve the quality of our services and communication.</li>
            </ul>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">No Selling or Sharing for Marketing</h2>
            <p>
              We do not sell, rent, or share your personal information—including your phone number—with third parties for marketing or advertising purposes. Your data is used solely to support your relationship with The Adept PM Group LLC and to provide the services you have requested or consented to receive.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Third-Party Service Providers</h2>
            <p>
              We may use trusted third-party vendors (such as SMS or communication service providers) to deliver messages or support our business operations. These partners are authorized to use your information only as necessary to perform services on our behalf and are prohibited from using it for marketing.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Data Protection</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, or misuse.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Your Choices and Opt-Out Rights</h2>
            <p>
              You may opt out of receiving SMS/text messages at any time by replying STOP to any message. You may also request updates or corrections to your information by contacting us directly.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version will be made available upon request or on our website.
            </p>

            <h2 className="text-2xl font-medium text-[#0d1f3c] mt-10 mb-4">Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is used, please contact us at:
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