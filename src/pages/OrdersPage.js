import React from 'react';
import './OrdersPage.css';

const orders = [
  {
    id: 'OD1234567890',
    date: '2025-11-28',
    status: 'Delivered',
    itemTitle: 'Smartphone Pro Max (128 GB, Midnight Black)',
    thumb:
      'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/h/x/-original-imahf4gyh2tzedyz.jpeg?q=70',
    amount: 69999,
    steps: ['Ordered', 'Shipped', 'Out for Delivery', 'Delivered'],
  },
  {
    id: 'OD1234567891',
    date: '2025-11-20',
    status: 'Shipped',
    itemTitle: 'Ultra HD 4K Smart LED TV (55 inch)',
    thumb:
      'https://rukminim2.flixcart.com/image/416/416/xif0q/television/9/1/9/-original-imagv25tf8h3g4yj.jpeg?q=70',
    amount: 42999,
    steps: ['Ordered', 'Shipped'],
  },
];

export default function OrdersPage() {
  return (
    <div className="fk-orders-page">
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="fk-order-card">
          <div className="fk-order-top">
            <div>
              <div className="fk-order-id">Order ID: {order.id}</div>
              <div className="fk-order-date">Placed on {order.date}</div>
            </div>
            <div className="fk-order-amount">
              Total: ₹{order.amount.toLocaleString('en-IN')}
            </div>
          </div>
          <div className="fk-order-middle">
            <img src={order.thumb} alt={order.itemTitle} />
            <div>
              <div className="fk-order-title">{order.itemTitle}</div>
              <div className="fk-order-status">{order.status}</div>
            </div>
          </div>
          <div className="fk-order-timeline">
            {['Ordered', 'Shipped', 'Out for Delivery', 'Delivered'].map(
              (step) => {
                const done = order.steps.includes(step);
                return (
                  <div
                    key={step}
                    className={`fk-order-step ${done ? 'done' : ''}`}
                  >
                    <div className="fk-order-step-dot" />
                    <span>{step}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


