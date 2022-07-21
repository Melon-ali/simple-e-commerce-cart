import React from 'react'

export default function Cart(props) {

  const {cart} = props || {}

  const totalReducer = (preValue, currentValue) => preValue + currentValue.price;

  const total = cart.reduce( totalReducer , 0).toFixed(2);

  const tax = (0.1 * total).toFixed(2);

  const totalPrice = parseFloat(total + tax).toFixed(2);

  return (
    <div>
        <h3><i class="fas fa-shopping-cart"></i>
          {cart.length}
        </h3>

        <h2>{total}</h2>
        <h3>Tex: {tax}</h3>
        <h1>Total Price: {totalPrice}</h1>

        <ul>
          {
            cart.map(product=><li>{product.name}</li>)
          }
        </ul>
    </div>
  )
}
