"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { X, Mic, FlaskConical, ChevronLeft, Paperclip } from "lucide-react"

interface ScienceLabModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ScienceLabModal({ isOpen, onClose }: ScienceLabModalProps) {
  const [topic, setTopic] = useState("Experiment topic")
  const [learningOutcomes, setLearningOutcomes] = useState("")
  const [grade, setGrade] = useState("university")
  const [context, setContext] = useState("")
  const [searchWeb, setSearchWeb] = useState(false)
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
          type: "science-lab",
          topic,
          learningOutcomes,
          grade,
          context,
          searchWeb,
        }),
      })
      const data = await response.json()
      console.log("Generated Science Lab:", data)
      alert(data.message)
      onClose()
    } catch (error) {
      console.error("Error generating science lab:", error)
      alert("Failed to generate science lab. Please try again.")
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
              <FlaskConical className="w-6 h-6 text-blue-600" />
              Science Lab
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Design safe science experiments aligned with the curriculum.
          </p>
        </DialogHeader>
        <ScrollArea className="p-6 h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic *</Label>
              <div className="relative">
                <Input
                  id="topic"
                  placeholder="Experiment topic"
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
              <Label htmlFor="grade">Grade (Optional)</Label>
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
              <Label htmlFor="context">Context (Optional)</Label>
              <div className="relative">
                <Textarea
                  id="context"
                  placeholder="What do I need to know about the context of this experiment? Describe only what you think is necessary."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                />
                <Button variant="ghost" size="icon" className="absolute right-2 bottom-2">
                  <Mic className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="search-web" className="flex flex-col">
                Search the web (Optional)
                <span className="font-normal text-gray-500 text-sm">
                  Allows AI to search the internet to generate the idea (ideal for requests involving current topics)
                </span>
              </Label>
              <Switch id="search-web" checked={searchWeb} onCheckedChange={setSearchWeb} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="attach-files" className="flex flex-col">
                Attach file as extra content (Optional)
              </Label>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Paperclip className="w-4 h-4" />
                Attach files
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              The result is generated by Mentora's Artificial Intelligence and may produce biased or incorrect
              information. Always remember to review. Mentora AI is the expert on the topic.
            </p>
          </div>
        </ScrollArea>
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !topic}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
          >
            {isLoading ? "Generating..." : "Generate 9 100"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
