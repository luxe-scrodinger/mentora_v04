"use client"

import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Frown, CalendarDays, HelpCircle, BookOpen, PlaySquare, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function StudentsPage() {
  const [billingCycle, setBillingCycle] = useState("yearly")

  const aiTools = [
    {
      icon: Frown,
      title: "Ask questions about materials",
      description: "Ask our AI anything and get instant answers for any grade level",
    },
    {
      icon: CalendarDays,
      title: "Create a study calendar in minutes",
      description: "Personalized plans to ace your exams from Grade 1 to Grade 12",
    },
    {
      icon: HelpCircle,
      title: "+200,000 unique and entrance exam questions",
      description: "Instant simulations for CBSE, ICSE, IB, and competitive exams",
    },
    {
      icon: BookOpen,
      title: "+20,000 class notes, articles, and summaries",
      description: "All educational materials aligned with Indian curricula",
    },
    {
      icon: PlaySquare,
      title: "+13,000 videos, games, slides, and other materials",
      description: "Engaging content for every grade and learning style",
    },
    {
      icon: FileText,
      title: "Prepare for assessments",
      description: "Comprehensive preparation for board exams and competitive tests",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section with increased padding */}
        <section className="py-32 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Pass the entrance exam and <span className="text-blue-600">achieve a perfect score!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Personalized study plans, AI-powered question answers, intelligent mock exams, and much more. Supporting
              all grades from 1 to 12 and major Indian curricula.
            </p>
            <Link href="/login">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                Start for free
              </Button>
            </Link>
          </div>
        </section>

        {/* AI Tools Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Tools for you to ace it!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Study intelligently with our exclusive resources designed for Indian students from Grade 1 to Grade 12.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section with increased padding */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A tool for students of the future</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for your learning journey</p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600 mb-6">Try with free credits every day!</p>
                <div className="text-4xl font-bold text-blue-600 mb-8">Free</div>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold w-full py-3 transition-colors">
                Try it now
              </Button>
            </Card>

            <Card className="p-8 shadow-lg border-2 border-blue-600 relative flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300">
              <Badge
                variant="secondary"
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full"
              >
                Recommended
              </Badge>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">Unlimited credits for all grades</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ₹399<span className="text-xl">/month*</span>
                </div>
                <RadioGroup
                  value={billingCycle}
                  onValueChange={setBillingCycle}
                  className="flex justify-center gap-2 mb-8"
                >
                  <Label
                    htmlFor="monthly"
                    className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer transition-colors ${
                      billingCycle === "monthly"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                    monthly
                  </Label>
                  <Label
                    htmlFor="yearly"
                    className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer transition-colors ${
                      billingCycle === "yearly"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroupItem value="yearly" id="yearly" className="sr-only" />
                    Yearly
                    <Badge variant="secondary" className="ml-2 bg-green-200 text-green-800">
                      Save 33%
                    </Badge>
                  </Label>
                </RadioGroup>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3 transition-colors">
                Go premium
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
