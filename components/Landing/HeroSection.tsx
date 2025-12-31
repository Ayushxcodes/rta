export default function HeroSection() {
  return (
    <section id="home" className="relative bg-white text-black py-10 md:py-0">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        {/* Text Content */}
        <div className="max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Seamless Registrar & Transfer Agent Solutions
          </h1>

          <h2 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
            End-to-end services for listed and unlisted companies, mutual funds,
            and fixed-income instruments
          </h2>

          <p className="mb-8 text-lg text-gray-600 sm:text-xl">
            We offer comprehensive Registrar & Transfer Agent (RTA) services
            anchored in strong regulatory expertise, secure technology, and
            transparent investor servicing—ensuring accuracy, compliance, and
            long-term confidence.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
            >
              Write to Us
            </a>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
