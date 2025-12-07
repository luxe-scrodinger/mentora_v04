"use client"

import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Target,
  Trophy,
  PlaySquare,
  Star,
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Gamepad2,
  Smartphone,
  Globe,
  ArrowRight,
  Medal,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function StudentsPage() {
  const [billingCycle, setBillingCycle] = useState("yearly")
  const [activeFeature, setActiveFeature] = useState("adaptive-learning")
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    improvement: 0,
    questions: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const increment = duration / steps

      const targets = {
        students: 500000,
        improvement: 45,
        questions: 200000,
        satisfaction: 98,
      }

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          students: Math.floor(targets.students * progress),
          improvement: Math.floor(targets.improvement * progress),
          questions: Math.floor(targets.questions * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, increment)
    }

    animateStats()
  }, [])

  const keyBenefits = [
    {
      icon: Target,
      title: "Personalized Learning Path",
      description: "AI creates a unique study plan just for you based on your strengths and areas for improvement",
      stat: "40% faster learning",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Brain,
      title: "24/7 AI Tutor",
      description: "Get instant answers to any question, unlimited doubt solving for all subjects from Grade 1-12",
      stat: "Available 24/7",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn points, badges, and compete with friends while learning makes studying fun and engaging",
      stat: "3x more engaging",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "See your improvement in real-time with detailed analytics and personalized insights",
      stat: "Real-time feedback",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Smartphone,
      title: "Learn Anywhere",
      description: "Access all features on mobile, tablet, or desktop - study anytime, anywhere",
      stat: "100% mobile optimized",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Globe,
      title: "Multi-Curriculum Support",
      description: "Perfect for CBSE, ICSE, IB, and all State Boards with localized content",
      stat: "All Indian curricula",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const studentSuccess = [
    {
      name: "Arjun Sharma",
      grade: "Class 10, CBSE",
      improvement: "+45%",
      subject: "Mathematics",
      quote:
        "My math scores improved from 65% to 92% in just 3 months! The AI tutor explains concepts so clearly and the practice questions are perfectly matched to my level.",
      avatar: "AS",
      beforeScore: 65,
      afterScore: 92,
      timeSpent: "2 months",
      badges: 8,
    },
    {
      name: "Priya Gupta",
      grade: "Class 12, ICSE",
      improvement: "+38%",
      subject: "Physics",
      quote:
        "The personalized practice questions helped me crack JEE Advanced. The AI knew exactly what concepts I was weak at and focused on those areas.",
      avatar: "PG",
      beforeScore: 72,
      afterScore: 95,
      timeSpent: "4 months",
      badges: 12,
    },
    {
      name: "Rahul Patel",
      grade: "Class 9, State Board",
      improvement: "+52%",
      subject: "Science",
      quote:
        "Learning is actually fun now! I love the games and the way it adapts to my pace. My friends and I compete to see who can earn more badges.",
      avatar: "RP",
      beforeScore: 58,
      afterScore: 88,
      timeSpent: "3 months",
      badges: 15,
    },
  ]

  const learningPaths = [
    {
      title: "Exam Preparation",
      description: "Focused preparation for board exams and competitive tests",
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
      duration: "6 months",
      difficulty: "Advanced",
      icon: BookOpen,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Concept Building",
      description: "Strong foundation building for all subjects",
      subjects: ["All Core Subjects", "Fundamentals", "Practice"],
      duration: "3 months",
      difficulty: "Beginner",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Skill Enhancement",
      description: "Advanced problem-solving and critical thinking",
      subjects: ["Advanced Math", "Physics", "Chemistry", "Biology"],
      duration: "4 months",
      difficulty: "Expert",
      icon: Target,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const featureDemo = {
    "adaptive-learning": {
      title: "Adaptive Learning in Action",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Your Personalized Dashboard
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-medium text-gray-800">Current Progress</h5>
                {[
                  { subject: "Mathematics - Algebra", score: 85, color: "bg-green-500" },
                  { subject: "Science - Physics", score: 72, color: "bg-yellow-500" },
                  { subject: "English - Grammar", score: 91, color: "bg-blue-500" },
                  { subject: "History - Medieval", score: 78, color: "bg-purple-500" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">{item.subject}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-2 ${item.color} rounded-full transition-all duration-500`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold">{item.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h5 className="font-medium text-gray-800">AI Recommendations</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm font-medium text-yellow-800">Focus Area</p>
                    <p className="text-sm text-yellow-700">
                      Physics - Mechanics needs attention. Practice 15 more problems.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <p className="text-sm font-medium text-green-800">Achievement</p>
                    <p className="text-sm text-green-700">Great progress in Algebra! Ready for advanced topics.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm font-medium text-blue-800">Study Plan</p>
                    <p className="text-sm text-blue-700">Complete 3 more English exercises to unlock bonus content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "ai-tutor": {
      title: "AI Tutor Chat",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl max-h-80 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  Can you explain photosynthesis in simple terms? I'm having trouble understanding the process.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-md max-w-xs shadow-sm border">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">AI Tutor</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Great question! Think of photosynthesis like cooking. Plants use:
                    <br />• ☀️ Sunlight (energy source)
                    <br />• 💧 Water (from roots)
                    <br />• 🌬️ Carbon dioxide (from air)
                    <br />
                    <br />
                    They "cook" these ingredients in their leaves to make glucose (food) and release oxygen as a bonus!
                    The equation is: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  That makes sense! Can you give me practice questions on this?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-md max-w-xs shadow-sm border">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">AI Tutor</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Perfect! Here are 3 questions tailored to your level:
                    <br />
                    <br />
                    <strong>Easy:</strong> What gas do plants release during photosynthesis?
                    <br />
                    <strong>Medium:</strong> Why do plants need sunlight for photosynthesis?
                    <br />
                    <strong>Hard:</strong> How would photosynthesis be affected if CO₂ levels decreased?
                    <br />
                    <br />
                    Would you like to try answering these? I'll provide instant feedback! 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    gamification: {
      title: "Gamified Learning Experience",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Your Gaming Dashboard
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-medium text-gray-800">Achievements</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm border-2 border-yellow-200">
                    <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">1,250</div>
                    <div className="text-sm text-gray-600">Points Earned</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm border-2 border-blue-200">
                    <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">Badges</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm border-2 border-green-200">
                    <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">7</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow-sm border-2 border-purple-200">
                    <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">#3</div>
                    <div className="text-sm text-gray-600">Class Rank</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="font-medium text-gray-800">Recent Badges</h5>
                <div className="space-y-2">
                  {[
                    { name: "Math Master", desc: "Solved 50 algebra problems", color: "bg-blue-100 text-blue-800" },
                    {
                      name: "Science Explorer",
                      desc: "Completed physics chapter",
                      color: "bg-green-100 text-green-800",
                    },
                    {
                      name: "Speed Demon",
                      desc: "Answered 10 questions in 5 minutes",
                      color: "bg-red-100 text-red-800",
                    },
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <Medal className="w-6 h-6 text-yellow-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{badge.name}</p>
                        <p className="text-sm text-gray-600">{badge.desc}</p>
                      </div>
                      <Badge className={badge.color}>New!</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
              <p className="text-sm text-green-800 font-medium mb-2">
                <strong>Next Challenge:</strong> Complete 3 more Physics problems to unlock the "Physics Master" badge!
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <span className="text-sm font-bold text-green-700">7/10</span>
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
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full animate-ping"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in slide-in-from-left duration-700">
                <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2 animate-in fade-in duration-500 delay-200">
                  Join {animatedStats.students.toLocaleString()}+ Happy Students
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-in slide-in-from-left duration-700 delay-300">
                  Ace Your Exams with{" "}
                  <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-Powered
                  </span>{" "}
                  Learning
                </h1>
                <p className="text-xl text-gray-600 mb-8 animate-in slide-in-from-left duration-700 delay-500">
                  Get personalized study plans, instant doubt solving, and adaptive practice for CBSE, ICSE, IB, and
                  competitive exams. Learn smarter, not harder with {animatedStats.improvement}% average improvement!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in slide-in-from-left duration-700 delay-700">
                  <Link href="/login">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Start Learning Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    <PlaySquare className="w-5 h-5 mr-2" />
                    See How It Works
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 animate-in slide-in-from-left duration-700 delay-900">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{animatedStats.students.toLocaleString()}+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{animatedStats.questions.toLocaleString()}+</div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{animatedStats.satisfaction}%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-in slide-in-from-right duration-700 delay-300">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm text-gray-500 ml-2">Student Dashboard</span>
                  </div>
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Student+Learning+Dashboard"
                    alt="Student Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 animate-in fade-in duration-500">
                SMART LEARNING
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-in slide-in-from-bottom duration-700">
                Why Students Love Mentora AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
                Experience learning that adapts to you, not the other way around
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-purple-500 group transform hover:scale-105 animate-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 ${benefit.color} rounded-lg transition-all duration-300 group-hover:scale-110`}
                    >
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>
                      <div className="flex items-center gap-2 text-purple-600 font-medium">
                        <Zap className="w-4 h-4" />
                        {benefit.stat}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
              <p className="text-xl text-gray-600">Personalized journeys for every student's goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div
                    className={`p-4 ${path.color} rounded-lg w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <path.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{path.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{path.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-sm font-medium">{path.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <Badge
                        className={
                          path.difficulty === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : path.difficulty === "Advanced"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {path.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-800">Includes:</h4>
                    <ul className="space-y-1">
                      {path.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Start This Path</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Features Demo */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See Your Learning Experience</h2>
              <p className="text-xl text-gray-600">Explore how our AI adapts to make learning personal and effective</p>
            </div>

            <Tabs value={activeFeature} onValueChange={setActiveFeature} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
                <TabsTrigger value="adaptive-learning" className="text-sm">
                  Adaptive Learning
                </TabsTrigger>
                <TabsTrigger value="ai-tutor" className="text-sm">
                  AI Tutor
                </TabsTrigger>
                <TabsTrigger value="gamification" className="text-sm">
                  Gamification
                </TabsTrigger>
              </TabsList>

              <TabsContent value="adaptive-learning" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Adaptive Learning in Action</h3>
                  {featureDemo["adaptive-learning"].content}
                </Card>
              </TabsContent>

              <TabsContent value="ai-tutor" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Tutor Chat</h3>
                  {featureDemo["ai-tutor"].content}
                </Card>
              </TabsContent>

              <TabsContent value="gamification" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Gamified Learning Experience</h3>
                  {featureDemo["gamification"].content}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Students, Real Results</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-lg font-semibold text-gray-700 ml-2">4.8/5 from 50,000+ students</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentSuccess.map((student, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600 text-lg group-hover:scale-110 transition-transform">
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.grade}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{student.improvement}</div>
                      <div className="text-xs text-gray-500">{student.subject}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{student.quote}"</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="text-lg font-bold text-red-600">{student.beforeScore}%</div>
                        <div className="text-xs text-gray-500">Before</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="text-lg font-bold text-green-600">{student.afterScore}%</div>
                        <div className="text-xs text-gray-500">After</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t">
                      <div className="text-center">
                        <div className="text-sm font-bold text-purple-600">{student.timeSpent}</div>
                        <div className="text-xs text-gray-500">Time Taken</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-600">{student.badges}</div>
                        <div className="text-xs text-gray-500">Badges Earned</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan</h2>
              <p className="text-xl text-gray-600">Start free, upgrade when you're ready</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-lg flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                  <p className="text-gray-600 mb-6">Perfect for getting started with AI learning</p>
                  <div className="text-4xl font-bold text-purple-600 mb-8">₹0</div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>5 AI questions daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Basic progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>All subjects (Grades 1-12)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>CBSE/ICSE/IB support</span>
                    </li>
                  </ul>
                </div>
                <Link href="/login" className="w-full">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full py-3 transition-all duration-300 group-hover:scale-105">
                    Start Learning Free
                  </Button>
                </Link>
              </Card>

              <Card className="p-8 shadow-lg border-2 border-purple-600 relative flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 group">
                <Badge
                  variant="secondary"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full"
                >
                  Most Popular
                </Badge>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <p className="text-gray-600 mb-6">Unlimited learning with advanced features</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    ₹{billingCycle === "yearly" ? "299" : "399"}
                    <span className="text-xl">/month</span>
                  </div>
                  <RadioGroup
                    value={billingCycle}
                    onValueChange={setBillingCycle}
                    className="flex justify-center gap-2 mb-8"
                  >
                    <Label
                      htmlFor="monthly"
                      className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer transition-all ${
                        billingCycle === "monthly"
                          ? "bg-purple-500 text-white border-purple-500"
                          : "bg-white border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                      Monthly
                    </Label>
                    <Label
                      htmlFor="yearly"
                      className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer transition-all ${
                        billingCycle === "yearly"
                          ? "bg-purple-500 text-white border-purple-500"
                          : "bg-white border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <RadioGroupItem value="yearly" id="yearly" className="sr-only" />
                      Yearly
                      <Badge variant="secondary" className="ml-2 bg-green-200 text-green-800">
                        Save 25%
                      </Badge>
                    </Label>
                  </RadioGroup>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Unlimited AI questions & explanations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Personalized adaptive learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Advanced analytics & insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Gamification & achievements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Offline mode access</span>
                    </li>
                  </ul>
                </div>
                <Link href="/login" className="w-full">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full py-3 transition-all duration-300 group-hover:scale-105">
                    Upgrade to Premium
                  </Button>
                </Link>
              </Card>
            </div>
            <p className="text-center text-gray-600 mt-8">
              Questions? Contact us at{" "}
              <a href="mailto:hello@qubilearn.in" className="text-purple-600 hover:underline">
                hello@qubilearn.in
              </a>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join 500,000+ students who are already achieving better results with AI-powered learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="mailto:hello@qubilearn.in">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Get Support
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-purple-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                All curricula supported
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
