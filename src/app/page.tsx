import Link from "next/link";

const stats = [
  { value: "$31B+", label: "Event Tech Market Size" },
  { value: "12%", label: "Female-Founded Event Tech" },
  { value: "3x", label: "Better ROI w/ Diverse Founders" },
  { value: "100%", label: "Our Commitment to You" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Thrive Track",
    description:
      "For founders ready to scale. Master product-market fit, fundraising, and go-to-market strategies specific to event technology.",
    features: [
      "Growth strategy workshops",
      "Fundraising playbook",
      "Product roadmap optimization",
      "Customer acquisition frameworks",
    ],
  },
  {
    icon: "💰",
    title: "Exit Track",
    description:
      "For founders exploring acquisition or exit. Learn valuation, deal structure, and how to position your company for maximum value.",
    features: [
      "Valuation masterclass",
      "M&A preparation",
      "Due diligence readiness",
      "Negotiation strategies",
    ],
  },
  {
    icon: "🤝",
    title: "Accountability Pods",
    description:
      "Small groups of 4-5 founders who meet weekly, set goals, and hold each other accountable. Real relationships, real progress.",
    features: [
      "Weekly pod check-ins",
      "Goal setting & tracking",
      "Peer mentorship",
      "Quarterly reviews",
    ],
  },
];

const experts = [
  {
    name: "Allie Magyar",
    role: "Thrive Coach",
    company: "Former CEO, Hubb (acq. by Bizzabo)",
    bio: "Allie built Hubb from the ground up into one of the most beloved event management platforms in the industry, leading it through a successful acquisition by Bizzabo. She brings firsthand founder-to-exit experience in event tech.",
    specialties: [
      "Scaling event tech companies",
      "Product-led growth",
      "Fundraising & acquisition",
      "Building high-performance teams",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Rachel Stephan",
    role: "Growth & Marketing Coach",
    company: "Founder, Snöball",
    bio: "Rachel is a pioneer in event marketing technology and word-of-mouth marketing for events. She helps founders master the art of marketing their tech to event professionals and building viral growth loops.",
    specialties: [
      "Event marketing strategy",
      "Community-led growth",
      "Brand positioning",
      "Partnership development",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Vinnu Deshetty",
    role: "Innovation & Scale Coach",
    company: "Founder & CEO, EVA Event Tech Hub",
    bio: "Vinnu is at the forefront of event technology innovation, building EVA as the connected ecosystem for the events industry. She brings deep expertise in platform strategy, partnerships, and ecosystem thinking.",
    specialties: [
      "Platform & ecosystem strategy",
      "Industry partnerships",
      "Innovation frameworks",
      "Global market expansion",
    ],
    gradient: "from-teal-500 to-emerald-500",
  },
];

const programIncludes = [
  {
    icon: "📺",
    title: "Live Sessions",
    description: "Bi-weekly live coaching calls with our expert coaches. Hot seats, Q&A, and real-time strategy sessions.",
  },
  {
    icon: "🎥",
    title: "On-Demand Library",
    description: "Full library of recorded masterclasses, workshops, and founder stories you can watch anytime.",
  },
  {
    icon: "📓",
    title: "Workbooks & Templates",
    description: "Battle-tested frameworks, pitch decks, financial models, and strategic planning workbooks.",
  },
  {
    icon: "👥",
    title: "Accountability Pods",
    description: "Matched with 4-5 founders at your stage. Weekly check-ins, goal tracking, and peer support.",
  },
  {
    icon: "🌐",
    title: "Member Portal",
    description: "Your command center. Track progress, access resources, connect with your pod, and manage your journey.",
  },
  {
    icon: "🎤",
    title: "Founder Spotlights",
    description: "Monthly showcase sessions where members present progress and get feedback from the entire community.",
  },
];

const testimonialPlaceholders = [
  {
    quote:
      "This program gave me the clarity and confidence to raise my Series A. The accountability pod alone was worth 10x the investment.",
    name: "Future Founder",
    title: "Event Tech CEO",
  },
  {
    quote:
      "Having coaches who actually built and exited event tech companies changed everything. They don't just teach theory — they've lived it.",
    name: "Future Founder",
    title: "Event Tech CTO",
  },
  {
    quote:
      "My pod kept me on track when I wanted to give up. Six months later, we closed our first enterprise deal.",
    name: "Future Founder",
    title: "Event Tech Founder",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
            Applications Open for Cohort 1
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Women Build
            <br />
            <span className="text-amber-300">Event Tech</span>
            <br />
            That Matters
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            The only accelerator built exclusively for female event technology
            founders. Expert coaching from those who&apos;ve done it, accountability
            that drives results, and a community that lifts you up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-amber-50 transition-all shadow-2xl hover:shadow-white/25 hover:scale-105"
            >
              Apply for Cohort 1
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
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Why This Program Exists */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Event Tech Industry Needs More
              <span className="gradient-text"> Women at the Helm</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Women make up over 75% of event professionals but lead fewer than
              12% of event tech companies. We&apos;re changing that — one founder at
              a time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Build With Confidence
              </h3>
              <p className="text-gray-600">
                Stop second-guessing. Get expert validation, strategic
                frameworks, and the confidence to make bold moves.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Never Build Alone
              </h3>
              <p className="text-gray-600">
                Join a tight-knit community of women who understand the unique
                challenges of building in event tech.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-teal-50 border border-teal-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Thrive or Exit Strong
              </h3>
              <p className="text-gray-600">
                Whether you&apos;re scaling to $10M ARR or positioning for
                acquisition, we meet you where you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section id="program" className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Two Tracks. One Mission.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the track that matches your journey. Both include full
              access to our expert coaches, community, and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-100/50 hover:shadow-xl hover:shadow-purple-100 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 shrink-0"
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
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete ecosystem designed around how female founders actually
              build and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programIncludes.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Coaches */}
      <section id="experts" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Learn From Women Who&apos;ve
              <span className="text-amber-400"> Built It</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our coaches aren&apos;t theorists. They&apos;re founders who built,
              scaled, and exited event tech companies. They&apos;ve been where you
              are.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all group"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${expert.gradient}`}
                />
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${expert.gradient} flex items-center justify-center text-2xl font-bold text-white mb-4`}
                  >
                    {expert.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-amber-400 font-medium text-sm mb-1">
                    {expert.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {expert.company}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {expert.bio}
                  </p>
                  <div className="space-y-2">
                    {expert.specialties.map((s) => (
                      <span
                        key={s}
                        className="inline-block mr-2 mb-2 px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Founders Will Say
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Spots reserved for Cohort 1 success stories. This could be you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialPlaceholders.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-purple-50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Something That Matters?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Cohort 1 is limited to 20 founders. Apply now to secure your spot
            and join the movement of women reshaping event technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-amber-50 transition-all shadow-2xl hover:scale-105"
            >
              Apply for Cohort 1
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              See Pricing Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
