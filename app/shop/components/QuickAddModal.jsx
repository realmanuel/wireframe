    "use client";

    import { useState } from "react";
    import { X } from "lucide-react";
    import { useStore } from "../../../context/storeContext";

    export default function QuickAddModal({ product, onClose }) {
    const { addToCart } = useStore();

    const sizes = ["S", "M", "L", "XL"];
    const colors = ["#000000", "#ffffff", "#8B5E3C"];

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleAdd = () => {
        if (!selectedSize || !selectedColor) return;

        addToCart({
        ...product,
        size: selectedSize,
        color: selectedColor,
        });

        onClose();
    };

    return (
        <>
        {/* Overlay */}
        <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
        />

        {/* Modal */}
        <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
            <div className="bg-white w-full max-w-md p-6 relative text-black">

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4"
            >
                <X className="stroke-black" />
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-1">
                {product.name}
            </h2>

            <p className="text-gray-600 mb-6">
                {product.price}
            </p>

            {/* Sizes */}
            <div className="mb-6">
                <p className="text-sm mb-2">Size</p>
                <div className="flex gap-3">
                {sizes.map((size) => (
                    <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-3 py-1 text-sm ${
                        selectedSize === size
                        ? "bg-black text-white"
                        : ""
                    }`}
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
                <p className="text-sm mb-2">Color</p>
                <div className="flex gap-3">
                {colors.map((color) => (
                    <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border ${
                        selectedColor === color
                        ? "ring-2 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    />
                ))}
                </div>
            </div>

            {/* Add to cart */}
            <button
                onClick={handleAdd}
                className="w-full bg-black text-white py-3 text-sm mb-3"
            >
                ADD TO CART
            </button>

            {/* More payment options */}
            <button className="text-sm underline text-gray-600 w-full text-center">
                More payment options
            </button>
            </div>
        </div>
        </>
    );
    }