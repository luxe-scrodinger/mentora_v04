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
import { Checkbox } from "@/components/ui/checkbox"
import { X, Mic, BookOpen, ChevronLeft, Share, Users } from "lucide-react"

interface LessonPlanModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LessonPlanModal({ isOpen, onClose }: LessonPlanModalProps) {
  const [topic, setTopic] = useState("Topic of the lesson")
  const [learningOutcomes, setLearningOutcomes] = useState("")
  const [grade, setGrade] = useState("university")
  const [methodology, setMethodology] = useState("")
  const [subject, setSubject] = useState("")
  const [duration, setDuration] = useState("50")
  const [customDuration, setCustomDuration] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [pushToClassroom, setPushToClassroom] = useState(false)
  const [enablePAL, setEnablePAL] = useState(true)

  const handleGenerate = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "lesson-plan",
          topic,
          learningOutcomes,
          grade,
          methodology,
          subject,
          duration: duration === "Custom" ? customDuration : duration,
          description,
        }),
      })
      const data = await response.json()
      console.log("Generated Lesson Plan:", data)

      setGeneratedContent({
        title: `Lesson Plan: ${topic}`,
        content: data.aiResponse,
        metadata: {
          grade,
          subject,
          duration: duration === "Custom" ? customDuration : duration,
          methodology,
        },
      })

      // If push to classroom is enabled, also push to Google Classroom
      if (pushToClassroom) {
        await handlePushToClassroom(data)
      }
    } catch (error) {
      console.error("Error generating lesson plan:", error)
      alert("Failed to generate lesson plan. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePushToClassroom = async (lessonData: any) => {
    try {
      const response = await fetch("/api/google-classroom/push-assignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonPlan: lessonData,
          classroomId: "sample-classroom-id",
          enablePAL,
        }),
      })
      const result = await response.json()

      if (result.success) {
        alert(`Lesson plan pushed to Google Classroom! Assignment ID: ${result.assignmentId}`)
      }
    } catch (error) {
      console.error("Error pushing to Google Classroom:", error)
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
              <BookOpen className="w-6 h-6 text-blue-600" />
              Lesson Plan
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">Create a lesson plan tailored to your curriculum.</p>
        </DialogHeader>
        <ScrollArea className="p-6 h-[calc(90vh-180px)]">
          {!generatedContent ? (
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
                <Label htmlFor="methodology">Lesson Methodology (Optional)</Label>
                <Select value={methodology} onValueChange={setMethodology}>
                  <SelectTrigger id="methodology">
                    <SelectValue placeholder="Choose a methodology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inquiry-based">Inquiry-Based Learning</SelectItem>
                    <SelectItem value="project-based">Project-Based Learning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <div className="relative">
                  <Input
                    id="subject"
                    placeholder="Subject name"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Mic className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Lesson Duration (Optional)</Label>
                <RadioGroup value={duration} onValueChange={setDuration} className="flex flex-wrap gap-3">
                  {["30", "50", "100", "120", "150"].map((num) => (
                    <Label
                      key={num}
                      htmlFor={`duration-${num}`}
                      className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                        duration === num ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                      }`}
                    >
                      <RadioGroupItem value={num} id={`duration-${num}`} className="sr-only" />
                      {num}
                    </Label>
                  ))}
                  <Label
                    htmlFor="duration-custom"
                    className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                      duration === "Custom" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                    }`}
                  >
                    <RadioGroupItem value="Custom" id="duration-custom" className="sr-only" />
                    Custom
                  </Label>
                  {duration === "Custom" && (
                    <Input
                      type="number"
                      placeholder="Enter minutes"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="w-32"
                    />
                  )}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    placeholder="In the last class, students learned about Cartesian coordinates and emotional identification."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                  <Button variant="ghost" size="icon" className="absolute right-2 bottom-2">
                    <Mic className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              </div>

              {/* Google Classroom Integration */}
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                  <Share className="w-4 h-4" />
                  Google Classroom Integration
                </h4>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="push-classroom"
                    checked={pushToClassroom}
                    onCheckedChange={(checked) => setPushToClassroom(!!checked)}
                  />
                  <Label htmlFor="push-classroom" className="text-sm">
                    Push to Google Classroom after generation
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="enable-pal"
                    checked={enablePAL}
                    onCheckedChange={(checked) => setEnablePAL(!!checked)}
                  />
                  <Label htmlFor="enable-pal" className="text-sm">
                    Enable Personalized Adaptive Learning (PAL) for students
                  </Label>
                </div>

                <p className="text-xs text-blue-700">
                  When PAL is enabled, students will receive personalized question paths based on their understanding
                  level.
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                The result is generated by Mentora's Artificial Intelligence and may produce biased or incorrect
                information. Always remember to review. Mentora AI is the expert on the topic.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">✅ Lesson Plan Generated Successfully!</h3>
                <p className="text-sm text-green-700">{generatedContent.content}</p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setGeneratedContent(null)} variant="outline">
                  Generate Another
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Users className="w-4 h-4 mr-2" />
                  View in Student Portal
                </Button>
              </div>
            </div>
          )}
        </ScrollArea>
        {!generatedContent && (
          <div className="p-6 border-t border-gray-200 flex justify-end">
            <Button
              onClick={handleGenerate}
              disabled={isLoading || !topic}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
            >
              {isLoading ? "Generating..." : "Generate 9 100"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
