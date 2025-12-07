import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Authentication:</strong> Keep you logged in during your session
                </li>
                <li>
                  <strong>Security:</strong> Protect against cross-site request forgery
                </li>
                <li>
                  <strong>Load Balancing:</strong> Distribute traffic across our servers
                </li>
                <li>
                  <strong>Preferences:</strong> Remember your language and accessibility settings
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Analytics:</strong> Google Analytics to understand usage patterns
                </li>
                <li>
                  <strong>Performance Monitoring:</strong> Track page load times and errors
                </li>
                <li>
                  <strong>A/B Testing:</strong> Test different versions of our features
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Functional Cookies</h3>
              <p className="text-gray-700 mb-4">These cookies enhance your experience by remembering your choices:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>User Preferences:</strong> Theme, language, and display settings
                </li>
                <li>
                  <strong>Progress Tracking:</strong> Remember where you left off in lessons
                </li>
                <li>
                  <strong>Customization:</strong> Personalized dashboard layouts
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Targeting Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are used to deliver relevant content and advertisements:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Educational Content:</strong> Recommend relevant learning materials
                </li>
                <li>
                  <strong>Marketing:</strong> Show relevant educational offers (with consent)
                </li>
                <li>
                  <strong>Social Media:</strong> Enable sharing and social features
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use services from trusted third parties that may set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Website usage analytics
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure payment processing
                </li>
                <li>
                  <strong>Content Delivery Networks:</strong> Faster content delivery
                </li>
                <li>
                  <strong>Customer Support:</strong> Live chat and help desk services
                </li>
                <li>
                  <strong>Educational Partners:</strong> Integration with learning management systems
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you'll see a cookie banner allowing you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about each cookie category</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Browser Settings</h3>
              <p className="text-gray-700 mb-4">You can also manage cookies through your browser settings:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Settings &gt; Cookies and Site Permissions
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Opt-Out Tools</h3>
              <p className="text-gray-700 mb-4">For specific types of tracking, you can use these opt-out tools:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong>{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <strong>Advertising:</strong>{" "}
                  <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">
                    Digital Advertising Alliance
                  </a>
                </li>
                <li>
                  <strong>Network Advertising:</strong>{" "}
                  <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 hover:underline">
                    Network Advertising Initiative
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">Disabling certain cookies may affect your experience:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> The website may not function properly
                </li>
                <li>
                  <strong>Performance Cookies:</strong> We can't improve the service based on usage data
                </li>
                <li>
                  <strong>Functional Cookies:</strong> You'll need to reset preferences each visit
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Content and ads may be less relevant
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Privacy and Cookies</h2>
              <p className="text-gray-700 mb-4">For users under 13, we:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Obtain parental consent before using non-essential cookies</li>
                <li>Use only cookies necessary for educational functionality</li>
                <li>Do not use cookies for behavioral advertising to children</li>
                <li>Provide enhanced privacy controls for children's accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy to reflect changes in our practices or applicable laws. We'll notify
                you of significant changes through our website or email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">For questions about our use of cookies, contact us:</p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@qubilearn.in" className="text-blue-600 hover:underline">
                    privacy@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>General:</strong>{" "}
                  <a href="mailto:hello@qubilearn.in" className="text-blue-600 hover:underline">
                    hello@qubilearn.in
                  </a>
                </li>
                <li>
                  <strong>Company:</strong> QubiLearn Technologies Private Limited
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
