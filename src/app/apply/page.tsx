"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    stage: "",
    track: "",
    tier: "",
    revenue: "",
    description: "",
    goals: "",
    hearAbout: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface pt-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600"
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
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Application Received!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for applying to HerEventTech. We review applications on a
            rolling basis and will be in touch within 48 hours. In the meantime,
            keep building cool things.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply for
            <span className="gradient-text"> Cohort 1</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We&apos;re looking for ambitious female founders building in event
            technology. Tell us about you and your company.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse" />
            Limited to 20 founders per cohort
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* About You */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">About You</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Your Company */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Your Company
            </h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Stage *
                  </label>
                  <select
                    name="stage"
                    required
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-600"
                  >
                    <option value="">Select stage</option>
                    <option>Idea / Pre-product</option>
                    <option>MVP / Beta</option>
                    <option>Early Revenue ($0 - $500K ARR)</option>
                    <option>Growth ($500K - $2M ARR)</option>
                    <option>Scale ($2M+ ARR)</option>
                    <option>Exploring Exit / Acquisition</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Current Revenue
                  </label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-600"
                  >
                    <option value="">Select range</option>
                    <option>Pre-revenue</option>
                    <option>$0 - $50K ARR</option>
                    <option>$50K - $250K ARR</option>
                    <option>$250K - $1M ARR</option>
                    <option>$1M - $5M ARR</option>
                    <option>$5M+ ARR</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Describe your event tech product *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What does your product do? Who is it for? What problem does it solve?"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Program Preferences */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Program Preferences
            </h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Track *
                  </label>
                  <select
                    name="track"
                    required
                    value={formData.track}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-600"
                  >
                    <option value="">Select track</option>
                    <option>Thrive (Scale & Grow)</option>
                    <option>Exit (Acquisition & Exit)</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Tier *
                  </label>
                  <select
                    name="tier"
                    required
                    value={formData.tier}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-600"
                  >
                    <option value="">Select tier</option>
                    <option>Founder ($497/mo)</option>
                    <option>Scale ($997/mo)</option>
                    <option>Exit ($2,497/mo)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  What are your top 3 goals for the next 12 weeks? *
                </label>
                <textarea
                  name="goals"
                  required
                  rows={3}
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="e.g., Close first enterprise deal, raise seed round, prepare for acquisition..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  How did you hear about us?
                </label>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-600"
                >
                  <option value="">Select</option>
                  <option>Social media</option>
                  <option>Referral from another founder</option>
                  <option>Industry event / conference</option>
                  <option>Allie Magyar</option>
                  <option>Rachel Stephan</option>
                  <option>Vinnu Deshetty</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105"
            >
              Submit Application
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
            <p className="text-sm text-gray-500 mt-4">
              Applications are reviewed within 48 hours. Cohort 1 starts May 2026.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
