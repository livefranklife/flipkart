import React from 'react';
import './InfoPages.css';

export default function HelpPaymentsPage() {
  return (
    <div className="fk-info-page">
      <h1>Payments</h1>
      <p>
        Learn about supported payment methods and how your transactions are
        processed in this demo experience.
      </p>
      <ul className="fk-info-list">
        <li>Credit / Debit Cards (demo only, not real charges)</li>
        <li>Netbanking &amp; UPI (simulated flow)</li>
        <li>EMI &amp; Wallets (for UI demonstration)</li>
      </ul>
    </div>
  );
}


