"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Users,
  GraduationCap,
  Building2,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Video,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    boardType: "",
    studentCount: "",
    subject: "",
    message: "",
    demoType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our education specialists",
      contact: "+91 98765 43210",
      availability: "Mon-Fri, 9 AM - 6 PM IST",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "support@mentora.ai",
      availability: "24/7 Response",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Video,
      title: "Live Demo",
      description: "Schedule a personalized demonstration",
      contact: "Book a 30-minute session",
      availability: "Available daily",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const demoOptions = [
    {
      title: "School Administrator Demo",
      description: "Perfect for principals and administrators",
      duration: "45 minutes",
      features: ["School-wide analytics", "Teacher management", "Curriculum alignment", "ROI analysis"],
      icon: Building2,
    },
    {
      title: "Teacher Demo",
      description: "Designed for educators and department heads",
      duration: "30 minutes",
      features: ["AI lesson planning", "Assessment creation", "Student analytics", "Classroom tools"],
      icon: GraduationCap,
    },
    {
      title: "Student & Parent Demo",
      description: "Showcase personalized learning features",
      duration: "20 minutes",
      features: ["PAL system", "Progress tracking", "Study tools", "Parent dashboard"],
      icon: Users,
    },
  ]

  const supportedBoards = [
    { name: "CBSE", description: "Central Board of Secondary Education", schools: "25,000+ schools" },
    { name: "ICSE", description: "Indian Certificate of Secondary Education", schools: "2,500+ schools" },
    { name: "IB", description: "International Baccalaureate", schools: "150+ schools" },
    { name: "State Boards", description: "Regional education boards", schools: "All major states" },
    { name: "Custom Curriculum", description: "Tailored curriculum solutions", schools: "Bespoke design" },
  ]

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen pt-16">
        <Header />
        <main className="flex-1 flex items-center justify-center py-32 px-6">
          <Card className="max-w-md w-full text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">We've received your inquiry and will get back to you within 24 hours.</p>
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Demo Now
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">Get in Touch</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Transform Your <span className="text-blue-600">Educational Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're a school administrator, teacher, or student, we're here to help you harness the power of AI
              in education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg transition-all hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg bg-transparent transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
              <p className="text-xl text-gray-600">Choose the method that works best for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-gray-900 mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.availability}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Demo Experience</h2>
              <p className="text-xl text-gray-600">Tailored demonstrations for different roles and needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoOptions.map((demo, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <demo.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{demo.title}</CardTitle>
                    <p className="text-gray-600">{demo.description}</p>
                    <Badge variant="secondary" className="w-fit">
                      {demo.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {demo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book This Demo</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Support */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Curriculum We Support</h2>
              <p className="text-xl text-gray-600">Aligned with major Indian and international education boards</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedBoards.map((board, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{board.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{board.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {board.schools}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Curriculum Solutions</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Need something unique? We create bespoke curriculum solutions tailored to your institution's specific
                  requirements, learning objectives, and pedagogical approach.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Discuss Custom Curriculum
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <Card className="p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">School/Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="Enter school or organization name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principal">Principal/Administrator</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="coordinator">Academic Coordinator</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="boardType">Curriculum Board</Label>
                    <Select value={formData.boardType} onValueChange={(value) => handleInputChange("boardType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select curriculum board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="ib">IB (International Baccalaureate)</SelectItem>
                        <SelectItem value="state">State Board</SelectItem>
                        <SelectItem value="custom">Custom Curriculum</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentCount">Number of Students</Label>
                    <Select
                      value={formData.studentCount}
                      onValueChange={(value) => handleInputChange("studentCount", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select student count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 students</SelectItem>
                        <SelectItem value="51-200">51-200 students</SelectItem>
                        <SelectItem value="201-500">201-500 students</SelectItem>
                        <SelectItem value="501-1000">501-1000 students</SelectItem>
                        <SelectItem value="1000+">1000+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demoType">Demo Interest</Label>
                    <Select value={formData.demoType} onValueChange={(value) => handleInputChange("demoType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select demo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Overview</SelectItem>
                        <SelectItem value="admin">School Administrator</SelectItem>
                        <SelectItem value="teacher">Teacher Tools</SelectItem>
                        <SelectItem value="student">Student Features</SelectItem>
                        <SelectItem value="custom">Custom Curriculum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject of Inquiry</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief subject line for your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your specific needs, questions, or how we can help your institution..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 flex-1"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 flex-1 bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo Instead
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Offices</h2>
              <p className="text-xl text-gray-600">We have presence across major Indian cities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Mumbai (Headquarters)</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Bandra Kurla Complex
                      <br />
                      Mumbai, Maharashtra 400051
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Mon-Fri: 9 AM - 6 PM
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Bangalore</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Koramangala
                      <br />
                      Bangalore, Karnataka 560034
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Mon-Fri: 9 AM - 6 PM
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Delhi NCR</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Cyber City, Gurgaon
                      <br />
                      Haryana 122002
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Mon-Fri: 9 AM - 6 PM
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
