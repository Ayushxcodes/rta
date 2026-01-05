export default function OurServicesPage() {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-sky-50 py-16 border-b-2 border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl text-gray-800">
            Registrar and Share Transfer Agent Services
          </h1>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
            Comprehensive RTA services delivered strictly in accordance with
            SEBI regulations and applicable statutory requirements.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Securities Transfer & Holding Management",
              icon: "📂",
              points: [
                "Processing of transfer of securities in physical form",
                "Recording change in form of holding (physical to electronic)",
                "Consolidation of holdings",
                "Transposition of holdings",
                "Transmission of holdings"
              ]
            },
            {
              title: "Dematerialisation & Rematerialisation",
              icon: "🏦",
              points: [
                "Processing of dematerialisation requests",
                "Processing of rematerialisation requests",
                "Maintenance of Demat / Remat request forms and records"
              ]
            },
            {
              title: "Investor Record Maintenance",
              icon: "🗂️",
              points: [
                "Recording movement of investor holdings",
                "Maintenance of investor master data",
                "Upkeep of specimen signatures and basic investor information",
                "Maintenance of Register of Members"
              ]
            },
            {
              title: "Change Requests & Mandates",
              icon: "🔁",
              points: [
                "Recording change of address",
                "Updating bank mandates",
                "Processing ECS / electronic payment requests"
              ]
            },
            {
              title: "Certificates, Nomination & Legal Documentation",
              icon: "📜",
              points: [
                "Issue of duplicate share certificates",
                "Registration of nomination",
                "Verification of Power of Attorney",
                "Succession-related documents",
                "Other statutory legal documents"
              ]
            },
            {
              title: "Investor Servicing & Communication",
              icon: "📞",
              points: [
                "Providing investor information at service counters",
                "Handling queries via written communication, phone, and email",
                "Processing and resolution of investor service requests"
              ]
            },
            {
              title: "Corporate Benefits & Payout Services",
              icon: "💰",
              points: [
                "Disbursement of dividends",
                "Disbursement of interest",
                "Redemption proceeds",
                "Disbursement of non-cash corporate benefits"
              ]
            },
            {
              title: "Statutory Records & Documentation",
              icon: "📑",
              points: [
                "Maintenance of inward and outward correspondence records",
                "Transfer deeds and allotment registers",
                "Register of Members",
                "Undelivered / returned security documents",
                "Other statutory registers and returns"
              ]
            },
            {
              title: "MIS & Reporting Services",
              icon: "📊",
              points: [
                "Periodic statistical reports to issuer companies",
                "Category-wise pattern of holdings",
                "Geographical distribution of holders / holdings",
                "MIS support for management and compliance"
              ]
            },
            {
              title: "Call Payments & Endorsements",
              icon: "✍️",
              points: [
                "Processing of call payments",
                "Endorsements related to securities"
              ]
            },
            {
              title: "Corporate Actions & Special Activities",
              icon: "🔄",
              points: [
                "Buy-backs",
                "Open offers",
                "Conversion",
                "Sub-division",
                "Exchange",
                "Redemption"
              ]
            }
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
            >
              <div className="text-3xl mb-3 text-center">{service.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-center text-gray-800">
                {service.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
