import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();




export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };
    
    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                localStorage.removeItem("cartItems");
            }
        }
        setIsInitialized(true);
    }, []);

    // Save cart to localStorage only after initial load
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
