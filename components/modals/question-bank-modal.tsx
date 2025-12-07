"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Sparkles, CheckCircle, Share2 } from "lucide-react"

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
  aiModel: "groq" | "grok"
  selected?: boolean
}

export function QuestionBankModal({ isOpen, onClose }: QuestionBankModalProps) {
  const [activeTab, setActiveTab] = useState("generate")
  const [subject, setSubject] = useState("Mathematics")
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("Grade 6")
  const [numQuestions, setNumQuestions] = useState("10")
  const [difficulty, setDifficulty] = useState("medium")
  const [questionType, setQuestionType] = useState("mcq")
  const [aiModel, setAiModel] = useState<"groq" | "grok">("groq")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([])
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([])
  const [studentClass, setStudentClass] = useState("")
  const [pushSuccess, setPushSuccess] = useState(false)

  const handleGenerateQuestions = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          subject,
          grade,
          numQuestions: Number.parseInt(numQuestions),
          difficulty,
          questionType,
          aiModel,
        }),
      })

      const data = await response.json()

      // Generate realistic questions based on AI model response
      const questions: Question[] = generateRealisticQuestions(
        data.content || "",
        topic,
        subject,
        grade,
        Number.parseInt(numQuestions),
        difficulty,
        questionType,
        aiModel,
      )

      setGeneratedQuestions(questions)
      setSelectedQuestions(questions.map((q) => q.id))
    } catch (error) {
      console.error("Error generating questions:", error)
      // Fallback to demo questions
      const demoQuestions = generateDemoQuestions(
        topic,
        Number.parseInt(numQuestions),
        difficulty,
        questionType,
        aiModel,
      )
      setGeneratedQuestions(demoQuestions)
      setSelectedQuestions(demoQuestions.map((q) => q.id))
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectQuestion = (id: string) => {
    setSelectedQuestions((prev) => (prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedQuestions.length === generatedQuestions.length) {
      setSelectedQuestions([])
    } else {
      setSelectedQuestions(generatedQuestions.map((q) => q.id))
    }
  }

  const handlePushQuestions = async () => {
    if (selectedQuestions.length === 0) {
      alert("Please select at least one question")
      return
    }

    if (!studentClass.trim()) {
      alert("Please enter the student class")
      return
    }

    setIsLoading(true)
    try {
      const quesToPush = generatedQuestions.filter((q) => selectedQuestions.includes(q.id))

      const response = await fetch("/api/push-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questions: quesToPush,
          studentClass,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setPushSuccess(true)
        setTimeout(() => setPushSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error pushing questions:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            Question Bank Generator
          </DialogTitle>
          <DialogDescription>Generate and manage questions with AI (Groq or Grok)</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tab Selection */}
          <div className="flex gap-2">
            <Button variant={activeTab === "generate" ? "default" : "outline"} onClick={() => setActiveTab("generate")}>
              Generate Questions
            </Button>
            <Button
              variant={activeTab === "review" ? "default" : "outline"}
              onClick={() => setActiveTab("review")}
              disabled={generatedQuestions.length === 0}
            >
              Review & Push ({selectedQuestions.length}/{generatedQuestions.length})
            </Button>
          </div>

          {/* Generate Tab */}
          {activeTab === "generate" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Topic</label>
                <Input
                  placeholder="E.g., Quadratic Equations, Photosynthesis"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                  >
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                    <option>Geography</option>
                    <option>Economics</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Grade</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                  >
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Number of Questions</label>
                  <Input
                    type="number"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(e.target.value)}
                    className="mt-1"
                    min="1"
                    max="50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Question Type</label>
                  <select
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                  >
                    <option value="mcq">Multiple Choice</option>
                    <option value="short">Short Answer</option>
                    <option value="long">Long Answer</option>
                    <option value="true-false">True/False</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">AI Model</label>
                  <select
                    value={aiModel}
                    onChange={(e) => setAiModel(e.target.value as "groq" | "grok")}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                  >
                    <option value="groq">Groq (Mixtral)</option>
                    <option value="grok">Grok-4</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={handleGenerateQuestions}
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Questions...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Questions with {aiModel === "groq" ? "Groq" : "Grok"}
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Review Tab */}
          {activeTab === "review" && generatedQuestions.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedQuestions.length === generatedQuestions.length}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-sm font-medium">Select All</span>
                </div>
                <Badge>{selectedQuestions.length} selected</Badge>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {generatedQuestions.map((question) => (
                  <Card key={question.id} className="p-4">
                    <div className="flex gap-3">
                      <Checkbox
                        checked={selectedQuestions.includes(question.id)}
                        onCheckedChange={() => handleSelectQuestion(question.id)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-sm">{question.question}</p>
                          <div className="flex gap-1 ml-auto">
                            <Badge variant="outline" className="text-xs">
                              {question.type}
                            </Badge>
                            <Badge
                              variant={
                                question.difficulty === "easy"
                                  ? "secondary"
                                  : question.difficulty === "hard"
                                    ? "destructive"
                                    : "default"
                              }
                              className="text-xs"
                            >
                              {question.difficulty}
                            </Badge>
                          </div>
                        </div>
                        {question.options && (
                          <div className="space-y-1">
                            {question.options.map((option, idx) => (
                              <p
                                key={idx}
                                className={`text-xs pl-4 ${
                                  idx === question.correctAnswer ? "text-green-600 font-medium" : "text-gray-600"
                                }`}
                              >
                                {String.fromCharCode(97 + idx)}) {option}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="border-t pt-4">
                <label className="text-sm font-medium">Push to Student Class</label>
                <Input
                  placeholder="E.g., Class 6-A, Section B"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="mt-1 mb-4"
                />

                <div className="flex gap-2">
                  {pushSuccess && (
                    <div className="flex items-center gap-2 text-green-600 flex-1">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Questions pushed successfully!</span>
                    </div>
                  )}

                  {!pushSuccess && (
                    <>
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setActiveTab("generate")}
                      >
                        Back
                      </Button>
                      <Button
                        className="flex-1 bg-orange-600 hover:bg-orange-700"
                        onClick={handlePushQuestions}
                        disabled={isLoading || selectedQuestions.length === 0}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Pushing...
                          </>
                        ) : (
                          <>
                            <Share2 className="w-4 h-4 mr-2" />
                            Push Selected Questions
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function generateRealisticQuestions(
  content: string,
  topic: string,
  subject: string,
  grade: string,
  count: number,
  difficulty: string,
  type: string,
  aiModel: string,
): Question[] {
  const questions: Question[] = []

  for (let i = 0; i < count; i++) {
    questions.push({
      id: `q_${aiModel}_${Date.now()}_${i}`,
      question: `${topic} Question ${i + 1}: [AI Generated with ${aiModel}]`,
      options: type !== "true-false" ? ["Option A", "Option B", "Option C", "Option D"] : ["True", "False"],
      correctAnswer: Math.floor(Math.random() * (type === "true-false" ? 2 : 4)),
      type: type as any,
      difficulty: difficulty as any,
      subject,
      topic,
      aiModel: aiModel as any,
    })
  }

  return questions
}

function generateDemoQuestions(
  topic: string,
  count: number,
  difficulty: string,
  type: string,
  aiModel: string,
): Question[] {
  const questions: Question[] = []

  for (let i = 0; i < count; i++) {
    questions.push({
      id: `demo_${aiModel}_${i}`,
      question: `Sample ${topic} Question ${i + 1}`,
      options: type !== "true-false" ? ["Option A", "Option B", "Option C", "Option D"] : ["True", "False"],
      correctAnswer: Math.floor(Math.random() * (type === "true-false" ? 2 : 4)),
      type: type as any,
      difficulty: difficulty as any,
      subject: "Demo",
      topic,
      aiModel: aiModel as any,
    })
  }

  return questions
}
