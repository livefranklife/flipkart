import React, { createContext, useContext, useCallback, useState } from 'react';
import './ToastProvider.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast({ message });
    window.clearTimeout(window.__fk_toast_timer);
    window.__fk_toast_timer = window.setTimeout(() => {
      setToast(null);
    }, 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fk-toast">
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}


