import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="contact" className="bg-slate-50 py-20 text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* LEFT: All Content */}
          <div className="max-w-3xl">
            {/* Section Header */}
            <div className="mb-16">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
                Why Choose Us
              </span>
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Built on Trust, Technology & Transparency
              </h2>
              <p className="text-lg text-gray-600 sm:text-xl">
                We combine regulatory knowledge with automation to reduce operational
                risk and enhance investor confidence.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              
              {/* Item */}
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="text-green-500 text-xl">✔</span>
                <p className="font-medium">
                  SEBI Registered RTA Expertise
                </p>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="text-green-500 text-xl">✔</span>
                <p className="font-medium">
                  Robust IT Infrastructure & Data Security
                </p>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="text-green-500 text-xl">✔</span>
                <p className="font-medium">
                  Process Accuracy & Timely Execution
                </p>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="text-green-500 text-xl">✔</span>
                <p className="font-medium">
                  Dedicated Investor Support Desk
                </p>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="text-green-500 text-xl">✔</span>
                <p className="font-medium">
                  Scalable Solutions for Growing Businesses
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/hero4.svg" // replace with your image
              alt="Why Choose Us"
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
