import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                QubiLearn Technologies Private Limited ("we", "us", or "our") operates Mentora AI, an educational
                technology platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our Service.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to protecting your privacy and complying with applicable data protection laws,
                including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA),
                Children's Online Privacy Protection Act (COPPA), and Indian data protection regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Account Information:</strong> Name, email address, password, user type
                  (student/teacher/parent)
                </li>
                <li>
                  <strong>Profile Information:</strong> Grade level, subjects, school affiliation, curriculum type
                </li>
                <li>
                  <strong>Contact Information:</strong> Phone number (optional), emergency contacts for minors
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address, payment method details (processed by secure
                  third-party providers)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Educational Data</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Learning Progress:</strong> Quiz scores, assignment completion, time spent on activities
                </li>
                <li>
                  <strong>Content Interactions:</strong> Questions asked, answers provided, materials accessed
                </li>
                <li>
                  <strong>Adaptive Learning Data:</strong> Learning patterns, difficulty preferences, performance
                  analytics
                </li>
                <li>
                  <strong>User-Generated Content:</strong> Notes, assignments, projects created using our tools
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Technical Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, features used, session duration, click patterns
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> See our Cookie Policy for detailed information
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Children's Privacy (COPPA Compliance)</h2>
              <p className="text-gray-700 mb-4">
                We take special care to protect children's privacy and comply with COPPA requirements:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Parental Consent</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  We obtain verifiable parental consent before collecting personal information from children under 13
                </li>
                <li>
                  Schools may provide consent on behalf of parents for educational use under COPPA's school exception
                </li>
                <li>Parents can review, modify, or delete their child's information at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Limited Data Collection</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>We collect only information necessary for educational purposes</li>
                <li>No behavioral advertising to children under 13</li>
                <li>Enhanced security measures for children's accounts</li>
                <li>Regular deletion of unnecessary data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Parental Rights</h3>
              <p className="text-gray-700 mb-4">Parents have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Review all personal information collected from their child</li>
                <li>Request deletion of their child's personal information</li>
                <li>Refuse to allow further collection or use of their child's information</li>
                <li>
                  Contact us at{" "}
                  <a href="mailto:privacy@qubilearn.in" className="text-blue-600 hover:underline">
                    privacy@qubilearn.in
                  </a>{" "}
                  for any privacy concerns
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Educational Purposes</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide personalized adaptive learning experiences</li>
                <li>Track learning progress and generate performance analytics</li>
                <li>Create customized study plans and recommendations</li>
                <li>Generate educational content and assessments</li>
                <li>Facilitate communication between students, teachers, and parents</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Service Operations</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Maintain and improve our AI algorithms and platform functionality</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important service updates and notifications</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Research and Development</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Conduct educational research to improve learning outcomes (anonymized data only)</li>
                <li>Develop new features and educational tools</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information. We may share information in the following
                circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Educational Context</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>With teachers and school administrators for educational purposes</li>
                <li>With parents/guardians regarding their child's progress</li>
                <li>With authorized educational institutions and curriculum partners</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Service Providers</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Third-party services that help us operate our platform (cloud hosting, payment processing)</li>
                <li>AI and machine learning service providers (with appropriate data protection agreements)</li>
                <li>Customer support and analytics tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Legal Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>When required by law, court order, or government request</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Encryption:</strong> Data encrypted in transit and at rest using industry-standard protocols
                </li>
                <li>
                  <strong>Access Controls:</strong> Strict access controls and authentication requirements
                </li>
                <li>
                  <strong>Regular Audits:</strong> Security assessments and vulnerability testing
                </li>
                <li>
                  <strong>Staff Training:</strong> Regular privacy and security training for all employees
                </li>
                <li>
                  <strong>Incident Response:</strong> Procedures for detecting and responding to security incidents
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your information only as long as necessary for the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Account Data:</strong> Retained while your account is active and for a reasonable period after
                  closure
                </li>
                <li>
                  <strong>Educational Records:</strong> Retained according to educational record-keeping requirements
                </li>
                <li>
                  <strong>Children's Data:</strong> Deleted when no longer needed for educational purposes or upon
                  parental request
                </li>
                <li>
                  <strong>Analytics Data:</strong> Anonymized and aggregated data may be retained for research purposes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Access and Control</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of non-essential communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Regional Rights</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>GDPR (EU):</strong> Right to rectification, erasure, portability, and objection
                </li>
                <li>
                  <strong>CCPA (California):</strong> Right to know, delete, and opt-out of sale of personal information
                </li>
                <li>
                  <strong>India:</strong> Rights under applicable Indian data protection laws
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by data protection authorities</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our Service may contain links to third-party websites or integrate with third-party services. This
                Privacy Policy does not apply to such third parties. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or
                through our Service. The "Last Updated" date at the top indicates when the policy was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For questions about this Privacy Policy or to exercise your rights, contact us:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Privacy Officer:</strong>{" "}
                  <a href="mailto:privacy@qubilearn.in" className="text-blue-600 hover:underline">
                    privacy@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>General Inquiries:</strong>{" "}
                  <a href="mailto:hello@qubilearn.in" className="text-blue-600 hover:underline">
                    hello@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Data Protection Officer:</strong>{" "}
                  <a href="mailto:dpo@qubilearn.in" className="text-blue-600 hover:underline">
                    dpo@qubilearn.in
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

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Supervisory Authority</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about our privacy practices, you have the right to lodge a complaint with the
                relevant supervisory authority in your jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
