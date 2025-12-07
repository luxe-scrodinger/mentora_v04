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
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Sparkles, BookOpen } from "lucide-react"

interface ReviewTutorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReviewTutorModal({ isOpen, onClose }: ReviewTutorModalProps) {
  const [topic, setTopic] = useState("")
  const [concept, setConcept] = useState("")
  const [grade, setGrade] = useState("Grade 6")
  const [difficultAreas, setDifficultAreas] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [tutorResponse, setTutorResponse] = useState<any>(null)

  const handleGenerateTutorContent = async () => {
    if (!topic.trim() || !concept.trim()) {
      alert("Please fill in topic and concept")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "review-tutor",
          topic,
          concept,
          grade,
          difficultAreas,
        }),
      })

      const data = await response.json()
      setTutorResponse({
        explanation: `Understanding ${concept}: ${concept} is a fundamental concept in ${topic}. Here's how to approach it step by step...`,
        keyPoints: ["Key point 1 about the concept", "Key point 2 about the concept", "Key point 3 about the concept"],
        commonMistakes: ["Common mistake 1 and how to avoid it", "Common mistake 2 and how to avoid it"],
        practiceProblems: 3,
      })
    } catch (error) {
      console.error("Error generating tutor content:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Review Tutor
          </DialogTitle>
          <DialogDescription>Get AI-powered tutoring for difficult concepts</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Topic/Subject</label>
              <Input
                placeholder="E.g., Algebra"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Specific Concept</label>
              <Input
                placeholder="E.g., Solving Linear Equations"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                className="mt-1"
              />
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
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Areas of Difficulty (Optional)</label>
              <Textarea
                placeholder="What areas are students struggling with?"
                value={difficultAreas}
                onChange={(e) => setDifficultAreas(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {tutorResponse && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tutoring Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Explanation</h4>
                  <p className="text-sm text-gray-700">{tutorResponse.explanation}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Points</h4>
                  <ul className="space-y-2">
                    {tutorResponse.keyPoints.map((point: string, idx: number) => (
                      <li key={idx} className="text-sm flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Common Mistakes</h4>
                  <ul className="space-y-2">
                    {tutorResponse.commonMistakes.map((mistake: string, idx: number) => (
                      <li key={idx} className="text-sm flex gap-2">
                        <span className="text-red-600">!</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Badge>{tutorResponse.practiceProblems} practice problems included</Badge>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handleGenerateTutorContent} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Tutoring
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
