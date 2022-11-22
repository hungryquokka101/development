import "../styles/PlushieItem.css"
import { useState } from 'react';

export default function PlushieItem(props) {
    const [count, setCount] = useState(0) // keep track of the count of current item

    const handleButtonAddCart = e => {
        e.preventDefault()
        setCount(count + 1)
        props.addToCart(props.item.name, props.item.price)
    }

    const handleButtonRemoveCart = e => {
        e.preventDefault()
        setCount(count - 1)
        props.removeFromCart(props.item.name, props.item.price)
    }

    return (
        <div className="plushie-item-box">
           <img src={props.item.image}></img>
           <h3>{props.item.name}</h3>
           <h3>{props.item.size}</h3>

           <div className="footer">
                <h3>{props.item.price}</h3>
                <button className='add-button' onClick={handleButtonAddCart}>
                    Add to Cart
                </button>
                <button className='remove-button' onClick={handleButtonRemoveCart}>
                    Remove From Cart

                </button>
            </div>
        </div>
    )
}
