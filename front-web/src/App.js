import React, {useEffect, useState} from 'react';

import CardProduct from './components/CardProduct';
import Menu from './components/Menu';

import api from './services/api';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function getProduct() {

      const response = await api.get('store/findAllProduct');
  
      setProducts(response.data);
  
    }
  
    getProduct();

  },[]);
  
  return (
     <>
      <Menu/>
      <CardProduct key={products.id} products={products} />
     </>
  );
}

export default App;