import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Product.css'
import shopActions from './shopActions'

function Product({ id, title, desc, image, price }) {
    const dispatch = useDispatch()
    return (
        <div className="product">
            <img src={image[2]} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <span><p className="price">{price}$</p><button onClick={() => dispatch(shopActions.addCart(id))}>add to cart</button></span>
                <Link to={`/${id}`}><button className="product__view" onClick={() => dispatch(shopActions.view(id))}>View more</button></Link>
            </div>

        </div>
    )
}

export default Product
