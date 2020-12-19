import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import './CartItem.css'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import shopActions from './shopActions'

function CartItem({ image, title, id, price, quantity }) {
    const dispatch = useDispatch()
    return (
        <div className="cartItem">
            <div className="Main">
            <img src={image} alt=""/>

            <div className="ItemProp">
                <h1>{title}</h1>
                <p>descrition....</p>
                <h3>{price}$</h3>
            </div>
            </div>

            <div className="quantity">
                <Button onClick={() => dispatch(shopActions.removeCart(id))} color="primary">remove</Button>
                <AddIcon onClick={() => dispatch(shopActions.increase(id))} />
                <h1>{quantity}</h1>
                <RemoveIcon onClick={() => dispatch(shopActions.decrease(id))} />
            </div>
        </div>
    )
}

export default CartItem
