"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, HelpCircle, ChevronLeft, Bot, Sparkles, Send, CheckCircle, Copy, Download, Filter } from "lucide-react"

interface QuestionBankModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Question {
  id: string
  question: string
  options?: string[]
  correctAnswer?: number
  type: "mcq" | "short" | "long" | "true-false"
  difficulty: "easy" | "medium" | "hard"
  subject: string
  topic: string
  aiModel: "chatgpt" | "xai"
  selected?: boolean
}

export function QuestionBankModal({ isOpen, onClose }: QuestionBankModalProps) {
  const [activeTab, setActiveTab] = useState("generate")
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("Grade 10")
  const [numQuestions, setNumQuestions] = useState("10")
  const [difficulty, setDifficulty] = useState("medium")
  const [questionType, setQuestionType] = useState("mcq")
  const [aiModel, setAiModel] = useState("chatgpt")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([])
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([])
  const [studentClass, setStudentClass] = useState("")
  const [pushSuccess, setPushSuccess] = useState(false)

  // Sample generated questions
  const sampleQuestions: Question[] = [
    {
      id: "q1",
      question: "What is the process by which plants make their own food using sunlight?",
      options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
      correctAnswer: 1,
      type: "mcq",
      difficulty: "easy",
      subject: "Biology",
      topic: "Plant Processes",
      aiModel: "chatgpt",
    },
    {
      id: "q2",
      question: "Explain the role of chlorophyll in photosynthesis.",
      type: "short",
      difficulty: "medium",
      subject: "Biology",
      topic: "Plant Processes",
      aiModel: "xai",
    },
    {
      id: "q3",
      question: "The equation for photosynthesis is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
      type: "true-false",
      difficulty: "medium",
      subject: "Biology",
      topic: "Plant Processes",
      aiModel: "chatgpt",
    },
  ]

  const handleGenerateQuestions = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          topic,
          grade,
          numQuestions,
          difficulty,
          questionType,
          aiModel,
        }),
      })
      const data = await response.json()

      if (data.success) {
        setGeneratedQuestions(data.questions || sampleQuestions)
        setActiveTab("bank")
      }
    } catch (error) {
      console.error("Error generating questions:", error)
      // Fallback to sample questions
      setGeneratedQuestions(sampleQuestions)
      setActiveTab("bank")
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const handleSelectAll = () => {
    if (selectedQuestions.length === generatedQuestions.length) {
      setSelectedQuestions([])
    } else {
      setSelectedQuestions(generatedQuestions.map((q) => q.id))
    }
  }

  const handlePushQuestions = async () => {
    if (selectedQuestions.length === 0 || !studentClass) {
      alert("Please select questions and specify a class")
      return
    }

    setIsLoading(true)
    try {
      const questionsToSend = generatedQuestions.filter((q) => selectedQuestions.includes(q.id))

      const response = await fetch("/api/push-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions: questionsToSend,
          targetClass: studentClass,
          teacherId: "teacher-123", // This would come from auth context
        }),
      })

      const data = await response.json()

      if (data.success) {
        setPushSuccess(true)
        setTimeout(() => setPushSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error pushing questions:", error)
      alert("Failed to push questions. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const renderQuestion = (question: Question, index: number) => (
    <Card key={question.id} className="p-4 mb-4 border-l-4 border-l-blue-500">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={selectedQuestions.includes(question.id)}
            onCheckedChange={() => handleQuestionSelect(question.id)}
          />
          <Badge variant="outline" className="text-xs">
            {question.type.toUpperCase()}
          </Badge>
          <Badge
            variant="secondary"
            className={`text-xs ${
              question.difficulty === "easy"
                ? "bg-green-100 text-green-800"
                : question.difficulty === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {question.difficulty}
          </Badge>
          <Badge variant="outline" className="text-xs flex items-center gap-1">
            {question.aiModel === "chatgpt" ? <Bot className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
            {question.aiModel === "chatgpt" ? "ChatGPT" : "XAI"}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost">
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mb-3">
        <p className="font-medium text-gray-900 mb-2">
          Q{index + 1}. {question.question}
        </p>

        {question.options && (
          <div className="ml-4 space-y-1">
            {question.options.map((option, idx) => (
              <div
                key={idx}
                className={`text-sm p-2 rounded ${
                  question.correctAnswer === idx ? "bg-green-50 text-green-800 font-medium" : "text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + idx)}. {option}
                {question.correctAnswer === idx && <CheckCircle className="w-4 h-4 inline ml-2" />}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>
          {question.subject} • {question.topic}
        </span>
        <span>Generated by {question.aiModel === "chatgpt" ? "ChatGPT" : "XAI"}</span>
      </div>
    </Card>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 max-h-[90vh]">
        <DialogHeader className="p-6 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={onClose} className="-ml-2">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <DialogTitle className="flex items-center gap-3 text-xl font-bold">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              AI Question Bank
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">Generate and manage questions using ChatGPT and XAI</p>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="px-6 pt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate">Generate Questions</TabsTrigger>
              <TabsTrigger value="bank">Question Bank ({generatedQuestions.length})</TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1 px-6 pb-6">
            <TabsContent value="generate" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Mathematics, Science, English"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic *</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., Photosynthesis, Algebra, Grammar"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Level</Label>
                  <Select value={grade} onValueChange={setGrade}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={`Grade ${i + 1}`}>
                          Grade {i + 1}
                        </SelectItem>
                      ))}
                      <SelectItem value="University">University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numQuestions">Number of Questions</Label>
                  <Select value={numQuestions} onValueChange={setNumQuestions}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Questions</SelectItem>
                      <SelectItem value="10">10 Questions</SelectItem>
                      <SelectItem value="15">15 Questions</SelectItem>
                      <SelectItem value="20">20 Questions</SelectItem>
                      <SelectItem value="25">25 Questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Question Type</Label>
                  <RadioGroup value={questionType} onValueChange={setQuestionType} className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mcq" id="mcq" />
                      <Label htmlFor="mcq">Multiple Choice</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="short" id="short" />
                      <Label htmlFor="short">Short Answer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="long" id="long" />
                      <Label htmlFor="long">Long Answer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true-false" id="true-false" />
                      <Label htmlFor="true-false">True/False</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Difficulty Level</Label>
                  <RadioGroup value={difficulty} onValueChange={setDifficulty} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="easy" id="easy" />
                      <Label htmlFor="easy">Easy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hard" id="hard" />
                      <Label htmlFor="hard">Hard</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  AI Model Selection
                </h4>
                <RadioGroup value={aiModel} onValueChange={setAiModel} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="chatgpt" id="chatgpt" />
                    <Label htmlFor="chatgpt" className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      ChatGPT
                      <Badge variant="secondary" className="text-xs">
                        Recommended
                      </Badge>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="xai" id="xai" />
                    <Label htmlFor="xai" className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      XAI (Grok)
                      <Badge variant="outline" className="text-xs">
                        Advanced
                      </Badge>
                    </Label>
                  </div>
                </RadioGroup>
                <p className="text-xs text-blue-700">
                  ChatGPT excels at structured questions, while XAI provides more creative and analytical questions.
                </p>
              </div>

              <Button
                onClick={handleGenerateQuestions}
                disabled={isLoading || !subject || !topic}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
              >
                {isLoading
                  ? "Generating Questions..."
                  : `Generate ${numQuestions} Questions with ${aiModel === "chatgpt" ? "ChatGPT" : "XAI"}`}
                {aiModel === "chatgpt" ? <Bot className="w-4 h-4 ml-2" /> : <Sparkles className="w-4 h-4 ml-2" />}
              </Button>
            </TabsContent>

            <TabsContent value="bank" className="space-y-6 mt-6">
              {generatedQuestions.length > 0 ? (
                <>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSelectAll}
                        className="flex items-center gap-2 bg-transparent"
                      >
                        <Checkbox
                          checked={selectedQuestions.length === generatedQuestions.length}
                          onChange={() => {}}
                        />
                        Select All ({selectedQuestions.length}/{generatedQuestions.length})
                      </Button>
                      <Badge variant="secondary">
                        {generatedQuestions.filter((q) => q.aiModel === "chatgpt").length} ChatGPT
                      </Badge>
                      <Badge variant="secondary">
                        {generatedQuestions.filter((q) => q.aiModel === "xai").length} XAI
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {generatedQuestions.map((question, index) => renderQuestion(question, index))}
                  </div>

                  {selectedQuestions.length > 0 && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 -mx-6 -mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">{selectedQuestions.length} questions selected</span>
                          <div className="flex items-center gap-2">
                            <Label htmlFor="studentClass" className="text-sm">
                              Push to Class:
                            </Label>
                            <Select value={studentClass} onValueChange={setStudentClass}>
                              <SelectTrigger className="w-40">
                                <SelectValue placeholder="Select class" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="grade-10-a">Grade 10-A</SelectItem>
                                <SelectItem value="grade-10-b">Grade 10-B</SelectItem>
                                <SelectItem value="grade-9-a">Grade 9-A</SelectItem>
                                <SelectItem value="grade-9-b">Grade 9-B</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button
                          onClick={handlePushQuestions}
                          disabled={isLoading || !studentClass}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {isLoading ? "Pushing..." : "Push Questions"}
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {pushSuccess && (
                    <div className="fixed top-4 right-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded-lg shadow-lg z-50">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Questions pushed successfully to {studentClass}!
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Generated Yet</h3>
                  <p className="text-gray-500 mb-4">Generate questions using AI to get started</p>
                  <Button onClick={() => setActiveTab("generate")} variant="outline">
                    Generate Questions
                  </Button>
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
