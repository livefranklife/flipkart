import React from 'react';
import './InfoPages.css';

export default function HelpCancellationPage() {
  return (
    <div className="fk-info-page">
      <h1>Cancellation &amp; Returns</h1>
      <p>
        Understand how cancellations and returns are represented in this demo
        clone of Flipkart.
      </p>
      <ul className="fk-info-list">
        <li>Orders can be cancelled before they are marked as shipped.</li>
        <li>Return options are highlighted on the product page and cart.</li>
        <li>
          Different categories may show different return windows (for demo
          only).
        </li>
      </ul>
    </div>
  );
}


