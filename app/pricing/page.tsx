"use client"

import { useState } from "react"
import { Check, X, Calendar, Zap, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const studentPlans = [
    {
      name: "Free Trial",
      price: "Free",
      description: "Get started with Spark School AI",
      features: [
        { text: "Access to PAL Demo", included: true },
        { text: "Diagnostic assessment", included: true },
        { text: "5 practice questions per day", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Limited grade content", included: true },
        { text: "Full curriculum access", included: false },
        { text: "Personalized learning paths", included: false },
        { text: "Performance analytics", included: false },
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "One Subject",
      price: "₹999",
      period: "/month",
      description: "Master one subject with adaptive learning",
      features: [
        { text: "PAL for 1 subject", included: true },
        { text: "Unlimited practice questions", included: true },
        { text: "All grades (1-12) content", included: true },
        { text: "Personalized learning paths", included: true },
        { text: "Real-time performance analytics", included: true },
        { text: "Video explanations", included: true },
        { text: "Multiple subjects access", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Subscribe Now",
      highlighted: false,
    },
    {
      name: "All Subjects",
      price: "₹1999",
      period: "/month",
      description: "Complete learning across all subjects",
      features: [
        { text: "PAL for all subjects", included: true },
        { text: "Unlimited practice questions", included: true },
        { text: "All grades (1-12) content", included: true },
        { text: "Personalized learning paths", included: true },
        { text: "Real-time performance analytics", included: true },
        { text: "Video explanations & notes", included: true },
        { text: "Misconception tracking", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Subscribe Now",
      highlighted: true,
    },
  ]

  const teacherPlans = [
    {
      name: "Free Trial",
      price: "Free",
      description: "Explore teacher tools",
      features: [
        { text: "Access to all teacher tools", included: true },
        { text: "Limited question generation", included: true },
        { text: "Up to 2 classes", included: true },
        { text: "Basic analytics", included: true },
        { text: "Unlimited classes", included: false },
        { text: "Advanced content generation", included: false },
        { text: "Student performance insights", included: false },
        { text: "Google Classroom integration", included: false },
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹699",
      period: "/month",
      description: "For teachers wanting advanced tools",
      features: [
        { text: "All teacher tools unlimited", included: true },
        { text: "Unlimited question generation", included: true },
        { text: "Unlimited classes", included: true },
        { text: "Advanced content generation", included: true },
        { text: "Real-time student analytics", included: true },
        { text: "Google Classroom integration", included: true },
        { text: "Student misconception reports", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Subscribe Now",
      highlighted: true,
    },
  ]

  const schoolPlans = [
    {
      name: "Enterprise",
      teachers: "10 Teachers",
      grades: "10 Grades",
      students: "300 Students",
      price: "₹49,999",
      period: "/month",
      description: "Complete solution for schools",
      features: [
        { text: "Up to 10 teacher accounts", included: true },
        { text: "Up to 300 student accounts", included: true },
        { text: "10 grades (1-12) curriculum", included: true },
        { text: "All teacher features unlimited", included: true },
        { text: "Complete PAL for all students", included: true },
        { text: "Advanced school analytics", included: true },
        { text: "Custom onboarding & training", included: true },
        { text: "Google Classroom integration", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Monthly performance reports", included: true },
        { text: "API access for integrations", included: true },
        { text: "SLA guarantees", included: true },
      ],
      cta: "Schedule Demo",
      highlighted: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your learning journey. All plans include free access to explore features.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={billingCycle === "monthly" ? "default" : "outline"}
              onClick={() => setBillingCycle("monthly")}
              className="px-6"
            >
              Monthly Billing
            </Button>
            <Button
              variant={billingCycle === "annual" ? "default" : "outline"}
              onClick={() => setBillingCycle("annual")}
              className="px-6"
            >
              Annual Billing (Save 20%)
            </Button>
          </div>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-3">
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Teachers</span>
            </TabsTrigger>
            <TabsTrigger value="schools" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Schools</span>
            </TabsTrigger>
          </TabsList>

          {/* Students Pricing */}
          <TabsContent value="students" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {studentPlans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative transition-all duration-300 hover:shadow-lg ${
                    plan.highlighted ? "md:scale-105 border-blue-500 shadow-lg" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    <div className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included ? "text-gray-900 text-sm" : "text-gray-400 text-sm line-through"
                            }
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Teachers Pricing */}
          <TabsContent value="teachers" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teacherPlans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative transition-all duration-300 hover:shadow-lg ${
                    plan.highlighted ? "md:col-span-2 md:w-1/2 mx-auto border-blue-500 shadow-lg" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    <div className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included ? "text-gray-900 text-sm" : "text-gray-400 text-sm line-through"
                            }
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schools Pricing */}
          <TabsContent value="schools" className="space-y-8">
            <div className="max-w-2xl mx-auto">
              {schoolPlans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative transition-all duration-300 hover:shadow-lg border-blue-500 shadow-lg`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best for Schools
                  </div>
                  <CardHeader>
                    <CardTitle className="text-3xl">{plan.name}</CardTitle>
                    <CardDescription className="space-y-2 mt-2">
                      <div className="flex gap-4 text-sm font-medium text-gray-700">
                        <span>{plan.teachers}</span>
                        <span>•</span>
                        <span>{plan.students}</span>
                        <span>•</span>
                        <span>{plan.grades}</span>
                      </div>
                      <div className="text-base text-gray-600">{plan.description}</div>
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      {plan.cta}
                    </Button>
                    <div className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="text-gray-900 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I try Spark School AI for free?",
                a: "Yes! All users can register for free and access demo features. Take the diagnostic assessment to understand your learning style and get started with PAL.",
              },
              {
                q: "Do I need a credit card to start the free trial?",
                a: "No credit card required for free accounts. Simply register and start exploring Spark School AI immediately.",
              },
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, debit cards, UPI, and net banking. All transactions are secure and encrypted.",
              },
              {
                q: "Is there a setup fee for schools?",
                a: "No setup fees. We provide free onboarding and training for all school plans.",
              },
              {
                q: "How does the diagnostic assessment work?",
                a: "The diagnostic assessment helps us understand your learning style, pace, and preferences. It takes about 15 minutes and provides personalized recommendations for your learning journey.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
