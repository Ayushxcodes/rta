export default function OurServicesPage() {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-sky-50 py-24 border-b-2 border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl text-gray-800">
            Pioneering Your Business Success through Seamless Solutions
          </h1>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
            Discover excellence with TrustLink RTA’s tailored services. From
            efficient company formation to meticulous regulatory compliance,
            our comprehensive solutions empower your business journey with
            expertise, precision, and strategic guidance.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-20 border-b-2 border-gray-200">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Maintenance / Securities",
              desc: "Efficiently manage and secure your securities with robust maintenance services, ensuring seamless record-keeping and regulatory compliance.",
              icon: "🛡️"
            },
            {
              title: "Consolidation / Splits",
              desc: "Optimize share portfolios effortlessly with accurate consolidation and split services, providing clarity and efficiency in holdings.",
              icon: "📊"
            },
            {
              title: "NSDL / CDSL",
              desc: "Seamless dematerialisation, rematerialisation, and ISIN activation for efficient share management and compliance.",
              icon: "🏦"
            },
            {
              title: "Back Security & Unit Security",
              desc: "From buybacks to delisting, we manage complex corporate actions smoothly and securely.",
              icon: "🔄"
            },
            {
              title: "Benefits",
              desc: "Empower shareholders with timely benefits management, including call notices and enhanced investor communication.",
              icon: "📢"
            },
            {
              title: "Arrangement",
              desc: "Expert handling of AGM, EGM, postal ballots, and attendance slips for seamless corporate events.",
              icon: "📅"
            },
            {
              title: "Issues of Shares / Securities",
              desc: "Support business growth through IPOs, bonus issues, rights issues, and efficient warrant processing.",
              icon: "📈"
            },
            {
              title: "Rectification",
              desc: "Ensure accuracy by resolving discrepancies, eliminating fractions, and addressing investor grievances.",
              icon: "🔧"
            },
            {
              title: "ESOP",
              desc: "Enhance employee engagement with seamless ESOP management, including lock-in and partly paid securities.",
              icon: "💼"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="mb-4 text-xl font-semibold text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why TrustLink RTA */}
      <div className="bg-sky-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Why TrustLink RTA
          </h2>
          <p className="mb-14 text-center text-lg text-gray-700 leading-relaxed border-b border-gray-300 pb-6">
            Revolutionizing Regulatory Compliance with Next-Gen Digital
            Innovation and Automation
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fully Digital & Automated",
                desc: "Digitized processes eliminate manual work, ensuring faster, error-free compliance.",
                icon: "🤖"
              },
              {
                title: "Next-Gen Technology",
                desc: "Future-ready platform designed to adapt to evolving regulatory landscapes.",
                icon: "🚀"
              },
              {
                title: "Company Login",
                desc: "Secure, role-based access ensures data confidentiality and controlled authorization.",
                icon: "🔐"
              },
              {
                title: "Mobile App Accessibility",
                desc: "Manage regulatory affairs anytime, anywhere with TrustLink’s mobile app.",
                icon: "📱"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-200"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center border-t border-gray-300 pt-8">
            <button className="rounded-full bg-blue-900 px-10 py-3 font-semibold text-white hover:bg-blue-800 transition-colors duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
