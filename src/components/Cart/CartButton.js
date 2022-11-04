import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const cartToggleHandler = () => {
        dispatch(uiAction.toggleCart());
    };

    const cartItems = useSelector((state) => state.cart.cartItems);
    const noOfItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <button className={classes.button} onClick={cartToggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{noOfItems}</span>
        </button>
    );
};

export default CartButton;
