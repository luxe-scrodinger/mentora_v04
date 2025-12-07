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

interface MindMapModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MindMapModal({ isOpen, onClose }: MindMapModalProps) {
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("Mathematics")
  const [grade, setGrade] = useState("Grade 6")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedMindMap, setGeneratedMindMap] = useState<any>(null)

  const handleGenerateMindMap = async () => {
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
          type: "mind-map",
          topic,
          subject,
          grade,
          aiModel: "chatgpt",
        }),
      })

      const data = await response.json()
      setGeneratedMindMap({
        central: topic,
        branches: [
          { name: "Key Concepts", items: ["Concept 1", "Concept 2", "Concept 3"] },
          { name: "Applications", items: ["Application 1", "Application 2"] },
          { name: "Related Topics", items: ["Topic 1", "Topic 2"] },
        ],
        content: data.content || "Mind map generated",
      })
    } catch (error) {
      console.error("Error generating mind map:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Mind Map Generator
          </DialogTitle>
          <DialogDescription>Create visual mind maps for complex topics</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Topic</label>
              <Input
                placeholder="E.g., Photosynthesis, French Revolution"
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
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
            </div>
          </div>

          {generatedMindMap && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{generatedMindMap.central}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {generatedMindMap.branches.map((branch: any, idx: number) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-blue-600 mb-2">{branch.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {branch.items.map((item: string, i: number) => (
                          <Badge key={i} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
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
            <Button onClick={handleGenerateMindMap} disabled={isLoading} className="bg-purple-600 hover:bg-purple-700">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Mind Map
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
