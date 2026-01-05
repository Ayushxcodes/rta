export default function GrievanceRedressal() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Grievance Redressal
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        At <span className="font-medium text-gray-800">Trustlink Investor Services Private Limited</span>, 
        we are committed to providing prompt and effective resolution of investor grievances.
        If you are not satisfied with the response received to your queries or services, 
        you may escalate your concern using the channels mentioned below.
      </p>

      {/* First Level Escalation */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Level 1: Grievance Escalation
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="font-medium">Grievance Email:</span>{" "}
            <a
              href="mailto:grievance@trustlinkinvestor.com"
              className="text-blue-600 hover:underline"
            >
              grievance@trustlinkinvestor.com
            </a>
          </li>
          <li>
            <span className="font-medium">Compliance Email:</span>{" "}
            <a
              href="mailto:compliance@trustlinkinvestor.com"
              className="text-blue-600 hover:underline"
            >
              compliance@trustlinkinvestor.com
            </a>
          </li>
          <li>
            <span className="font-medium">Contact Number:</span>{" "}
            <a
              href="tel:+919910118347"
              className="text-blue-600 hover:underline"
            >
              +91 99101 18347
            </a>
          </li>
        </ul>
      </div>

      {/* Second Level Escalation */}
      <div className="bg-gray-50 shadow-md rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Level 2: Compliance Officer / Principal Officer
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          If you are still not satisfied with the resolution provided by our team, 
          you may directly contact our designated Compliance Officer / Principal Officer:
        </p>

        <div className="space-y-2 text-gray-700">
          <p className="font-semibold text-gray-900">
            Mr. Nishant Khemani
          </p>
          <p>
            Director / Compliance Officer / Principal Officer
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:grievance@trustlinkinvestor.com"
              className="text-blue-600 hover:underline"
            >
              grievance@trustlinkinvestor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
