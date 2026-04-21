"use client";

import { useState } from "react";

const workbooks = [
  {
    id: 1,
    title: "Revenue Model Canvas",
    description:
      "Map out your event tech revenue model. Covers SaaS pricing, usage-based models, marketplace takes, and hybrid approaches specific to event technology.",
    coach: "Allie Magyar",
    track: "Thrive",
    category: "Business Model",
    chapters: 6,
    completedChapters: 6,
    estimatedTime: "3 hours",
    downloadable: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "Investor Pitch Deck Builder",
    description:
      "Step-by-step guide to building a compelling pitch deck for event tech investors. Includes real examples, slide templates, and what VCs actually look for.",
    coach: "Allie Magyar",
    track: "Thrive",
    category: "Fundraising",
    chapters: 10,
    completedChapters: 6,
    estimatedTime: "5 hours",
    downloadable: true,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Customer Discovery Framework",
    description:
      "Validate your event tech product idea with real event professionals. Interview templates, survey builders, and analysis frameworks.",
    coach: "Rachel Stephan",
    track: "Thrive",
    category: "Product",
    chapters: 8,
    completedChapters: 2,
    estimatedTime: "4 hours",
    downloadable: true,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Go-to-Market Playbook",
    description:
      "Launch and grow your event tech product. Covers market segmentation, channel strategy, content marketing, and event industry partnerships.",
    coach: "Rachel Stephan",
    track: "Thrive",
    category: "Growth",
    chapters: 12,
    completedChapters: 0,
    estimatedTime: "6 hours",
    downloadable: true,
    status: "Not Started",
  },
  {
    id: 5,
    title: "Exit Readiness Assessment",
    description:
      "Evaluate whether your company is ready for acquisition. Covers financials, team, technology, contracts, and buyer attractiveness factors.",
    coach: "Allie Magyar",
    track: "Exit",
    category: "M&A",
    chapters: 8,
    completedChapters: 0,
    estimatedTime: "4 hours",
    downloadable: true,
    status: "Not Started",
  },
  {
    id: 6,
    title: "Platform & Partnership Strategy",
    description:
      "Build your event tech product as part of a connected ecosystem. API strategy, integration partnerships, and marketplace positioning.",
    coach: "Vinnu Deshetty",
    track: "Thrive",
    category: "Product",
    chapters: 7,
    completedChapters: 0,
    estimatedTime: "3.5 hours",
    downloadable: true,
    status: "Not Started",
  },
  {
    id: 7,
    title: "Valuation & Deal Structure Guide",
    description:
      "Understand how event tech companies are valued. Revenue multiples, strategic vs financial buyers, earnouts, and how to maximize your exit value.",
    coach: "Allie Magyar",
    track: "Exit",
    category: "M&A",
    chapters: 9,
    completedChapters: 0,
    estimatedTime: "5 hours",
    downloadable: true,
    status: "Not Started",
  },
  {
    id: 8,
    title: "Community-Led Growth Playbook",
    description:
      "Turn your users into your best marketing channel. Ambassador programs, UGC strategy, referral systems, and community building for event tech.",
    coach: "Rachel Stephan",
    track: "Thrive",
    category: "Growth",
    chapters: 8,
    completedChapters: 0,
    estimatedTime: "4 hours",
    downloadable: true,
    status: "Not Started",
  },
];

export default function WorkbooksPage() {
  const [filter, setFilter] = useState<"all" | "Thrive" | "Exit">("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = workbooks
    .filter((wb) => filter === "all" || wb.track === filter)
    .filter((wb) => statusFilter === "all" || wb.status === statusFilter);

  const totalProgress =
    workbooks.reduce((acc, wb) => acc + wb.completedChapters, 0) /
    workbooks.reduce((acc, wb) => acc + wb.chapters, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Workbooks & Templates
            </h1>
            <p className="text-gray-500 mt-1">
              Battle-tested frameworks and templates from founders who&apos;ve been
              there
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Overall Progress</span>
              <span className="text-sm font-bold text-primary">
                {Math.round(totalProgress * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${totalProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2">
            {(["all", "Thrive", "Exit"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === t
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
          <div className="h-8 w-px bg-gray-200" />
          <div className="flex gap-2">
            {["all", "In Progress", "Not Started", "Completed"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  statusFilter === s
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {s === "all" ? "All Status" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Workbooks Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((wb) => (
            <div
              key={wb.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      wb.track === "Thrive"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {wb.track}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                    {wb.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ml-auto ${
                      wb.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : wb.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {wb.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {wb.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {wb.description}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gray-500">
                      {wb.completedChapters}/{wb.chapters} chapters
                    </span>
                    <span className="text-xs text-gray-500">
                      ~{wb.estimatedTime}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        wb.status === "Completed"
                          ? "bg-green-500"
                          : wb.completedChapters > 0
                          ? "bg-primary"
                          : "bg-gray-200"
                      }`}
                      style={{
                        width: `${
                          (wb.completedChapters / wb.chapters) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">By {wb.coach}</p>
                  <div className="flex gap-2">
                    {wb.downloadable && (
                      <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </button>
                    )}
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        wb.status === "Completed"
                          ? "bg-green-50 text-green-700 hover:bg-green-100"
                          : wb.status === "In Progress"
                          ? "bg-primary text-white hover:bg-primary-dark"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {wb.status === "Completed"
                        ? "Review"
                        : wb.status === "In Progress"
                        ? "Continue"
                        : "Start"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
