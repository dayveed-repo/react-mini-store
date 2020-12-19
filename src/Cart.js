import React from 'react'
import CartItem from './CartItem.js'
import './Cart.css'
import { useSelector } from 'react-redux'
function Cart() {
    const total = useSelector(state => state.total)
    const cart_item = useSelector(state => state.cartItem)
    return (
        <div className="Cart">
            <div className ="head">
                <h1>Your cart Items</h1> 
                <h2>Total: {total}$</h2>
            </div>

            <div className="Items">
                {
                    cart_item.length === 0 ? <h2>empty cart</h2> : cart_item.map(item => <CartItem key={item.id} id={item.id} title={item.title} image={item.img[0]} quantity={item.quantity} price={item.price} />)
                }
            </div>
        </div>
    )
}

export default Cart
