import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useToast } from '../components/ToastProvider';
import './WishlistPage.css';

export default function WishlistPage() {
  const { state, dispatch } = useStore();
  const { showToast } = useToast();

  return (
    <div className="fk-wishlist-page">
      <div className="fk-breadcrumb">Home / Wishlist</div>
      <h2>My Wishlist ({state.wishlist.length})</h2>
      {state.wishlist.length === 0 && (
        <div className="fk-empty-state">
          Your wishlist is empty. Add items from product details.
        </div>
      )}
      <div className="fk-wishlist-grid">
        {state.wishlist.map((item) => (
          <div key={item.id} className="fk-wishlist-card">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <div className="fk-wishlist-title">{item.title}</div>
            </Link>
            <div className="fk-wishlist-actions">
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: 'ADD_TO_CART', payload: item });
                  showToast('Moved to cart');
                }}
              >
                MOVE TO CART
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_WISHLIST',
                    payload: item.id,
                  })
                }
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


