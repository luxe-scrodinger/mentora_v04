import Link from "next/link"
import { Linkedin, Instagram, GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-gray-900">Mentora</span>
              <span className="text-blue-600 text-sm font-medium">AI</span>
            </Link>
            <p className="text-gray-600 text-sm">We reinvent teachers' lives with artificial intelligence</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Audiences</h4>
            <nav className="space-y-1 text-sm">
              <Link href="/teachers" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Teachers
              </Link>
              <Link href="/students" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Students
              </Link>
              <Link href="/schools" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Schools
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Materials</h4>
            <nav className="space-y-1 text-sm">
              <Link
                href="/teaching-materials#ai-tools"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                AI Tools
              </Link>
              <Link
                href="/teaching-materials#question-bank"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Question Bank
              </Link>
              <Link
                href="/teaching-materials#lesson-plans"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Lesson Plans
              </Link>
              <Link
                href="/teaching-materials#lessons"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Lessons
              </Link>
              <Link
                href="/teaching-materials#activities"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Activities
              </Link>
              <Link
                href="/teaching-materials#summaries"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Summaries
              </Link>
              <Link
                href="/teaching-materials#chapters"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Chapters
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <nav className="space-y-1 text-sm">
              <Link href="/faq" className="block text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link href="/competitors" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Competitors
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 Mentora AI - All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:underline transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:underline transition-colors">
              Privacy Notice
            </Link>
            <Link href="/cookies" className="hover:underline transition-colors">
              Cookies Notice
            </Link>
            <Link href="/preferences" className="hover:underline transition-colors">
              Change Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
