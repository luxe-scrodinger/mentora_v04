"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, HelpCircle, ChevronLeft, Share, Users } from "lucide-react"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [activeTab, setActiveTab] = useState("automatic")
  const [subjects, setSubjects] = useState<string[]>([])
  const [newSubject, setNewSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("Class 10")
  const [numQuestions, setNumQuestions] = useState("10")
  const [customQuestions, setCustomQuestions] = useState("")
  const [difficulty, setDifficulty] = useState([50])
  const [openEnded, setOpenEnded] = useState(true)
  const [multipleChoice, setMultipleChoice] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [pushToClassroom, setPushToClassroom] = useState(false)

  const handleAddSubject = () => {
    if (newSubject && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject])
      setNewSubject("")
    }
  }

  const handleRemoveSubject = (subjectToRemove: string) => {
    setSubjects(subjects.filter((s) => s !== subjectToRemove))
  }

  const handleCreateQuiz = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-material", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "quiz",
          tab: activeTab,
          subjects,
          topic,
          grade,
          numQuestions: numQuestions === "Custom" ? customQuestions : numQuestions,
          difficulty: difficulty[0],
          questionTypes: { openEnded, multipleChoice },
        }),
      })
      const data = await response.json()

      if (data.success) {
        setGeneratedContent({
          title: `Quiz: ${topic}`,
          content: data.content,
          metadata: data.metadata,
        })

        // If push to classroom is enabled
        if (pushToClassroom) {
          await handlePushToClassroom(data)
        }
      } else {
        alert("Failed to create quiz. Please try again.")
      }
    } catch (error) {
      console.error("Error creating quiz:", error)
      alert("Failed to create quiz. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePushToClassroom = async (quizData: any) => {
    try {
      const response = await fetch("/api/google-classroom/push-assignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quiz: quizData,
          classroomId: "sample-classroom-id",
          enablePAL: true,
        }),
      })
      const result = await response.json()

      if (result.success) {
        alert(`Quiz pushed to Google Classroom! Assignment ID: ${result.assignmentId}`)
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
              <HelpCircle className="w-6 h-6 text-blue-600" />
              Quiz
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">Create a quiz to assess student learning.</p>
        </DialogHeader>
        <ScrollArea className="p-6 h-[calc(90vh-180px)]">
          {!generatedContent ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="automatic">Automatic quiz</TabsTrigger>
                <TabsTrigger value="create-from-scratch">Create from scratch</TabsTrigger>
              </TabsList>

              <TabsContent value="automatic" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {subjects.map((subject) => (
                      <Badge key={subject} variant="secondary" className="flex items-center gap-1">
                        {subject}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0"
                          onClick={() => handleRemoveSubject(subject)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="new-subject"
                      placeholder="Type or select a subject..."
                      value={newSubject}
                      onChange={(e) => setNewSubject(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleAddSubject()
                        }
                      }}
                    />
                    <Button onClick={handleAddSubject}>Add</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    placeholder="Enter the quiz topic..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <Select value={grade} onValueChange={setGrade}>
                    <SelectTrigger id="grade">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Class 10">Class 10</SelectItem>
                      <SelectItem value="Class 9">Class 9</SelectItem>
                      <SelectItem value="Class 8">Class 8</SelectItem>
                      <SelectItem value="University">University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Number of Questions</Label>
                  <RadioGroup value={numQuestions} onValueChange={setNumQuestions} className="flex flex-wrap gap-3">
                    {["5", "10", "15", "20", "25"].map((num) => (
                      <Label
                        key={num}
                        htmlFor={`questions-${num}`}
                        className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                          numQuestions === num ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"
                        }`}
                      >
                        <RadioGroupItem value={num} id={`questions-${num}`} className="sr-only" />
                        {num}
                      </Label>
                    ))}
                    <Label
                      htmlFor="questions-custom"
                      className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                        numQuestions === "Custom"
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      <RadioGroupItem value="Custom" id="questions-custom" className="sr-only" />
                      Custom
                    </Label>
                    {numQuestions === "Custom" && (
                      <Input
                        type="number"
                        placeholder="Enter number"
                        value={customQuestions}
                        onChange={(e) => setCustomQuestions(e.target.value)}
                        className="w-32"
                      />
                    )}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Slider
                    id="difficulty"
                    min={0}
                    max={100}
                    step={1}
                    value={difficulty}
                    onValueChange={setDifficulty}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Easy</span>
                    <span>Medium</span>
                    <span>Hard</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Question Type</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="open-ended"
                        checked={openEnded}
                        onCheckedChange={(checked) => setOpenEnded(!!checked)}
                      />
                      <Label htmlFor="open-ended">Open-ended</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="multiple-choice"
                        checked={multipleChoice}
                        onCheckedChange={(checked) => setMultipleChoice(!!checked)}
                      />
                      <Label htmlFor="multiple-choice">Multiple Choice</Label>
                    </div>
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
                      id="push-classroom-quiz"
                      checked={pushToClassroom}
                      onCheckedChange={(checked) => setPushToClassroom(!!checked)}
                    />
                    <Label htmlFor="push-classroom-quiz" className="text-sm">
                      Push to Google Classroom with PAL enabled
                    </Label>
                  </div>

                  <p className="text-xs text-blue-700">
                    Students will receive personalized question paths based on their performance.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="create-from-scratch" className="space-y-6">
                <p className="text-gray-600">
                  Manual quiz creation coming soon! For now, use the automatic quiz generator with your specific
                  requirements.
                </p>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">✅ Quiz Generated Successfully!</h3>
                <div className="text-sm text-green-700 whitespace-pre-wrap">{generatedContent.content}</div>
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
              onClick={handleCreateQuiz}
              disabled={isLoading || !topic || subjects.length === 0}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
            >
              {isLoading ? "Creating..." : "Create Quiz 9 100"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
