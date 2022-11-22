import "../styles/PlushieItem.css"
import { useState } from 'react';

// This component displays a single plushie item
// const plushieData = [
//     { name: "Strawberry Korilakkuma Plushie", type: "Rilakkuma", price: 35, size: "medium", 
//     numOfLikes: 20, isAvailable: True}
//   ]

export default function PlushieItem(props) {
    const [count, setCount] = useState(0) // keep track of the count of current item

    const handleButtonAddCart = e => {
        e.preventDefault()
        setCount(count + 1)
        props.addToCart(props.item.name, props.item.price)
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
            </div>
        </div>
    )
}
