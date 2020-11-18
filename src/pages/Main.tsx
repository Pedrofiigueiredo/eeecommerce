import React from 'react';

import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SignModal from '../components/SignModal';
import WarningBar from '../components/WarningBar';

function App() {
  return (
    <div className="Main">
      {/* <SignModal /> */}
      <TopBar />
      <Header />
      <WarningBar />
      
      <Layout />

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
