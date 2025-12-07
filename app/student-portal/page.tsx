"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, XCircle, TrendingUp, ArrowRight } from "lucide-react"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  concept: string
  difficulty: "easy" | "medium" | "hard"
  commonMisconceptions?: string[]
}

interface StudentProgress {
  grade: number
  currentTopic: string
  completedConcepts: string[]
  currentConcept: string
  points: number
  level: number
  streak: number
  totalQuestionsAnswered: number
  correctAnswers: number
}

const questionBankByGrade: { [key: number]: Question[] } = {
  4: [
    {
      id: "g4_1",
      question: "What is 15 + 23?",
      options: ["38", "37", "39", "36"],
      correctAnswer: 0,
      concept: "Addition",
      difficulty: "easy",
      commonMisconceptions: ["Carried over incorrectly"],
    },
    {
      id: "g4_2",
      question: "What is 50 - 17?",
      options: ["33", "32", "34", "35"],
      correctAnswer: 0,
      concept: "Subtraction",
      difficulty: "easy",
      commonMisconceptions: ["Borrowed incorrectly from tens place"],
    },
    {
      id: "g4_3",
      question: "What is 6 × 7?",
      options: ["42", "41", "43", "48"],
      correctAnswer: 0,
      concept: "Multiplication",
      difficulty: "medium",
      commonMisconceptions: ["Confused with addition"],
    },
    {
      id: "g4_4",
      question: "If a box has 24 apples and you divide them equally among 4 friends, how many does each get?",
      options: ["6 apples", "5 apples", "7 apples", "8 apples"],
      correctAnswer: 0,
      concept: "Division",
      difficulty: "medium",
      commonMisconceptions: ["Multiplied instead of divided"],
    },
  ],
  5: [
    {
      id: "g5_1",
      question: "What is 234 + 567?",
      options: ["801", "800", "802", "799"],
      correctAnswer: 0,
      concept: "Multi-digit Addition",
      difficulty: "medium",
      commonMisconceptions: ["Error in carrying over"],
    },
    {
      id: "g5_2",
      question: "What is 3/4 of 20?",
      options: ["15", "14", "16", "13"],
      correctAnswer: 0,
      concept: "Fractions",
      difficulty: "medium",
      commonMisconceptions: ["Ignored denominator, just calculated 1/4"],
    },
    {
      id: "g5_3",
      question: "Convert 0.5 to a fraction in lowest terms.",
      options: ["1/2", "2/4", "5/10", "50/100"],
      correctAnswer: 0,
      concept: "Decimals and Fractions",
      difficulty: "medium",
      commonMisconceptions: ["Did not reduce to lowest terms"],
    },
    {
      id: "g5_4",
      question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
      options: ["40 cm²", "26 cm", "13 cm²", "40 cm"],
      correctAnswer: 0,
      concept: "Area Calculation",
      difficulty: "hard",
      commonMisconceptions: ["Calculated perimeter instead of area"],
    },
  ],
  6: [
    {
      id: "g6_1",
      question: "Solve: 2x + 5 = 13. What is x?",
      options: ["4", "5", "6", "9"],
      correctAnswer: 0,
      concept: "Linear Equations",
      difficulty: "medium",
      commonMisconceptions: ["Forgot to isolate variable, just subtracted 5"],
    },
    {
      id: "g6_2",
      question: "What is 30% of 80?",
      options: ["24", "25", "23", "26"],
      correctAnswer: 0,
      concept: "Percentages",
      difficulty: "medium",
      commonMisconceptions: ["Confused 30% with 0.30 directly"],
    },
    {
      id: "g6_3",
      question: "If a shirt costs Rs. 500 and has a 20% discount, what is the new price?",
      options: ["Rs. 400", "Rs. 420", "Rs. 380", "Rs. 450"],
      correctAnswer: 0,
      concept: "Percentage Discount",
      difficulty: "hard",
      commonMisconceptions: ["Added discount instead of subtracting"],
    },
    {
      id: "g6_4",
      question: "What is the ratio of 6 to 9 in simplest form?",
      options: ["2:3", "3:2", "6:9", "1:1.5"],
      correctAnswer: 0,
      concept: "Ratios",
      difficulty: "medium",
      commonMisconceptions: ["Did not simplify the ratio"],
    },
  ],
  7: [
    {
      id: "g7_1",
      question: "Solve: 3x - 7 = 14. What is x?",
      options: ["7", "6", "8", "5"],
      correctAnswer: 0,
      concept: "Linear Equations",
      difficulty: "hard",
      commonMisconceptions: ["Incorrect order of operations when solving"],
    },
    {
      id: "g7_2",
      question: "What is (-5) × (-3)?",
      options: ["15", "-15", "-8", "8"],
      correctAnswer: 0,
      concept: "Integer Multiplication",
      difficulty: "medium",
      commonMisconceptions: ["Negative times negative is negative"],
    },
    {
      id: "g7_3",
      question: "If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many girls are there?",
      options: ["10", "12", "8", "9"],
      correctAnswer: 0,
      concept: "Ratio and Proportion",
      difficulty: "hard",
      commonMisconceptions: ["Set up proportion incorrectly"],
    },
    {
      id: "g7_4",
      question: "What is the value of 2³ + 3²?",
      options: ["17", "18", "25", "13"],
      correctAnswer: 0,
      concept: "Exponents",
      difficulty: "hard",
      commonMisconceptions: ["Multiplied instead of using exponent"],
    },
  ],
}

