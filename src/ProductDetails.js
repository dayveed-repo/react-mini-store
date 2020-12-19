import React from 'react'
import { useSelector } from 'react-redux'
import { Rating }from "@material-ui/lab"
import "./ProductDetails.css"

function ProductDetails() {
    const view = useSelector(state => state.viewed_item)
    return (
        <div className="Product__details">         
            <img src={view && view.img[1]} alt="" />
        <div className="Product__details__main" >
            <div className="Product__details__submain">
                <h1>{view && view.title}</h1>
                <p>nike product  | official sponsor</p>
                <Rating name="size-medium" defaultValue={4} readOnly />
                <h1>${view && view.price}</h1>
            </div>
            
            <div className="product__details__size">
                <h3>Sizes</h3>
                <div>
                    <button>39</button>
                    <button>40</button>
                    <button>41</button>
                    <button>42</button>
                    <button>43</button>
                </div>
            </div>

            <div className="Product__description">
                <h2>description</h2>
                <p>{view.moreInfo}</p>
            </div>
        </div>
        </div>
    )
}

export default ProductDetails
