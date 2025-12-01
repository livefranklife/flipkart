import React from 'react';
import './InfoPages.css';

export default function PrivacyPage() {
  return (
    <div className="fk-info-page">
      <h1>Privacy Policy</h1>
      <p>
        This demo clone does not collect or process personal data like a real
        ecommerce platform. The policy below explains this in simple terms.
      </p>
      <ul className="fk-info-list">
        <li>No real personal or payment data is stored or shared.</li>
        <li>Any form inputs are used only to demonstrate UI interactions.</li>
        <li>
          Analytics or logging, if enabled, are purely for improving the demo
          experience.
        </li>
      </ul>
    </div>
  );
}


