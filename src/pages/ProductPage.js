import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { useToast } from '../components/ToastProvider';
import './ProductPage.css';

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductPage() {
  const { id } = useParams();
  const { dispatch, state } = useStore();
  const { showToast } = useToast();
  const product = products.find((p) => p.id === id);
  const [pin, setPin] = useState('');
  const [pinMessage, setPinMessage] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!product) return;
    try {
      const key = 'recentlyViewed';
      const existingRaw = window.localStorage.getItem(key);
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      const withoutCurrent = existing.filter((pid) => pid !== product.id);
      const updated = [product.id, ...withoutCurrent].slice(0, 10);
      window.localStorage.setItem(key, JSON.stringify(updated));
    } catch {
      // ignore storage errors in demo
    }
  }, [product]);

  if (!product) {
    return <div className="fk-product-page">Product not found.</div>;
  }

  const inWishlist = state.wishlist.some((w) => w.id === product.id);

  return (
    <div className="fk-product-page">
      <div className="fk-breadcrumb">
        Home / {product.category} / {product.title}
      </div>
      <div className="fk-product-layout">
        <div className="fk-product-images">
          <div className={`fk-product-main-img ${imgLoaded ? 'loaded' : ''}`}>
            {!imgLoaded && <div className="fk-img-skeleton" />}
            <img
              src={product.image}
              alt={product.title}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <div className="fk-product-actions">
            <button
              type="button"
              className="fk-btn-cart"
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product });
                showToast('Added to cart');
              }}
            >
              ADD TO CART
            </button>
            <button
              type="button"
              className="fk-btn-buy"
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product });
                showToast('Added to cart. Proceed to checkout.');
              }}
            >
              BUY NOW
            </button>
          </div>
          <button
            type="button"
            className={`fk-wishlist-toggle ${inWishlist ? 'active' : ''}`}
            onClick={() =>
              dispatch({
                type: inWishlist ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST',
                payload: inWishlist ? product.id : product,
              })
            }
          >
            {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>

        <div className="fk-product-details">
          <h1>
            {product.title}
            <span className="fk-assured-badge">Assured</span>
          </h1>
          <div className="fk-product-rating">
            <span className="fk-rating-badge">{product.rating.toFixed(1)} ★</span>
            <span className="fk-rating-count">
              {product.ratingCount.toLocaleString()} Ratings
            </span>
          </div>
          <div className="fk-product-price-block">
            <div className="fk-product-price-big">
              {formatPrice(product.price)}
            </div>
            <div className="fk-product-mrp">
              <span className="line-through">
                {formatPrice(product.mrp)}
              </span>
              <span className="fk-product-off">
                {Math.round(((product.mrp - product.price) / product.mrp) * 100)}
                % off
              </span>
            </div>
          </div>

          <div className="fk-review-summary-card">
            <h3>Ratings &amp; Reviews</h3>
            <div className="fk-review-summary-top">
              <div className="fk-review-score">
                <div className="fk-review-score-main">
                  {product.rating.toFixed(1)} ★
                </div>
                <div className="fk-review-score-sub">
                  {product.ratingCount.toLocaleString()} Ratings
                </div>
              </div>
              <div className="fk-review-bars">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="fk-review-bar-row">
                    <span>{star}</span>
                    <div className="fk-review-bar-track">
                      <div className="fk-review-bar-fill" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fk-product-offers-card">
            <h3>Available offers</h3>
            <ul>
              <li>Bank Offer: 10% off on select credit cards on orders above ₹3,000</li>
              <li>Combo Offer: Buy 2 or more and get extra 5% off</li>
              <li>EMI starting from {formatPrice(Math.round(product.price / 12))}/month</li>
            </ul>
          </div>

          <div className="fk-product-layout-bottom">
            <div className="fk-product-info-column">
              <div className="fk-product-highlights">
                <h3>Highlights</h3>
                <ul>
                  {product.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="fk-product-services">
                <h3>Services</h3>
                <ul>
                  <li>Free Delivery</li>
                  <li>7 Days Replacement Policy</li>
                  <li>1 Year Warranty</li>
                </ul>
              </div>

              <div className="fk-product-pincode-card">
                <h3>Check delivery</h3>
                <div className="fk-pincode-row">
                  <input
                    type="text"
                    value={pin}
                    maxLength={6}
                    onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="Enter 6-digit pincode"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (pin.length !== 6) {
                        setPinMessage('Please enter a valid 6-digit pincode');
                        return;
                      }
                      setPinMessage('Delivery available. Estimated delivery in 2-5 days.');
                    }}
                  >
                    Check
                  </button>
                </div>
                {pinMessage && (
                  <p className="fk-pincode-message">{pinMessage}</p>
                )}
              </div>

              <div className="fk-product-details-card">
                <h3>Product Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Category</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>Model Name</td>
                      <td>{product.title.split('(')[0].trim()}</td>
                    </tr>
                    <tr>
                      <td>Condition</td>
                      <td>New</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>1 Year Domestic Warranty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="fk-product-seller-card">
              <h3>Seller</h3>
              <p className="fk-seller-name">SuperComNet (Demo)</p>
              <p className="fk-seller-rating">4.4 ★</p>
              <ul>
                <li>7 Days Service Center Replacement Policy</li>
                <li>GST invoice available</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}


