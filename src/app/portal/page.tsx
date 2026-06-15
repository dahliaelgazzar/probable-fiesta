"use client";

import Link from "next/link";
import { useState } from "react";

const upcomingSessions = [
  {
    title: "Scaling Your Event Tech Sales Engine",
    coach: "Allie Magyar",
    date: "Apr 15, 2026",
    time: "12:00 PM EST",
    type: "Live",
    track: "Thrive",
  },
  {
    title: "Building Viral Loops in Event Marketing",
    coach: "Rachel Stephan",
    date: "Apr 22, 2026",
    time: "1:00 PM EST",
    type: "Live",
    track: "Thrive",
  },
  {
    title: "Positioning for Acquisition: What Buyers Look For",
    coach: "Allie Magyar",
    date: "Apr 29, 2026",
    time: "12:00 PM EST",
    type: "Live",
    track: "Exit",
  },
  {
    title: "Platform Ecosystem Strategy for Event Tech",
    coach: "Vinnu Deshetty",
    date: "May 6, 2026",
    time: "11:00 AM EST",
    type: "Live",
    track: "Thrive",
  },
];

const podMembers = [
  { name: "Sarah K.", progress: 85, streak: 12 },
  { name: "Maria L.", progress: 72, streak: 8 },
  { name: "You", progress: 68, streak: 6 },
  { name: "Priya M.", progress: 90, streak: 15 },
  { name: "Jordan T.", progress: 55, streak: 4 },
];

const quickStats = [
  { label: "Sessions Attended", value: "12", icon: "📺", change: "+2 this week" },
  { label: "Workbooks Completed", value: "5", icon: "📓", change: "3 in progress" },
  { label: "Goals Hit", value: "8/12", icon: "🎯", change: "67% completion" },
  { label: "Pod Streak", value: "6 wks", icon: "🔥", change: "Keep it up!" },
];

const recentWorkbooks = [
  { title: "Revenue Model Canvas", progress: 100, status: "Completed" },
  { title: "Investor Pitch Deck Builder", progress: 65, status: "In Progress" },
  { title: "Customer Discovery Framework", progress: 30, status: "In Progress" },
  { title: "Go-to-Market Playbook", progress: 0, status: "Not Started" },
];

export default function PortalDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "pod" | "activity">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Portal Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, Founder 👋
              </h1>
              <p className="text-gray-500 mt-1">
                Cohort 1 &middot; Thrive Track &middot; Pod Alpha
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/portal/accountability"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
              >
                Weekly Check-in
              </Link>
              <Link
                href="/portal/sessions"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                Join Next Session
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 border-b border-gray-100 -mb-px">
            {(
              [
                ["overview", "Overview"],
                ["pod", "My Pod"],
                ["activity", "Activity"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === key
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Upcoming Sessions
                </h2>
                <Link
                  href="/portal/sessions"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {upcomingSessions.map((session, i) => (
                  <div
                    key={i}
                    className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {session.date.split(",")[0].split(" ")[1]}
                      <br />
                      <span className="text-[10px] font-normal">
                        {session.date.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm truncate">
                        {session.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {session.coach} &middot; {session.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          session.track === "Thrive"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {session.track}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                        {session.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workbook Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Workbook Progress
                </h2>
                <Link
                  href="/portal/workbooks"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="p-6 space-y-5">
                {recentWorkbooks.map((wb) => (
                  <div key={wb.title}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">
                        {wb.title}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          wb.status === "Completed"
                            ? "text-green-600"
                            : wb.status === "In Progress"
                            ? "text-amber-600"
                            : "text-gray-400"
                        }`}
                      >
                        {wb.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          wb.progress === 100
                            ? "bg-green-500"
                            : wb.progress > 0
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                        style={{ width: `${wb.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 col */}
          <div className="space-y-8">
            {/* Pod Leaderboard */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">
                  Pod Alpha Leaderboard
                </h2>
                <p className="text-gray-500 text-xs mt-1">
                  Weekly accountability streak
                </p>
              </div>
              <div className="p-4 space-y-3">
                {podMembers
                  .sort((a, b) => b.progress - a.progress)
                  .map((member, i) => (
                    <div
                      key={member.name}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        member.name === "You"
                          ? "bg-primary/5 border border-primary/20"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-sm font-bold text-gray-400 w-5">
                        {i + 1}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          i === 0
                            ? "bg-amber-500"
                            : i === 1
                            ? "bg-gray-400"
                            : i === 2
                            ? "bg-amber-700"
                            : "bg-primary/60"
                        }`}
                      >
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {member.name}
                        </p>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-primary h-1.5 rounded-full"
                            style={{ width: `${member.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 shrink-0">
                        🔥 {member.streak}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Link
                  href="/portal/accountability"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <span className="text-xl">📝</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                      Submit Weekly Check-in
                    </p>
                    <p className="text-xs text-gray-500">Due Friday 5pm</p>
                  </div>
                </Link>
                <Link
                  href="/portal/sessions"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <span className="text-xl">🎥</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                      Watch Replay: M&A Prep
                    </p>
                    <p className="text-xs text-gray-500">
                      Posted 2 days ago
                    </p>
                  </div>
                </Link>
                <Link
                  href="/portal/workbooks"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <span className="text-xl">📓</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                      Continue: Pitch Deck Builder
                    </p>
                    <p className="text-xs text-gray-500">65% complete</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Next Pod Meeting */}
            <div className="gradient-card rounded-xl p-6 border border-purple-200">
              <h3 className="font-bold text-gray-900 mb-2">
                Next Pod Meeting
              </h3>
              <p className="text-primary text-2xl font-bold">
                Thursday, 3pm EST
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Agenda: Q1 goal review, revenue milestone updates, blocker
                brainstorm
              </p>
              <button className="mt-4 w-full py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
