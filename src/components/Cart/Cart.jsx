import React from 'react';

export default function Cart({ cart }) {
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="bg-orange-200 p-5 sticky top-0">
      <h4 className="text-lg font-bold text-center my-5">Order Summary</h4>
      <p className="py-2 text-xl">Selected Item: {cart.length}</p>
      <p className=" text-xl">Total Price: ${totalPrice}</p>
      <p className="py-2 text-xl">Shipping: {totalShipping}</p>
      <p className=" text-xl">Tax: {tax.toFixed(2)}</p>
      <h6 className="py-2 text-xl">Grand Total: {grandTotal.toFixed(2)}</h6>
    </div>
  );
}
