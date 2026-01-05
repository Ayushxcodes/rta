export default function HeroSection() {
  return (
    <section id="home" className="relative bg-white text-black py-10 md:py-20">
      <div className="container mx-auto flex px-6">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Seamless Registrar & Transfer Agent Solutions
          </h1>

         

          <p className="mb-8 text-lg text-gray-600 sm:text-xl">
            We offer comprehensive Registrar & Transfer Agent (RTA) services
            anchored in strong regulatory expertise, secure technology, and
            transparent investor servicing—ensuring accuracy, compliance, and
            long-term confidence.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:grievance@trustlinkinvestor.com"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
            >
              Write to Us
            </a>
            <a
              href="https://calendly.com/grievance-trustlinkinvestor/30min"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img 
            src="/trustlink_homepage.png" 
            alt="Registrar & Transfer Agent Solutions" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
