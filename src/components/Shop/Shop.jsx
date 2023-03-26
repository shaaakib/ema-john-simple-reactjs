import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 m-12">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
}
