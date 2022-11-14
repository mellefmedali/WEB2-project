import React, { useState } from 'react'
import { deleteitem, deleteAllItems } from '../../src/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function CartDetails() {
  const cartItems = useSelector(state => state.cartItems)
  let somme = 0
  const dispatch = useDispatch()
  const handleDeleteItem = (event, index) => {
    dispatch(deleteitem(index))
  }
  const handleDeleteAll = (event) => {
    dispatch(deleteAllItems())
  }

  return (
    <div >
      <h5 className='mb-3'>Détails du chariot</h5>
      <div className='d-flex justify-content-center'>
        <table >
          <thead>
            <tr className='border-bottom'>
              <th><h5>Article N°:</h5></th>
              <th><h5>Article</h5></th>
              <th><h5>Quantité</h5></th>
              <th><h5>Prix TTC Dt</h5></th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map(
              (e, i) => {
                somme += e.prix
                return (
                  <tr id={i} key={i}>
                    <td>{i + 1}</td>
                    <td>{e.title}</td>
                    <td>{e.cartQte}</td>
                    <td>{e.prix}</td>
                    <td><button onClick={(e) => handleDeleteItem(e, i)}>x</button></td>
                  </tr>
                )
              }
            )}
          </tbody>

          <tfoot>
            {somme == 0 ?
              <tr>
                <th></th>
                <th className='text-danger'>You don't have any element in your cart yet</th>
                <th></th>
                <th></th>
              </tr>
              :
              <tr className='border-top'>
                <th className='text-success'>Total Chariot</th>
                <th></th>
                <th></th>
                <th className='text-success'>{somme}</th>
                <th><button onClick={(e) => handleDeleteAll()}>Clear Your cart</button></th>
              </tr>}
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CartDetails