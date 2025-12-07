"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X, Mic, ListOrdered, ChevronLeft } from "lucide-react"

interface InstructionalSequenceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InstructionalSequenceModal({ isOpen, onClose }: InstructionalSequenceModalProps) {
  const [subject, setSubject] = useState("")
  const [grade, setGrade] = useState("university")
  const [topic, setTopic] = useState("")
  const [numLessons, setNumLessons] = useState("3")
  const [learningOutcomes, setLearningOutcomes] = useState("")
  const [context, setContext] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "instructional-sequence",
          subject,
          grade,
          topic,
          numLessons,
          learningOutcomes,
          context,
        }),
      })
      const data = await response.json()
      console.log("Generated Instructional Sequence:", data)
      alert(data.message)
      onClose()
    } catch (error) {
      console.error("Error generating instructional sequence:", error)
      alert("Failed to generate instructional sequence. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="p-6 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={onClose} className="-ml-2">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <DialogTitle className="flex items-center gap-3 text-xl font-bold">
              <ListOrdered className="w-6 h-6 text-blue-600" />
              Instructional Sequence
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">Create multiple lesson plans to teach a single topic.</p>
        </DialogHeader>
        <ScrollArea className="p-6 h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <div className="relative">
                <Input
                  id="subject"
                  placeholder="Subject name"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Mic className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">Grade *</Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="middle-school">Middle School</SelectItem>
                  <SelectItem value="elementary">Elementary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">Topic *</Label>
              <div className="relative">
                <Input
                  id="topic"
                  placeholder="Theme you want to address"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
                <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Mic className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Number of Lessons *</Label>
              <RadioGroup value={numLessons} onValueChange={setNumLessons} className="flex flex-wrap gap-3">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((num) => (
                  <Label
                    key={num}
                    htmlFor={`lessons-${num}`}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                      numLessons === num ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                    }`}
                  >
                    <RadioGroupItem value={num} id={`lessons-${num}`} className="sr-only" />
                    {num}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="learning-outcomes">Learning Outcomes (Optional)</Label>
              <Select value={learningOutcomes} onValueChange={setLearningOutcomes}>
                <SelectTrigger id="learning-outcomes">
                  <SelectValue placeholder="Search Learning Outcomes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="understand-photosynthesis">Understand Photosynthesis</SelectItem>
                  <SelectItem value="identify-chemical-reactions">Identify Chemical Reactions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Context (Optional)</Label>
              <div className="relative">
                <Textarea
                  id="context"
                  placeholder="What do I need to know about the instructional sequence? Please describe only what you think is necessary."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                />
                <Button variant="ghost" size="icon" className="absolute right-2 bottom-2">
                  <Mic className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              The result is generated by Spark School AI. Always review the content before sharing with students.
            </p>
          </div>
        </ScrollArea>
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !subject || !grade || !topic || !numLessons}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
          >
            {isLoading ? "Generating..." : "Generate"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
