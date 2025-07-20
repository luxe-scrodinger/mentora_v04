"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  X,
  MessageSquare,
  History,
  Star,
  GraduationCap,
  BookOpen,
  Users,
  FileBarChart,
  Edit3,
  Calendar,
  Grid3X3,
} from "lucide-react"

interface CreateMoreAIModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenToolModal: (toolType: string) => void
  onOpenChatbot: () => void // New prop for opening chatbot
}

export function CreateMoreAIModal({ isOpen, onClose, onOpenToolModal, onOpenChatbot }: CreateMoreAIModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    { label: "All", icon: Grid3X3 },
    { label: "Planning", icon: Calendar },
    { label: "Lesson Preparation", icon: BookOpen },
    { label: "Student Engagement", icon: Users },
    { label: "Assessments", icon: FileBarChart },
    { label: "Automatic Grading", icon: Star },
    { label: "Feedback and Support", icon: MessageSquare },
    { label: "Activity Sheets", icon: Edit3 },
    { label: "Accessibility", icon: Users },
    { label: "School Routine", icon: BookOpen },
    { label: "Teach with AI", icon: GraduationCap },
    { label: "Anything else", icon: MessageSquare },
  ]

  const allTools = [
    { icon: "📚", label: "Lesson Plan", type: "lesson-plan", category: "Lesson Preparation" },
    { icon: "📊", label: "Slide Presentation", type: "slide-presentation", category: "Lesson Preparation" },
    { icon: "❓", label: "Quiz", type: "quiz", category: "Assessments" },
    { icon: "📋", label: "Instructional Sequence", type: "instructional-sequence", category: "Lesson Preparation" },
    { icon: "📄", label: "Topic Summary", type: "topic-summary", category: "Lesson Preparation" },
    { icon: "🔬", label: "Science Lab", type: "science-lab", category: "Lesson Preparation" },
    { icon: "🧠", label: "Mind Map", type: "mind-map", category: "Planning" },
    { icon: "📝", label: "Exam", type: "exam", category: "Assessments" },
    { icon: "🎨", label: "Coloring Images", type: "coloring-images", category: "Activity Sheets" },
    { icon: "🔍", label: "Word Search", type: "word-search", category: "Activity Sheets" },
    { icon: "🧩", label: "Crossword", type: "crossword", category: "Activity Sheets" },
    { icon: "🧮", label: "Math Activities", type: "activity-sheets", category: "Activity Sheets" },
    { icon: "✏️", label: "Spelling and Alphabet Activities", type: "activity-sheets", category: "Activity Sheets" },
    { icon: "🎯", label: "Symmetrical Drawing", type: "symmetrical-drawing", category: "Activity Sheets" },
    { icon: "🎮", label: "Interactive Educational Games", type: "interactive-games", category: "Student Engagement" },
    { icon: "💡", label: "Activity Ideas", type: "activity-ideas", category: "Planning" },
    { icon: "👨‍🏫", label: "Review Tutor", type: "review-tutor", category: "Teach with AI" },
    { icon: "✍️", label: "Calligraphy Development", type: "calligraphy", category: "Activity Sheets" },
    { icon: "📝", label: "Essay", type: "essay", category: "Assessments" },
    { icon: "❓", label: "Questions about a Text", type: "questions-text", category: "Assessments" },
    { icon: "📈", label: "Learning Recovery Plan", type: "recovery-plan", category: "Planning" },
    { icon: "🎉", label: "Ideas for School Events", type: "school-events", category: "School Routine" },
    { icon: "💌", label: "Thank You Messages", type: "thank-you", category: "Anything else" },
    { icon: "▶️", label: "Questions about YouTube Video", type: "youtube-questions", category: "Teach with AI" },
    { icon: "🎬", label: "YouTube Video Summary", type: "youtube-summary", category: "Teach with AI" },
    {
      icon: "📖",
      label: "Activities Based on Children's Stories",
      type: "children-stories",
      category: "Activity Sheets",
    },
    { icon: "🎲", label: "Play Ideas", type: "play-ideas", category: "Student Engagement" },
  ]

  const filteredTools = allTools.filter(
    (tool) =>
      (activeCategory === "All" || tool.category === activeCategory) &&
      tool.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const recommendedTools = allTools.slice(0, 8) // Example recommended tools

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-6 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Create More with AI</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative mt-4">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </DialogHeader>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
            <div className="space-y-1">
              {categories.map((category) => (
                <Button
                  key={category.label}
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeCategory === category.label ? "bg-blue-50 text-blue-700" : "text-gray-600"
                  }`}
                  onClick={() => setActiveCategory(category.label)}
                >
                  <category.icon className="w-4 h-4 mr-3" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <ScrollArea className="flex-1 p-6">
            <div className="flex justify-end gap-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 bg-transparent"
                onClick={onOpenChatbot}
              >
                <MessageSquare className="w-4 h-4" />
                Lara (Chatbot)
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                <History className="w-4 h-4" />
                History
              </Button>
            </div>

            {activeCategory === "All" && !searchTerm && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended</h3>
                <div className="grid grid-cols-3 gap-4">
                  {recommendedTools.map((tool, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => onOpenToolModal(tool.type)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">{tool.icon}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-700 leading-tight">{tool.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{activeCategory}</h3>
              {/* Add sort/filter dropdowns if needed */}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {filteredTools.map((tool, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => onOpenToolModal(tool.type)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{tool.icon}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 leading-tight">{tool.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
