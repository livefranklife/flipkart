import React from 'react';
import { useStore } from '../context/StoreContext';
import './CartPage.css';

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CartPage() {
  const { state, dispatch } = useStore();

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const totalMrp = state.cart.reduce(
    (sum, item) => sum + item.mrp * item.qty,
    0
  );

  return (
    <div className="fk-cart-page">
      <div className="fk-breadcrumb">Home / Cart</div>
      <div className="fk-cart-layout">
        <section className="fk-cart-items">
          <h2>My Cart ({state.cart.length})</h2>
          {state.cart.length === 0 && (
            <div className="fk-empty-state">
              Your cart is empty. Add items from the product page.
            </div>
          )}
          {state.cart.map((item) => (
            <div key={item.id} className="fk-cart-item">
              <img src={item.image} alt={item.title} />
              <div className="fk-cart-info">
                <div className="fk-cart-title">{item.title}</div>
                <div className="fk-cart-price-line">
                  <span className="fk-cart-price">
                    {formatPrice(item.price)}
                  </span>
                  <span className="line-through">
                    {formatPrice(item.mrp)}
                  </span>
                </div>
                <div className="fk-cart-qty">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_CART_QTY',
                        payload: { id: item.id, qty: item.qty - 1 },
                      })
                    }
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_CART_QTY',
                        payload: { id: item.id, qty: item.qty + 1 },
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="fk-cart-remove"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                  }
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </section>

        <aside className="fk-cart-summary">
          <h3>PRICE DETAILS</h3>
          <div className="fk-summary-row">
            <span>Price ({state.cart.length} items)</span>
            <span>{formatPrice(totalMrp)}</span>
          </div>
          <div className="fk-summary-row">
            <span>Discount</span>
            <span className="fk-summary-discount">
              -{formatPrice(totalMrp - total)}
            </span>
          </div>
          <div className="fk-summary-row">
            <span>Delivery Charges</span>
            <span className="fk-summary-free">FREE</span>
          </div>
          <div className="fk-summary-row fk-summary-total">
            <span>Total Amount</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="fk-summary-saving">
            You will save{' '}
            {formatPrice(Math.max(0, totalMrp - total))} on this order
          </div>
          <button type="button" className="fk-btn-buy" disabled={!state.cart.length}>
            PLACE ORDER
          </button>
        </aside>
      </div>
    </div>
  );
}


