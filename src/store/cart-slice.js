import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noOfItems: 0,
    cartItems: [],
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload.cartItems;
            state.noOfItems = action.payload.noOfItems;
        },
        addToCart(state, action) {
            let itemAlreadyPresent = false;
            for (let i = 0; i < state.noOfItems; i++) {
                if (state.cartItems[i].title === action.payload.title) {
                    itemAlreadyPresent = true;
                    state.changed = true;
                    state.cartItems[i].quantity++;
                    state.cartItems[i].total += action.payload.price;
                }
            }
            if (!itemAlreadyPresent) {
                state.changed = true;
                state.cartItems.push({
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    total: action.payload.price,
                    id: state.noOfItems,
                });
                state.noOfItems++;
            }
        },
        removeFromCart(state, action) {
            for (let i = 0; i < state.noOfItems; i++) {
                if (state.cartItems[i].title === action.payload.title) {
                    if (state.cartItems[i].quantity === 1) {
                        state.cartItems.splice(i, 1);
                        state.noOfItems--;
                    } else {
                        state.cartItems[i].quantity--;
                        state.cartItems[i].total -= action.payload.price;
                    }
                }
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
