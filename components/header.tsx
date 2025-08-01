"use client"

import { Button } from "@/components/ui/button"
import { Globe, Search, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-red-600 italic transform -skew-x-12">T-FITNESS</div>
                <div className="hidden sm:block text-xs text-gray-600 border-l border-gray-300 pl-3 uppercase tracking-wider">
                  STRENGTH & POWER
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#markets"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Markets
              </a>
              <a
                href="#equipment"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Equipment
              </a>
              <a
                href="#solutions"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Solutions
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Contact
              </a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" />
                <span className="hidden xl:inline">English - Pakistan</span>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <Search className="w-4 h-4" />
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 font-semibold uppercase tracking-wide">
                Get Quote
              </Button>
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#markets"
                className="block py-3 text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Markets
              </a>
              <a
                href="#equipment"
                className="block py-3 text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipment
              </a>
              <a
                href="#solutions"
                className="block py-3 text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#about"
                className="block py-3 text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-3 text-gray-600 hover:text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
