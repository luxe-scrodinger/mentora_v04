"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Target,
  CheckCircle,
  XCircle,
  ArrowRight,
  BookOpen,
  Award,
  TrendingUp,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  concept: string
  difficulty: "easy" | "medium" | "hard"
}

interface StudentProgress {
  currentTopic: string
  completedConcepts: string[]
  currentConcept: string
  points: number
  level: number
  streak: number
}

export default function StudentPortal() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [progress, setProgress] = useState<StudentProgress>({
    currentTopic: "Algebra Fundamentals",
    completedConcepts: ["Basic Operations", "Variables"],
    currentConcept: "Linear Equations",
    points: 1250,
    level: 5,
    streak: 7,
  })

  const sampleQuestions: Question[] = [
    {
      id: "1",
      question: "What is the value of x in the equation 2x + 5 = 13?",
      options: ["x = 4", "x = 6", "x = 8", "x = 9"],
      correctAnswer: 0,
      concept: "Linear Equations",
      difficulty: "medium",
    },
    {
      id: "2",
      question: "If 3x - 7 = 14, what is x?",
      options: ["x = 5", "x = 7", "x = 9", "x = 11"],
      correctAnswer: 1,
      concept: "Linear Equations",
      difficulty: "medium",
    },
  ]

  useEffect(() => {
    setCurrentQuestion(sampleQuestions[0])
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = async () => {
    if (selectedAnswer === null || !currentQuestion) return

    const correct = selectedAnswer === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    try {
      const response = await fetch("/api/pal/submit-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          selectedAnswer,
          isCorrect: correct,
          concept: currentQuestion.concept,
        }),
      })

      if (correct) {
        setProgress((prev) => ({
          ...prev,
          points: prev.points + 50,
          streak: prev.streak + 1,
        }))
      } else {
        setProgress((prev) => ({
          ...prev,
          streak: 0,
        }))
      }
    } catch (error) {
      console.error("Error submitting answer:", error)
    }
  }

  const handleNextQuestion = async () => {
    setShowFeedback(false)
    setSelectedAnswer(null)

    try {
      const response = await fetch("/api/pal/next-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wasCorrect: isCorrect,
          currentConcept: progress.currentConcept,
          studentLevel: progress.level,
        }),
      })

      const data = await response.json()
      setCurrentQuestion(data.question || sampleQuestions[1])
    } catch (error) {
      console.error("Error getting next question:", error)
      setCurrentQuestion(sampleQuestions[1])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl group transition-transform hover:scale-105"
            >
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-gray-900">Mentora</span>
              <span className="text-blue-600 text-sm font-medium">AI</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">{progress.points} pts</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Level {progress.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">{progress.streak} streak</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Progress Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Current Topic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{progress.currentTopic}</h3>
                <Progress value={65} className="mb-4" />
                <p className="text-sm text-gray-600">65% Complete</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progress.completedConcepts.map((concept, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{concept}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm font-medium">{progress.currentConcept}</span>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Learning Area */}
          <div className="lg:col-span-2">
            <Card className="h-fit shadow-lg">
              <CardHeader>
                <CardTitle>Personalized Adaptive Learning (PAL)</CardTitle>
                <p className="text-gray-600">Answer questions to progress through {progress.currentConcept}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestion && (
                  <>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
                      <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showFeedback}
                            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                              selectedAnswer === index
                                ? showFeedback
                                  ? index === currentQuestion.correctAnswer
                                    ? "border-green-500 bg-green-50"
                                    : "border-red-500 bg-red-50"
                                  : "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  selectedAnswer === index
                                    ? showFeedback
                                      ? index === currentQuestion.correctAnswer
                                        ? "border-green-500 bg-green-500"
                                        : "border-red-500 bg-red-500"
                                      : "border-blue-500 bg-blue-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedAnswer === index &&
                                  showFeedback &&
                                  (index === currentQuestion.correctAnswer ? (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-white" />
                                  ))}
                              </div>
                              <span>{option}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {showFeedback && (
                      <div
                        className={`p-4 rounded-lg transition-all duration-300 ${
                          isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className={`font-semibold ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                            {isCorrect ? "Excellent!" : "Not quite right"}
                          </span>
                        </div>
                        <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                          {isCorrect
                            ? "Great job! You're mastering linear equations. Keep it up!"
                            : "Let's review the concept of isolating variables. Remember to perform the same operation on both sides of the equation."}
                        </p>
                        {isCorrect && <div className="mt-2 text-sm text-green-700">+50 points earned! 🎉</div>}
                      </div>
                    )}

                    <div className="flex justify-end">
                      {!showFeedback ? (
                        <Button
                          onClick={handleSubmitAnswer}
                          disabled={selectedAnswer === null}
                          className="bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <Button
                          onClick={handleNextQuestion}
                          className="bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
                        >
                          Next Question
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
