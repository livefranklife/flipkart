import React from 'react';
import './SellerPage.css';

export default function SellerPage() {
  return (
    <div className="fk-seller-page">
      <section className="fk-seller-hero">
        <div className="fk-seller-hero-text">
          <h1>Sell Online on Flipkart Clone</h1>
          <p>
            Reach crores of customers across India and grow your business with
            our simple, reliable and secure marketplace.
          </p>
          <div className="fk-seller-hero-cta">
            <button type="button" className="fk-seller-primary-btn">
              Start Selling
            </button>
            <button type="button" className="fk-seller-secondary-btn">
              Talk to Us
            </button>
          </div>
          <ul className="fk-seller-hero-points">
            <li>No registration fee</li>
            <li>Secure &amp; fast payments</li>
            <li>Pan-India logistics support</li>
          </ul>
        </div>
        <div className="fk-seller-hero-panel">
          <h3>Create your seller account</h3>
          <label>
            Business Email
            <input type="email" placeholder="name@business.com" />
          </label>
          <label>
            Mobile Number
            <input type="tel" placeholder="10-digit mobile number" />
          </label>
          <label>
            City
            <input type="text" placeholder="Where your business is located" />
          </label>
          <button type="button" className="fk-seller-primary-btn full">
            Register
          </button>
          <p className="fk-seller-hero-note">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </section>

      <section className="fk-seller-stats">
        <div className="fk-seller-stat-card">
          <h2>10L+</h2>
          <p>Registered sellers</p>
        </div>
        <div className="fk-seller-stat-card">
          <h2>30Cr+</h2>
          <p>Customers across India</p>
        </div>
        <div className="fk-seller-stat-card">
          <h2>24x7</h2>
          <p>Seller support &amp; tools</p>
        </div>
      </section>

      <section className="fk-seller-steps">
        <h2>How it works</h2>
        <div className="fk-seller-steps-grid">
          <div className="fk-seller-step-card">
            <span className="fk-seller-step-index">1</span>
            <h3>Create Account</h3>
            <p>
              Sign up using your GSTIN / PAN and basic business details to
              create your seller account.
            </p>
          </div>
          <div className="fk-seller-step-card">
            <span className="fk-seller-step-index">2</span>
            <h3>List Your Products</h3>
            <p>
              Add product details, images and pricing. Our tools help you
              optimise listings for better visibility.
            </p>
          </div>
          <div className="fk-seller-step-card">
            <span className="fk-seller-step-index">3</span>
            <h3>Start Selling</h3>
            <p>
              Receive orders, pack your products and we help handle shipping and
              customer delivery.
            </p>
          </div>
          <div className="fk-seller-step-card">
            <span className="fk-seller-step-index">4</span>
            <h3>Get Paid</h3>
            <p>
              Payments are deposited securely into your bank account as per the
              payment cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="fk-seller-benefits">
        <h2>Why sell with us?</h2>
        <div className="fk-seller-benefits-grid">
          <div className="fk-seller-benefit-card">
            <h3>Wider Reach</h3>
            <p>
              Get access to customers across India in metros, tier-1 and
              tier-2+ cities.
            </p>
          </div>
          <div className="fk-seller-benefit-card">
            <h3>Easy Logistics</h3>
            <p>
              Ship products effortlessly with our logistics partners and track
              deliveries in real time.
            </p>
          </div>
          <div className="fk-seller-benefit-card">
            <h3>Marketing Support</h3>
            <p>
              Participate in sale events and promotions to boost your
              visibility.
            </p>
          </div>
          <div className="fk-seller-benefit-card">
            <h3>Secure Payments</h3>
            <p>
              Transparent payment process with clear reports and timely
              settlements.
            </p>
          </div>
        </div>
      </section>

      <section className="fk-seller-cta-strip">
        <div>
          <h2>Ready to grow your business?</h2>
          <p>Join thousands of sellers who trust our marketplace.</p>
        </div>
        <button type="button" className="fk-seller-primary-btn">
          Start Selling Now
        </button>
      </section>
    </div>
  );
}


