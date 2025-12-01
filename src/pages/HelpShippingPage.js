import React from 'react';
import './InfoPages.css';

export default function HelpShippingPage() {
  return (
    <div className="fk-info-page">
      <h1>Shipping</h1>
      <p>
        This demo UI simulates the shipping experience of Flipkart, including
        delivery timelines and tracking.
      </p>
      <ul className="fk-info-list">
        <li>Standard delivery timelines based on your pincode.</li>
        <li>Order status steps: Confirmed, Packed, Shipped, Out for Delivery.</li>
        <li>Delivery charges and free shipping badges shown on product pages.</li>
      </ul>
    </div>
  );
}


