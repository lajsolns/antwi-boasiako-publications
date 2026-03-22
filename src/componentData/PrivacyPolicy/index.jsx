import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyContent() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Rest of the privacy policy content */}
            <p className="text-gray-600 mb-8">
              This Privacy Policy describes how info@antwi-boasiako.com (the &quot;Site&quot; or &quot;we&quot;) collects, uses, 
              and discloses your Personal Information when you visit or make a purchase from the Site.
            </p>

            {/* ... rest of the privacy policy content ... */}
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600">
                For more information about our privacy practices, if you have questions, or if you would like to make a 
                complaint, please contact us by email at{' '}
                <a href="mailto:info@antwi-boasiako.com" className="text-blue-600 hover:underline">
                  info@antwi-boasiako.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
