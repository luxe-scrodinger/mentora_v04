"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2, Users, TrendingUp, Clock, BarChart3, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SchoolsPage() {
  const [activeTab, setActiveTab] = useState("features")

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Improve Student Outcomes",
      description: "Schools using Mentora AI see 40% improvement in student performance across all subjects",
      metric: "40% improvement",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Save Teacher Time",
      description: "Teachers save 6+ hours weekly on lesson planning and content creation with our AI tools",
      metric: "6+ hours saved",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Scale Personalized Learning",
      description: "Provide individualized attention to every student, regardless of class size",
      metric: "100% personalized",
      color: "text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics help administrators make informed educational decisions",
      metric: "Real-time data",
      color: "text-orange-600",
    },
  ]

  const schoolTestimonials = [
    {
      school: "Delhi Public School, Bangalore",
      principal: "Dr. Meera Krishnan",
      role: "Principal",
      quote:
        "Mentora AI has transformed our teaching methodology. Our teachers are more efficient, students are more engaged, and our board exam results improved by 35% this year.",
      students: 2500,
      improvement: "35%",
      avatar: "MK",
    },
    {
      school: "Ryan International School, Mumbai",
      principal: "Rajesh Sharma",
      role: "Academic Director",
      quote:
        "The personalized learning paths have been a game-changer. We can now cater to both our struggling students and our gifted learners effectively.",
      students: 1800,
      improvement: "42%",
      avatar: "RS",
    },
    {
      school: "Kendriya Vidyalaya, Chennai",
      principal: "Priya Nair",
      role: "Principal",
      quote:
        "The AI-powered analytics help us identify learning gaps early and intervene before students fall behind. It's revolutionized our approach to education.",
      students: 1200,
      improvement: "28%",
      avatar: "PN",
    },
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Our education specialists assess your school's needs and create a customized implementation plan",
      duration: "1 week",
    },
    {
      step: 2,
      title: "Teacher Training",
      description:
        "Comprehensive training program for all teachers on AI tools and personalized learning methodologies",
      duration: "2 weeks",
    },
    {
      step: 3,
      title: "Pilot Program",
      description: "Start with select classes to test and refine the system before full school deployment",
      duration: "4 weeks",
    },
    {
      step: 4,
      title: "Full Deployment",
      description: "Roll out across all grades with ongoing support and monitoring for optimal results",
      duration: "2 weeks",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small schools getting started",
      price: "₹15",
      unit: "per student/month",
      students: "Up to 200 students",
      features: [
        "Basic AI teaching tools",
        "Student progress tracking",
        "Parent communication portal",
        "Email support",
        "Basic analytics dashboard",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized schools",
      price: "₹12",
      unit: "per student/month",
      students: "200-1000 students",
      features: [
        "All Starter features",
        "Advanced AI content generation",
        "Comprehensive analytics",
        "Priority support",
        "Custom curriculum integration",
        "Teacher training program",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large schools and districts",
      price: "Custom",
      unit: "pricing available",
      students: "1000+ students",
      features: [
        "All Professional features",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "On-site training",
        "24/7 phone support",
      ],
    },
  ]

  const tabContent = {
    features: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {keyBenefits.map((benefit, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {benefit.metric}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    ),
    implementation: (
      <div className="space-y-8">
        {implementationSteps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {step.step}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {step.duration}
                </Badge>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-900 mb-2">Total Implementation Time: 9 weeks</h4>
          <p className="text-green-800 text-sm">
            From initial consultation to full deployment, most schools are fully operational with Mentora AI within 9
            weeks.
          </p>
        </div>
      </div>
    ),
    pricing: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`p-8 relative ${tier.popular ? "border-2 border-blue-600 shadow-xl" : "hover:shadow-lg"} transition-all duration-300`}
          >
            {tier.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                Most Popular
              </Badge>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-1">{tier.price}</div>
              <p className="text-sm text-gray-500">{tier.unit}</p>
              <p className="text-sm text-gray-600 mt-2">{tier.students}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </Card>
        ))}
      </div>
    ),
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">TRUSTED BY 500+ SCHOOLS</Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your School with <span className="text-blue-600">AI-Powered</span> Education
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Join leading schools across India that are using Mentora AI to improve student outcomes, reduce
                  teacher workload, and prepare students for the future of learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                      Schedule Demo
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                  >
                    Download Brochure
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free pilot program
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Complete teacher training
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Ongoing support
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-900">School Dashboard</span>
                  </div>
                  <img
                    src="/placeholder.svg?height=400&width=600&text=School+Dashboard+Analytics"
                    alt="School Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across India</h2>
              <p className="text-xl text-gray-600">
                Schools using Mentora AI consistently outperform traditional methods
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-700 font-medium">Schools Trust Us</p>
                <p className="text-sm text-gray-500">Across 15+ states</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2.5M+</div>
                <p className="text-gray-700 font-medium">Students Benefiting</p>
                <p className="text-sm text-gray-500">From personalized learning</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-gray-700 font-medium">Average Improvement</p>
                <p className="text-sm text-gray-500">In student performance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <p className="text-gray-700 font-medium">Teacher Satisfaction</p>
                <p className="text-sm text-gray-500">Would recommend to others</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything Your School Needs</h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions designed specifically for educational institutions
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">{tabContent[activeTab as keyof typeof tabContent]}</div>
          </div>
        </section>

        {/* School Testimonials */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What School Leaders Are Saying</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 from 500+ schools</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {schoolTestimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.principal}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.school}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{testimonial.improvement}</div>
                      <div className="text-xs text-gray-500">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{testimonial.students.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your School?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ schools that are already seeing remarkable improvements in student outcomes. Start your free
              pilot program today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                  Schedule Free Demo
                </Button>
              </Link>
              <Link href="mailto:schools@qubilearn.in">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Free pilot program
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No setup costs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Complete training included
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
