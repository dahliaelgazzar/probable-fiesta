import Link from "next/link";

const plans = [
  {
    name: "Founder",
    price: "$497",
    period: "/month",
    annualPrice: "$4,497",
    annualSavings: "Save $1,467",
    description:
      "For early-stage founders building their first event tech product. Get the frameworks, community, and accountability to launch.",
    features: [
      "Bi-weekly live group coaching sessions",
      "Full on-demand session library",
      "All workbooks & templates",
      "Accountability pod (5 founders)",
      "Member portal access",
      "Community Slack channel",
      "Monthly founder spotlight",
    ],
    notIncluded: [
      "1:1 coach office hours",
      "Investor introductions",
      "Custom exit planning",
    ],
    cta: "Apply Now",
    popular: false,
    gradient: "from-gray-50 to-white",
    borderColor: "border-gray-200",
  },
  {
    name: "Scale",
    price: "$997",
    period: "/month",
    annualPrice: "$8,997",
    annualSavings: "Save $2,967",
    description:
      "For growth-stage founders scaling revenue and team. Includes everything in Founder plus direct coach access and strategic introductions.",
    features: [
      "Everything in Founder, plus:",
      "Weekly live coaching sessions",
      "Monthly 1:1 office hours with coaches",
      "Investor & partner introductions",
      "Priority hot seat sessions",
      "Quarterly business review with coach",
      "Private Slack channel with coaches",
      "Access to both Thrive & Exit tracks",
    ],
    notIncluded: ["Custom exit planning"],
    cta: "Apply Now",
    popular: true,
    gradient: "from-purple-50 to-violet-50",
    borderColor: "border-primary",
  },
  {
    name: "Exit",
    price: "$2,497",
    period: "/month",
    annualPrice: "$22,497",
    annualSavings: "Save $7,467",
    description:
      "For founders actively preparing for acquisition or exit. White-glove support with custom exit strategy and buyer introductions.",
    features: [
      "Everything in Scale, plus:",
      "Custom exit strategy roadmap",
      "Bi-weekly 1:1 with Allie Magyar",
      "Due diligence preparation support",
      "Buyer/acquirer introductions",
      "Valuation assessment & optimization",
      "Legal & financial advisor referrals",
      "Post-exit transition planning",
      "Negotiation support & coaching",
    ],
    notIncluded: [],
    cta: "Apply Now",
    popular: false,
    gradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-300",
  },
];

const faqs = [
  {
    q: "How long is the program?",
    a: "Each cohort runs for 12 weeks, with the option to continue as an ongoing member. Most founders stay for 2-3 cohorts as they progress through different stages.",
  },
  {
    q: "Can I switch tiers?",
    a: "Absolutely. You can upgrade or downgrade at any time. Many founders start with Founder and move to Scale as their business grows. If you're approaching an exit, the Exit tier can be added at any point.",
  },
  {
    q: "What if I'm pre-revenue?",
    a: "The Founder tier is specifically designed for pre-revenue and early-stage founders. You'll get frameworks to validate your idea, find product-market fit, and start generating revenue.",
  },
  {
    q: "How are accountability pods formed?",
    a: "We match pods based on stage, track (Thrive vs Exit), and complementary skills. Each pod has 4-5 founders who meet weekly. We re-evaluate pod composition each cohort.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 30-day money-back guarantee. If you attend sessions, engage with your pod, and do the work for 30 days and don't see value, we'll refund your investment in full.",
  },
  {
    q: "Do I need to be in event tech specifically?",
    a: "Yes. This program is laser-focused on the event technology ecosystem — registration, engagement, analytics, venue tech, hybrid/virtual platforms, event marketing tech, and adjacent categories.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Invest in Your
            <span className="gradient-text"> Founder Journey</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the level of support that matches where you are today. Every
            tier includes our core program — coaching, community, accountability,
            and resources.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 ${plan.borderColor} bg-gradient-to-b ${plan.gradient} overflow-hidden transition-all hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-xs font-bold py-1.5">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    or {plan.annualPrice}/year{" "}
                    <span className="text-green-600 font-medium">
                      ({plan.annualSavings})
                    </span>
                  </p>
                  <Link
                    href="/apply"
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-purple-200"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
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
                          <span className="text-sm text-gray-700">{f}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-gray-300 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Prop */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-green-800 font-medium text-sm">
                30-day money-back guarantee on all plans. No questions asked.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              How This Compares
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-300 line-through">
                  $25K+
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Traditional Accelerator Equity Cost
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-300 line-through">
                  $500/hr
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Startup Consultant Hourly Rate
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">$497</p>
                <p className="text-sm text-gray-500 mt-1">
                  HerEventTech Starting Price/mo
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-sm max-w-lg mx-auto">
              We take zero equity. You keep 100% of your company. Our success is
              measured by your success — not by ownership stakes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Cohort 1?
          </h2>
          <p className="text-white/90 mb-8">
            Limited to 20 founders. Applications are reviewed on a rolling basis.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-amber-50 transition-all shadow-2xl hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
