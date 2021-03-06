import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const subtractCartItem = item => ({
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item
})

export const removeCartItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})