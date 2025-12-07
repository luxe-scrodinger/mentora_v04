"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Users, TrendingUp, AlertTriangle, CheckCircle, Sparkles, Brain, Target } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const [selectedClass, setSelectedClass] = useState("Math 101")

  const classData = {
    "Math 101": {
      totalStudents: 28,
      activeStudents: 25,
      averageProgress: 72,
      conceptsMastered: 15,
      strugglingStudents: 4,
      students: [
        { name: "Alice Johnson", progress: 85, currentConcept: "Quadratic Equations", status: "on-track" },
        { name: "Bob Smith", progress: 45, currentConcept: "Linear Equations", status: "struggling" },
        { name: "Carol Davis", progress: 92, currentConcept: "Polynomials", status: "advanced" },
        { name: "David Wilson", progress: 38, currentConcept: "Basic Algebra", status: "struggling" },
      ],
    },
  }

  const currentClassData = classData[selectedClass as keyof typeof classData]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="text-gray-900">Spark School</span>
              <span className="text-blue-600 text-sm font-medium">AI</span>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="outline">Export Report</Button>
              <Link href="/dashboard">
                <Button>Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-Time Learning Analytics</h1>
          <p className="text-gray-600">Monitor student progress and identify learning gaps instantly</p>
        </div>

        {/* Class Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentClassData.totalStudents}</div>
              <p className="text-xs text-muted-foreground">{currentClassData.activeStudents} active today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentClassData.averageProgress}%</div>
              <Progress value={currentClassData.averageProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Concepts Mastered</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentClassData.conceptsMastered}</div>
              <p className="text-xs text-muted-foreground">Out of 20 total concepts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{currentClassData.strugglingStudents}</div>
              <p className="text-xs text-muted-foreground">Students struggling</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Progress Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Individual Student Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentClassData.students.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{student.name}</span>
                        <Badge
                          variant={
                            student.status === "advanced"
                              ? "default"
                              : student.status === "struggling"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Current: {student.currentConcept}</p>
                      <Progress value={student.progress} className="mt-2" />
                    </div>
                    <div className="ml-4 text-right">
                      <span className="text-lg font-semibold">{student.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-red-800">Attention Needed</span>
                  </div>
                  <p className="text-sm text-red-700">
                    4 students are struggling with Linear Equations. Consider reviewing basic algebraic manipulation.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-blue-800">Recommendation</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Carol Davis is ready for advanced topics. Consider providing enrichment materials on Complex
                    Numbers.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">Success Pattern</span>
                  </div>
                  <p className="text-sm text-green-700">
                    85% of students have mastered Quadratic Equations. The class is ready to move to Polynomials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
