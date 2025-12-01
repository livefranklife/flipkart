import React from 'react';
import './InfoPages.css';

export default function ContactPage() {
  return (
    <div className="fk-info-page">
      <h1>Contact Us</h1>
      <p>
        Have questions about your orders, payments or account? Reach out using the
        form below and we&apos;ll get back to you.
      </p>
      <form className="fk-info-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Subject
          <input type="text" placeholder="Order, Payment, Account, etc." />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="Tell us how we can help" />
        </label>
        <button type="button" className="fk-info-primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
}


