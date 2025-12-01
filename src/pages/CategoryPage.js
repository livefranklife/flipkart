import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { useToast } from '../components/ToastProvider';
import './CategoryPage.css';

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CategoryPage() {
  const { name } = useParams();
  const categoryName = (name || '').replace(/-/g, ' ');
  const navigate = useNavigate();
  const { dispatch } = useStore();
  const { showToast } = useToast();

  const [sortBy, setSortBy] = useState('relevance');
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(
    () =>
      products
        .filter(
          (p) => p.category.toLowerCase() === categoryName.toLowerCase()
        )
        .filter((p) => p.rating >= minRating)
        .slice()
        .sort((a, b) => {
          if (sortBy === 'price_low') return a.price - b.price;
          if (sortBy === 'price_high') return b.price - a.price;
          if (sortBy === 'rating') return b.rating - a.rating;
          return 0;
        }),
    [categoryName, sortBy, minRating]
  );

  return (
    <div className="fk-category-page">
      <div className="fk-breadcrumb">Home / {categoryName}</div>
      <div className="fk-category-layout">
        <aside className="fk-category-filters">
          <div className="fk-filters-header-row">
            <h4>Filters</h4>
            <button
              type="button"
              className="fk-clear-filters"
              onClick={() => {
                setSortBy('relevance');
                setMinRating(0);
              }}
            >
              Clear all
            </button>
          </div>

          <div className="fk-filter-block fk-filter-tags">
            <span className="fk-filter-tag">Flipkart Assured</span>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">CATEGORIES</div>
            <div className="fk-filter-breadcrumb-text">
              Computers &nbsp;›&nbsp; Monitors
            </div>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Price</div>
            <div className="fk-filter-price-row">
              <select defaultValue="0">
                <option value="0">Min</option>
                <option value="5000">₹5,000</option>
                <option value="10000">₹10,000</option>
                <option value="20000">₹20,000</option>
              </select>
              <span>to</span>
              <select defaultValue="60000">
                <option value="10000">₹10,000</option>
                <option value="20000">₹20,000</option>
                <option value="40000">₹40,000</option>
                <option value="60000">₹60,000+</option>
              </select>
            </div>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Brand</div>
            <label>
              <input type="checkbox" /> Dell
            </label>
            <label>
              <input type="checkbox" /> HP
            </label>
            <label>
              <input type="checkbox" /> Lenovo
            </label>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Customer Ratings</div>
            <label>
              <input
                type="radio"
                name="rating"
                checked={minRating === 4}
                onChange={() => setMinRating(4)}
              />{' '}
              4★ &amp; above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={minRating === 3}
                onChange={() => setMinRating(3)}
              />{' '}
              3★ &amp; above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={minRating === 0}
                onChange={() => setMinRating(0)}
              />{' '}
              All
            </label>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Discount</div>
            <label>
              <input type="checkbox" /> 10% or more
            </label>
            <label>
              <input type="checkbox" /> 30% or more
            </label>
            <label>
              <input type="checkbox" /> 50% or more
            </label>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Offers</div>
            <label>
              <input type="checkbox" /> Special Price
            </label>
            <label>
              <input type="checkbox" /> No Cost EMI
            </label>
          </div>

          <div className="fk-filter-block">
            <div className="fk-filter-title">Availability</div>
            <label>
              <input type="checkbox" defaultChecked /> Include Out of Stock
            </label>
          </div>
        </aside>
        <section className="fk-category-list">
          <div className="fk-category-list-header">
            <div>
              <h2>{categoryName}</h2>
              <span>{filtered.length} items</span>
            </div>
            <div className="fk-category-sort">
              <span>Sort By</span>
              <button
                type="button"
                className={sortBy === 'relevance' ? 'active' : ''}
                onClick={() => setSortBy('relevance')}
              >
                Relevance
              </button>
              <button
                type="button"
                className={sortBy === 'rating' ? 'active' : ''}
                onClick={() => setSortBy('rating')}
              >
                Popularity
              </button>
              <button
                type="button"
                className={sortBy === 'price_low' ? 'active' : ''}
                onClick={() => setSortBy('price_low')}
              >
                Price -- Low to High
              </button>
              <button
                type="button"
                className={sortBy === 'price_high' ? 'active' : ''}
                onClick={() => setSortBy('price_high')}
              >
                Price -- High to Low
              </button>
            </div>
          </div>
          {filtered.map((p) => (
            <div key={p.id} className="fk-category-item">
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.title} />
              </Link>
              <div className="fk-category-item-info">
                <Link to={`/product/${p.id}`} className="fk-category-title-link">
                  <div className="fk-category-title">{p.title}</div>
                </Link>
                <div className="fk-category-rating">
                  <span>{p.rating.toFixed(1)} ★</span>
                  <span>{p.ratingCount.toLocaleString()} Ratings</span>
                </div>
                <ul className="fk-category-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="fk-category-item-actions">
                  <button
                    type="button"
                    className="fk-btn-cart"
                    onClick={() => {
                      dispatch({ type: 'ADD_TO_CART', payload: p });
                      showToast('Added to cart');
                    }}
                  >
                    ADD TO CART
                  </button>
                  <button
                    type="button"
                    className="fk-btn-buy"
                    onClick={() => {
                      dispatch({ type: 'ADD_TO_CART', payload: p });
                      navigate('/cart');
                      showToast('Added to cart. Proceed to checkout.');
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="fk-category-price-block">
                <div className="fk-category-price">
                  {formatPrice(p.price)}
                </div>
                <div className="fk-category-mrp">
                  <span className="line-through">{formatPrice(p.mrp)}</span>
                  <span className="fk-category-off">
                    {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="fk-empty-state">
              No products in this category yet. Try another category.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}


