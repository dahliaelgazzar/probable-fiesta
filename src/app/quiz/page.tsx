"use client";

import { useState } from "react";

type Answer = {
  questionId: string;
  value: string;
  label: string;
};

const steps = [
  {
    id: "intro",
    type: "intro" as const,
  },
  {
    id: "stage",
    type: "question" as const,
    number: 1,
    total: 7,
    heading: "Where are you on your founder journey?",
    subtext: "This helps us understand what kind of support would help most.",
    options: [
      { value: "idea", label: "I have an idea but haven't built anything yet", emoji: "💡" },
      { value: "building", label: "I'm building my MVP or early product", emoji: "🔨" },
      { value: "launched", label: "I've launched but I'm pre-revenue or early revenue", emoji: "🚀" },
      { value: "growing", label: "I have revenue and I'm focused on growth", emoji: "📈" },
      { value: "scaling", label: "I'm scaling and thinking about what's next (raise, exit, etc.)", emoji: "🏔️" },
    ],
  },
  {
    id: "biggest_challenge",
    type: "question" as const,
    number: 2,
    total: 7,
    heading: "What's the #1 thing keeping you up at night?",
    subtext: "Pick the one that hits hardest right now.",
    options: [
      { value: "lonely", label: "I feel isolated — no one around me gets what I'm building", emoji: "🏝️" },
      { value: "direction", label: "I'm not sure if I'm building the right thing or going in the right direction", emoji: "🧭" },
      { value: "revenue", label: "I can't figure out how to get to consistent revenue", emoji: "💸" },
      { value: "fundraising", label: "I need funding but don't know where to start or keep getting nos", emoji: "🚪" },
      { value: "scaling", label: "I have traction but don't know how to scale without breaking everything", emoji: "🎢" },
      { value: "exit", label: "I'm thinking about selling but have no idea how to value or position my company", emoji: "🏷️" },
    ],
  },
  {
    id: "pain_depth",
    type: "question" as const,
    number: 3,
    total: 7,
    heading: "How long have you been stuck on this?",
    subtext: "Be honest — no judgment here.",
    options: [
      { value: "weeks", label: "A few weeks — it's new but nagging", emoji: "🌱" },
      { value: "months", label: "A few months — it's slowing me down", emoji: "⏳" },
      { value: "6plus", label: "6+ months — it's seriously holding me back", emoji: "🧱" },
      { value: "year", label: "Over a year — I'm at a crossroads", emoji: "🔥" },
    ],
  },
  {
    id: "support_tried",
    type: "question" as const,
    number: 4,
    total: 7,
    heading: "What have you tried so far?",
    subtext: "Select the one that best describes your experience.",
    options: [
      { value: "nothing", label: "Honestly, I've been going it alone", emoji: "🙋‍♀️" },
      { value: "free", label: "Free content, podcasts, webinars — but nothing tailored to event tech", emoji: "📱" },
      { value: "network", label: "I have mentors or a network but they don't understand my space", emoji: "🤷‍♀️" },
      { value: "paid", label: "I've invested in coaching or programs but they weren't built for founders like me", emoji: "💳" },
    ],
  },
  {
    id: "what_would_help",
    type: "question" as const,
    number: 5,
    total: 7,
    heading: "What would make the biggest difference for you right now?",
    subtext: "If you could wave a magic wand...",
    options: [
      { value: "coaches", label: "Access to coaches who've actually built and exited event tech companies", emoji: "🎯" },
      { value: "community", label: "A tight-knit community of women in event tech who get it", emoji: "👯‍♀️" },
      { value: "accountability", label: "Accountability and structure — someone to keep me on track", emoji: "📋" },
      { value: "playbooks", label: "Proven playbooks and frameworks I can apply immediately", emoji: "📓" },
      { value: "connections", label: "Introductions to investors, partners, or potential acquirers", emoji: "🤝" },
    ],
  },
  {
    id: "commitment",
    type: "question" as const,
    number: 6,
    total: 7,
    heading: "How serious are you about making a change in the next 90 days?",
    subtext: "This program is for founders ready to move, not just learn.",
    options: [
      { value: "curious", label: "I'm curious but not sure I'm ready to commit", emoji: "🤔" },
      { value: "ready", label: "I'm ready — I just need the right support system", emoji: "✊" },
      { value: "urgent", label: "I needed this yesterday — I'm actively looking for help", emoji: "⚡" },
      { value: "all_in", label: "I'm all in — take my money and let's go", emoji: "🔥" },
    ],
  },
  {
    id: "investment",
    type: "question" as const,
    number: 7,
    total: 7,
    heading: "What would you invest monthly in a program that could change your trajectory?",
    subtext:
      "Think about the ROI: one closed deal, one successful raise, or a higher exit multiple pays for years of this.",
    options: [
      { value: "under200", label: "Under $200/month", emoji: "💵" },
      { value: "200to500", label: "$200 – $500/month", emoji: "💰" },
      { value: "500to1000", label: "$500 – $1,000/month", emoji: "💎" },
      { value: "1000plus", label: "$1,000+/month if the value is there", emoji: "🚀" },
    ],
  },
  {
    id: "capture",
    type: "capture" as const,
  },
  {
    id: "result",
    type: "result" as const,
  },
];

