"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useStore } from "../../context/storeContext";

export default function CartSidebar() {
    const {
        cart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
    } = useStore();

    const subtotal = cart.reduce((acc, item) => {
        const qty = Number(item.quantity) || 1;
        const priceRaw = item.price;
        const price =
            typeof priceRaw === "number"
                ? priceRaw
                : parseInt(String(priceRaw).replace(/[^0-9]/g, ""), 10) || 0;
        return acc + price * qty;
    }, 0);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
                    isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsCartOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4 sm:p-6 border-b-black">
                    <h2 className="text-base sm:text-lg text-black ">Shopping Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} type="button">
                        <X className="stroke-black h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>
                <hr className="border-black" />

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 border-b-black">
                    {cart.length === 0 && <p className="text-sm text-black">Your cart is empty.</p>}

                    {cart.map((item, index) => (
                        <div key={index} className="flex gap-3 sm:gap-4">
                            <div className="relative w-16 h-20 sm:w-20 sm:h-24">
                                <Image src={item.img} alt={item.name} fill className="object-cover" />
                            </div>

                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <p className="text-xs sm:text-sm text-black">{item.name}</p>
                                    <p className="text-xs sm:text-sm text-black">{item.price}</p>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                    <button
                                        type="button"
                                        onClick={() => updateQuantity(index, item.quantity - 1)}
                                        className="text-black px-1 sm:px-2 border border-black"
                                    >
                                        -
                                    </button>

                                    <span className="text-black text-center border border-black w-4 sm:w-5">
                                        {item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => updateQuantity(index, item.quantity + 1)}
                                        className="text-black px-1 sm:px-2 border border-black"
                                    >
                                        +
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(index)}
                                        className="ml-auto text-xs underline text-black"
                                    >
                                        REMOVE
                                    </button>
                                </div>
                                <hr className="border-black" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 sm:p-6 border-t space-y-4 text-black">
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>NGN {subtotal.toLocaleString()}</span>
                    </div>

                    <button className="w-full border py-2 sm:py-3 text-xs sm:text-sm text-black" type="button">
                        View Cart
                    </button>

                    <button
                        className="w-full bg-white text-black py-2 sm:py-3 text-xs sm:text-sm border border-black"
                        type="button"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}
