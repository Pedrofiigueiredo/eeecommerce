import React from 'react';

import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import CartPage from '../components/CartPage';
import Header from '../components/Header';
import WarningBar from '../components/WarningBar';

const Cart: React.FC = () => {
  return (
    <>
      <TopBar />
      <Header />
      <WarningBar />

      <CartPage />

      <Footer />
    </>
  );
}

export default Cart;
