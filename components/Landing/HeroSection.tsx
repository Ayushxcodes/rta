import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-black py-10 md:py-0">
      <div className="container mx-auto flex min-h-screen items-center px-6">
        {/* Grid wrapper */}
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* LEFT: Text Content */}
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Trusted Registrar & Transfer Agent Services
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
              Ensuring Accuracy, Compliance & Investor Confidence
            </h2>

            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              We provide end-to-end Registrar & Transfer Agent (RTA) services for
              listed and unlisted companies, mutual funds, and fixed income
              instruments—backed by robust technology, regulatory expertise, and
              investor-first processes.
            </p>

            {/* Bullet points */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✔</span>
                <span>SEBI-Compliant Operations</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✔</span>
                <span>Secure & Technology-Driven</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✔</span>
                <span>Trusted by Corporates & Financial Institutions</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
              >
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/hero1.jpg" // replace with your image
              alt="Registrar & Transfer Agent Services"
              width={520}
              height={520}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
