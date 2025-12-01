import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './AuthPage.css';

export default function AuthPage() {
  const { dispatch } = useStore();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name || 'Flipkart User',
      email: email || 'user@example.com',
    };
    dispatch({ type: 'LOGIN', payload: user });
    navigate('/');
  };

  return (
    <div className="fk-auth-page">
      <div className="fk-auth-card">
        <div className="fk-auth-left">
          <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="fk-auth-right">
          <form onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="fk-auth-field">
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="fk-auth-field">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="fk-auth-btn">
              {mode === 'login' ? 'Request OTP' : 'Signup'}
            </button>
          </form>
          <div className="fk-auth-toggle">
            {mode === 'login' ? (
              <>
                <span>New to Flipkart clone? </span>
                <button type="button" onClick={() => setMode('signup')}>
                  Create an account
                </button>
              </>
            ) : (
              <>
                <span>Existing User? </span>
                <button type="button" onClick={() => setMode('login')}>
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


