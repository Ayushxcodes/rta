export default function OurServices() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Our Core RTA Services
          </span>
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Comprehensive Registrar & Transfer Agent Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
            End-to-end RTA services designed to ensure accuracy, compliance, and
            seamless investor experiences across asset classes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Corporate RTA Services */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">🏢 Corporate RTA Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Shareholder record maintenance</li>
              <li>• Share transfer & transmission</li>
              <li>• Dematerialization & rematerialization</li>
              <li>• Corporate actions (bonus, split, rights, dividend)</li>
              <li>• Investor grievance handling</li>
            </ul>
          </div>

          {/* Mutual Fund RTA Services */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">📊 Mutual Fund RTA Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Investor onboarding & KYC processing</li>
              <li>• Transaction processing & reporting</li>
              <li>• Unit holder servicing</li>
              <li>• NAV-related data processing</li>
              <li>• Regulatory & compliance reporting</li>
            </ul>
          </div>

          {/* Fixed Deposit & Debt Instrument Services */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">
              💼 Fixed Deposit & Debt Instrument Services
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Fixed deposit accounting & servicing</li>
              <li>• Interest & maturity processing</li>
              <li>• Redemption & renewal management</li>
              <li>• Investor communication & reporting</li>
            </ul>
          </div>

          {/* Compliance & Regulatory Support */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">
              🛡 Compliance & Regulatory Support
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• SEBI-compliant processes</li>
              <li>• Periodic audits & reconciliations</li>
              <li>• Statutory and regulatory reporting</li>
              <li>• Data security & confidentiality controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
