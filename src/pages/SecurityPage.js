import React from 'react';
import './InfoPages.css';

export default function SecurityPage() {
  return (
    <div className="fk-info-page">
      <h1>Security</h1>
      <p>
        Security is a core part of any ecommerce platform. This clone keeps the
        focus on UI and does not store any sensitive information.
      </p>
      <ul className="fk-info-list">
        <li>Do not input real card or banking details.</li>
        <li>Sample flows are built to illustrate secure practices.</li>
        <li>In a production app, all traffic would be served over HTTPS.</li>
      </ul>
    </div>
  );
}


