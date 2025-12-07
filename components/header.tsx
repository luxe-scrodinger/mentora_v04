"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown, Sparkles, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            className="flex items-center gap-2 font-bold text-xl group transition-all duration-300 hover:scale-105"
            prefetch={false}
          >
            <Sparkles className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:rotate-12 group-hover:text-blue-700" />
            <span className="text-gray-900 transition-colors duration-300 group-hover:text-blue-600">Spark</span>
            <span className="text-blue-600 text-sm font-medium bg-blue-100 px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200">
              School AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/teachers">Teachers</NavLink>
            <NavLink href="/schools">Schools</NavLink>
            <NavLink href="/students">Students</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                >
                  Teaching Materials
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="animate-in slide-in-from-top-2 duration-200">
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#ai-tools" className="transition-colors hover:text-blue-600">
                    AI Tools
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#question-bank" className="transition-colors hover:text-blue-600">
                    Question Bank
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#lesson-plans" className="transition-colors hover:text-blue-600">
                    Lesson Plans
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#lessons" className="transition-colors hover:text-blue-600">
                    Lessons
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#activities" className="transition-colors hover:text-blue-600">
                    Activities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#summaries" className="transition-colors hover:text-blue-600">
                    Summaries
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teaching-materials#chapters" className="transition-colors hover:text-blue-600">
                    Chapters
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-1 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                🇮🇳 IN
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2 duration-200">
              <DropdownMenuItem>🇮🇳 English</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 हिंदी</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 বাংলা</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 தமிழ்</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳 తెలుగు</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Log In
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 space-y-2">
            <MobileNavLink href="/teachers" onClick={() => setIsMobileMenuOpen(false)}>
              Teachers
            </MobileNavLink>
            <MobileNavLink href="/schools" onClick={() => setIsMobileMenuOpen(false)}>
              Schools
            </MobileNavLink>
            <MobileNavLink href="/students" onClick={() => setIsMobileMenuOpen(false)}>
              Students
            </MobileNavLink>
            <MobileNavLink href="/teaching-materials" onClick={() => setIsMobileMenuOpen(false)}>
              Teaching Materials
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-all duration-300 hover:bg-blue-50 hover:scale-105"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-md transition-all duration-300 hover:bg-blue-50"
    >
      {children}
    </Link>
  )
}

export default Header
