import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 mb-4">
                At QubiLearn Technologies Private Limited ("Mentora AI"), we strive to provide exceptional educational
                services. This Refund Policy outlines the circumstances under which refunds may be provided for our
                premium subscription services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Free Trial Period</h2>
              <p className="text-gray-700 mb-4">We offer a 14-day free trial for new premium subscribers:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>No charges during the trial period</li>
                <li>Cancel anytime during the trial without any fees</li>
                <li>Full access to premium features during trial</li>
                <li>Automatic conversion to paid subscription after trial unless cancelled</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 30-Day Money-Back Guarantee</h3>
              <p className="text-gray-700 mb-4">We offer a 30-day money-back guarantee for premium subscriptions:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Request refund within 30 days of initial purchase</li>
                <li>Applies to first-time subscribers only</li>
                <li>Full refund of the subscription fee</li>
                <li>Account access continues until the end of the billing period</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Technical Issues</h3>
              <p className="text-gray-700 mb-4">Refunds may be provided for significant technical issues:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Service unavailable for more than 48 consecutive hours</li>
                <li>Critical features not functioning as described</li>
                <li>Data loss due to our system failures</li>
                <li>Inability to access paid features despite payment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Billing Errors</h3>
              <p className="text-gray-700 mb-4">We will provide full refunds for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Duplicate charges</li>
                <li>Unauthorized charges</li>
                <li>Incorrect billing amounts</li>
                <li>Charges after successful cancellation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Situations</h2>
              <p className="text-gray-700 mb-4">Refunds will not be provided in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Change of mind after the 30-day guarantee period</li>
                <li>Failure to use the service during the subscription period</li>
                <li>Account termination due to violation of Terms of Use</li>
                <li>Requests made after 90 days from the original purchase</li>
                <li>Partial month refunds for monthly subscriptions</li>
                <li>Refunds for gift subscriptions (unless technical issues)</li>
                <li>Third-party payment processing fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Process</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Contact our support team at{" "}
                  <a href="mailto:support@qubilearn.in" className="text-blue-600 hover:underline">
                    support@qubilearn.in
                  </a>
                </li>
                <li>Include your account email and reason for refund request</li>
                <li>Provide any relevant documentation or screenshots</li>
                <li>Our team will review your request within 2-3 business days</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Processing Time</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Review:</strong> 2-3 business days
                </li>
                <li>
                  <strong>Approval:</strong> Email notification within 24 hours
                </li>
                <li>
                  <strong>Processing:</strong> 5-10 business days to original payment method
                </li>
                <li>
                  <strong>Bank Processing:</strong> Additional 3-5 business days depending on your bank
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Required Information</h3>
              <p className="text-gray-700 mb-4">To process your refund request, please provide:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Account email address</li>
                <li>Transaction ID or receipt</li>
                <li>Date of purchase</li>
                <li>Reason for refund request</li>
                <li>Any supporting documentation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription Cancellation</h2>
              <p className="text-gray-700 mb-4">You can cancel your subscription at any time:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access your account settings</li>
                <li>Navigate to "Subscription" or "Billing"</li>
                <li>Click "Cancel Subscription"</li>
                <li>Confirm cancellation</li>
                <li>You'll retain access until the end of your billing period</li>
                <li>No charges will occur after the current period ends</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Educational Institution Refunds</h2>
              <p className="text-gray-700 mb-4">Special refund terms for schools and educational institutions:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Extended 60-day evaluation period</li>
                <li>Pro-rated refunds for unused portions of annual licenses</li>
                <li>Flexible terms for pilot programs</li>
                <li>Custom refund policies for enterprise agreements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">If you're not satisfied with our refund decision:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Contact our customer service manager at{" "}
                  <a href="mailto:manager@qubilearn.in" className="text-blue-600 hover:underline">
                    manager@qubilearn.in
                  </a>
                </li>
                <li>Provide detailed explanation of your concerns</li>
                <li>We'll review your case within 5 business days</li>
                <li>Final decisions will be communicated in writing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Payment Method Specific Terms</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Credit/Debit Cards</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Refunds processed to original card</li>
                <li>May take 5-10 business days to appear</li>
                <li>Processing fees may apply for international cards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Digital Wallets</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Refunds to original wallet (PayPal, Google Pay, etc.)</li>
                <li>Faster processing, typically 2-5 business days</li>
                <li>Subject to wallet provider's terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Bank Transfers</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Requires bank account verification</li>
                <li>Processing time: 7-14 business days</li>
                <li>May incur transfer fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Currency and Exchange Rates</h2>
              <p className="text-gray-700 mb-4">For international transactions:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Refunds processed in original currency when possible</li>
                <li>Exchange rate fluctuations may affect refund amounts</li>
                <li>Currency conversion fees may apply</li>
                <li>We use current market rates at time of processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-700 mb-4">This Refund Policy may be updated periodically:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Changes will be posted on our website</li>
                <li>Email notification for significant changes</li>
                <li>30-day notice period for policy changes</li>
                <li>Existing subscriptions governed by policy at time of purchase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">For refund requests or questions about this policy:</p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Support Team:</strong>{" "}
                  <a href="mailto:support@qubilearn.in" className="text-blue-600 hover:underline">
                    support@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Billing Inquiries:</strong>{" "}
                  <a href="mailto:billing@qubilearn.in" className="text-blue-600 hover:underline">
                    billing@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>General Contact:</strong>{" "}
                  <a href="mailto:hello@qubilearn.in" className="text-blue-600 hover:underline">
                    hello@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Customer Service Manager:</strong>{" "}
                  <a href="mailto:manager@qubilearn.in" className="text-blue-600 hover:underline">
                    manager@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Company:</strong> QubiLearn Technologies Private Limited
                </li>
                <li>
                  <strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Legal Compliance</h2>
              <p className="text-gray-700 mb-4">This policy complies with:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Indian Consumer Protection Act, 2019</li>
                <li>Reserve Bank of India guidelines</li>
                <li>International consumer protection laws where applicable</li>
                <li>Payment Card Industry standards</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
