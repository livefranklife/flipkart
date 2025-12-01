import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  user: null,
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_CART_QTY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: Math.max(1, action.payload.qty) }
            : item
        ),
      };
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return ctx;
}


