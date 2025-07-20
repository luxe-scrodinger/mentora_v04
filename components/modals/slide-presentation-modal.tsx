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
import { X, Mic, Presentation, ChevronLeft } from "lucide-react"

interface SlidePresentationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SlidePresentationModal({ isOpen, onClose }: SlidePresentationModalProps) {
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("")
  const [numSlides, setNumSlides] = useState("10")
  const [customSlides, setCustomSlides] = useState("")
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
          type: "slide-presentation",
          topic,
          grade,
          numSlides: numSlides === "Custom" ? customSlides : numSlides,
          context,
        }),
      })
      const data = await response.json()
      console.log("Generated Slide Presentation:", data)
      alert(data.message) // Show success message
      onClose()
    } catch (error) {
      console.error("Error generating slide presentation:", error)
      alert("Failed to generate slide presentation. Please try again.")
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
              <Presentation className="w-6 h-6 text-blue-600" />
              Slide Presentation
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">Creates slides aligned with the topic, ready to download.</p>
        </DialogHeader>
        <ScrollArea className="p-6 h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic *</Label>
              <div className="relative">
                <Input
                  id="topic"
                  placeholder="Topic of the lesson"
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
              <Label>Number of Slides (Optional)</Label>
              <RadioGroup value={numSlides} onValueChange={setNumSlides} className="flex flex-wrap gap-3">
                {["5", "10", "15", "20", "25"].map((num) => (
                  <Label
                    key={num}
                    htmlFor={`slides-${num}`}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                      numSlides === num ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                    }`}
                  >
                    <RadioGroupItem value={num} id={`slides-${num}`} className="sr-only" />
                    {num}
                  </Label>
                ))}
                <Label
                  htmlFor="slides-custom"
                  className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                    numSlides === "Custom" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                  }`}
                >
                  <RadioGroupItem value="Custom" id="slides-custom" className="sr-only" />
                  Custom
                </Label>
                {numSlides === "Custom" && (
                  <Input
                    type="number"
                    placeholder="Enter number"
                    value={customSlides}
                    onChange={(e) => setCustomSlides(e.target.value)}
                    className="w-32"
                  />
                )}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Context (Optional)</Label>
              <div className="relative">
                <Textarea
                  id="context"
                  placeholder="What do I need to know about the class or the topic? Describe only what you think is necessary."
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
