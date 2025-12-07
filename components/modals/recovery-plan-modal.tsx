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
import { Loader2, Sparkles, TrendingDown } from "lucide-react"

interface RecoveryPlanModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RecoveryPlanModal({ isOpen, onClose }: RecoveryPlanModalProps) {
  const [topic, setTopic] = useState("")
  const [issues, setIssues] = useState("")
  const [grade, setGrade] = useState("Grade 6")
  const [timeframe, setTimeframe] = useState("2 weeks")
  const [isLoading, setIsLoading] = useState(false)
  const [recoveryPlan, setRecoveryPlan] = useState<any>(null)

  const handleGeneratePlan = async () => {
    if (!topic.trim() || !issues.trim()) {
      alert("Please fill in topic and issues")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "recovery-plan",
          topic,
          issues,
          grade,
          timeframe,
        }),
      })

      const data = await response.json()
      setRecoveryPlan({
        title: `Learning Recovery Plan for ${topic}`,
        duration: timeframe,
        phases: [
          {
            phase: "Phase 1: Assessment",
            duration: "3-4 days",
            activities: "Diagnostic tests, identify gaps, baseline assessment",
          },
          {
            phase: "Phase 2: Targeted Instruction",
            duration: "7-10 days",
            activities: "Personalized lessons, remedial materials, targeted practice",
          },
          {
            phase: "Phase 3: Reinforcement",
            duration: "3-4 days",
            activities: "Practice problems, real-world applications, peer teaching",
          },
        ],
        resources: ["Intervention materials", "Progress tracking tools", "Parent communication guide"],
      })
    } catch (error) {
      console.error("Error generating recovery plan:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-600" />
            Learning Recovery Plan
          </DialogTitle>
          <DialogDescription>Create targeted recovery plans for struggling learners</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Topic/Concept</label>
              <Input
                placeholder="E.g., Fractions"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Learning Issues/Gaps</label>
              <Textarea
                placeholder="Describe the specific problems students are facing..."
                value={issues}
                onChange={(e) => setIssues(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                <label className="text-sm font-medium">Timeline</label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg mt-1"
                >
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>3 weeks</option>
                  <option>1 month</option>
                  <option>6 weeks</option>
                </select>
              </div>
            </div>
          </div>

          {recoveryPlan && (
            <Card>
              <CardHeader>
                <CardTitle>{recoveryPlan.title}</CardTitle>
                <Badge className="w-fit mt-2">Duration: {recoveryPlan.duration}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {recoveryPlan.phases.map((phase: any, idx: number) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900">{phase.phase}</h4>
                    <p className="text-sm text-gray-600">{phase.duration}</p>
                    <p className="text-sm mt-1">{phase.activities}</p>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Resources Included</h4>
                  <div className="flex flex-wrap gap-2">
                    {recoveryPlan.resources.map((resource: string, idx: number) => (
                      <Badge key={idx} variant="secondary">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handleGeneratePlan} disabled={isLoading} className="bg-red-600 hover:bg-red-700">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Plan
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
