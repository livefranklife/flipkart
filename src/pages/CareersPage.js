import React from 'react';
import './InfoPages.css';

const roles = [
  {
    title: 'Frontend Engineer',
    location: 'Bangalore (Hybrid)',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    location: 'Remote',
    type: 'Contract',
  },
  {
    title: 'Product Manager',
    location: 'Bangalore',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="fk-info-page">
      <h1>Careers</h1>
      <p>
        Join a team that is passionate about building delightful ecommerce
        experiences. These roles are sample listings meant to demonstrate UI.
      </p>
      <div className="fk-info-card-list">
        {roles.map((role) => (
          <div key={role.title} className="fk-info-card">
            <h3>{role.title}</h3>
            <p>
              <strong>Location:</strong> {role.location}
            </p>
            <p>
              <strong>Type:</strong> {role.type}
            </p>
            <button type="button" className="fk-info-secondary-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


