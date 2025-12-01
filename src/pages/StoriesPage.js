import React from 'react';
import './InfoPages.css';

const stories = [
  {
    title: 'How small businesses reach pan-India customers',
    category: 'Seller Story',
  },
  {
    title: 'Building a seamless shopping experience',
    category: 'Product Story',
  },
  {
    title: 'Festive sale highlights & learnings',
    category: 'Events',
  },
];

export default function StoriesPage() {
  return (
    <div className="fk-info-page">
      <h1>Flipkart Stories (Demo)</h1>
      <p>
        Discover curated stories about sellers, customers and the technology
        that powers this Flipkart-inspired experience.
      </p>
      <div className="fk-info-card-list">
        {stories.map((story) => (
          <div key={story.title} className="fk-info-card">
            <span className="fk-info-tag">{story.category}</span>
            <h3>{story.title}</h3>
            <p>
              This is sample content used to showcase the stories layout and
              design.
            </p>
            <button type="button" className="fk-info-secondary-btn">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


