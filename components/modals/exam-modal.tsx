"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Sparkles } from "lucide-react"

interface ExamModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExamModal({ isOpen, onClose }: ExamModalProps) {
  const [examName, setExamName] = useState("")
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("Mathematics")
  const [grade, setGrade] = useState("Grade 6")
  const [duration, setDuration] = useState("60")
  const [numQuestions, setNumQuestions] = useState("20")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedExam, setGeneratedExam] = useState<any>(null)

  const handleGenerateExam = async () => {
    if (!examName.trim() || !topic.trim()) {
      alert("Please fill in all fields")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "exam",
          examName,
          topic,
          subject,
          grade,
          duration: Number.parseInt(duration),
          numQuestions: Number.parseInt(numQuestions),
        }),
      })

      const data = await response.json()
      setGeneratedExam({
        name: examName,
        totalQuestions: Number.parseInt(numQuestions),
        duration: Number.parseInt(duration),
        sections: [
          { name: "Multiple Choice", questions: Math.ceil(Number.parseInt(numQuestions) * 0.4) },
          { name: "Short Answer", questions: Math.ceil(Number.parseInt(numQuestions) * 0.4) },
          { name: "Essay", questions: Math.ceil(Number.parseInt(numQuestions) * 0.2) },
        ],
      })
    } catch (error) {
      console.error("Error generating exam:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Exam Generator
          </DialogTitle>
          <DialogDescription>Create comprehensive exams with mixed question types</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Exam Name</label>
              <Input
                placeholder="E.g., Unit 5 Test, Midterm Exam"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Topic/Unit</label>
              <Input
                placeholder="E.g., Quadratic Equations"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Grade</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg mt-1"
                >
                  <option>Grade 6</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Number of Questions</label>
                <Input
                  type="number"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(e.target.value)}
                  className="mt-1"
                  min="5"
                  max="100"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Duration (minutes)</label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-1"
                  min="15"
                  max="180"
                />
              </div>
            </div>
          </div>

          {generatedExam && (
            <Card>
              <CardHeader>
                <CardTitle>{generatedExam.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  {generatedExam.totalQuestions} questions | {generatedExam.duration} minutes
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {generatedExam.sections.map((section: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{section.name}</span>
                      <Badge>{section.questions} Qs</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handleGenerateExam} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Exam
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
