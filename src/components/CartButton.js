import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

function CartButton() {
    return (
        <>
            <Link to="/sport/cartdetails">
                <Button variant="info">
                    <img src='./images/icons/cart.svg' width="30px"
                        className='cartIcon' />
                </Button>
            </Link>
        </>
    )
}

export default CartButton