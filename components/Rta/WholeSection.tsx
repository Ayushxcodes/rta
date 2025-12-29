export default function RTAServices() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 text-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-100 to-blue-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
            TrustLink RTA is your one-stop solution for a spectrum of services,
            encompassing seamless company formation, meticulous regulatory
            compliance, and strategic advisory. Elevate your business with our
            comprehensive RTA services, ensuring a smooth and successful
            trajectory from inception to sustained growth.
          </p>

          <div className="mt-8">
            <button className="rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-3 text-white font-semibold hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Highly Dedicated RTA Services Providing Company in India
        </h2>
        <p className="mx-auto max-w-5xl text-center text-gray-700 leading-relaxed text-lg">
          TrustLink RTA has expanded traditional securities through innovation in
          response to customer needs. We provide highly relevant compliance
          solutions by understanding the unique situations and targets of our
          clients. Our commitment to innovation in RTA services aligns with
          industry standards, emphasizing the importance of staying at the
          forefront of technological advancements.
        </p>
      </div>

      {/* About RTA */}
      <div className="bg-white py-16 shadow-inner">
        <div className="container mx-auto px-6 space-y-6 text-gray-700 max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed">
            As a leading RTA organization, TrustLink RTA boasts a professional
            infrastructure capable of handling all associated tasks related to
            Registrar & Transfer Agent Services. Our comprehensive range of
            facilities ensures that clients receive the most relevant and
            valuable services.
          </p>
          <p className="text-lg leading-relaxed">
            TrustLink RTA is actively involved in managing critical administration
            tasks related to securities on behalf of issuers, including ISIN
            generation, dematerialization through NSDL/CDSL, and corporate
            actions.
          </p>
          <p className="text-lg leading-relaxed">
            We have earned a reputation as one of the most reliable Registrar
            and Share Transfer Agents in India, serving clients across multiple
            sectors with a dedicated and experienced team.
          </p>
        </div>
      </div>

      {/* RTA Services List */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          RTA Services for Unlisted Companies and Professionals
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Security Dematerialization (NSDL & CDSL)",
              desc: "Transform physical certificates into electronic format via dematerialization with NSDL and CDSL depositories for secure ownership.",
              icon: "🔒"
            },
            {
              title: "Payout of Dividend / Interest via ECS",
              desc: "Receive dividends and interest seamlessly through ECS transfers, minimizing risks and ensuring SEBI-compliant payouts.",
              icon: "💰"
            },
            {
              title: "Investor Record Keeping & Securities Transfer",
              desc: "Efficient management of investor records, transfers, purchases, sales, and personal detail updates.",
              icon: "📊"
            },
            {
              title: "Revalidation of Dividend",
              desc: "Streamline dividend revalidation through dematerialization and secure demat account ownership.",
              icon: "🔄"
            },
            {
              title: "Inquiry Handling",
              desc: "Prompt inquiry resolution through phone, mail, online portals, fax, and helpline services.",
              icon: "📞"
            },
            {
              title: "Investor Regulatory Reporting",
              desc: "Comprehensive investor data management ensuring accurate regulatory reporting and compliance.",
              icon: "📋"
            },
            {
              title: "Reporting, Mailing & Investor Meetings",
              desc: "End-to-end reporting, mailing services, and coordination of investor meetings.",
              icon: "📧"
            },
            {
              title: "Share Transfer Certificate",
              desc: "Facilitate physical share transfer through SH-4 form submission and official register updates.",
              icon: "📄"
            },
            {
              title: "Duplicate Share Certificate",
              desc: "Seamless assistance for obtaining duplicate share certificates with required documentation.",
              icon: "📑"
            },
            {
              title: "Reconciliation of Share Capital (PAS-6)",
              desc: "Half-yearly reconciliation and PAS-6 compliance for unlisted public companies.",
              icon: "⚖️"
            },
            {
              title: "IEPF Claim Settlement",
              desc: "Assistance in reclaiming unclaimed dividends and shares using Form IEPF-5.",
              icon: "🏛️"
            },
            {
              title: "Name / Signature / Address Changes",
              desc: "Support for name change, transmission, transposition, and signature/address updates.",
              icon: "✏️"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Sections */}
      
     
    </section>
  );
}