function getResultProfile(answers: Answer[]): {
  headline: string;
  description: string;
  score: number;
  archetype: string;
  color: string;
} {
  const challenge = answers.find((a) => a.questionId === "biggest_challenge")?.value;
  const stage = answers.find((a) => a.questionId === "stage")?.value;
  const commitment = answers.find((a) => a.questionId === "commitment")?.value;
  const stuckDuration = answers.find((a) => a.questionId === "pain_depth")?.value;

  let score = 50;
  if (commitment === "all_in") score += 25;
  else if (commitment === "urgent") score += 20;
  else if (commitment === "ready") score += 15;
  else score += 5;

  if (stuckDuration === "year") score += 15;
  else if (stuckDuration === "6plus") score += 10;
  else if (stuckDuration === "months") score += 5;

  if (stage === "scaling") score += 10;
  else if (stage === "growing") score += 8;
  else if (stage === "launched") score += 5;

  score = Math.min(score, 100);

  if (challenge === "exit" || stage === "scaling") {
    return {
      headline: "The Exit-Ready Founder",
      description:
        "You've built something real and you're thinking about what's next. Whether it's positioning for acquisition, understanding your valuation, or negotiating with buyers — you need coaches who've been through the exit process in event tech. You're not looking for theory. You're looking for someone who's done it.",
      score,
      archetype: "exit",
      color: "amber",
    };
  }

  if (challenge === "scaling" || stage === "growing") {
    return {
      headline: "The Growth-Stage Builder",
      description:
        "You've got traction and momentum, but scaling is a different game than starting. You need strategic guidance on hiring, systems, fundraising, and go-to-market that's specific to event tech. The right community and coaches could compress years of trial-and-error into months.",
      score,
      archetype: "growth",
      color: "purple",
    };
  }

  if (challenge === "lonely" || challenge === "direction") {
    return {
      headline: "The Solo Trailblazer",
      description:
        "You're building something meaningful but you're doing it alone. The biggest unlock for you isn't another course — it's a community of women who understand event tech, coaches who've walked this path, and accountability that keeps you moving forward even on the hard days.",
      score,
      archetype: "solo",
      color: "teal",
    };
  }

  return {
    headline: "The Emerging Innovator",
    description:
      "You're in the early stages of building something in event tech and you need the right foundation. Frameworks, validation, early customers, and a support system that understands this industry. The founders who succeed aren't the smartest — they're the ones who get the right help early.",
    score,
    archetype: "emerging",
    color: "violet",
  };
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];
  const progress = step.type === "question" ? (step.number / step.total) * 100 : 0;

  const handleAnswer = (value: string, label: string) => {
    if (step.type !== "question") return;
    const updated = [
      ...answers.filter((a) => a.questionId !== step.id),
      { questionId: step.id, value, label },
    ];
    setAnswers(updated);
    setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
  };

  const handleCapture = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setCurrentStep(steps.length - 1);
  };

  const result = getResultProfile(answers);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Progress Bar */}
      {step.type === "question" && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-500">
                Question {step.number} of {step.total}
              </span>
              <span className="text-xs font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        {/* Intro */}
        {step.type === "intro" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              2-minute assessment
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Are You Building Event Tech
              <span className="gradient-text"> Without a Safety Net?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4 leading-relaxed">
              Take this quick quiz to uncover what&apos;s really holding you back —
              and find out if you&apos;re a fit for the only accelerator built
              exclusively for women in event tech.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              No fluff. No generic advice. Just clarity on your next move.
            </p>
            <button
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105"
            >
              Find Out Where You Stand
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-400">
              <span>✓ Takes 2 minutes</span>
              <span>✓ 100% free</span>
              <span>✓ Personalized results</span>
            </div>
          </div>
        )}

        {/* Question Steps */}
        {step.type === "question" && (
          <div className="max-w-2xl mx-auto w-full">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {step.heading}
              </h2>
              <p className="text-gray-500">{step.subtext}</p>
            </div>
            <div className="space-y-3">
              {step.options.map((option) => {
                const selected = answers.find(
                  (a) => a.questionId === step.id
                )?.value === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value, option.label)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all hover:shadow-md group ${
                      selected
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-100 hover:border-primary/30 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{option.emoji}</span>
                      <span
                        className={`font-medium text-sm sm:text-base ${
                          selected
                            ? "text-primary"
                            : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected && (
                        <svg
                          className="w-5 h-5 text-primary ml-auto shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 mx-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>
        )}

        {/* Email Capture */}
        {step.type === "capture" && !submitted && (
          <div className="max-w-lg mx-auto w-full text-center">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Your results are ready!
            </h2>
            <p className="text-gray-500 mb-8">
              Enter your details to see your personalized founder profile and
              find out if HerEventTech is right for you.
            </p>
            <form onSubmit={handleCapture} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your event tech company"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-purple-200 hover:shadow-xl mt-2"
              >
                See My Results
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                We&apos;ll never spam you. Unsubscribe anytime.
              </p>
            </form>
          </div>
        )}

        {/* Results */}
        {step.type === "result" && submitted && (
          <div className="max-w-2xl mx-auto w-full">
            {/* Score Circle */}
            <div className="text-center mb-10">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#f3e8ff"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="8"
                    strokeDasharray={`${(result.score / 100) * 339.3} 339.3`}
                    className="progress-ring"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {result.score}
                  </span>
                  <span className="text-xs text-gray-500">READINESS</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {firstName}, you are...
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {result.headline}
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                {result.description}
              </p>
            </div>

            {/* Answer Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">
                Your Answers at a Glance
              </h3>
              <div className="space-y-3">
                {answers.map((answer) => {
                  const question = steps.find(
                    (s) => s.id === answer.questionId
                  );
                  if (!question || question.type !== "question") return null;
                  return (
                    <div
                      key={answer.questionId}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="text-primary font-bold shrink-0">
                        Q{question.number}:
                      </span>
                      <span className="text-gray-600">{answer.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-white rounded-2xl border-2 border-primary/20 p-6 sm:p-8 mb-8">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                What Happens Next?
              </h3>
              <div className="space-y-4 mt-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      We&apos;ll review your responses
                    </p>
                    <p className="text-sm text-gray-500">
                      Our team looks at every submission personally.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      You&apos;ll get a personal email within 48 hours
                    </p>
                    <p className="text-sm text-gray-500">
                      With tailored recommendations based on your profile.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Early access when Cohort 1 opens
                    </p>
                    <p className="text-sm text-gray-500">
                      You&apos;ll be first in line — before we open to the public.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share CTA */}
            <div className="gradient-hero rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Know another woman building in event tech?
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Share this quiz and help us find our founding cohort.
              </p>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "HerEventTech — Are you building event tech without a safety net?",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-bold hover:bg-amber-50 transition-all"
              >
                Share This Quiz
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
