import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { categories } from '../data/products';
import './Header.css';

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

const suggestionsFromProducts = (searchTerm) => {
  if (!searchTerm) return [];
  const term = searchTerm.toLowerCase();
  const base = [
    'mobiles',
    'tv',
    'laptops',
    'headphones',
    'shoes',
    'shirts',
    'watches',
  ];
  return base.filter((item) => item.toLowerCase().includes(term));
};

export default function Header() {
  const navigate = useNavigate();
  const { state } = useStore();
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCartPreview, setShowCartPreview] = useState(false);

  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setShowSuggestions(false);
  };

  const suggestions = suggestionsFromProducts(search);

  return (
    <header className="fk-header">
      <div className="fk-header-top">
        <div
          className="fk-logo"
          onClick={() => navigate('/')}
          aria-label="Flipkart Home"
        >
          <span className="fk-logo-main">flipkart</span>
          <span className="fk-logo-sub">Explore&nbsp;Plus</span>
        </div>

        <form className="fk-search" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setTimeout(() => setShowSuggestions(false), 150);
            }}
          />
          <button type="submit">Search</button>
          {showSuggestions && suggestions.length > 0 && (
            <div className="fk-search-suggestions">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSearch(s);
                    navigate(`/search?q=${encodeURIComponent(s)}`);
                    setShowSuggestions(false);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </form>

        <div className="fk-header-actions">
          <button
            type="button"
            className="fk-header-text-link"
            onClick={() => navigate('/seller')}
          >
            Become a Seller
          </button>
          <div className="fk-header-more">
            <button type="button" className="fk-header-text-link">
              More ▾
            </button>
            <div className="fk-header-more-menu">
              <button type="button">Notification Preferences</button>
              <button type="button">24x7 Customer Care</button>
              <button type="button">Advertise</button>
              <button type="button">Download App</button>
            </div>
          </div>
          {state.user ? (
            <div className="fk-header-user">
              <span className="fk-header-user-initial">
                {state.user.name?.[0]?.toUpperCase() || 'U'}
              </span>
              <span className="fk-header-user-name">{state.user.name}</span>
            </div>
          ) : (
            <Link to="/login" className="fk-login-btn">
              Login
            </Link>
          )}
          <button
            type="button"
            className="fk-header-text-link"
            onClick={() => navigate('/orders')}
          >
            My Orders
          </button>
          <Link to="/wishlist" className="fk-header-link">
            Wishlist
          </Link>
          <div
            className="fk-cart-wrapper"
            onMouseEnter={() => setShowCartPreview(true)}
            onMouseLeave={() => setShowCartPreview(false)}
          >
            <Link to="/cart" className="fk-cart-btn">
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="fk-cart-count">{cartCount}</span>
              )}
            </Link>
            {showCartPreview && state.cart.length > 0 && (
              <div className="fk-cart-preview">
                <div className="fk-cart-preview-header">
                  <span>Recently added</span>
                  <span>{cartCount} items</span>
                </div>
                <div className="fk-cart-preview-items">
                  {state.cart.slice(0, 3).map((item) => (
                    <div key={item.id} className="fk-cart-preview-item">
                      <img src={item.image} alt={item.title} />
                      <div>
                        <div className="fk-cart-preview-title">
                          {item.title}
                        </div>
                        <div className="fk-cart-preview-price">
                          {formatPrice(item.price)} × {item.qty}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="fk-cart-preview-footer">
                  <span>Total:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="fk-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className="fk-nav-item"
            onClick={() =>
              navigate(`/category/${encodeURIComponent(cat.toLowerCase())}`)
            }
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="fk-header-strip">
        <span>Summer Sale is Live &nbsp;|&nbsp; Extra 10% off with select bank cards</span>
        <span className="fk-strip-price">From {formatPrice(299)}</span>
      </div>
    </header>
  );
}


