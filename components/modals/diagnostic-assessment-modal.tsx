"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Brain, CheckCircle, AlertCircle } from "lucide-react"

interface DiagnosticAssessmentModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete?: (results: any) => void
}

export function DiagnosticAssessmentModal({ isOpen, onClose, onComplete }: DiagnosticAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      category: "Learning Style",
      question: "How do you learn best?",
      options: [
        { value: "visual", label: "Through diagrams, videos, and visual content" },
        { value: "auditory", label: "Through listening and discussions" },
        { value: "kinesthetic", label: "Through hands-on practice and activities" },
        { value: "reading", label: "Through reading and writing" },
      ],
    },
    {
      id: 2,
      category: "Subject Interest",
      question: "Which subjects interest you the most?",
      options: [
        { value: "math-science", label: "Mathematics & Science" },
        { value: "languages", label: "Languages & Literature" },
        { value: "social-studies", label: "Social Studies & History" },
        { value: "mixed", label: "All subjects equally" },
      ],
    },
    {
      id: 3,
      category: "Study Pace",
      question: "What's your preferred learning pace?",
      options: [
        { value: "fast", label: "Fast - Move quickly through topics" },
        { value: "moderate", label: "Moderate - Balanced speed" },
        { value: "slow", label: "Slow - Take time to understand deeply" },
        { value: "adaptive", label: "Adaptive - Adjust based on difficulty" },
      ],
    },
    {
      id: 4,
      category: "Learning Goals",
      question: "What's your primary learning goal?",
      options: [
        { value: "grades", label: "Improve grades and exam scores" },
        { value: "concepts", label: "Understand concepts deeply" },
        { value: "competitive", label: "Prepare for competitive exams" },
        { value: "skills", label: "Develop practical skills" },
      ],
    },
    {
      id: 5,
      category: "Study Environment",
      question: "When do you prefer to study?",
      options: [
        { value: "morning", label: "Early morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
        { value: "flexible", label: "Any time that works" },
      ],
    },
    {
      id: 6,
      category: "Challenge Preference",
      question: "How do you handle challenging topics?",
      options: [
        { value: "step-by-step", label: "Prefer step-by-step guidance" },
        { value: "examples", label: "Learn through examples" },
        { value: "explore", label: "Like to explore and experiment" },
        { value: "support", label: "Need immediate support and help" },
      ],
    },
    {
      id: 7,
      category: "Interaction Style",
      question: "What's your interaction preference?",
      options: [
        { value: "independent", label: "Independent study" },
        { value: "peer-learning", label: "Learning with peers" },
        { value: "tutor", label: "One-on-one guidance" },
        { value: "mixed", label: "Mix of all approaches" },
      ],
    },
    {
      id: 8,
      category: "Feedback Preference",
      question: "How often do you want feedback?",
      options: [
        { value: "immediate", label: "Immediate feedback after each question" },
        { value: "summary", label: "Summary feedback at the end" },
        { value: "periodic", label: "Periodic progress reports" },
        { value: "on-demand", label: "Feedback when I ask for it" },
      ],
    },
  ]

  const learningProfiles = {
    visual: "Visual Learner",
    auditory: "Auditory Learner",
    kinesthetic: "Kinesthetic Learner",
    reading: "Reading & Writing Learner",
  }

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete(answers)
    }
    onClose()
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (!isOpen) return null

  const currentQuestion = questions[currentStep]
  const currentAnswer = answers[currentQuestion.id]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {!showResults ? (
          <>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <div>
                  <CardTitle>Diagnostic Assessment</CardTitle>
                  <CardDescription>
                    {currentQuestion.category} - Question {currentStep + 1} of {questions.length}
                  </CardDescription>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentQuestion.question}</h3>
                <RadioGroup
                  value={currentAnswer || ""}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                >
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-blue-50 cursor-pointer transition-colors"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex-1 bg-transparent"
                >
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!currentAnswer} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  {currentStep === questions.length - 1 ? "Complete" : "Next"}
                </Button>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <CardTitle>Your Learning Profile</CardTitle>
                  <CardDescription>Based on your diagnostic assessment</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-blue-900 mb-4">Personalized Recommendations:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-800">
                      We've identified your learning preferences and will personalize your learning experience
                      accordingly.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-800">
                      Your adaptive learning path will adjust questions, explanations, and pace based on your
                      performance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-800">
                      You can change these preferences anytime in your profile settings.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Next Steps:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>1. Choose your grade and subjects</li>
                  <li>2. Start your first diagnostic quiz in PAL</li>
                  <li>3. Begin your personalized learning journey</li>
                </ul>
              </div>

              <Button onClick={handleComplete} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                Start Learning with Spark School AI
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
