export default function Cart(props) {
    return (
        <div className="cart">
            <h2>Cart</h2>

            {/* render a list of items in the cart */}
            {[...props.cart].map((item) => (
                <div>
                <p>Name: {item[0]}</p>
                <p>Count: {item[1]}</p>
                </div>
            ))}

            {/* display the total price of items in the cart */}
            <div>
                <p>Total Price: {props.totalPrice}</p>
            </div>
        </div>
    )
}