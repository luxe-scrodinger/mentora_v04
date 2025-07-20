import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, AlertTriangle, BookOpen, Award } from "lucide-react"

export default function TeachersPage() {
  const testimonials = [
    {
      name: "Dr. Anjali Gupta",
      role: "Mathematics Teacher",
      quote:
        "I have a wonderful experience with Mentora AI: it makes my work much easier, speeds things up, and is very user-friendly. My students' performance improved by 40%.",
      image: "/placeholder.svg?height=40&width=40&text=AG",
    },
    {
      name: "Ravi Sharma",
      role: "Science Teacher",
      quote:
        "I loved Mentora AI platform, the technology is amazing and everything is in one place! Perfect for Indian classrooms.",
      image: "/placeholder.svg?height=40&width=40&text=RS",
    },
    {
      name: "Priya Patel",
      role: "English Teacher",
      quote:
        "I used the AI tools to create new activities, and there was an improvement in learning and my teaching practice. With Mentora AI, I create high-quality, diverse, and engaging materials for all students.",
      image: "/placeholder.svg?height=40&width=40&text=PP",
    },
    {
      name: "Suresh Kumar",
      role: "Principal",
      quote:
        "Mentora AI helped me prepare various materials for different subjects with activity suggestions and to complement teachers' work across our school!",
      image: "/placeholder.svg?height=40&width=40&text=SK",
    },
  ]

  const studentPerformanceData = [
    { subject: "Hindi", performance: 95 },
    { subject: "Mathematics", performance: 78 },
    { subject: "Science", performance: 85 },
    { subject: "Social Studies", performance: 82 },
    { subject: "English", performance: 88 },
    { subject: "Sanskrit", performance: 75 },
    { subject: "Computer Science", performance: 92 },
    { subject: "Art", performance: 89 },
    { subject: "Physical Education", performance: 95 },
    { subject: "Music", performance: 87 },
    { subject: "Environmental Studies", performance: 83 },
    { subject: "Moral Science", performance: 91 },
    { subject: "General Knowledge", performance: 79 },
    { subject: "Regional Language", performance: 86 },
  ]

  const curriculumBoards = [
    { name: "CBSE", description: "Central Board of Secondary Education", color: "bg-blue-100 text-blue-800" },
    { name: "ICSE", description: "Indian Certificate of Secondary Education", color: "bg-green-100 text-green-800" },
    { name: "IB", description: "International Baccalaureate", color: "bg-purple-100 text-purple-800" },
    { name: "State Boards", description: "Regional Education Boards", color: "bg-orange-100 text-orange-800" },
    { name: "Custom", description: "Tailored Curriculum Solutions", color: "bg-pink-100 text-pink-800" },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section with increased padding */}
        <section className="py-32 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your happiest teachers.</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With Mentora AI, Indian teachers save their time by 90% and gain access to higher-quality materials.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 col-span-1 md:col-span-1 lg:col-span-2"
              >
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
                  </div>
                </div>
              </Card>
            ))}
            <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600">50K+</div>
                <div className="text-xl font-semibold text-gray-900">Indian Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600">5K+</div>
                <div className="text-xl font-semibold text-gray-900">Indian Schools</div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Support Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">CURRICULUM SUPPORT</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aligned with Major Indian & International Curricula
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Supporting CBSE, ICSE, IB, State Boards, and Custom Curriculum Solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {curriculumBoards.map((board, index) => (
                <Card
                  key={index}
                  className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <Badge className={`mb-3 ${board.color}`}>{board.name}</Badge>
                  <p className="text-sm text-gray-600">{board.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Custom Curriculum Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Need something unique for your institution? We create bespoke curriculum solutions tailored to your
                specific requirements, learning objectives, and pedagogical approach. Perfect for specialized schools,
                international institutions, and innovative educational programs.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Discuss Custom Curriculum</Button>
            </Card>
          </div>
        </section>

        {/* Question Bank Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium">QUESTION BANK</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              +200,000 questions with answer keys from various subjects and sources
            </h2>
            <p className="text-xl text-gray-600 mb-8">Weekly updated assignments aligned with Indian curriculum</p>

            <div className="bg-gray-50 p-8 rounded-lg shadow-inner max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2 text-left">
                  <Label htmlFor="grade-select" className="text-gray-700">
                    Grade
                  </Label>
                  <Select>
                    <SelectTrigger id="grade-select">
                      <SelectValue placeholder="Select individual grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade-1">Grade 1</SelectItem>
                      <SelectItem value="grade-2">Grade 2</SelectItem>
                      <SelectItem value="grade-3">Grade 3</SelectItem>
                      <SelectItem value="grade-4">Grade 4</SelectItem>
                      <SelectItem value="grade-5">Grade 5</SelectItem>
                      <SelectItem value="grade-6">Grade 6</SelectItem>
                      <SelectItem value="grade-7">Grade 7</SelectItem>
                      <SelectItem value="grade-8">Grade 8</SelectItem>
                      <SelectItem value="grade-9">Grade 9</SelectItem>
                      <SelectItem value="grade-10">Grade 10</SelectItem>
                      <SelectItem value="grade-11">Grade 11</SelectItem>
                      <SelectItem value="grade-12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="subject-select" className="text-gray-700">
                    Subject
                  </Label>
                  <Select>
                    <SelectTrigger id="subject-select">
                      <SelectValue placeholder="Enter or select the subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="social">Social Studies</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="sanskrit">Sanskrit</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="geography">Geography</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="political-science">Political Science</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 transition-colors">
                Search questions
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Original questions reviewed by Indian educators
                </h3>
                <p className="text-lg text-gray-600">
                  Greater assurance in assessing learning and genuine student performance aligned with CBSE, ICSE, IB,
                  and state board curricula.
                </p>
              </div>
              <div className="relative flex justify-center">
                <img
                  src="/placeholder-9xg3j.png"
                  alt="Question Preview"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Data-Driven Learning Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data-Driven Learning for Indian Classrooms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance, growth, and results in personalized dashboards tailored for Indian education.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Topics with highest error rate
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-2 text-red-600 font-medium">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">1</span>
                  Quadratic Equations
                </li>
                <li className="flex items-center gap-2 text-red-600 font-medium">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">2</span>
                  Photosynthesis Process
                </li>
                <li className="flex items-center gap-2 text-red-600 font-medium">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">3</span>
                  Indian History - Mughal Period
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">4</span>
                  English Grammar - Tenses
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">5</span>
                  Chemical Bonding
                </li>
              </ul>
              <Button variant="outline" className="mt-6 w-full bg-transparent hover:bg-red-50">
                Generate exercise list
              </Button>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Student performance by subject
              </h3>
              <div className="space-y-3">
                {studentPerformanceData.map((data, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 w-24 text-right">{data.subject}</span>
                    <Progress value={data.performance} className="flex-1" />
                    <span className="text-sm font-medium text-gray-900">{data.performance}%</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Overall performance
              </h3>
              <div className="flex flex-col items-center justify-center h-48">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-green-500"
                      strokeWidth="10"
                      strokeDasharray="276.46 251.32"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">92%</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-medium mt-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12%</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
