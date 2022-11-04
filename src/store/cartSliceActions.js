import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const getCartData = async () => {
            const response = await fetch(
                "https://redux-http-1a410-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
            );

            if (!response.ok) {
                throw new Error("Fetching Cart data Failed!");
            }

            const cartData = response.json();

            return cartData;
        };

        try {
            const cartData = await getCartData();
            dispatch(
                cartActions.replaceCart({
                    cartItems: cartData.cartItems || [],
                    noOfItems: cartData.noOfItems,
                })
            );
        } catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data Failed!",
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
                status: "Pending...",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        const sendData = async () => {
            const response = await fetch(
                "https://redux-http-1a410-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending Cart data Failed!");
            }
        };

        try {
            sendData();
            dispatch(
                uiAction.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data Failed!",
                })
            );
        }
    };
};
