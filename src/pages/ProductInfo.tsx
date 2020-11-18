import React from 'react';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import ProductDescription from '../components/ProductDescription';
import Header from '../components/Header';

function App() {
  return (
    <div className="Main">
      <TopBar />
      <Header />

      <ProductDescription />

      <Footer />
    </div>
  );
}

export default App;
