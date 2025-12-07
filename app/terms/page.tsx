import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Mentora AI (the "Service"), operated by QubiLearn Technologies Private Limited
                ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
              <p className="text-gray-700 mb-4">
                If you do not agree to abide by the above, please do not use this service. These Terms of Use apply to
                all users of the Service, including without limitation users who are browsers, vendors, customers,
                merchants, and/or contributors of content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">Mentora AI is an educational technology platform that provides:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>AI-powered personalized adaptive learning (PAL) systems</li>
                <li>Educational content for grades 1-12 aligned with CBSE, ICSE, IB, and other curricula</li>
                <li>Teaching tools and resources for educators</li>
                <li>Student assessment and progress tracking</li>
                <li>Interactive learning materials and question banks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept all responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Children's Privacy and COPPA Compliance</h2>
              <p className="text-gray-700 mb-4">
                We are committed to protecting children's privacy and comply with the Children's Online Privacy
                Protection Act (COPPA) and similar international regulations:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Age Restrictions:</strong> Children under 13 may only use our Service with verifiable parental
                  consent
                </li>
                <li>
                  <strong>Parental Consent:</strong> We require verifiable parental consent before collecting personal
                  information from children under 13
                </li>
                <li>
                  <strong>Limited Data Collection:</strong> We collect only information necessary for educational
                  purposes
                </li>
                <li>
                  <strong>No Behavioral Advertising:</strong> We do not use children's personal information for
                  behavioral advertising
                </li>
                <li>
                  <strong>Parental Rights:</strong> Parents can review, delete, or refuse further collection of their
                  child's information
                </li>
                <li>
                  <strong>School Authorization:</strong> Schools may provide consent on behalf of parents for
                  educational use
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                For questions about children's privacy, contact us at{" "}
                <a href="mailto:privacy@qubilearn.in" className="text-blue-600 hover:underline">
                  privacy@qubilearn.in
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Upload malicious code or attempt to gain unauthorized access</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate content or engage in academic dishonesty</li>
                <li>Use the Service for commercial purposes without authorization</li>
                <li>Attempt to reverse engineer or copy our AI algorithms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by QubiLearn Technologies
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual
                property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you create using our tools, but grant us a license to use, modify, and
                display such content as necessary to provide the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Educational Use and Academic Integrity</h2>
              <p className="text-gray-700 mb-4">
                Our Service is designed to enhance learning and should be used in accordance with academic integrity
                policies:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Use AI assistance as a learning tool, not for completing assignments dishonestly</li>
                <li>Follow your institution's policies regarding AI assistance</li>
                <li>Understand that our Service is supplementary to, not a replacement for, traditional education</li>
                <li>Use generated content responsibly and with proper attribution when required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Subscription and Payment Terms</h2>
              <p className="text-gray-700 mb-4">Certain features require paid subscriptions:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law or our refund policy</li>
                <li>We may change subscription fees with 30 days' notice</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You may cancel your subscription at any time through your account settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Protection and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your data and comply with applicable data
                protection laws including GDPR, CCPA, and Indian data protection regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Limitations</h2>
              <p className="text-gray-700 mb-4">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-4">
                We do not guarantee the accuracy, completeness, or reliability of AI-generated content. Users should
                verify information independently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless QubiLearn Technologies, its officers, directors, employees, and
                agents from any claims, damages, or expenses arising from your use of the Service or violation of these
                Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice,
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of
                Bangalore, Karnataka, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via
                email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">For questions about these Terms, please contact us:</p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@qubilearn.in" className="text-blue-600 hover:underline">
                    hello@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Legal:</strong>{" "}
                  <a href="mailto:legal@qubilearn.in" className="text-blue-600 hover:underline">
                    legal@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Privacy:</strong>{" "}
                  <a href="mailto:privacy@qubilearn.in" className="text-blue-600 hover:underline">
                    privacy@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Company:</strong> QubiLearn Technologies Private Limited
                </li>
                <li>
                  <strong>Address:</strong> Bangalore, Karnataka, India
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
