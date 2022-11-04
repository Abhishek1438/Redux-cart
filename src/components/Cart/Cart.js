import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.length ? (
                    cartItems.map((cardItem) => (
                        <CartItem
                            item={{
                                title: cardItem.title,
                                quantity: cardItem.quantity,
                                total: cardItem.total,
                                price: cardItem.price,
                            }}
                            key={cardItem.id}
                        />
                    ))
                ) : (
                    <p>There is no item in your cart. Add some !!</p>
                )}
            </ul>
        </Card>
    );
};

export default Cart;
