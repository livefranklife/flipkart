import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../data/products';
import './HomePage.css';

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  const navigate = useNavigate();
  const [recentProducts, setRecentProducts] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(6 * 60 * 60); // 6 hours demo timer
  const mobiles = useMemo(
    () => products.filter((p) => p.category === 'Mobiles'),
    []
  );
  const electronics = useMemo(
    () => products.filter((p) => p.category === 'Electronics'),
    []
  );
  const fashion = useMemo(
    () => products.filter((p) => p.category === 'Fashion'),
    []
  );
  const beautyToysMore = useMemo(
    () => products.filter((p) => p.category === 'Beauty' || p.category === 'Home & Furniture'),
    []
  );

  useEffect(() => {
    try {
      const key = 'recentlyViewed';
      const raw = window.localStorage.getItem(key);
      if (!raw) return;
      const ids = JSON.parse(raw);
      const mapped = ids
        .map((pid) => products.find((p) => p.id === pid))
        .filter(Boolean);
      setRecentProducts(mapped);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="fk-home">
      <section className="fk-home-banner">
        <div className="fk-banner-content">
          <h2>Big Savings Days</h2>
          <p>Top Deals on Mobiles, Electronics, Fashion &amp; more</p>
          <p className="fk-banner-timer">
            Sale ends in{' '}
            <strong>
              {String(hours).padStart(2, '0')}:
              {String(minutes).padStart(2, '0')}:
              {String(seconds).padStart(2, '0')}
            </strong>
          </p>
          <button
            type="button"
            onClick={() =>
              navigate(`/category/${encodeURIComponent('mobiles')}`)
            }
          >
            Shop Mobiles
          </button>
        </div>
        <div className="fk-banner-side">
          <span className="fk-banner-tag">LIVE NOW</span>
          <span className="fk-banner-offer">Up to 70% Off</span>
        </div>
      </section>

      <section className="fk-home-strip-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className="fk-cat-card"
            onClick={() =>
              navigate(`/category/${encodeURIComponent(cat.toLowerCase())}`)
            }
          >
            <span className="fk-cat-name">{cat}</span>
            <span className="fk-cat-shop">Shop Now</span>
          </button>
        ))}
      </section>

      <section className="fk-home-section">
        <div className="fk-home-section-header">
          <h3>Best of Mobiles</h3>
          <button
            type="button"
            onClick={() =>
              navigate(`/category/${encodeURIComponent('mobiles')}`)
            }
          >
            VIEW ALL
          </button>
        </div>
        <div className="fk-product-row">
          {mobiles.slice(0, 10).map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="fk-product-card"
            >
              <span className="fk-product-rating-badge">
                {p.rating.toFixed(1)} ★
              </span>
              {p.bannerTag && (
                <span className="fk-product-tag">{p.bannerTag}</span>
              )}
              <img src={p.image} alt={p.title} />
              <div className="fk-product-title">{p.title}</div>
              <div className="fk-product-price">
                {formatPrice(p.price)}
                <span className="fk-product-mrp">
                  {formatPrice(p.mrp)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="fk-home-section">
        <div className="fk-home-section-header">
          <h3>Electronics & Accessories</h3>
          <button
            type="button"
            onClick={() =>
              navigate(`/category/${encodeURIComponent('electronics')}`)
            }
          >
            VIEW ALL
          </button>
        </div>
        <div className="fk-product-row">
          {electronics.slice(0, 10).map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="fk-product-card"
            >
              <span className="fk-product-rating-badge">
                {p.rating.toFixed(1)} ★
              </span>
              {p.bannerTag && (
                <span className="fk-product-tag">{p.bannerTag}</span>
              )}
              <img src={p.image} alt={p.title} />
              <div className="fk-product-title">{p.title}</div>
              <div className="fk-product-price">
                {formatPrice(p.price)}
                <span className="fk-product-mrp">
                  {formatPrice(p.mrp)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="fk-home-section fk-home-section-split">
        <div className="fk-home-section-main">
          <div className="fk-home-section-header">
            <h3>Top Picks in Fashion</h3>
            <button
              type="button"
              onClick={() =>
                navigate(`/category/${encodeURIComponent('fashion')}`)
              }
            >
              VIEW ALL
            </button>
          </div>
          <div className="fk-product-row">
            {fashion.slice(0, 8).map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="fk-product-card"
              >
                <span className="fk-product-rating-badge">
                  {p.rating.toFixed(1)} ★
                </span>
                {p.bannerTag && (
                  <span className="fk-product-tag">{p.bannerTag}</span>
                )}
                <img src={p.image} alt={p.title} />
                <div className="fk-product-title">{p.title}</div>
                <div className="fk-product-price">
                  {formatPrice(p.price)}
                  <span className="fk-product-mrp">
                    {formatPrice(p.mrp)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="fk-home-aside-banner">
          <div className="fk-home-aside-text">
            <h3>Bank Offers</h3>
            <p>
              10% Instant Discount on select bank cards on orders above ₹3,000.
            </p>
            <p>No Cost EMI on top mobiles, laptops &amp; TVs.</p>
          </div>
        </aside>
      </section>

      <section className="fk-home-section">
        <div className="fk-home-section-header">
          <h3>Beauty, Home &amp; More</h3>
          <button
            type="button"
            onClick={() =>
              navigate(`/category/${encodeURIComponent('beauty')}`)
            }
          >
            VIEW ALL
          </button>
        </div>
        <div className="fk-product-row">
          {beautyToysMore.slice(0, 10).map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="fk-product-card"
            >
              <span className="fk-product-rating-badge">
                {p.rating.toFixed(1)} ★
              </span>
              {p.bannerTag && (
                <span className="fk-product-tag">{p.bannerTag}</span>
              )}
              <img src={p.image} alt={p.title} />
              <div className="fk-product-title">{p.title}</div>
              <div className="fk-product-price">
                {formatPrice(p.price)}
                <span className="fk-product-mrp">
                  {formatPrice(p.mrp)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {recentProducts.length > 0 && (
        <section className="fk-home-section">
          <div className="fk-home-section-header">
            <h3>Recently Viewed</h3>
          </div>
          <div className="fk-product-row">
            {recentProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="fk-product-card"
              >
                <span className="fk-product-rating-badge">
                  {p.rating.toFixed(1)} ★
                </span>
                {p.bannerTag && (
                  <span className="fk-product-tag">{p.bannerTag}</span>
                )}
                <img src={p.image} alt={p.title} />
                <div className="fk-product-title">{p.title}</div>
                <div className="fk-product-price">
                  {formatPrice(p.price)}
                  <span className="fk-product-mrp">
                    {formatPrice(p.mrp)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}


