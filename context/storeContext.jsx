    "use client";

    import { createContext, useContext, useState, useEffect } from "react";

    const StoreContext = createContext();

    export function StoreProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Persist in localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
        if (savedCart) setCart(savedCart.map(item => ({ ...item, quantity: item.quantity || 1 })));
        if (savedWishlist) setWishlist(savedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [cart, wishlist]);

    // Add to Cart (merge by id and manage quantity)
    const addToCart = (product) => {
        setCart((prev) => {
        const existingIndex = prev.findIndex((p) => p.id === product.id);
        if (existingIndex !== -1) {
            const next = [...prev];
            const existing = next[existingIndex];
            next[existingIndex] = {
            ...existing,
            quantity: (existing.quantity || 1) + 1,
            };
            return next;
        }
        return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item, index) => index !== id));
    };

    const updateQuantity = (index, quantity) => {
        setCart((prev) => {
        const next = [...prev];
        if (quantity <= 0) {
            next.splice(index, 1);
        } else {
            next[index] = { ...next[index], quantity };
        }
        return next;
        });
    };

    // Wishlist toggle
    const toggleWishlist = (product) => {
        const exists = wishlist.find((item) => item.id === product.id);

        if (exists) {
        setWishlist(wishlist.filter((item) => item.id !== product.id));
        } else {
        setWishlist([...wishlist, product]);
        }
    };

    return (
        <StoreContext.Provider
        value={{
            cart,
            wishlist,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleWishlist,
            isCartOpen,
            setIsCartOpen,
        }}
        >
        {children}
        </StoreContext.Provider>
    );
    }

    export const useStore = () => useContext(StoreContext);