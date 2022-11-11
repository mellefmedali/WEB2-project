import React from 'react'
import cartItems from '../../src/store/cartSlice'
import {useSelector} from 'react-redux'

function CartDetails() {
  const cartItems = useSelector(state =>state.cartItems)
    console.log(cartItems)
  return (
    <div>
        <h5>Liste des articles</h5>
        {cartItems.map((e,i)=><div>
          <span>Art. n°{i+1}: </span>{e.title} - PUTTC: {e.prix} Dt
          </div>)}
    </div>
  )
}

export default CartDetails