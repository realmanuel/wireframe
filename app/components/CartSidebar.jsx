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
        const qty = item.quantity || 1;
        const price = parseInt(String(item.price).replace(/[₦,]/g, "")) || 0;
        return acc + price * qty;
    }, 0);

    return (
        <>
        {/* Overlay */}
        <div
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
            isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsCartOpen(false)}
        />

        {/* Sidebar */}
        <div
            className={`fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b-black">
            <h2 className="text-lg text-black ">Shopping Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
                <X className="stroke-black"/>
            </button>
            </div><hr className="border-black"/>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 border-b-black">
            {cart.length === 0 && (
                <p className="text-sm text-black">Your cart is empty.</p>
            )}

            {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                {/* Image */}
                <div className="relative w-20 h-24">
                    <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1">
                    <div>
                    <p className="text-sm text-black">{item.name}</p>
                    <p className="text-sm text-black">{item.price}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 text-sm">
                    <button
                        onClick={() =>
                        updateQuantity(index, item.quantity - 1)
                        }
                        className="text-black px-2 border border-black"
                    >
                        -
                    </button>

                    <span className="text-black text-center border border-black w-5">{item.quantity}</span>

                    <button
                        onClick={() =>
                        updateQuantity(index, item.quantity + 1)
                        }
                        className="text-black px-2 border border-black"
                    >
                        +
                    </button>

                    <button
                        onClick={() => removeFromCart(index)}
                        className="ml-auto text-xs underline text-black"
                    >
                        REMOVE
                    </button>
                    </div><hr className="border-black"/>
                </div>
                </div>
            ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t space-y-4 text-black">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <button className="w-full border py-3 text-sm text-black">
                View Cart
            </button>

            <button className="w-full bg-white text-black py-3 text-sm border border-black">
                Checkout
            </button>
            </div>
        </div>
        </>
    );
    }