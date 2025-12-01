import React from 'react';
import './InfoPages.css';

export default function TermsPage() {
  return (
    <div className="fk-info-page">
      <h1>Terms Of Use</h1>
      <p>
        These demo terms describe how this Flipkart-inspired UI can be used for
        learning and experimentation.
      </p>
      <ul className="fk-info-list">
        <li>The site is for demo and educational purposes only.</li>
        <li>No real payments, orders or deliveries take place.</li>
        <li>Do not enter sensitive personal or payment information.</li>
      </ul>
    </div>
  );
}


