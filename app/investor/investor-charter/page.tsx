export default function InvestorCharterPage() {
  return (
    <section className="bg-white text-black">
      {/* Page Header */}
      <div className="bg-sky-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl text-gray-800">
            Investor Charter
          </h1>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
            Trustlink Investor Services Private Limited – Registrar and Share Transfer Agent
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="container mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a trusted, transparent and prompt service provider to the investors,
            conforming to the highest standards of compliance, confidentiality and
            professionalism in conduct, to meet the obligation towards investors in
            Indian capital markets.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-slate-50 py-16 border-t border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Mission</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Maintain high standards of integrity in business conduct</li>
            <li>Comply with all regulatory requirements in a time-bound manner</li>
            <li>Facilitate prompt investor services through process streamlining and technology</li>
            <li>Enable easy communication and interface for grievance resolution</li>
            <li>Ensure confidentiality of investor information unless legally required</li>
          </ul>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Services Provided by RTA to Investors
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>Providing allotment details and clarification</li>
            <li>KYC updates for physical holdings (address, bank, email, PAN, nomination)</li>
            <li>Processing holding changes – transmission, transposition, duplicate certificates, demat/remat</li>
            <li>Processing tax exemption/lower TDS declarations and revalidation of payouts</li>
            <li>Timely processing of investor service requests with discrepancy intimation</li>
            <li>Execution of corporate actions – ESOPs, dividends, stock split, bonus, merger/demerger</li>
            <li>Communication of rights issue entitlements</li>
            <li>Communication of buyback, exit offers, takeover procedures</li>
            <li>Transfer of shares/dividends to IEPF and suspense account where applicable</li>
            <li>Processing grievances received through email, letters, and SCORES</li>
          </ul>
        </div>
      </div>

      {/* Timelines Table */}
      <div className="bg-slate-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Timelines for Investor Services
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Nature of Service</th>
                  <th className="px-4 py-3">Expected Timelines (Days)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Transmission request", "21"],
                  ["Duplicate certificate", "30"],
                  ["Dematerialisation", "15"],
                  ["Rematerialisation", "30"],
                  ["Transposition", "15"],
                  ["Change of address / contact details", "15"],
                  ["Change of name / signature / nomination", "30"],
                  ["Updation of PAN", "15"],
                  ["Dividend / interest revalidation", "15"],
                  ["Investor grievance redressal", "21"],
                  ["IPO allotment", "6"],
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Rights of Investors */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Rights of Investors
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Right to receive all declared benefits and material information</li>
          <li>Right to fair and equitable treatment</li>
          <li>Right to participate in AGM/EGM and e-voting</li>
          <li>Right to approach RTA, Depository, Exchanges, or SEBI for grievance resolution</li>
          <li>Right to statutory disclosures and service updates</li>
          <li>Right to transfer securities with minimal documentation</li>
          <li>Right to accessibility, education, customized services, and escalation matrix</li>
        </ul>
      </div>

      {/* Do’s & Don’ts */}
      <div className="bg-slate-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Do’s</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Encash dividends regularly</li>
              <li>Ensure PAN and nomination are registered</li>
              <li>Update KYC and bank details</li>
              <li>Monitor corporate announcements</li>
              <li>Keep copies of documents submitted</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Don’ts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Do not keep folios without PAN or nomination</li>
              <li>Do not deal with unauthorized persons</li>
              <li>Do not share confidential security details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grievance Redressal */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Grievance Redressal & Escalation Mechanism
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Investors may lodge grievances with the Listed Company / RTA via
            designated grievance email IDs. Complaints are addressed within 21 days.
          </p>
          <p>
            If unresolved, investors may escalate through <strong>SCORES 2.0</strong>
            (SEBI’s centralized grievance redressal system).
          </p>
          <p>
            Investors may also approach the <strong>SMART ODR</strong> platform for
            online conciliation and arbitration as per SEBI guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
