export default function AboutUsPage() {
  return (
    <section className="bg-white text-black">
      {/* Hero / Page Header */}
      <div className="bg-sky-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl text-gray-800">
            About Us
          </h1>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
            Trustlink Investor Services Private Limited
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Trustlink Investor Services Private Limited</strong> is a
            SEBI-registered Registrar and Share Transfer Agent (Category I)
            bearing Registration No.{" "}
            <span className="font-semibold">INR000004510</span>.
          </p>

          <p>
            We provide end-to-end Registrar and Transfer Agent services to issuer
            companies and investors, strictly in accordance with the Securities
            and Exchange Board of India (SEBI) regulations, circulars, and
            applicable statutory requirements.
          </p>

          <p>
            Our role is to act as a reliable interface between issuer companies
            and investors by ensuring accurate maintenance of records, timely
            processing of investor requests, and efficient handling of
            corporate actions, while maintaining high standards of governance,
            compliance, and operational integrity.
          </p>
        </div>
      </div>

      {/* Regulatory Status */}
      <div className="bg-slate-50 py-16 border-t border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Regulatory Status
          </h2>

          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm border border-gray-200 text-gray-700">
            <ul className="space-y-4">
              <li>
                <strong>SEBI Registration:</strong> Registrar and Share Transfer
                Agent – Category I
              </li>
              <li>
                <strong>Registration Number:</strong> INR000004510
              </li>
              <li>
                Trustlink Investor Services operates under the regulatory
                framework prescribed by SEBI and complies with all applicable
                laws, guidelines, and reporting obligations relevant to
                Registrar and Transfer Agents.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted and reliable Registrar and Share Transfer Agent,
              recognized for regulatory compliance, operational accuracy, and
              investor-centric service delivery.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Deliver Registrar and Transfer Agent services in strict
                adherence to SEBI regulations and statutory requirements
              </li>
              <li>
                Ensure accurate maintenance of investor records and timely
                processing of service requests
              </li>
              <li>
                Provide transparent, efficient, and responsive investor
                servicing mechanisms
              </li>
              <li>
                Uphold the highest standards of data security, confidentiality,
                and corporate governance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
