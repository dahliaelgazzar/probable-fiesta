"use client";

import { useState } from "react";

const weeklyGoals = [
  {
    id: 1,
    goal: "Complete investor pitch deck draft",
    category: "Fundraising",
    dueDate: "Apr 11, 2026",
    status: "completed",
    reflection: "Finished all 12 slides. Need to refine the financial projections slide before coach review.",
  },
  {
    id: 2,
    goal: "Conduct 3 customer discovery interviews",
    category: "Product",
    dueDate: "Apr 11, 2026",
    status: "completed",
    reflection: "Spoke with 2 corporate event planners and 1 agency. Key insight: they need better hybrid event analytics.",
  },
  {
    id: 3,
    goal: "Set up product analytics dashboard",
    category: "Product",
    dueDate: "Apr 11, 2026",
    status: "in-progress",
    reflection: "",
  },
  {
    id: 4,
    goal: "Draft partnership outreach to 5 event platforms",
    category: "Growth",
    dueDate: "Apr 18, 2026",
    status: "not-started",
    reflection: "",
  },
];

const milestones = [
  { title: "Complete Revenue Model Canvas", completed: true, date: "Mar 15" },
  { title: "First customer discovery round", completed: true, date: "Mar 22" },
  { title: "MVP feature specification", completed: true, date: "Mar 29" },
  { title: "Pitch deck v1 complete", completed: true, date: "Apr 5" },
  { title: "3 investor conversations", completed: false, date: "Apr 19" },
  { title: "Partnership strategy defined", completed: false, date: "Apr 26" },
  { title: "Soft launch to 10 beta users", completed: false, date: "May 10" },
  { title: "First revenue milestone", completed: false, date: "May 31" },
];

const podHistory = [
  {
    week: "Week 6 - Apr 3",
    attendees: 5,
    highlights: [
      "Sarah hit her first $10K MRR",
      "Priya launched beta to 50 event planners",
      "You completed pitch deck framework",
    ],
    yourGoalsHit: 2,
    yourGoalsTotal: 3,
  },
  {
    week: "Week 5 - Mar 27",
    attendees: 4,
    highlights: [
      "Maria closed partnership with EventBrite",
      "Jordan pivoted to B2B model",
      "Group workshop on pricing strategy",
    ],
    yourGoalsHit: 3,
    yourGoalsTotal: 3,
  },
  {
    week: "Week 4 - Mar 20",
    attendees: 5,
    highlights: [
      "You completed customer discovery framework",
      "Sarah shared enterprise sales learnings",
      "Priya demoed new product feature",
    ],
    yourGoalsHit: 2,
    yourGoalsTotal: 3,
  },
];

export default function AccountabilityPage() {
  const [activeView, setActiveView] = useState<
    "weekly" | "milestones" | "history"
  >("weekly");
  const [newGoal, setNewGoal] = useState("");
  const [newCategory, setNewCategory] = useState("Product");

  const completedGoals = weeklyGoals.filter(
    (g) => g.status === "completed"
  ).length;
  const totalGoals = weeklyGoals.length;
  const streakWeeks = 6;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Accountability</h1>
          <p className="text-gray-500 mt-1">
            Track your goals, celebrate wins, and stay accountable with your pod
          </p>
        </div>

        {/* Streak & Stats Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-1">🔥</div>
              <div className="text-3xl font-bold text-gray-900">
                {streakWeeks}
              </div>
              <div className="text-sm text-gray-500">Week Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">🎯</div>
              <div className="text-3xl font-bold text-gray-900">
                {completedGoals}/{totalGoals}
              </div>
              <div className="text-sm text-gray-500">This Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">📊</div>
              <div className="text-3xl font-bold text-gray-900">67%</div>
              <div className="text-sm text-gray-500">All-Time Hit Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">🏆</div>
              <div className="text-3xl font-bold text-gray-900">#3</div>
              <div className="text-sm text-gray-500">Pod Ranking</div>
            </div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {(
            [
              ["weekly", "Weekly Goals"],
              ["milestones", "Milestone Tracker"],
              ["history", "Pod History"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeView === key
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Weekly Goals */}
        {activeView === "weekly" && (
          <div className="space-y-6">
            {/* Add Goal */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Add This Week&apos;s Goal
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="What will you accomplish this week?"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600"
                >
                  <option>Product</option>
                  <option>Fundraising</option>
                  <option>Growth</option>
                  <option>Operations</option>
                  <option>Partnerships</option>
                </select>
                <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors">
                  Add Goal
                </button>
              </div>
            </div>

            {/* Goals List */}
            <div className="space-y-4">
              {weeklyGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all ${
                    goal.status === "completed"
                      ? "border-green-200"
                      : goal.status === "in-progress"
                      ? "border-blue-200"
                      : "border-gray-100"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          goal.status === "completed"
                            ? "bg-green-500 border-green-500"
                            : goal.status === "in-progress"
                            ? "border-blue-400 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        {goal.status === "completed" && (
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                        {goal.status === "in-progress" && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-medium ${
                              goal.status === "completed"
                                ? "text-gray-500 line-through"
                                : "text-gray-900"
                            }`}
                          >
                            {goal.goal}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            {goal.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            Due {goal.dueDate}
                          </span>
                        </div>
                        {goal.reflection && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm text-gray-600 italic">
                            &ldquo;{goal.reflection}&rdquo;
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 shrink-0">
                        {goal.status !== "completed" && (
                          <button className="text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors">
                            Mark Done
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Reflection */}
            <div className="bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl p-6 border border-purple-100">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Weekly Reflection
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Take 5 minutes to reflect on your week before your pod meeting.
              </p>
              <textarea
                rows={4}
                placeholder="What went well? What was challenging? What do you need help with?"
                className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
              />
              <button className="mt-3 px-6 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors">
                Submit Reflection
              </button>
            </div>
          </div>
        )}

        {/* Milestones */}
        {activeView === "milestones" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Your 12-Week Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        m.completed
                          ? "bg-green-500 text-white"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                      }`}
                    >
                      {m.completed ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-sm font-medium">{i + 1}</span>
                      )}
                    </div>
                    <div
                      className={`flex-1 pb-6 ${
                        m.completed ? "" : "opacity-70"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-medium ${
                            m.completed
                              ? "text-gray-900"
                              : "text-gray-600"
                          }`}
                        >
                          {m.title}
                        </h3>
                        <span className="text-xs text-gray-400">{m.date}</span>
                      </div>
                      {m.completed && (
                        <span className="inline-block mt-1 text-xs text-green-600 font-medium">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pod History */}
        {activeView === "history" && (
          <div className="space-y-6">
            {podHistory.map((week, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{week.week}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">
                      {week.attendees}/5 attended
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        week.yourGoalsHit === week.yourGoalsTotal
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      You: {week.yourGoalsHit}/{week.yourGoalsTotal} goals
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  {week.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">&#9679;</span>
                      <span className="text-gray-600">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
