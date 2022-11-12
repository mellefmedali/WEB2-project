import React, { useState } from 'react'
import cartItems from '../../src/store/cartSlice'
import { useSelector } from 'react-redux'

function CartDetails() {
  const cartItems = useSelector(state => state.cartItems)
  let somme = 0
  console.log(cartItems)
  return (
    <div >
      <h5>Détails du chariot</h5>
      <div className='d-flex justify-content-center'>
        <table >
          <tr className='border-bottom'>
            <th><h5>Article N°: </h5></th> <th><h5>Article</h5></th> <th><h5>Prix TTC Dt</h5></th>
          </tr>
          {cartItems.map(
            (e, i) => {
              somme += e.prix
              return (
                <tr>
                  <td>{i + 1}</td> <td>{e.title}</td> <td>{e.prix}</td>
                </tr>
              )
            }
          )}
          <tr>
            <th>Total Chariot </th> <th></th> <th>{somme}</th>
          </tr>
        </table>
      </div>
      {/* <h4>Total Chariot : {somme} Dt</h4> */}
    </div>
  )
}

export default CartDetails