export default function StudentPortalDemo() {
  const [selectedGrade, setSelectedGrade] = useState("5")
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

  const [progress, setProgress] = useState<StudentProgress>({
    grade: 5,
    currentTopic: "Fractions & Decimals",
    completedConcepts: ["Multi-digit Addition", "Multiplication"],
    currentConcept: "Fractions",
    points: 1250,
    level: 5,
    streak: 7,
    totalQuestionsAnswered: 47,
    correctAnswers: 38,
  })

  useEffect(() => {
    const gradeNum = Number.parseInt(selectedGrade)
    const questions = questionBankByGrade[gradeNum as 4 | 5 | 6 | 7]
    if (questions && questions.length > 0) {
      setCurrentQuestion(questions[0])
      setProgress((prev) => ({
        ...prev,
        grade: gradeNum,
      }))
    }
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [selectedGrade])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = async () => {
    if (selectedAnswer === null || !currentQuestion) return

    const correct = selectedAnswer === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)
    setQuestionsAnswered((prev) => prev + 1)

    if (correct) {
      setCorrectAnswersCount((prev) => prev + 1)
    }

    try {
      await fetch("/api/pal/submit-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          selectedAnswer,
          isCorrect: correct,
          concept: currentQuestion.concept,
          grade: Number.parseInt(selectedGrade),
        }),
      })
    } catch (error) {
      console.log("[v0] Answer submission error:", error)
    }
  }

  const handleNextQuestion = () => {
    const gradeNum = Number.parseInt(selectedGrade) as 4 | 5 | 6 | 7
    const questions = questionBankByGrade[gradeNum]
    const currentIndex = questions.findIndex((q) => q.id === currentQuestion?.id)
    const nextIndex = (currentIndex + 1) % questions.length

    setCurrentQuestion(questions[nextIndex])
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const accuracyPercentage = questionsAnswered > 0 ? Math.round((correctAnswersCount / questionsAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">PAL Demo</h1>
          <p className="text-gray-600">Experience adaptive learning in action</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Questions */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{currentQuestion?.concept}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          currentQuestion?.difficulty === "easy"
                            ? "bg-green-100 text-green-800"
                            : currentQuestion?.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {currentQuestion?.difficulty?.charAt(0).toUpperCase() + currentQuestion?.difficulty?.slice(1)}
                      </span>
                    </CardDescription>
                  </div>
                  <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[4, 5, 6, 7].map((grade) => (
                        <SelectItem key={grade} value={grade.toString()}>
                          Grade {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question */}
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-4">{currentQuestion?.question}</p>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion?.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === index
                            ? isCorrect && showFeedback
                              ? "border-green-500 bg-green-50"
                              : !isCorrect && showFeedback
                                ? "border-red-500 bg-red-50"
                                : "border-blue-500 bg-blue-50"
                            : index === currentQuestion?.correctAnswer && showFeedback && !isCorrect
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          {showFeedback && (
                            <>
                              {selectedAnswer === index && isCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              )}
                              {selectedAnswer === index && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                              {index === currentQuestion?.correctAnswer && !isCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              )}
                            </>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div
                    className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                  >
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className={`font-semibold ${isCorrect ? "text-green-900" : "text-red-900"}`}>
                          {isCorrect ? "Correct!" : "Not quite right"}
                        </p>
                        <p className={`text-sm mt-1 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                          {isCorrect
                            ? `Great job! You correctly answered this ${currentQuestion?.concept} question.`
                            : `The correct answer is: ${currentQuestion?.options[currentQuestion?.correctAnswer]}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null || showFeedback}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Answer
                  </Button>
                  {showFeedback && (
                    <Button onClick={handleNextQuestion} variant="outline" className="flex-1 bg-transparent">
                      Next Question <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Progress and Content */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Accuracy</span>
                    <span className="text-sm font-bold text-blue-600">{accuracyPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${accuracyPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-blue-50 rounded p-3">
                    <div className="text-gray-600 text-xs font-medium">Questions</div>
                    <div className="text-2xl font-bold text-blue-600">{questionsAnswered}</div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-gray-600 text-xs font-medium">Correct</div>
                    <div className="text-2xl font-bold text-green-600">{correctAnswersCount}</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-bold text-gray-900">{progress.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points</span>
                    <span className="font-bold text-gray-900">{progress.points}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Streak</span>
                    <span className="font-bold text-gray-900">{progress.streak} days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Content Card */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Learning Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Concept</p>
                  <p className="text-sm text-gray-700">{currentQuestion?.concept}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">Available Resources:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Video explanation (5-8 min)</li>
                    <li>• Interactive examples</li>
                    <li>• Practice problems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Progress Button */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-transparent"
              onClick={() => (window.location.href = "/student-learning")}
            >
              <TrendingUp className="w-4 h-4" />
              Check Your Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
