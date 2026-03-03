"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useStore } from "../../context/storeContext";

const swatchClassByColor = {
    black: "bg-black",
    white: "bg-white border border-black",
    brown: "bg-amber-700",
    blue: "bg-blue-700",
    red: "bg-red-700",
    green: "bg-green-700",
    gray: "bg-gray-500",
    grey: "bg-gray-500",
};

export default function QuickAddModal({ product, onClose }) {
    const { addToCart, showToast } = useStore();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const sizes = [...new Set(product.variants.map((v) => v.size))];
    const colors = [...new Set(product.variants.map((v) => v.color))];

    const selectedVariant = useMemo(
        () => product.variants.find((v) => v.size === selectedSize && v.color === selectedColor),
        [selectedSize, selectedColor, product.variants]
    );

    const handleAdd = () => {
        if (!selectedVariant) return;

        addToCart({
            id: selectedVariant.id,
            name: product.name,
            img: product.img,
            price: selectedVariant.price,
            size: selectedVariant.size,
            color: selectedVariant.color,
            quantity,
        });

        showToast(`${product.name} added to cart`);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />

            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                <div className="bg-white w-full max-w-md rounded-lg p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4" type="button">
                        <X />
                    </button>

                    <h2 className="text-lg font-normal mb-1">{product.name}</h2>
                    <p className="text-gray-600 mb-6">
                        NGN {(selectedVariant ? selectedVariant.price : product.variants[0].price).toLocaleString()}
                    </p>

                    <div className="mb-6">
                        <p className="text-sm mb-2">Size</p>
                        <div className="flex gap-3 flex-wrap">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setSelectedSize(size)}
                                    className={`border px-3 py-1 text-sm ${
                                        selectedSize === size ? "bg-black text-white" : ""
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-10 max-w-xs">
                        <p className="text-sm mb-2">Color</p>
                        <div className="flex flex-wrap gap-2">
                            {colors.map((color) => {
                                const normalized = String(color).toLowerCase();
                                const colorClass = swatchClassByColor[normalized] || "bg-gray-300 border border-black";
                                return (
                                    <button
                                        key={color}
                                        type="button"
                                        title={String(color)}
                                        aria-label={String(color)}
                                        onClick={() => setSelectedColor(String(color))}
                                        className={`w-10 h-10 rounded-full shadow-sm transform transition-transform duration-200 hover:-translate-y-1 ${colorClass} ${
                                            selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
                                        }`}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-6 flex items-center gap-4">
                        <p className="text-sm">Qty</p>
                        <div className="flex border">
                            <button
                                type="button"
                                className="px-3"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 flex items-center">{quantity}</span>
                            <button type="button" className="px-3" onClick={() => setQuantity((q) => q + 1)}>
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        disabled={!selectedVariant}
                        onClick={handleAdd}
                        className={`w-full py-3 text-sm mb-3 transition ${
                            selectedVariant
                                ? "bg-black text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        ADD TO CART
                    </button>

                    <button type="button" className="w-full text-sm underline text-center text-gray-600">
                        More payment options
                    </button>
                </div>
            </div>
        </>
    );
}
