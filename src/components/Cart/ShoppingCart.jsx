import React, {useState} from 'react';
import {INITIAL_CART} from '../../data/mockCart';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const [cart, setCart] = useState(INITIAL_CART);

        // TODO 1: The Engine (Update Quantity & Garbage Collection)
        // It takes an ID and an amount (+1 or -1)
        // Use setCart with prevCart.
        // First chain: .map() -> If ID matches, return new object with updated quantity. If not, return raw item.
        // Second chain: .filter() -> Only keep items where item.quantity > 0.
        const updateQuantity = (id, amount) => {
            // Your map and filter logic here
                setCart(prevCart => prevCart.map(item => 
                    item.id === id ?
                    {   
                        ...item,
                        quantity: item.quantity + amount
                    } :
                    item
                ).filter(item => item.quantity > 0)
            )
        };

        // TODO 2: Derived State (The Math Engine)
        // Calculate these on the fly. Do NOT use useState for these!
        // Hint for subtotal: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const subtotal = cart.reduce((paper,item) => paper + (item.price * item.quantity), 0);
        const taxRate = 0.10; // 10% tax
        const taxAmount = subtotal * taxRate;
        const total = subtotal + taxAmount;

    

}

export default ShoppingCart;