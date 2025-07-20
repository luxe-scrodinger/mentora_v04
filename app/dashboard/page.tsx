"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Search,
  Bell,
  Home,
  FileText,
  BookOpen,
  Users,
  MessageSquare,
  Grid3X3,
  X,
  Zap,
  HelpCircle,
  GraduationCap,
  BarChart3,
  Settings,
  Plus,
  Eye,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"

import { CreateMoreAIModal } from "@/components/modals/create-more-ai-modal"
import { SlidePresentationModal } from "@/components/modals/slide-presentation-modal"
import { ScienceLabModal } from "@/components/modals/science-lab-modal"
import { LessonPlanModal } from "@/components/modals/lesson-plan-modal"
import { QuizModal } from "@/components/modals/quiz-modal"
import { InstructionalSequenceModal } from "@/components/modals/instructional-sequence-modal"
import { QuestionBankModal } from "@/components/modals/question-bank-modal"
import { Chatbot } from "@/components/chatbot"

export default function DashboardPage() {
  const [isCreateMoreAIModalOpen, setIsCreateMoreAIModalOpen] = useState(false)
  const [openToolModal, setOpenToolModal] = useState<string | null>(null)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [generatedContent, setGeneratedContent] = useState<any[]>([])

  // Functional tools (10 key features) - Updated to include Question Bank
  const functionalTools = [
    { icon: "📚", label: "Lesson Plan", type: "lesson-plan", color: "bg-green-100", functional: true },
    { icon: "📊", label: "Slide Presentation", type: "slide-presentation", color: "bg-blue-100", functional: true },
    { icon: "❓", label: "Quiz", type: "quiz", color: "bg-purple-100", functional: true },
    { icon: "🏦", label: "Question Bank", type: "question-bank", color: "bg-orange-100", functional: true },
    {
      icon: "📋",
      label: "Instructional Sequence",
      type: "instructional-sequence",
      color: "bg-yellow-100",
      functional: true,
    },
    { icon: "🔬", label: "Science Lab", type: "science-lab", color: "bg-blue-100", functional: true },
    { icon: "🧠", label: "Mind Map", type: "mind-map", color: "bg-pink-100", functional: true },
    { icon: "📝", label: "Exam", type: "exam", color: "bg-blue-100", functional: true },
    { icon: "💡", label: "Activity Ideas", type: "activity-ideas", color: "bg-red-100", functional: true },
    { icon: "👨‍🏫", label: "Review Tutor", type: "review-tutor", color: "bg-blue-100", functional: true },
    { icon: "📈", label: "Learning Recovery Plan", type: "recovery-plan", color: "bg-red-100", functional: true },
  ]

  // Non-functional tools (blurred out)
  const nonFunctionalTools = [
    { icon: "🎨", label: "Coloring Images", type: "coloring-images", color: "bg-red-100", functional: false },
    { icon: "🔍", label: "Word Search", type: "word-search", color: "bg-blue-100", functional: false },
    { icon: "🧩", label: "Crossword", type: "crossword", color: "bg-blue-100", functional: false },
    { icon: "🧮", label: "Math Activities", type: "math-activities", color: "bg-orange-100", functional: false },
    { icon: "✏️", label: "Spelling Activities", type: "spelling-activities", color: "bg-blue-100", functional: false },
    {
      icon: "🎯",
      label: "Symmetrical Drawing",
      type: "symmetrical-drawing",
      color: "bg-orange-100",
      functional: false,
    },
    { icon: "🎮", label: "Interactive Games", type: "interactive-games", color: "bg-purple-100", functional: false },
    { icon: "✍️", label: "Calligraphy", type: "calligraphy", color: "bg-blue-100", functional: false },
    { icon: "📄", label: "Topic Summary", type: "topic-summary", color: "bg-gray-100", functional: false },
    { icon: "❓", label: "Questions about Text", type: "questions-text", color: "bg-gray-100", functional: false },
  ]

  const allTools = [...functionalTools, ...nonFunctionalTools]

  const myLessons = [
    {
      id: 1,
      title: "Introduction to Algebra",
      subject: "Mathematics",
      grade: "Class 8",
      createdAt: "2024-01-15",
      type: "Lesson Plan",
      status: "Published",
    },
    {
      id: 2,
      title: "Photosynthesis Process",
      subject: "Biology",
      grade: "Class 10",
      createdAt: "2024-01-14",
      type: "Slide Presentation",
      status: "Draft",
    },
    {
      id: 3,
      title: "Chemical Reactions Quiz",
      subject: "Chemistry",
      grade: "Class 9",
      createdAt: "2024-01-13",
      type: "Quiz",
      status: "Published",
    },
  ]

  const myMaterials = [
    {
      id: 1,
      title: "Quadratic Equations Worksheet",
      type: "Activity Sheet",
      subject: "Mathematics",
      downloads: 45,
      createdAt: "2024-01-12",
    },
    {
      id: 2,
      title: "Solar System Mind Map",
      type: "Mind Map",
      subject: "Science",
      downloads: 32,
      createdAt: "2024-01-11",
    },
    {
      id: 3,
      title: "English Grammar Assessment",
      type: "Assessment",
      subject: "English",
      downloads: 28,
      createdAt: "2024-01-10",
    },
  ]

  const handleOpenToolModal = (toolType: string) => {
    const tool = allTools.find((t) => t.type === toolType)
    if (tool?.functional) {
      setOpenToolModal(toolType)
      setIsCreateMoreAIModalOpen(false)
    }
  }

  const handleCloseToolModal = () => {
    setOpenToolModal(null)
  }

  const handleContentGenerated = (content: any) => {
    setGeneratedContent((prev) => [content, ...prev])
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2 mb-6 group transition-transform hover:scale-105">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-gray-900 font-bold text-xl">Mentora</span>
            <span className="text-blue-600 text-sm font-medium">AI</span>
          </Link>

          <nav className="space-y-2">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("home")}
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Button>
            <Button
              variant={activeTab === "lessons" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("lessons")}
            >
              <BookOpen className="w-4 h-4 mr-3" />
              My Lessons
            </Button>
            <Button
              variant={activeTab === "materials" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("materials")}
            >
              <FileText className="w-4 h-4 mr-3" />
              My Materials
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <Users className="w-4 h-4 mr-3" />
              Classes
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <MessageSquare className="w-4 h-4 mr-3" />
              Community
            </Button>
            <Link href="/analytics">
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <BarChart3 className="w-4 h-4 mr-3" />
                Analytics
              </Button>
            </Link>
          </nav>

          <div className="mt-8 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-blue-600">
              <Zap className="w-4 h-4 mr-3" />
              Upgrade Plan
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
          </div>
        </div>

        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Pro Plan Active</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search for topics, materials, etc." className="pl-10 w-80" />
                <Badge variant="secondary" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs">
                  ⌘ K
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <span className="text-blue-600 font-medium">Teacher</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsContent value="home" className="flex-1 overflow-auto">
              <ScrollArea className="h-full">
                <div className="p-6">
                  {/* Welcome Banner */}
                  <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-8 overflow-hidden">
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                      <X className="w-4 h-4" />
                    </Button>

                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Mentora AI</h2>
                        <p className="text-gray-600 mb-4">Create personalized lessons and assessments in minutes</p>
                        <Button
                          className="bg-gray-800 hover:bg-gray-900 text-white transition-colors"
                          onClick={() => setIsCreateMoreAIModalOpen(true)}
                        >
                          🚀 Start Creating
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-32 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-12 h-12 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Tools Section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Tools</h3>
                        <p className="text-gray-600">10 fully functional tools ready to use</p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setIsCreateMoreAIModalOpen(true)}
                        className="bg-transparent hover:bg-blue-50"
                      >
                        <Grid3X3 className="w-4 h-4 mr-2" />
                        View All Tools
                      </Button>
                    </div>

                    {/* Functional Tools Grid */}
                    <div className="grid grid-cols-5 gap-4 mb-6">
                      {functionalTools.map((tool, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-md transition-all cursor-pointer hover:scale-105 duration-200"
                          onClick={() => handleOpenToolModal(tool.type)}
                        >
                          <CardContent className="p-4 text-center">
                            <div
                              className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                            >
                              <span className="text-2xl">{tool.icon}</span>
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-tight">{tool.label}</p>
                            <Badge variant="secondary" className="mt-2 text-xs bg-green-100 text-green-700">
                              Active
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Non-Functional Tools (Blurred) */}
                    <div className="grid grid-cols-5 gap-4">
                      {nonFunctionalTools.map((tool, index) => (
                        <Card key={index} className="opacity-50 cursor-not-allowed relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center">
                            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                              Coming Soon
                            </Badge>
                          </div>
                          <CardContent className="p-4 text-center blur-sm">
                            <div
                              className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                            >
                              <span className="text-2xl">{tool.icon}</span>
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-tight">{tool.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Generated Content Display */}
                  {generatedContent.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Recently Generated Content</h3>
                      <div className="space-y-4">
                        {generatedContent.slice(0, 3).map((content, index) => (
                          <Card key={index} className="p-4 shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{content.title}</h4>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Download className="w-4 h-4 mr-1" />
                                  Download
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Share2 className="w-4 h-4 mr-1" />
                                  Share
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{content.type} • Generated just now</p>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700 line-clamp-3">{content.preview}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Stats */}
                  <div className="grid grid-cols-4 gap-6">
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                      <p className="text-sm text-gray-600">Lessons Created</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">8</div>
                      <p className="text-sm text-gray-600">Quizzes Generated</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
                      <p className="text-sm text-gray-600">Students Reached</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">24h</div>
                      <p className="text-sm text-gray-600">Time Saved</p>
                    </Card>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="lessons" className="flex-1 overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Lessons</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleOpenToolModal("lesson-plan")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Lesson
                  </Button>
                </div>

                <div className="grid gap-4">
                  {myLessons.map((lesson) => (
                    <Card key={lesson.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                            <Badge variant={lesson.status === "Published" ? "default" : "secondary"}>
                              {lesson.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{lesson.subject}</span>
                            <span>•</span>
                            <span>{lesson.grade}</span>
                            <span>•</span>
                            <span>{lesson.type}</span>
                            <span>•</span>
                            <span>Created {lesson.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="flex-1 overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Materials</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsCreateMoreAIModalOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Material
                  </Button>
                </div>

                <div className="grid gap-4">
                  {myMaterials.map((material) => (
                    <Card key={material.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{material.type}</span>
                            <span>•</span>
                            <span>{material.subject}</span>
                            <span>•</span>
                            <span>{material.downloads} downloads</span>
                            <span>•</span>
                            <span>Created {material.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Floating Help Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 rounded-full w-12 h-12 shadow-lg z-50 transition-all hover:scale-110"
        onClick={() => setIsChatbotOpen(true)}
      >
        <HelpCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Modals */}
      <CreateMoreAIModal
        isOpen={isCreateMoreAIModalOpen}
        onClose={() => setIsCreateMoreAIModalOpen(false)}
        onOpenToolModal={handleOpenToolModal}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <SlidePresentationModal isOpen={openToolModal === "slide-presentation"} onClose={handleCloseToolModal} />
      <ScienceLabModal isOpen={openToolModal === "science-lab"} onClose={handleCloseToolModal} />
      <LessonPlanModal isOpen={openToolModal === "lesson-plan"} onClose={handleCloseToolModal} />
      <QuizModal isOpen={openToolModal === "quiz"} onClose={handleCloseToolModal} />
      <InstructionalSequenceModal isOpen={openToolModal === "instructional-sequence"} onClose={handleCloseToolModal} />
      <QuestionBankModal isOpen={openToolModal === "question-bank"} onClose={handleCloseToolModal} />

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
