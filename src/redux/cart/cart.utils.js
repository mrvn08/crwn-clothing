export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);

    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === newItem.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, {...newItem, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(existingCartItem){
        return cartItems.map( cartItem => {
                if(cartItem.id === itemToRemove.id){
                    if(cartItem.quantity > 1 ){
                        return {...cartItem, quantity: cartItem.quantity - 1};
                    } 
                    else { return null; }
                }
                else {
                    return cartItem;
                } 
            }
        )
    }

    return cartItems;
}