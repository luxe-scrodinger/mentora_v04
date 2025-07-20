"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown, GraduationCap } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl group transition-transform hover:scale-105"
            prefetch={false}
          >
            <GraduationCap className="w-8 h-8 text-blue-600 transition-colors group-hover:text-blue-700" />
            <span className="text-gray-900">Mentora</span>
            <span className="text-blue-600 text-sm font-medium">AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/teachers"
              className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-colors hover:bg-blue-50"
            >
              Teachers
            </Link>
            <Link
              href="/schools"
              className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-colors hover:bg-blue-50"
            >
              Schools
            </Link>
            <Link
              href="/students"
              className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-colors hover:bg-blue-50"
            >
              Students
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                >
                  Teaching Materials
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="animate-in slide-in-from-top-2 duration-200">
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#ai-tools">AI Tools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#question-bank">Question Bank</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#lesson-plans">Lesson Plans</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#lessons">Lessons</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#activities">Activities</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#summaries">Summaries</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#chapters">Chapters</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 transition-colors hover:bg-gray-100">
                🇮🇳 IN
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिंदी</DropdownMenuItem>
              <DropdownMenuItem>বাংলা</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105">Log In</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
