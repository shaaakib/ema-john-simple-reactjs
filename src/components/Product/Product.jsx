import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {
  const { img, name, seller, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div>
      <div className="card h-[508px] bg-base-100 shadow-xl border border-secondary">
        <figure className="m-3">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="mb-8">Price: ${price}</p>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings} start</p>
        </div>
        <button
          onClick={() => handleAddToCart(props.product)}
          className="bg-accent py-2 rounded-b-2xl hover:bg-primary"
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
}
