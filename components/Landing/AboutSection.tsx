export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
            RTA Overview
          </span>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Empowering Seamless Transactions with TrustLink RTA/STA Services
          </h2>

          {/* Content */}
          <p className="text-lg text-gray-600 sm:text-xl">
            As a pioneering service provider in the financial domain, TrustLink RTA/STA is committed to streamlining and enhancing the entire process of share issuance and transfer, ensuring a seamless experience for businesses and investors alike. From facilitating the issuance of securities to managing the intricate process of share transfers, TrustLink RTA/STA stands as a reliable partner dedicated to simplifying complex financial transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
