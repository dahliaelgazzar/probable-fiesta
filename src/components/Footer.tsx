import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">
                Her<span className="text-primary-light">EventTech</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              The premier accelerator for female event technology founders. We
              help you build, scale, and thrive &mdash; or make a powerful exit
              on your terms.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Program</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#program" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#experts" className="hover:text-white transition-colors">
                  Expert Coaches
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-white transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Portal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/portal" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/portal/sessions" className="hover:text-white transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/portal/workbooks" className="hover:text-white transition-colors">
                  Workbooks
                </Link>
              </li>
              <li>
                <Link href="/portal/accountability" className="hover:text-white transition-colors">
                  Accountability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HerEventTech. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built by women, for women in event tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
