import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
              This Refund Policy explains eligibility, process, and timelines for refunds related to services purchased on Perfectserviceprovider.com.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. General Policy</h2>
            <p className="mb-4">
              Once services are activated on Perfectserviceprovider.com, payments made for activated paid services are non‑refundable and no refund claims will be entertained. Requests received within 15 days of the payment date may be considered only for non‑activated services or work, in accordance with the Company’s policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds are not available for activated services or work already delivered.</li>
              <li>For requests within 15 days, only non‑activated services may be eligible subject to review.</li>
              <li>Proof of purchase and relevant service details must be provided with the request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How to Request</h2>
            <p className="mb-4">
              Send a detailed email with order information, payment date, and grounds for the request to the official refund contact listed below. Requests will be evaluated per company policy and applicable terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Timelines</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 mb-2">Processing Windows</h3>
              <ul className="text-blue-800 list-disc pl-6">
                <li>Review and verification: varies by case</li>
                <li>Refund processing: typically 30–35 working days, depending on information availability</li>
                <li>Once your refund request has been approved, the credited amount will be processed and reflected in your original payment method within 10 to 15 business days.</li>
              </ul>
            </div>
            <p className="mb-4">
              Actual credit timelines depend on the payment method and financial institution handling the transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Method of Refund</h2>
            <p className="mb-4">
              Refunds, when approved, are issued only to the original payment instrument and in the same form as received. Amounts paid by one method will not be refunded via a different method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cancellations</h2>
            <p className="mb-4">
              If work has not been activated or commenced, cancellation may be requested; once activation begins, cancellation is typically not possible and eligibility follows this Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disputes & Chargebacks</h2>
            <p className="mb-4">
              Contact the Company first to resolve any billing issues before initiating a chargeback with the payment provider, to ensure faster resolution aligned with this policy and the Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact for Refunds</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Email: Shashwat@Perfectserviceprovider.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Policy Changes</h2>
            <p className="mb-4">
              The Company may update this Refund Policy from time to time. Updates will be posted on this page with the “Last updated” date; continued use after updates constitutes acceptance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
