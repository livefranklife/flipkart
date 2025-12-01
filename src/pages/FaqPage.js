import React, { useState } from 'react';
import './InfoPages.css';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Browse to a product, click BUY NOW or ADD TO CART and proceed to checkout. This is a UI demo, so the final payment is not actually processed.',
  },
  {
    q: 'How can I track my order?',
    a: 'In a real app, you would see tracking under My Orders. Here, the cart and order states are simulated for demonstration.',
  },
  {
    q: 'What payment methods are supported?',
    a: 'We showcase cards, UPI, netbanking and wallets as part of the UI. They are not connected to real gateways in this demo.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="fk-info-page">
      <h1>Frequently Asked Questions</h1>
      <div className="fk-faq-list">
        {faqs.map((item, index) => (
          <div key={item.q} className="fk-faq-item">
            <button
              type="button"
              className="fk-faq-question"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span>{item.q}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <p className="fk-faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}


