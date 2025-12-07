"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, BookOpen, Play, Lock, CheckCircle2, Clock, Flame, ArrowRight, Sparkles, Brain } from "lucide-react"
import Link from "next/link"

interface Topic {
  id: string
  name: string
  subject: string
  grade: number
  mastery: number
  questionsAnswered: number
  correctAnswers: number
  status: "locked" | "available" | "in-progress" | "completed"
  estimatedTime: number
  streak: number
  xp: number
}

interface LearningJourney {
  name: string
  level: number
  totalXP: number
  currentStreak: number
  subjects: {
    name: string
    progress: number
    topics: Topic[]
  }[]
}

export default function StudentLearningPortal() {
  const [selectedGrade, setSelectedGrade] = useState(5)
  const [learningJourney, setLearningJourney] = useState<LearningJourney>({
    name: "Arjun Kumar",
    level: 5,
    totalXP: 3250,
    currentStreak: 12,
    subjects: [
      {
        name: "Mathematics",
        progress: 65,
        topics: [
          {
            id: "math-1",
            name: "Fractions & Decimals",
            subject: "Mathematics",
            grade: 5,
            mastery: 85,
            questionsAnswered: 24,
            correctAnswers: 20,
            status: "completed",
            estimatedTime: 45,
            streak: 8,
            xp: 450,
          },
          {
            id: "math-2",
            name: "Percentages",
            subject: "Mathematics",
            grade: 5,
            mastery: 72,
            questionsAnswered: 18,
            correctAnswers: 13,
            status: "in-progress",
            estimatedTime: 35,
            streak: 5,
            xp: 380,
          },
          {
            id: "math-3",
            name: "Ratios & Proportions",
            subject: "Mathematics",
            grade: 5,
            mastery: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            status: "available",
            estimatedTime: 40,
            streak: 0,
            xp: 0,
          },
        ],
      },
      {
        name: "Science",
        progress: 48,
        topics: [
          {
            id: "sci-1",
            name: "Human Body Systems",
            subject: "Science",
            grade: 5,
            mastery: 60,
            questionsAnswered: 15,
            correctAnswers: 9,
            status: "in-progress",
            estimatedTime: 50,
            streak: 3,
            xp: 300,
          },
          {
            id: "sci-2",
            name: "Photosynthesis",
            subject: "Science",
            grade: 5,
            mastery: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            status: "available",
            estimatedTime: 45,
            streak: 0,
            xp: 0,
          },
        ],
      },
    ],
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
      case "available":
        return <Badge className="bg-gray-100 text-gray-800">Ready to Start</Badge>
      case "locked":
        return <Badge className="bg-gray-200 text-gray-600">Locked</Badge>
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-500" />
      case "available":
        return <Play className="w-5 h-5 text-gray-500" />
      case "locked":
        return <Lock className="w-5 h-5 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Experience the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PAL</span> in
          Action
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Spark School AI's Personalized Adaptive Learning brings you intelligent, adaptive questions that adjust to
          your level, detect misconceptions, and guide you to mastery.
        </p>

        <Link href="/student-portal">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start This Path
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Adaptive Learning</h3>
            <p className="text-gray-600">Questions adapt to your performance in real-time</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Misconception Detection</h3>
            <p className="text-gray-600">AI identifies and addresses common learning gaps</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Mastery Path</h3>
            <p className="text-gray-600">Progress through content at your own pace</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Subjects</TabsTrigger>
            <TabsTrigger value="continue">Continue Learning</TabsTrigger>
            <TabsTrigger value="recommendations">Recommended</TabsTrigger>
          </TabsList>

          {/* All Subjects Tab */}
          <TabsContent value="all" className="space-y-8">
            {learningJourney.subjects.map((subject, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold text-gray-900">{subject.name}</h2>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{subject.progress}%</div>
                      <div className="text-sm text-gray-600">Progress</div>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-3" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subject.topics.map((topic, tIdx) => (
                    <Card
                      key={tIdx}
                      className={`hover:shadow-lg transition-shadow ${topic.status === "locked" ? "opacity-50" : ""}`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          {getStatusIcon(topic.status)}
                          {getStatusBadge(topic.status)}
                        </div>
                        <CardTitle className="text-lg">{topic.name}</CardTitle>
                        <CardDescription>Grade {topic.grade}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Mastery Bar */}
                        {topic.mastery > 0 && (
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-semibold text-gray-700">Mastery</span>
                              <span className="text-sm font-bold text-blue-600">{topic.mastery}%</span>
                            </div>
                            <Progress value={topic.mastery} className="h-2" />
                          </div>
                        )}

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-gray-50 rounded p-2">
                            <div className="text-gray-600 text-xs">Questions</div>
                            <div className="font-bold text-gray-900">
                              {topic.correctAnswers}/{topic.questionsAnswered}
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <div className="text-gray-600 text-xs">Time</div>
                            <div className="font-bold text-gray-900">~{topic.estimatedTime}m</div>
                          </div>
                        </div>

                        {/* XP and Streak */}
                        <div className="flex justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold">{topic.xp} XP</span>
                          </div>
                          {topic.streak > 0 && (
                            <div className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="font-semibold">{topic.streak} day streak</span>
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className="w-full mt-2"
                          disabled={topic.status === "locked"}
                          variant={topic.status === "completed" ? "outline" : "default"}
                        >
                          {topic.status === "completed" && "Review Topic"}
                          {topic.status === "in-progress" && "Continue Learning"}
                          {topic.status === "available" && "Start Learning"}
                          {topic.status === "locked" && "Locked"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Continue Learning Tab */}
          <TabsContent value="continue" className="space-y-4">
            <div className="text-center py-12 text-gray-600">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Resume your in-progress topics and maintain your learning streak</p>
            </div>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-4">
            <div className="text-center py-12 text-gray-600">
              <Zap className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Personalized recommendations based on your learning progress</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
