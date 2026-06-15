"use client";

import { useState } from "react";

const liveSessions = [
  {
    id: 1,
    title: "Scaling Your Event Tech Sales Engine",
    coach: "Allie Magyar",
    date: "Apr 15, 2026",
    time: "12:00 PM EST",
    duration: "60 min",
    track: "Thrive",
    description:
      "Learn the exact sales playbook Allie used to scale Hubb from $0 to $10M+ ARR. Covers enterprise sales cycles, pricing strategy, and building a sales team.",
    spots: 18,
    maxSpots: 20,
  },
  {
    id: 2,
    title: "Building Viral Loops in Event Marketing",
    coach: "Rachel Stephan",
    date: "Apr 22, 2026",
    time: "1:00 PM EST",
    duration: "60 min",
    track: "Thrive",
    description:
      "Rachel breaks down how to turn your event tech users into advocates. Word-of-mouth marketing strategies that actually work in the events industry.",
    spots: 15,
    maxSpots: 20,
  },
  {
    id: 3,
    title: "Positioning for Acquisition: What Buyers Look For",
    coach: "Allie Magyar",
    date: "Apr 29, 2026",
    time: "12:00 PM EST",
    duration: "90 min",
    track: "Exit",
    description:
      "From Allie's firsthand experience with the Bizzabo acquisition. What strategic buyers evaluate, how to prepare your company, and negotiation insights.",
    spots: 12,
    maxSpots: 20,
  },
  {
    id: 4,
    title: "Platform Ecosystem Strategy for Event Tech",
    coach: "Vinnu Deshetty",
    date: "May 6, 2026",
    time: "11:00 AM EST",
    duration: "60 min",
    track: "Thrive",
    description:
      "Vinnu shares how to think about your event tech product as part of a larger ecosystem. Partnership strategies, API-first thinking, and marketplace dynamics.",
    spots: 19,
    maxSpots: 20,
  },
  {
    id: 5,
    title: "Financial Modeling for Event Tech Startups",
    coach: "Allie Magyar",
    date: "May 13, 2026",
    time: "12:00 PM EST",
    duration: "75 min",
    track: "Thrive",
    description:
      "Build a financial model that investors actually want to see. SaaS metrics, event tech-specific KPIs, and how to tell your growth story with numbers.",
    spots: 20,
    maxSpots: 20,
  },
  {
    id: 6,
    title: "Community-Led Growth for Events Platforms",
    coach: "Rachel Stephan",
    date: "May 20, 2026",
    time: "1:00 PM EST",
    duration: "60 min",
    track: "Thrive",
    description:
      "How to build a thriving community around your event tech product. Content strategy, ambassador programs, and converting community members to customers.",
    spots: 17,
    maxSpots: 20,
  },
];

const onDemandLibrary = [
  {
    id: 101,
    title: "Founder Story: From Idea to Acquisition",
    coach: "Allie Magyar",
    duration: "45 min",
    track: "Exit",
    category: "Founder Stories",
    views: 342,
  },
  {
    id: 102,
    title: "Event Tech Market Landscape 2026",
    coach: "Vinnu Deshetty",
    duration: "35 min",
    track: "Thrive",
    category: "Market Intel",
    views: 256,
  },
  {
    id: 103,
    title: "Pitch Perfect: Crafting Your Event Tech Story",
    coach: "Rachel Stephan",
    duration: "50 min",
    track: "Thrive",
    category: "Fundraising",
    views: 189,
  },
  {
    id: 104,
    title: "Due Diligence Prep: The Founder's Checklist",
    coach: "Allie Magyar",
    duration: "40 min",
    track: "Exit",
    category: "M&A",
    views: 201,
  },
  {
    id: 105,
    title: "Building an API-First Event Tech Product",
    coach: "Vinnu Deshetty",
    duration: "55 min",
    track: "Thrive",
    category: "Product",
    views: 178,
  },
  {
    id: 106,
    title: "Event Tech Pricing Strategies That Work",
    coach: "Rachel Stephan",
    duration: "30 min",
    track: "Thrive",
    category: "Growth",
    views: 312,
  },
  {
    id: 107,
    title: "Negotiating Your Term Sheet",
    coach: "Allie Magyar",
    duration: "60 min",
    track: "Exit",
    category: "Fundraising",
    views: 267,
  },
  {
    id: 108,
    title: "Global Expansion for Event Tech",
    coach: "Vinnu Deshetty",
    duration: "45 min",
    track: "Thrive",
    category: "Growth",
    views: 145,
  },
];

export default function SessionsPage() {
  const [view, setView] = useState<"live" | "on-demand">("live");
  const [trackFilter, setTrackFilter] = useState<"all" | "Thrive" | "Exit">(
    "all"
  );

  const filteredLive =
    trackFilter === "all"
      ? liveSessions
      : liveSessions.filter((s) => s.track === trackFilter);

  const filteredOnDemand =
    trackFilter === "all"
      ? onDemandLibrary
      : onDemandLibrary.filter((s) => s.track === trackFilter);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sessions</h1>
          <p className="text-gray-500 mt-1">
            Live coaching calls and on-demand masterclasses from our expert
            coaches
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex bg-white rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setView("live")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "live"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Live Sessions
            </button>
            <button
              onClick={() => setView("on-demand")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "on-demand"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              On-Demand Library
            </button>
          </div>
          <div className="flex gap-2">
            {(["all", "Thrive", "Exit"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTrackFilter(t)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  trackFilter === t
                    ? t === "Thrive"
                      ? "bg-purple-100 text-purple-700"
                      : t === "Exit"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-gray-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {t === "all" ? "All Tracks" : `${t} Track`}
              </button>
            ))}
          </div>
        </div>

        {/* Live Sessions */}
        {view === "live" && (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredLive.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div
                  className={`h-1.5 ${
                    session.track === "Thrive"
                      ? "bg-gradient-to-r from-violet-500 to-purple-600"
                      : "bg-gradient-to-r from-amber-500 to-orange-500"
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        session.track === "Thrive"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {session.track} Track
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                      Live
                    </span>
                    <span className="text-xs text-gray-500">
                      {session.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {session.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {session.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {session.coach}
                      </p>
                      <p className="text-xs text-gray-500">
                        {session.date} &middot; {session.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-2">
                        {session.spots}/{session.maxSpots} spots
                      </p>
                      <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* On-Demand Library */}
        {view === "on-demand" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOnDemand.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
                  <div className="text-6xl text-white/20">🎬</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        session.track === "Thrive"
                          ? "bg-purple-500/80 text-white"
                          : "bg-amber-500/80 text-white"
                      }`}
                    >
                      {session.track}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {session.duration}
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">
                    {session.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm">
                    {session.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{session.coach}</p>
                    <p className="text-xs text-gray-400">
                      {session.views} views
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
