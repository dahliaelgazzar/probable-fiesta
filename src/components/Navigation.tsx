"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Her<span className="text-primary">EventTech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#program"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Program
            </Link>
            <Link
              href="/#experts"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Experts
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/portal"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Member Portal
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200"
            >
              Take the Quiz
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-purple-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/#program"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Program
            </Link>
            <Link
              href="/#experts"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Experts
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/portal"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-purple-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Member Portal
            </Link>
            <Link
              href="/quiz"
              className="block mx-4 text-center px-5 py-2.5 rounded-full bg-amber-500 text-white font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Take the Quiz
            </Link>
            <Link
              href="/apply"
              className="block mx-4 mt-2 text-center px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
