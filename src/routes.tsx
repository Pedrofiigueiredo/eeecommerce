import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';

import Main from './pages/Main';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/product" component={ProductInfo} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  )
}

export default Routes;