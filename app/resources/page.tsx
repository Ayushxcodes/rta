import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import type { JSX } from "react";

type DownloadLinkProps = {
  href: string;
  label: string;
};

export default function Resources(): JSX.Element {
  const DownloadLink = ({ href, label }: DownloadLinkProps) => (
    <a
      href={href}
      download
      className="flex items-center gap-2 text-blue-600 hover:underline"
    >
      <DocumentArrowDownIcon className="h-5 w-5 text-gray-700" />
      <span>{label}</span>
    </a>
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      
      {/* Dividend */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Dividend</h2>
        <ul className="space-y-2">
          <li>
            <DownloadLink
              href="/beneficial-owndership-declaration.docx"
              label="Dividend Exemption Form"
            />
          </li>
          <li>
            <DownloadLink
              href="/FORM_15G.pdf"
              label="Form 15G"
            />
          </li>
          <li>
            <DownloadLink
              href="/form-15H.pdf"
              label="Form 15H"
            />
          </li>
          <li>
            <DownloadLink
              href="/NECS-Form.docx"
              label="NECS Form"
            />
          </li>
        </ul>
      </section>

      {/* Duplicate Share Certificate */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Duplicate Share Certificate
        </h2>
        <DownloadLink
          href="/Affidavit-for-Duplicate-cum-transmission.doc"
          label="Affidavit for Duplicate cum transmission"
        />
       
        <DownloadLink
          href="/Application-for-Duplicate-Share-Certificate-cum-Transmission.doc"
          label="Application for Duplicate Share Certificate cum Transmission"
        />
        
        <DownloadLink
          href="/Indemnity-Bond-for-Duplicate-cum-Transmission.doc"
          label="Indemnity Bond for Duplicate cum Transmission"
        />
        
        <DownloadLink
          href="/NOC-for-Transmission.doc"
          label="NOC for Transmission"
        />
        <DownloadLink
          href="/AFFIDAVIT-for-Issue-of-Duplicate-Share-Certificate-D.docx"
          label="AFFIDAVIT for Issue of Duplicate Share Certificate-D"
        />
        <DownloadLink
          href="/INDEMNITY-BOND-for-Issue-of-Duplicate-Share-Certificate.docx"
          label="INDEMNITY BOND for Issue of Duplicate Share Certificate"
        />
        <DownloadLink
          href="/Website-Duplicate-Procedure.docx"
          label="Website - Duplicate Procedure"
        />
      </section>

      {/* Transmission */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Transmission</h2>
        <ul className="space-y-2">
          <li>
            <DownloadLink
              href="/resources/transmission-of-shares.pdf"
              label="Transmission of Shares"
            />
          </li>
          <li>
            <DownloadLink
              href="/resources/duplicate-shares.pdf"
              label="Duplicate Shares Request"
            />
          </li>
        </ul>
      </section>

      {/* KYC Formats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Formats KYC</h2>
        <ul className="space-y-2">
          <li>
            <DownloadLink
              href="/KYC_Affidavit-for-change-of-signature.docx"
              label="KYC_Affidavit for change of signature"
            />
          </li>
          <li>
            <DownloadLink
              href="/KYC_new-bankers-verification.docx"
              label="KYC_new bankers verification"
            />
          </li>
          <li>
            <DownloadLink
              href="/KYC_Nomination-Registration-Form-1.1-SH13-29.04.docx"
              label="KYC_Nomination Registration Form 1.1 SH13-29.04"
            />
          </li>
        </ul>
      </section>

      {/* Form 10F / 15G / 15H */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Forms 10F / 15G / 15H
        </h2>
        <ul className="space-y-2">
          <li>
            <DownloadLink href="/Form_10F.pdf" label="Form 10F" />
          </li>
          <li>
            <DownloadLink href="/FORM_15G.pdf" label="Form 15G" />
          </li>
          <li>
            <DownloadLink href="/FORM_NO_15H.pdf" label="Form 15H" />
          </li>
          <li>
            <DownloadLink href="/Self-Declaration-Form.docx" label="Self Decleration Form" />
          </li>
        </ul>
      </section>

      {/* Name, Address & Bank Details */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Name, Address and Bank Detail Correction
        </h2>
        <DownloadLink
          href="/Format-4-Correction-Name_Address_Bank-details.docx"
          label="Format-4-Correction-Name_Address_Bank-details"
        />
      </section>

      {/* Name Deletion */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Name Deletion cum Duplicate Share Certificate
        </h2>
        <DownloadLink
          href="/Affidavit-for-Name-deletion-cum-duplicate.docx"
          label="Affidavit-for-Name-deletion-cum-duplicate"
        />
        <DownloadLink
          href="/Indemnity-Bond-For-Name-Deletion-Cum-Duplicate.docx"
          label="Indemnity-Bond-For-Name-Deletion-Cum-Duplicate"
        />
      </section>

      {/* Nomination */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Nomination</h2>
        <ul className="space-y-2">
          <li>
            <DownloadLink
              href="/Nomination-Cancellation-Form.pdf"
              label="Nomination-Cancellation-Form"
            />
          </li>
          <li>
            <DownloadLink
              href="/Nomination-Registration-Form.pdf"
              label="Nomination-Registration-Form"
            />
          </li>
        </ul>
      </section>

      {/* Share Transfer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Share Transfer Form
        </h2>
        <DownloadLink
          href="/Securities-Transfer-Form-SH4-Cos-Act-2013-Finalised.pdf"
          label="Securities-Transfer-Form-SH4-Cos-Act-2013-Finalised"
        />
      </section>

      {/* Transmission of Shares */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Transmission of Shares
        </h2>
        <DownloadLink
          href="/NOC-for-Transmission.docx"
          label="NOC for Transmission"
        />
        <DownloadLink
          href="/Transmission-Affidavit.docx"
          label="Transmission Affidavit"
        />
        <DownloadLink
          href="/Transmission-Application.docx"
          label="Transmission Application"
        />
      </section>
      
    </div>
  );
}
