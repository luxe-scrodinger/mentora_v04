import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, BookOpen, FileText, Lightbulb, Book, FileQuestion, FileBadge, Award } from "lucide-react"
import Link from "next/link"

export default function TeachingMaterialsPage() {
  const materialsCategories = [
    {
      id: "ai-tools",
      icon: Brain,
      title: "AI Tools",
      description: "Generate lessons, quizzes, presentations, and more with AI for all grades.",
      link: "/dashboard",
    },
    {
      id: "question-bank",
      icon: FileQuestion,
      title: "Question Bank",
      description: "Access over 200,000 questions with answer keys for Grades 1-12 across all subjects.",
      link: "/teachers#question-bank",
    },
    {
      id: "lesson-plans",
      icon: BookOpen,
      title: "Lesson Plans",
      description: "Create tailored lesson plans aligned with CBSE, ICSE, IB, and custom curricula.",
      link: "/dashboard",
    },
    {
      id: "lessons",
      icon: Book,
      title: "Lessons",
      description: "Explore a library of pre-made lessons for individual grades and subjects.",
      link: "#",
    },
    {
      id: "activities",
      icon: Lightbulb,
      title: "Activities",
      description: "Discover engaging activities, games, and interactive exercises for every grade level.",
      link: "#",
    },
    {
      id: "summaries",
      icon: FileText,
      title: "Summaries",
      description: "Find concise summaries of topics, articles, and class notes for all grades.",
      link: "#",
    },
    {
      id: "chapters",
      icon: FileBadge,
      title: "Chapters",
      description: "Browse educational content organized by chapters and topics for each grade.",
      link: "#",
    },
  ]

  const curriculumSupport = [
    { name: "CBSE", description: "Central Board of Secondary Education", color: "bg-blue-100 text-blue-800" },
    { name: "ICSE", description: "Indian Certificate of Secondary Education", color: "bg-green-100 text-green-800" },
    { name: "IB", description: "International Baccalaureate", color: "bg-purple-100 text-purple-800" },
    { name: "State Boards", description: "Regional Education Boards", color: "bg-orange-100 text-orange-800" },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section with increased padding */}
        <section className="py-32 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Explore Our <span className="text-blue-600">Teaching Materials</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive library of AI-generated and curated educational resources for every grade, subject, and
              curriculum need. Supporting CBSE, ICSE, IB, and custom solutions.
            </p>

            {/* Curriculum Support Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {curriculumSupport.map((curriculum, index) => (
                <Badge key={index} className={`px-4 py-2 ${curriculum.color}`}>
                  {curriculum.name}
                </Badge>
              ))}
              <Badge className="px-4 py-2 bg-pink-100 text-pink-800">Custom Curriculum</Badge>
            </div>
          </div>
        </section>

        {/* Materials Categories Section with increased padding */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Resources by Category</h2>
              <p className="text-xl text-gray-600">Everything you need to create engaging lessons for Grades 1-12</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materialsCategories.map((category) => (
                <Link key={category.id} href={category.link} className="group block" id={category.id}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105">
                    <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <category.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Curriculum Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-white shadow-xl border-2 border-purple-200">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Award className="w-12 h-12 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Custom Curriculum Solutions</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
                Need materials tailored to your institution's unique requirements? We create bespoke teaching resources,
                lesson plans, and assessments aligned with your specific curriculum, learning objectives, and
                pedagogical approach. Perfect for specialized schools, international institutions, and innovative
                educational programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Custom Lesson Plans</h3>
                  <p className="text-sm text-gray-600">Tailored to your specific learning outcomes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileQuestion className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bespoke Assessments</h3>
                  <p className="text-sm text-gray-600">Questions aligned with your curriculum standards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Tools</h3>
                  <p className="text-sm text-gray-600">Custom AI models trained on your content</p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                  Discuss Custom Curriculum
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
