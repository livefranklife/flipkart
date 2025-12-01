import React, { useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../data/products';
import './SearchPage.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery();
  const q = (query.get('q') || '').toLowerCase();
  const [minRating, setMinRating] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchesText =
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        const matchesRating = p.rating >= minRating;
        const matchesCategory =
          categoryFilter === 'all' ||
          p.category.toLowerCase() === categoryFilter;
        return matchesText && matchesRating && matchesCategory;
      }),
    [q, minRating, categoryFilter]
  );

  return (
    <div className="fk-search-page">
      <div className="fk-breadcrumb">Home / Search</div>
      <h2>
        Showing results for "<span className="highlight">{q}</span>"
      </h2>
      <div className="fk-search-filters">
        <div className="fk-search-chip-group">
          <span>Category:</span>
          <button
            type="button"
            className={categoryFilter === 'all' ? 'active' : ''}
            onClick={() => setCategoryFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={categoryFilter === 'mobiles' ? 'active' : ''}
            onClick={() => setCategoryFilter('mobiles')}
          >
            Mobiles
          </button>
          <button
            type="button"
            className={categoryFilter === 'electronics' ? 'active' : ''}
            onClick={() => setCategoryFilter('electronics')}
          >
            Electronics
          </button>
          <button
            type="button"
            className={categoryFilter === 'fashion' ? 'active' : ''}
            onClick={() => setCategoryFilter('fashion')}
          >
            Fashion
          </button>
        </div>
        <div className="fk-search-chip-group">
          <span>Rating:</span>
          <button
            type="button"
            className={minRating === 0 ? 'active' : ''}
            onClick={() => setMinRating(0)}
          >
            All
          </button>
          <button
            type="button"
            className={minRating === 4 ? 'active' : ''}
            onClick={() => setMinRating(4)}
          >
            4★ &amp; above
          </button>
          <button
            type="button"
            className={minRating === 3 ? 'active' : ''}
            onClick={() => setMinRating(3)}
          >
            3★ &amp; above
          </button>
        </div>
      </div>
      {filtered.length === 0 && (
        <div className="fk-empty-state">
          No results found. Try searching for mobiles, tv, laptops, etc.
        </div>
      )}
      <div className="fk-search-grid">
        {filtered.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="fk-search-card">
            <img src={p.image} alt={p.title} />
            <div className="fk-search-title">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


