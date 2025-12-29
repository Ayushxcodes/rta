import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* LEFT: Image */}
          <div className="relative flex justify-center md:justify-start">
            <Image
              src="/hero2.svg" // replace with your image
              alt="About Us"
              width={520}
              height={520}
              className="rounded-xl object-contain"
              priority
            />
          </div>

          {/* RIGHT: Content */}
          <div className="max-w-3xl">
            {/* Section Label */}
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
              About Us
            </span>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Your Reliable Partner in Shareholder & Investor Services
            </h2>

            {/* Content */}
            <p className="mb-6 text-lg text-gray-600 sm:text-xl">
              At <span className="font-semibold text-gray-900">TrustLink</span>, we
              specialize in delivering comprehensive Registrar & Transfer Agent
              (RTA) solutions that simplify complex investor servicing and
              compliance requirements.
            </p>

            <p className="text-lg text-gray-600 sm:text-xl">
              With deep domain knowledge and a strong focus on accuracy, we help
              companies maintain transparent, efficient, and compliant investor
              records. Our systems, processes, and people are aligned to meet the
              evolving needs of corporates, mutual funds, issuers, and investors
              across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
