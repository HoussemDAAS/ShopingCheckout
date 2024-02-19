import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import ShoppingContext from './Shop/ShoppingContext.jsx';
function App() {
  
  return (
 <ShoppingContext>
      <Header />
      <Shop> 
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}  />
          </li>
        ))}</Shop>
</ShoppingContext>
  );
}

export default App;
