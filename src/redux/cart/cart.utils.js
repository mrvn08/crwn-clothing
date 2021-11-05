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

export const subtractItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === itemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
}