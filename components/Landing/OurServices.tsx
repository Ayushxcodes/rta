export default function OurServices() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
            Empowering your financial success with a comprehensive range of
            specialized expertise, tailored to meet your unique needs under one
            roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Assurance */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">🧾 Assurance</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Statutory & internal audits</li>
              <li>• Accounting & financial reporting</li>
              <li>• Attestation services</li>
              <li>• Accounting advisory & support</li>
              <li>• Risk assessment & controls</li>
            </ul>
          </div>

          {/* Direct Tax */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">📑 Direct Tax</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Tax planning & advisory</li>
              <li>• Transfer pricing solutions</li>
              <li>• Inbound & outbound taxation</li>
              <li>• Tax compliance & filings</li>
              <li>• Litigation & assessment support</li>
            </ul>
          </div>

          {/* GST */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">🧮 GST</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• GST registration & compliance</li>
              <li>• Return filing & reconciliations</li>
              <li>• GST outsourcing services</li>
              <li>• Advisory & impact analysis</li>
              <li>• GST audit & assessments</li>
            </ul>
          </div>

          {/* Advisory, Certification & Secretarial */}
          <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 transition hover:shadow-lg">
            <h3 className="mb-4 text-xl font-bold">
              📊 Advisory, Certification & Secretarial
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Transaction advisory & valuations</li>
              <li>• Mergers & acquisitions support</li>
              <li>• CA certifications & reports</li>
              <li>• Secretarial compliance & audits</li>
              <li>• Due diligence & governance advisory</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
