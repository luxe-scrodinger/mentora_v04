import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, Calendar } from "lucide-react"
import Link from "next/link"

export default function SchoolsPage() {
  const comparisonFeatures = [
    { name: "Textbooks", withMentora: true },
    { name: "Question Bank", withMentora: true },
    { name: "Integrated Systems", withMentora: true },
    { name: "Automatic Grading", withMentora: true },
    { name: "AI ChatGPT", withMentora: true },
    { name: "Data Models", withMentora: true },
    { name: "Performance Dashboards", withMentora: true },
    { name: "Ready-to-use and customizable materials", withMentora: true },
    { name: "CBSE/ICSE/IB Curriculum Support", withMentora: true },
    { name: "Custom Curriculum Solutions", withMentora: true },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section with increased padding */}
        <section className="py-32 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your school, the future of <span className="text-blue-600">Artificial intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empower your teachers. Automate processes. Attract students. Reduce costs. Join over 5K Indian schools
              using Mentora AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                  Start for free
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg bg-transparent transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Safety and Control Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety for your students, control for your teachers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI tools to manage, communicate, and engage your school securely and personally. Supporting CBSE, ICSE,
              IB, and custom curricula.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder-q629j.png"
                alt="Dashboard Mockup 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder-9xg3j.png"
                alt="Dashboard Mockup 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder-z97pa.png"
                alt="Dashboard Mockup 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Comparison Table Section with increased padding */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">10 in 1. Simplify with Mentora AI.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your school with a single integrated tool that's worth 10. Supporting all major Indian curricula
              plus custom solutions.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-lg font-semibold text-gray-900"></th>
                  <th className="p-4 text-lg font-semibold text-gray-900 text-center">WITHOUT MENTORA AI</th>
                  <th className="p-4 text-lg font-semibold text-gray-900 text-center">WITH MENTORA AI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-gray-700 font-medium">{feature.name}</td>
                    <td className="p-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="p-4 text-gray-700 font-medium">Cost per student</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-1">
                      <span className="text-yellow-500 text-2xl">💰</span>
                      <span className="text-yellow-500 text-2xl">💰</span>
                      <span className="text-yellow-500 text-2xl">💰</span>
                      <span className="text-yellow-500 text-2xl">💰</span>
                      <span className="text-yellow-500 text-2xl">💰</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-1">
                      <span className="text-green-500 text-2xl">💰</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/login">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                Start for free
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg bg-transparent transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a conversation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
