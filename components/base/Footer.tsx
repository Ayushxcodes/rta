export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
                TRUSTLINK
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A trusted Registrar & Transfer Agent delivering compliant,
              technology-driven investor services with transparency and
              accuracy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  Corporate RTA Services
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Mutual Fund RTA Services
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Fixed Deposit & Debt Services
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Compliance & Regulatory Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Investor Services
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Email: info@yourcompany.com</li>
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>Office: India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} [Your Company Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
