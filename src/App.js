import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { ToastProvider } from './components/ToastProvider';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage';
import SellerPage from './pages/SellerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import StoriesPage from './pages/StoriesPage';
import HelpPaymentsPage from './pages/HelpPaymentsPage';
import HelpShippingPage from './pages/HelpShippingPage';
import HelpCancellationPage from './pages/HelpCancellationPage';
import FaqPage from './pages/FaqPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import TermsPage from './pages/TermsPage';
import SecurityPage from './pages/SecurityPage';
import PrivacyPage from './pages/PrivacyPage';
import OrdersPage from './pages/OrdersPage';
import './App.css';

function App() {
  return (
    <ToastProvider>
      <StoreProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:name" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/seller" element={<SellerPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/help/payments" element={<HelpPaymentsPage />} />
              <Route path="/help/shipping" element={<HelpShippingPage />} />
              <Route
                path="/help/cancellations"
                element={<HelpCancellationPage />}
              />
              <Route path="/help/faq" element={<FaqPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/policy/returns" element={<ReturnPolicyPage />} />
              <Route path="/policy/terms" element={<TermsPage />} />
              <Route path="/policy/security" element={<SecurityPage />} />
              <Route path="/policy/privacy" element={<PrivacyPage />} />
            </Routes>
          </Layout>
        </Router>
      </StoreProvider>
    </ToastProvider>
  );
// Flipkart Clone - Fresh Deployment
}

export default App;
