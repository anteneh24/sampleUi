import React from "react";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className="bg-primary flex flex-col">
      <div className="flex flex-col px-20">
        <div className="flex justify-between border-b-gray-500 border-b-2">
          <img src="/img/logo 2.png" alt="logo" className="w-56 h-24" />
          <ul className="flex items-center justify-between gap-6">
            <li className="border-b-gray-500 border-b-2 text-white">
              Terms of Service
            </li>
            <li className="border-b-gray-500 border-b-2 text-white">
              Privacy Policy
            </li>
            <li className="border-b-gray-500 border-b-2 text-white">
              Legal Disclaimer
            </li>
            <li className="border-b-gray-500 border-b-2 text-white">
              Refund Policy
            </li>
            <li className="border-b-gray-500 border-b-2 text-white">
              Terms of Use
            </li>
          </ul>
        </div>
        <p className="mt-4 mb-16 text-white text-start">
          Disclaimer: GovAssist is not affiliated with any United States
          government agency or department. Costs for consulting services do NOT
          include any government application, medical examination, filing, or
          biometric fees. This website does not provide legal advice and we are
          not a law firm. None of our customer service representatives are
          lawyers and they also do not provide legal advice. We are a private,
          internet-based travel and immigration consultancy provider dedicated
          to helping individuals travel to the United States. You may apply by
          yourself directly at travel.state.gov or at uscis.gov. GovAssist is
          affiliated with the UT law firm GovAssist Legal which provides legal
          services on immigration matters. Only licensed immigration
          professionals can provide advice, explanation, opinion, or
          recommendation about possible legal rights, remedies, defenses,
          options, selection of forms or strategies.
        </p>
      </div>
      <Copyright />
    </div>
  );
}
