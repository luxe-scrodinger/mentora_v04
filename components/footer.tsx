"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Sparkles, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span>Spark School</span>
              <span className="text-blue-400 text-lg">AI</span>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              India's revolutionary AI-powered education platform featuring personalized adaptive learning (PAL)
              technology. Transforming education for millions of students across 500+ schools.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@sparkschool.ai" className="hover:text-white transition-colors">
                  contact@sparkschool.ai
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/teaching-materials" className="text-slate-300 hover:text-white transition-colors">
                  Spark School AI
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="text-slate-300 hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/pal" className="text-slate-300 hover:text-white transition-colors">
                  PAL Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/teaching-materials#question-bank"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Question Bank
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-slate-300 hover:text-white transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/schools" className="text-slate-300 hover:text-white transition-colors">
                  For Schools
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-slate-300 hover:text-white transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-slate-300 hover:text-white transition-colors">
                  For Educators
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
                  News & Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-300 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-300 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with AI Education</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI-powered learning, product updates, and educational innovations delivered to
              your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                required
              />
              <Button
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6"
                disabled={isSubscribed}
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 Spark School AI. All rights reserved. Empowering education with AI.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-slate-400 hover:text-white text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
