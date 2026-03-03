"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext();
const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

function readStoredArray(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function StoreProvider({ children }) {
    const [cart, setCart] = useState(() => {
        if (typeof window === "undefined") return [];
        return readStoredArray(CART_KEY).map((item) => ({
            ...item,
            quantity: Math.max(1, Number(item.quantity) || 1),
        }));
    });
    const [wishlist, setWishlist] = useState(() => {
        if (typeof window === "undefined") return [];
        return readStoredArray(WISHLIST_KEY);
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [toast, setToast] = useState({ open: false, message: "" });

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        const syncFromStorage = (event) => {
            if (event.key === CART_KEY) {
                setCart(
                    readStoredArray(CART_KEY).map((item) => ({
                        ...item,
                        quantity: Math.max(1, Number(item.quantity) || 1),
                    }))
                );
            }
            if (event.key === WISHLIST_KEY) {
                setWishlist(readStoredArray(WISHLIST_KEY));
            }
        };

        window.addEventListener("storage", syncFromStorage);
        return () => window.removeEventListener("storage", syncFromStorage);
    }, []);

    useEffect(() => {
        if (!toast.open) return;
        const timer = setTimeout(() => {
            setToast((prev) => ({ ...prev, open: false }));
        }, 2200);
        return () => clearTimeout(timer);
    }, [toast.open]);

    const showToast = (message) => {
        setToast({ open: true, message });
    };

    const addToCart = (product) => {
        const quantityToAdd = Math.max(1, Number(product.quantity) || 1);

        setCart((prev) => {
            const existingIndex = prev.findIndex((p) => p.id === product.id);
            if (existingIndex !== -1) {
                const next = [...prev];
                const existing = next[existingIndex];
                next[existingIndex] = {
                    ...existing,
                    quantity: Math.max(1, Number(existing.quantity) || 1) + quantityToAdd,
                };
                return next;
            }
            return [...prev, { ...product, quantity: quantityToAdd }];
        });
    };

    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
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

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.some((item) => item.id === product.id);
            if (exists) return prev.filter((item) => item.id !== product.id);
            return [...prev, product];
        });
    };

    const cartCount = useMemo(
        () => cart.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0),
        [cart]
    );

    return (
        <StoreContext.Provider
            value={{
                cart,
                wishlist,
                cartCount,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                isCartOpen,
                setIsCartOpen,
                showToast,
            }}
        >
            {children}
            <div
                aria-live="polite"
                className={`fixed bottom-4 left-1/2 z-[90] -translate-x-1/2 transform rounded border border-black bg-white px-4 py-2 text-sm text-black shadow transition-all duration-200 ${
                    toast.open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
                }`}
            >
                {toast.message}
            </div>
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);
