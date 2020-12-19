import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'
import './Appbody.css'

function Appbody() {
    const store_items = useSelector(state => state.storee)
    if(store_items.length === 0) {
        return (
        <div>Store is empty</div>
    )}else{
        return (
            <div className ="Appbody">
                {
                    store_items.map(item => <Product id={item.id} key={item.id} title={item.title} desc={item.desc} image={item.img} price={item.price} />)
                }
            </div>
        )
    }
}

export default Appbody
