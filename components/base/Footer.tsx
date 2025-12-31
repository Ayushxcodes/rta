export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Trustlink Investor Services Private Limited
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Registrar and Share Transfer Agent – Category I <br />
              SEBI Registration No.: <span className="font-medium text-slate-300">
                INR000004510
              </span>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@trustlinkinvestorservices.com"
                  className="transition hover:text-white"
                >
                  info@trustlinkinvestorservices.com
                </a>
              </li>
              <li>Phone: +91 9910118347</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Registered Office
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Pratap Bhawan, 312–314, <br />
              Bahadur Shah Zafar Marg, <br />
              Vikram Nagar, New Delhi, <br />
              Delhi – 110002
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Regulatory Status
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Trustlink Investor Services Private Limited is registered with
              SEBI as a Registrar and Share Transfer Agent (Category I) and
              operates in accordance with applicable regulatory requirements.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Trustlink Investor Services Private Limited.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
