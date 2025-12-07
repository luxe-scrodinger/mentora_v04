import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  BarChart3,
  Zap,
  Users,
  CheckCircle,
  XCircle,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Lightbulb,
  Calendar,
  Video,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const coreFeatures = [
    {
      icon: Target,
      title: "Contextual Lesson Generation",
      description: "AI creates targeted lessons based on class performance and individual learning gaps",
      image: "/placeholder.svg?height=200&width=400&text=Contextual+Lesson+Generation",
    },
    {
      icon: Brain,
      title: "Smart Assessment Creator",
      description: "Generates contextual questions perfectly aligned to learning gaps and curriculum standards",
      image: "/placeholder.svg?height=200&width=400&text=Smart+Assessment+Creator",
    },
    {
      icon: Users,
      title: "Personalized Adaptive Learning (PAL)",
      description: "Revolutionary AI that adapts to each student's learning pace and style in real-time",
      image: "/placeholder.svg?height=200&width=400&text=PAL+Innovation",
    },
    {
      icon: BarChart3,
      title: "Real-Time Learning Analytics",
      description: "Track misconceptions as they happen and get instant insights into student understanding",
      image: "/placeholder.svg?height=200&width=400&text=Real+Time+Analytics",
    },
    {
      icon: Zap,
      title: "Automatic Intervention",
      description: "AI bridges learning gaps automatically without requiring teacher involvement",
      image: "/placeholder.svg?height=200&width=400&text=Auto+Intervention",
    },
  ]

  const palFeatures = [
    {
      icon: CheckCircle,
      title: "Correct Answers",
      description: "Progress to next concept + earn points",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: XCircle,
      title: "Wrong Answers",
      description: "AI provides instant feedback + easier concept questions",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Brain,
      title: "Misconception Detection",
      description: "System identifies underlying misconceptions automatically",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Personalized Pace",
      description: "Students reach grade level at their own pace",
      color: "text-blue-600 bg-blue-100",
    },
  ]

  const teacherBenefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Automated lesson planning and assessment creation",
      stat: "10+ hrs",
    },
    {
      icon: Target,
      title: "Identify Gaps Instantly",
      description: "Real-time analytics show exactly where students struggle",
      stat: "Real-time",
    },
    {
      icon: Zap,
      title: "Automatic Interventions",
      description: "AI provides targeted support without teacher involvement",
      stat: "24/7",
    },
    {
      icon: TrendingUp,
      title: "Improve Outcomes",
      description: "Schools report 23% average improvement in test scores",
      stat: "+23%",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Mathematics Teacher",
      school: "Delhi Public School, Mumbai",
      quote:
        "Spark School AI has revolutionized my classroom. The PAL system identifies exactly where each student struggles and provides targeted support instantly. My students' performance has improved by 35%.",
      image: "/placeholder.svg?height=40&width=40&text=PS",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Science Teacher",
      school: "Kendriya Vidyalaya, Bangalore",
      quote:
        "Real-time analytics show me misconceptions as they happen. I can intervene immediately instead of waiting for test results. This has transformed how I teach physics concepts.",
      image: "/placeholder.svg?height=40&width=40&text=RK",
      rating: 5,
    },
    {
      name: "Meera Patel",
      role: "English Teacher",
      school: "Ryan International School, Pune",
      quote:
        "The contextual lesson generation saves me hours of prep time while creating more engaging content than I ever could manually. My students are more engaged than ever.",
      image: "/placeholder.svg?height=40&width=40&text=MP",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      role: "Principal",
      school: "St. Xavier's School, Chennai",
      quote:
        "Our school-wide test scores improved 28% after implementing Spark School AI. The automatic intervention feature is game-changing for Indian education.",
      image: "/placeholder.svg?height=40&width=40&text=AS",
      rating: 5,
    },
  ]

  const stats = [
    { number: "50,000+", label: "Active Teachers" },
    { number: "1M+", label: "Students Learning" },
    { number: "95%", label: "Teacher Satisfaction" },
    { number: "28%", label: "Average Score Improvement" },
  ]

  const countries = [
    { name: "India", flag: "🇮🇳", users: "35,000+" },
    { name: "United States", flag: "🇺🇸", users: "15,000+" },
    { name: "United Kingdom", flag: "🇬🇧", users: "8,000+" },
    { name: "Australia", flag: "🇦🇺", users: "4,000+" },
    { name: "Canada", flag: "🇨🇦", users: "3,500+" },
    { name: "Singapore", flag: "🇸🇬", users: "2,500+" },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section with increased padding */}
        <section className="py-32 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium animate-pulse">
              Spark School AI - Transforming Indian Education
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Reinventing Teachers' Lives with <span className="text-blue-600">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Spark School AI is a revolutionary platform designed to empower Indian educators, automate processes, and
              personalize learning for every student.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 text-lg transition-all hover:scale-105 shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
            {/* Prominent Demo CTA */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-200 shadow-lg">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>30-min personalized demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span>Available today</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium">
                See how Spark School AI can transform your school's teaching and learning experience
              </p>
            </div>
          </div>
        </section>

        {/* Audience CTA Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Who is Spark School AI for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/teachers" className="group block">
                <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Teachers</h3>
                  <p className="text-gray-600 mb-6">
                    Save time on lesson planning and grading, get real-time insights into student progress.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 bg-transparent transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Link>
              <Link href="/students" className="group block">
                <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Students</h3>
                  <p className="text-gray-600 mb-6">
                    Experience personalized adaptive learning, ace exams, and study smarter.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 bg-transparent transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Link>
              <Link href="/schools" className="group block">
                <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Schools</h3>
                  <p className="text-gray-600 mb-6">
                    Empower your teachers, automate processes, and attract more students.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 bg-transparent transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Features Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Five Revolutionary AI Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spark School AI combines cutting-edge technology with educational expertise to transform how students
                learn and teachers teach.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <feature.icon className="w-16 h-16 text-blue-600" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PAL Innovation Section with increased padding */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium">
                🧠 The PAL Innovation
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Personalized Adaptive Learning <span className="text-purple-600">(PAL)</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our revolutionary AI system that creates personalized question paths based on each student's unique
                learning journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {palFeatures.map((feature, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How PAL Works</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Students receive personalized question paths based on their answers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Correct answers → Progress to next concept + earn points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Wrong answers → AI provides instant feedback + easier concept questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>System identifies underlying misconceptions automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Students reach grade level at their own pace</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/student-portal">
                      <Button className="bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105">
                        Try PAL Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">PAL Learning Path</h4>
                      <p className="text-sm text-gray-600">Adaptive questions based on student performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Teachers Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                👩‍🏫 For Teachers
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Empower Your Teaching with <span className="text-green-600">AI Intelligence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Save time, identify learning gaps instantly, and provide personalized support to every student.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {teacherBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Real-Time Reports on Every Student's Learning Journey
                </h3>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Track misconceptions in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Identify learning gaps instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Automatic intervention recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Individual progress tracking</span>
                  </li>
                </ul>
                <Link href="/analytics">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 transition-all hover:scale-105">
                    Explore Teacher Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Teacher Analytics Dashboard</h4>
                    <p className="text-sm text-gray-600">Real-time insights into student learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section with increased padding */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">🌍 Global Impact</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transforming Education <span className="text-blue-600">Worldwide</span>
              </h2>
              <p className="text-xl text-gray-600">
                Join educators from around the globe who are revolutionizing learning with Spark School AI.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {countries.map((country, index) => (
                <Card
                  key={index}
                  className="p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{country.name}</h3>
                  <p className="text-xs text-blue-600 font-medium">{country.users}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trusted by Indian Educators <span className="text-blue-600">Nationwide</span>
              </h2>
              <p className="text-xl text-gray-600">
                See how Spark School AI is transforming Indian classrooms and improving student outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.school}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Showcase with increased padding */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Spark School AI?</h2>
              <p className="text-xl text-gray-600">
                Built by educators, for educators, with cutting-edge AI technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600">COPPA & FERPA compliant. Your data is secure and never shared.</p>
              </Card>

              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Intuitive interface designed for teachers. No technical expertise required.
                </p>
              </Card>

              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Always Available</h3>
                <p className="text-gray-600">24/7 AI support and cloud-based platform accessible anywhere.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with increased padding */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Classroom?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of Indian educators using Spark School AI to personalize learning and improve student
              outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg bg-transparent transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
