
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Media Glitch Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            This Privacy Policy applies between you, the User of this Website, and Media Glitch ("we," "our," or "us"), 
            the owner and provider of this Website. Media Glitch takes the privacy of your information very seriously. 
            This policy explains our practices for any and all data collected by us or provided by you in relation to 
            your use of the Website and our Services.
          </p>
        </div>

        <section id="what-data" className="space-y-4">
          <h2 className="text-2xl font-bold">What Data We Collect</h2>
          <Separator className="my-2" />
          <p>We collect the following categories of data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information such as name, email address, and phone number</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Technical information such as IP address, browser type, device identifiers, and operating system</li>
            <li>Usage data including pages viewed, time spent on pages, and links clicked</li>
          </ul>
        </section>

        <section id="how-collect" className="space-y-4">
          <h2 className="text-2xl font-bold">How We Collect Your Data</h2>
          <Separator className="my-2" />
          <p>You directly provide most of the data we collect. We collect data and process data when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Submit your details through a contact or newsletter-signup form on our Website</li>
            <li>Contact us via email, telephone, or social media</li>
            <li>Create an account or otherwise register for our Services</li>
            <li>Use our Services, including viewing content or downloading materials</li>
          </ul>
          <p>We may also receive data indirectly from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Social media platforms (e.g., Facebook, Twitter)</li>
            <li>Publicly available third-party sources</li>
            <li>Partner websites and service providers</li>
          </ul>
        </section>

        <section id="how-use" className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Data</h2>
          <Separator className="my-2" />
          <p>Media Glitch uses your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate, maintain, and improve our Website and Services</li>
            <li>Personalize your experience and deliver content tailored to your interests</li>
            <li>Send you updates, newsletters, and promotional materials (where you've opted in)</li>
            <li>Analyze trends and monitor usage to enhance performance and security</li>
            <li>Facilitate collaborations and business relationships with clients, suppliers, and subcontractors</li>
          </ul>
          <p>If you consent, we may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our employees, agents, and professional advisors to obtain advice or perform tasks on our behalf</li>
            <li>Clients, suppliers, and subcontractors to support or deliver services</li>
            <li>Credit reference agencies to verify identity and prevent fraud</li>
          </ul>
        </section>

        <section id="storage" className="space-y-4">
          <h2 className="text-2xl font-bold">Data Storage and Security</h2>
          <Separator className="my-2" />
          <p>We implement technical and organizational measures to protect your data, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure servers and encrypted connections (HTTPS)</li>
            <li>Access controls and regular security audits</li>
            <li>Retention only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law</li>
          </ul>
          <p>Even after deletion, data may persist on backup or archival media for legal, tax, or regulatory purposes.</p>
        </section>

        <section id="marketing" className="space-y-4">
          <h2 className="text-2xl font-bold">Marketing</h2>
          <Separator className="my-2" />
          <p>
            If you agree, Media Glitch will send you information about our products and services as well as those of other companies we partner with. 
            You may opt out at any time by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clicking "unsubscribe" in any marketing email</li>
            <li>Contacting us at hello@mediaglitch.com</li>
          </ul>
          <p>We will never share your marketing preferences without your consent.</p>
        </section>

        <section id="rights" className="space-y-4">
          <h2 className="text-2xl font-bold">Your Data Protection Rights</h2>
          <Separator className="my-2" />
          <p>Under applicable law, you have the right to:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><span className="font-medium">Access</span> – Request copies of your personal data</li>
            <li><span className="font-medium">Rectification</span> – Correct inaccurate or incomplete data</li>
            <li><span className="font-medium">Erasure</span> – Request deletion of your personal data</li>
            <li><span className="font-medium">Restriction of Processing</span> – Limit how we use your data</li>
            <li><span className="font-medium">Objection</span> – Object to our processing of your data</li>
            <li><span className="font-medium">Data Portability</span> – Receive your data or have it transmitted to another controller</li>
          </ol>
          <p>
            We will respond to any valid request within one month. To exercise these rights, please contact us at hello@mediaglitch.com.
          </p>
        </section>

        <section id="cookies" className="space-y-4">
          <h2 className="text-2xl font-bold">Cookies</h2>
          <Separator className="my-2" />
          <p>
            Cookies are small text files placed on your device to improve your experience and collect usage data. We use cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep you signed in</li>
            <li>Understand how you use our Website</li>
            <li>Count visitors and analyze traffic patterns</li>
          </ul>
          <p>
            You can manage cookies through your browser settings. For more information, visit <a href="https://allaboutcookies.org" className="text-primary hover:underline">allaboutcookies.org</a>
          </p>
        </section>

        <section id="links" className="space-y-4">
          <h2 className="text-2xl font-bold">Links to Other Websites</h2>
          <Separator className="my-2" />
          <p>
            Our Website may contain links to third‐party sites. This Privacy Policy applies only to Media Glitch. 
            We encourage you to read the privacy policies of any linked sites.
          </p>
        </section>

        <section id="changes" className="space-y-4">
          <h2 className="text-2xl font-bold">Changes to This Policy</h2>
          <Separator className="my-2" />
          <p>
            We keep our Privacy Policy under regular review and will post any updates on this page. 
            This policy was last updated on April 30, 2025.
          </p>
        </section>

        <section id="contact" className="space-y-4 bg-muted p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            For questions or to exercise your data rights, contact: <a href="mailto:hello@mediaglitch.com" className="text-primary hover:underline">hello@mediaglitch.com</a>
          </p>
          <div className="flex justify-center mt-4">
            <Button asChild className="flex items-center gap-2">
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
