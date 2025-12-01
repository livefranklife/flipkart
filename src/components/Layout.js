import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ScrollTopButton from './ScrollTopButton';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="fk-app">
      <Header />
      <main className="fk-main">
        {children}
        <ScrollTopButton />
      </main>
      <footer className="fk-footer">
        <div className="fk-footer-columns">
          <div>
            <h4>ABOUT</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/stories">Flipkart Stories</Link>
          </div>
          <div>
            <h4>HELP</h4>
            <Link to="/help/payments">Payments</Link>
            <Link to="/help/shipping">Shipping</Link>
            <Link to="/help/cancellations">Cancellation &amp; Returns</Link>
            <Link to="/help/faq">FAQ</Link>
          </div>
          <div>
            <h4>CONSUMER POLICY</h4>
            <Link to="/policy/returns">Return Policy</Link>
            <Link to="/policy/terms">Terms Of Use</Link>
            <Link to="/policy/security">Security</Link>
            <Link to="/policy/privacy">Privacy</Link>
          </div>
          <div>
            <h4>SOCIAL</h4>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <div className="fk-footer-bottom">
          <span>© 2025 Flipkart UI Clone (Frontend Demo)</span>
        </div>
      </footer>
    </div>
  );
}


