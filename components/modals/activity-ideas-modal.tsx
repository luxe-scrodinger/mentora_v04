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
import { Loader2, Sparkles, Activity } from "lucide-react"

interface ActivityIdeasModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ActivityIdeasModal({ isOpen, onClose }: ActivityIdeasModalProps) {
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("Grade 6")
  const [studentCount, setStudentCount] = useState("30")
  const [duration, setDuration] = useState("45")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedActivities, setGeneratedActivities] = useState<any[]>([])

  const handleGenerateActivities = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "activity-ideas",
          topic,
          grade,
          studentCount: Number.parseInt(studentCount),
          duration: Number.parseInt(duration),
        }),
      })

      const data = await response.json()
      setGeneratedActivities([
        {
          title: "Interactive Group Activity",
          description: "Students work in groups to explore the concept",
          materials: "Worksheets, markers",
          time: "20 minutes",
        },
        {
          title: "Hands-On Experiment",
          description: "Practical demonstration of the concept",
          materials: "Lab equipment, supplies",
          time: "25 minutes",
        },
        {
          title: "Think-Pair-Share",
          description: "Students think individually, pair up, then share",
          materials: "None required",
          time: "15 minutes",
        },
      ])
    } catch (error) {
      console.error("Error generating activities:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-red-600" />
            Activity Ideas Generator
          </DialogTitle>
          <DialogDescription>Generate engaging classroom activities for any topic</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Topic</label>
              <Input
                placeholder="E.g., Fractions, Photosynthesis"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
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
                <label className="text-sm font-medium">Student Count</label>
                <Input
                  type="number"
                  value={studentCount}
                  onChange={(e) => setStudentCount(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Duration (min)</label>
                <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-1" />
              </div>
            </div>
          </div>

          {generatedActivities.length > 0 && (
            <div className="space-y-3">
              {generatedActivities.map((activity, idx) => (
                <Card key={idx}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">{activity.description}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Materials: {activity.materials}</span>
                      <Badge variant="secondary">{activity.time}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="flex gap-2 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handleGenerateActivities} disabled={isLoading} className="bg-red-600 hover:bg-red-700">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Activities
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
