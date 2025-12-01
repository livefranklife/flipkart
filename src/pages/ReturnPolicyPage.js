import React from 'react';
import './InfoPages.css';

export default function ReturnPolicyPage() {
  return (
    <div className="fk-info-page">
      <h1>Return Policy</h1>
      <p>
        This is a simplified return policy designed to mimic the structure of
        Flipkart&apos;s help centre while remaining suitable for this demo clone.
      </p>
      <ul className="fk-info-list">
        <li>Eligible items can be returned within a limited window.</li>
        <li>Products should be unused and with original tags/packaging.</li>
        <li>Refunds are processed back to the original payment method.</li>
      </ul>
    </div>
  );
}


