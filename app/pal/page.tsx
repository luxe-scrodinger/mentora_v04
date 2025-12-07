"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, Users, Clock, CheckCircle, BarChart3, Lightbulb, Puzzle, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PALPage() {
  const [activeScenario, setActiveScenario] = useState("struggling-student")

  const keyBenefits = [
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "AI creates unique study plans tailored to each student's learning style, pace, and academic goals",
      impact: "40% faster concept mastery",
      color: "text-blue-600",
    },
    {
      icon: Target,
      title: "Adaptive Difficulty Adjustment",
      description:
        "Content difficulty automatically adjusts based on student performance to maintain optimal challenge levels",
      impact: "65% improvement in engagement",
      color: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Real-time Progress Tracking",
      description:
        "Continuous assessment and feedback help identify knowledge gaps and learning opportunities instantly",
      impact: "50% better retention rates",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Optimized Learning Time",
      description: "AI identifies the most effective study times and durations for each individual student",
      impact: "30% reduction in study time",
      color: "text-orange-600",
    },
  ]

  const learningScenarios = {
    "struggling-student": {
      title: "Supporting Struggling Students",
      description: "How PAL helps students who are falling behind",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 mb-2">Traditional Approach Problems:</h4>
            <ul className="text-red-800 text-sm space-y-1">
              <li>• One-size-fits-all content moves too fast</li>
              <li>• Students fall further behind each day</li>
              <li>• Lack of personalized attention in large classes</li>
              <li>• Low confidence and motivation</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 mb-2">PAL Solution:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• AI identifies specific knowledge gaps</li>
              <li>• Content automatically adjusts to student's level</li>
              <li>• Provides additional practice on weak areas</li>
              <li>• Builds confidence through achievable challenges</li>
              <li>• Offers multiple explanation styles until concept clicks</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Real Results:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <div className="text-sm text-blue-800">of struggling students improved grades</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">3.2x</div>
                <div className="text-sm text-blue-800">faster concept understanding</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "advanced-learner": {
      title: "Challenging Advanced Learners",
      description: "How PAL keeps gifted students engaged and growing",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-900 mb-2">Traditional Approach Problems:</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Boredom from repetitive, easy content</li>
              <li>• No additional challenges or enrichment</li>
              <li>• Potential for developing poor study habits</li>
              <li>• Underutilized academic potential</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 mb-2">PAL Solution:</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Automatically provides advanced content and challenges</li>
              <li>• Introduces complex problem-solving scenarios</li>
              <li>• Connects concepts across different subjects</li>
              <li>• Offers enrichment activities and projects</li>
              <li>• Maintains engagement through optimal difficulty</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Real Results:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <div className="text-sm text-purple-800">report increased engagement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">2.5x</div>
                <div className="text-sm text-purple-800">more concepts mastered</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "different-learning-styles": {
      title: "Accommodating Different Learning Styles",
      description: "How PAL adapts to visual, auditory, and kinesthetic learners",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Visual Learners</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Interactive diagrams and charts</li>
                <li>• Color-coded information</li>
                <li>• Mind maps and concept visualization</li>
                <li>• Video explanations</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Auditory Learners</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Audio explanations and narration</li>
                <li>• Discussion-based activities</li>
                <li>• Verbal problem-solving</li>
                <li>• Music and rhythm integration</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Kinesthetic Learners</h4>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Interactive simulations</li>
                <li>• Hands-on virtual experiments</li>
                <li>• Movement-based activities</li>
                <li>• Touch and drag exercises</li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-900 mb-2">AI Learning Style Detection:</h4>
            <p className="text-indigo-800 text-sm">
              Our AI analyzes how students interact with different content types, tracks engagement levels, and measures
              comprehension rates to automatically identify and adapt to each student's preferred learning style.
            </p>
          </div>
        </div>
      ),
    },
  }

  const researchFindings = [
    {
      statistic: "73%",
      description: "improvement in learning outcomes with adaptive learning systems",
      source: "Journal of Educational Technology Research, 2023",
    },
    {
      statistic: "2.3x",
      description: "faster skill acquisition compared to traditional methods",
      source: "MIT Technology Review, 2023",
    },
    {
      statistic: "85%",
      description: "of students report increased motivation and engagement",
      source: "Educational Psychology International, 2024",
    },
    {
      statistic: "45%",
      description: "reduction in learning time while maintaining comprehension",
      source: "Stanford Education Research Institute, 2023",
    },
  ]

  const challenges = [
    {
      icon: Users,
      title: "Overcrowded Classrooms",
      problem: "Teachers struggle to provide individual attention to 30-40 students per class",
      solution:
        "PAL provides personalized attention to every student simultaneously, adapting to each individual's needs",
    },
    {
      icon: Clock,
      title: "Limited Learning Time",
      problem: "Students have limited classroom hours and varying amounts of study time at home",
      solution:
        "PAL optimizes learning efficiency, helping students achieve more in less time through targeted practice",
    },
    {
      icon: BarChart3,
      title: "Diverse Learning Paces",
      problem: "Students learn at different speeds, causing some to fall behind while others get bored",
      solution: "PAL automatically adjusts pace and difficulty for each student, ensuring optimal challenge levels",
    },
    {
      icon: Puzzle,
      title: "Knowledge Gap Identification",
      problem: "Teachers can't easily identify specific knowledge gaps for each student",
      solution: "PAL continuously assesses understanding and pinpoints exact areas needing reinforcement",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">THE FUTURE OF EDUCATION</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why <span className="text-blue-600">Personalized Adaptive Learning</span> is Essential for Today's
                Students
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                In an era where every student is unique, one-size-fits-all education is failing our children. Discover
                how PAL technology is revolutionizing learning outcomes and preparing students for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                    Experience PAL Today
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Crisis in Traditional Education</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Despite technological advances, our education system still operates on outdated principles that fail to
                address individual student needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <challenge.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                      <div className="mb-4">
                        <p className="text-red-700 font-medium mb-2">The Problem:</p>
                        <p className="text-gray-600 text-sm mb-3">{challenge.problem}</p>
                      </div>
                      <div>
                        <p className="text-green-700 font-medium mb-2">PAL Solution:</p>
                        <p className="text-gray-600 text-sm">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-900 mb-4">The Alarming Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">68%</div>
                  <p className="text-red-800 text-sm">
                    of students report feeling left behind in traditional classrooms
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">45%</div>
                  <p className="text-red-800 text-sm">of learning time is wasted on content students already know</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">82%</div>
                  <p className="text-red-800 text-sm">of teachers feel unable to meet individual student needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAL Benefits Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How PAL Transforms Learning</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personalized Adaptive Learning uses AI to create unique educational experiences that adapt to each
                student's needs, preferences, and goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {keyBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <TrendingUp className="w-4 h-4" />
                        {benefit.impact}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Interactive Learning Scenarios */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                PAL in Action: Real Learning Scenarios
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  {Object.entries(learningScenarios).map(([key, scenario]) => (
                    <button
                      key={key}
                      onClick={() => setActiveScenario(key)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeScenario === key
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      <div className="font-semibold mb-1">{scenario.title}</div>
                      <div className="text-sm opacity-90">{scenario.description}</div>
                    </button>
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <Card className="p-6 h-full">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {learningScenarios[activeScenario as keyof typeof learningScenarios].title}
                    </h4>
                    {learningScenarios[activeScenario as keyof typeof learningScenarios].content}
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Evidence Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Backed by Research & Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Extensive research from leading educational institutions proves the effectiveness of personalized
                adaptive learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {researchFindings.map((finding, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{finding.statistic}</div>
                  <p className="text-gray-700 font-medium mb-3">{finding.description}</p>
                  <p className="text-xs text-gray-500">{finding.source}</p>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Research Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Cognitive Science Findings:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Students learn 40% faster when content adapts to their cognitive load
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Personalized feedback improves retention by 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Adaptive difficulty maintains optimal challenge levels for flow state
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Educational Psychology Research:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Personalized learning increases intrinsic motivation by 55%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Students show 70% improvement in self-efficacy beliefs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reduced anxiety and increased confidence in learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Education Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Preparing Students for Tomorrow's World</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PAL doesn't just improve academic performance—it develops critical 21st-century skills that students
                need to thrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Thinking</h3>
                <p className="text-gray-600">
                  PAL encourages deep analysis and problem-solving by presenting challenges that require creative
                  solutions
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Directed Learning</h3>
                <p className="text-gray-600">
                  Students develop autonomy and responsibility for their learning journey, essential for lifelong
                  learning
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional Intelligence</h3>
                <p className="text-gray-600">
                  Personalized feedback and support help students develop resilience, empathy, and emotional awareness
                </p>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Skills Gap PAL Addresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Traditional Education Produces:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Passive learners who wait for instruction
                    </li>
                    <li className="flex items-center gap-2 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Students who memorize without understanding
                    </li>
                    <li className="flex items-center gap-2 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Fear of failure and risk aversion
                    </li>
                    <li className="flex items-center gap-2 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Dependence on external validation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">PAL Develops:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Active, curious, and engaged learners
                    </li>
                    <li className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Deep conceptual understanding
                    </li>
                    <li className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Growth mindset and resilience
                    </li>
                    <li className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Self-motivated and confident learners
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Give Your Child the Learning Advantage They Deserve</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let your child fall behind in an outdated education system. Experience the power of Personalized
              Adaptive Learning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                  Start Free Trial Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
