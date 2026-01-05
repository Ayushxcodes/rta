import Card from '../base/Card';

export default function OurServices() {
  return (
    <section id="services" className="bg-white py-20 text-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Comprehensive RTA Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
            We offer a wide range of Registrar & Transfer Agent services to ensure seamless management of securities and investor relations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Maintenance / Securities */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">📋 Maintenance / Securities</h3>
            <p className="text-gray-700">
              Maintaining Securities Registry of Investors. Providing electronic services to corporate for securities and debt instruments.
            </p>
          </Card>

          {/* Consolidation / Splits */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">🔄 Consolidation / Splits</h3>
            <p className="text-gray-700">
              Sub-division, split and consolidation of securities.
            </p>
          </Card>

          {/* NSDL / CDSL */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">🏦 NSDL / CDSL</h3>
            <p className="text-gray-700">
              Dematerialisation and Rematerialisation of securities via both Depository i.e. NSDL and CDSL, ISIN Activation.
            </p>
          </Card>

          {/* Back Security & Unit Security */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">🔙 Back Security & Unit Security</h3>
            <p className="text-gray-700">
              Buy back of Securities and De-listing of securities. Merger, De-merger and acquisition of Securities.
            </p>
          </Card>

          {/* Benefits */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">📢 Benefits</h3>
            <p className="text-gray-700">
              Call notice to shareholders and beneficiaries.
            </p>
          </Card>

          {/* Arrangement */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">📅 Arrangement</h3>
            <p className="text-gray-700">
              Arrangement for holding AGM / EGM, Postal Ballot and Attendance Slips for AGM / EGM.
            </p>
          </Card>

          {/* Issues of shares / Securities */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">📈 Issues of shares / Securities</h3>
            <p className="text-gray-700">
              IPO, FPO, Bonus, Rights Issue and processing warrants.
            </p>
          </Card>

          {/* Rectification */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">🔧 Rectification</h3>
            <p className="text-gray-700">
              Rectification of errors, fraction elimination and Investor Complaints.
            </p>
          </Card>

          {/* ESOP */}
          <Card hover={true} background="gray" className="h-full">
            <h3 className="mb-4 text-xl font-bold">💼 ESOP</h3>
            <p className="text-gray-700">
              ESOP and Lock-in and partly paid up securities.
            </p>
          </Card>

          {/* Certificates */}
          <Card hover={true} background="gray" className="h-full lg:col-span-3">
            <h3 className="mb-4 text-xl font-bold">📜 Certificates</h3>
            <p className="text-gray-700">
              Share Certificate related services viz; Issue of Duplicate share certificates, call endorsement of share certificate and exchange of share certificate, etc.
            </p>
          </Card>

          {/* Other Security */}
          <Card hover={true} background="gray" className="h-full lg:col-span-3">
            <h3 className="mb-4 text-xl font-bold">🔐 Other Security</h3>
            <p className="text-gray-700">
              Maintaining and providing Register of Transfer of Shares, Register of Transmission of Shares, Register of Transfer of Debentures, Register of Transmission of Debentures, Shareholding Report, Register of Member, Register of Debenture holders, Register of Foreign Members, Register of Foreign Debenture holders, Register of renewed and duplicate certificate, Register of Payment of Dividend, Allotment Register, Secretarial Audit Services, Certificate under clause 47(c), List of Shareholders, Split Register, Duplicate Register, Consolidation Report, Mailing List, Complaint Status, Merger Register, De-merger Register, Index Register, Allotment Register etc. Transfer, Transmission, Transposition, nomination of securities.
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
}
