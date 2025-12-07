"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Brain,
  Target,
  Zap,
  CheckCircle,
  Star,
  PlayCircle,
  BarChart3,
  Users,
  BookOpen,
  Award,
  Lightbulb,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TeachersPage() {
  const [activeDemo, setActiveDemo] = useState("lesson-plan")
  const [animatedStats, setAnimatedStats] = useState({
    teachers: 0,
    schools: 0,
    improvement: 0,
    timeSaved: 0,
  })

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const increment = duration / steps

      const targets = {
        teachers: 50000,
        schools: 5000,
        improvement: 40,
        timeSaved: 90,
      }

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          teachers: Math.floor(targets.teachers * progress),
          schools: Math.floor(targets.schools * progress),
          improvement: Math.floor(targets.improvement * progress),
          timeSaved: Math.floor(targets.timeSaved * progress),
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, increment)
    }

    animateStats()
  }, [])

  const keyFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Lesson Planning",
      description: "Generate comprehensive lesson plans in minutes with ChatGPT and XAI integration",
      benefit: "Save 5+ hours per week on planning",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200",
    },
    {
      icon: Target,
      title: "Personalized Adaptive Learning",
      description: "AI adjusts difficulty based on each student's performance and learning pace",
      benefit: "Improve student outcomes by 40%",
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-200",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track student progress with detailed performance dashboards",
      benefit: "Identify learning gaps instantly",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-200",
    },
    {
      icon: Zap,
      title: "Instant Question Generation",
      description: "Create unlimited questions with answer keys for any topic or grade",
      benefit: "Never run out of practice material",
      color: "bg-orange-100 text-orange-600",
      hoverColor: "hover:bg-orange-200",
    },
    {
      icon: Globe,
      title: "Multi-Curriculum Support",
      description: "Seamlessly works with CBSE, ICSE, IB, and State Board curricula",
      benefit: "Perfect for any Indian classroom",
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-200",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access all features on any device, anywhere, anytime",
      benefit: "Teach from anywhere",
      color: "bg-indigo-100 text-indigo-600",
      hoverColor: "hover:bg-indigo-200",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Anjali Gupta",
      role: "Mathematics Teacher, Delhi Public School",
      quote:
        "Mentora AI transformed my teaching. I save 6 hours weekly on lesson planning and my students' test scores improved by 45%. The PAL system adapts perfectly to each child's learning pace.",
      rating: 5,
      image: "AG",
      school: "Delhi Public School",
      subject: "Mathematics",
      experience: "12 years",
      improvement: "45%",
    },
    {
      name: "Ravi Sharma",
      role: "Science Teacher, Ryan International",
      quote:
        "The AI-generated questions are incredible! I can create personalized assessments for different learning levels in my class. My students are more engaged than ever.",
      rating: 5,
      image: "RS",
      school: "Ryan International",
      subject: "Science",
      experience: "8 years",
      improvement: "38%",
    },
    {
      name: "Priya Patel",
      role: "English Teacher, Kendriya Vidyalaya",
      quote:
        "The multilingual support and CBSE alignment make this perfect for Indian classrooms. The analytics help me understand exactly where each student needs support.",
      rating: 5,
      image: "PP",
      school: "Kendriya Vidyalaya",
      subject: "English",
      experience: "15 years",
      improvement: "52%",
    },
  ]

  const useCases = [
    {
      icon: BookOpen,
      title: "Lesson Planning",
      description: "Create detailed lesson plans with learning objectives, activities, and assessments",
      time: "5 min",
      traditional: "2 hours",
    },
    {
      icon: Users,
      title: "Student Assessment",
      description: "Generate customized tests and quizzes with instant grading",
      time: "2 min",
      traditional: "1 hour",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor individual and class performance with detailed analytics",
      time: "Instant",
      traditional: "30 min",
    },
    {
      icon: Lightbulb,
      title: "Content Creation",
      description: "Develop engaging activities, worksheets, and presentations",
      time: "3 min",
      traditional: "1.5 hours",
    },
  ]

  const demoContent = {
    "lesson-plan": {
      title: "AI Lesson Plan Generator",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Grade 8 Mathematics - Quadratic Equations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div>
                  <strong>Learning Objectives:</strong>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>Understand quadratic equation structure</li>
                  <li>Apply factoring methods effectively</li>
                  <li>Solve real-world problems using quadratics</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div>
                  <strong>Assessment Methods:</strong>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>Interactive problem-solving</li>
                  <li>Peer collaboration exercises</li>
                  <li>Quick formative assessments</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>AI Suggestion:</strong> Based on your class performance, focus extra time on factoring
                techniques. 23% of students struggled with this concept last week.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    questions: {
      title: "Smart Question Bank",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Adaptive Questions - Grade 10 Physics
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border-l-4 border-green-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-100 text-green-800">Easy</Badge>
                  <span className="text-sm text-gray-600">For struggling students</span>
                </div>
                <p className="font-medium mb-2">What is the SI unit of force?</p>
                <p className="text-green-700 text-sm">✓ Answer: Newton (N)</p>
                <p className="text-xs text-gray-500 mt-2">Success rate: 95% | Time: 30 seconds</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  <span className="text-sm text-gray-600">For average students</span>
                </div>
                <p className="font-medium mb-2">Calculate the force required to accelerate a 5kg object at 2m/s²</p>
                <p className="text-yellow-700 text-sm">✓ Answer: F = ma = 5 × 2 = 10N</p>
                <p className="text-xs text-gray-500 mt-2">Success rate: 78% | Time: 2 minutes</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-red-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-100 text-red-800">Hard</Badge>
                  <span className="text-sm text-gray-600">For advanced students</span>
                </div>
                <p className="font-medium mb-2">
                  A 1000kg car accelerates from rest to 20m/s in 10 seconds. Calculate the net force and power.
                </p>
                <p className="text-red-700 text-sm">✓ Answer: F = 2000N, P = 40,000W</p>
                <p className="text-xs text-gray-500 mt-2">Success rate: 45% | Time: 8 minutes</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    analytics: {
      title: "Student Performance Analytics",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Class 9A - Real-time Performance Dashboard
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800">Subject Performance</h5>
                {[
                  { subject: "Algebra", score: 85, trend: "up" },
                  { subject: "Geometry", score: 72, trend: "down" },
                  { subject: "Statistics", score: 91, trend: "up" },
                  { subject: "Trigonometry", score: 68, trend: "down" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-24 text-sm text-gray-600">{item.subject}</div>
                    <div className="flex-1">
                      <Progress value={item.score} className="h-2" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{item.score}%</span>
                      <TrendingUp
                        className={`w-3 h-3 ${item.trend === "up" ? "text-green-500" : "text-red-500 rotate-180"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800">At-Risk Students</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                      AS
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Arjun Sharma</p>
                      <p className="text-xs text-gray-600">Struggling with Trigonometry</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Intervene
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm">
                      PG
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Priya Gupta</p>
                      <p className="text-xs text-gray-600">Below average in Geometry</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full animate-bounce"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in slide-in-from-left duration-700">
                <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 animate-in fade-in duration-500 delay-200">
                  Trusted by {animatedStats.teachers.toLocaleString()}+ Indian Teachers
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-in slide-in-from-left duration-700 delay-300">
                  Transform Your Teaching with{" "}
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Powered
                  </span>{" "}
                  Education
                </h1>
                <p className="text-xl text-gray-600 mb-8 animate-in slide-in-from-left duration-700 delay-500">
                  Save {animatedStats.timeSaved}% of your planning time while improving student outcomes by{" "}
                  {animatedStats.improvement}%. Experience personalized adaptive learning that works for every Indian
                  curriculum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in slide-in-from-left duration-700 delay-700">
                  <Link href="/login">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 animate-in slide-in-from-left duration-700 delay-900">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{animatedStats.teachers.toLocaleString()}+</div>
                    <div className="text-sm text-gray-600">Teachers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{animatedStats.schools.toLocaleString()}+</div>
                    <div className="text-sm text-gray-600">Schools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{animatedStats.improvement}%</div>
                    <div className="text-sm text-gray-600">Improvement</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-in slide-in-from-right duration-700 delay-300">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm text-gray-500 ml-2">Mentora AI Dashboard</span>
                  </div>
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Teacher+Dashboard+Preview"
                    alt="Teacher Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2 animate-in fade-in duration-500">
                POWERFUL FEATURES
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-in slide-in-from-bottom duration-700">
                Everything You Need to Excel in Teaching
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
                Comprehensive AI tools designed specifically for Indian educators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-blue-500 group transform hover:scale-105 animate-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 ${feature.color} ${feature.hoverColor} rounded-lg transition-all duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <TrendingUp className="w-4 h-4" />
                        {feature.benefit}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Time Saving Comparison */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See How Much Time You'll Save</h2>
              <p className="text-xl text-gray-600">Traditional methods vs. AI-powered efficiency</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-6 text-center group hover:shadow-lg transition-all duration-300">
                  <div
                    className={`p-4 ${keyFeatures[index]?.color} rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <useCase.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Traditional:</span>
                      <span className="text-red-600 font-medium">{useCase.traditional}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">With AI:</span>
                      <span className="text-green-600 font-bold">{useCase.time}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our Tools in Action</h2>
              <p className="text-xl text-gray-600">See how our AI-powered features work with real examples</p>
            </div>

            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
                <TabsTrigger value="lesson-plan" className="text-sm">
                  Lesson Plans
                </TabsTrigger>
                <TabsTrigger value="questions" className="text-sm">
                  Question Bank
                </TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm">
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lesson-plan" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Lesson Plan Generator</h3>
                  {demoContent["lesson-plan"].content}
                </Card>
              </TabsContent>

              <TabsContent value="questions" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Question Bank</h3>
                  {demoContent["questions"].content}
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Performance Analytics</h3>
                  {demoContent["analytics"].content}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Teachers Across India</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 from 10,000+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-14 h-14 group-hover:scale-110 transition-transform">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                        {testimonial.image}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.school}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{testimonial.improvement}</div>
                      <div className="text-xs text-gray-500">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{testimonial.experience}</div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">SECURE & TRUSTED</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Data is Safe with Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade security and privacy protection for all your educational data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "COPPA Compliant",
                  description: "Full compliance with children's privacy regulations",
                },
                {
                  icon: Award,
                  title: "ISO 27001",
                  description: "International security management standards",
                },
                {
                  icon: Globe,
                  title: "GDPR Ready",
                  description: "European data protection compliance",
                },
                {
                  icon: CheckCircle,
                  title: "99.9% Uptime",
                  description: "Reliable service you can count on",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="p-4 bg-green-100 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Teaching?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 50,000+ teachers who are already saving time and improving student outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="mailto:hello@qubilearn.in">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
