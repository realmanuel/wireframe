    "use client";

    import { useState, useMemo } from "react";
    import { X } from "lucide-react";
    import { useStore } from "../../context/storeContext";

    export default function QuickAddModal({ product, onClose }) {
    const { addToCart } = useStore();

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Get unique sizes + colors
    const sizes = [...new Set(product.variants.map(v => v.size))];
    const colors = [...new Set(product.variants.map(v => v.color))];

    // Finds matching variant (Shopify logic)
    const selectedVariant = useMemo(() => {
        return product.variants.find(
        v => v.size === selectedSize && v.color === selectedColor
        );
    }, [selectedSize, selectedColor, product.variants]);

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
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md rounded-lg p-6 relative">

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4"
            >
                <X />
            </button>

            <h2 className="text-lg font-semibold mb-1">
                {product.name}
            </h2>
            {/*determine price to show based on selected variant or default to first variant price**/}
            <p className="text-gray-600 mb-6">
                ₦{selectedVariant ? selectedVariant.price.toLocaleString() : product.variants[0].price.toLocaleString()}
            </p>

            {/* Size Options */}
            <div className="mb-6">
                <p className="text-sm mb-2">Size</p>
                <div className="flex gap-3 flex-wrap">
                {sizes.map(size => (
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

            {/* Color Options */}
            <div className="mb-6">
                <p className="text-sm mb-2">Color</p>
                <div className="flex gap-3 flex-wrap">
                {colors.map(color => (
                    <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border text-sm ${
                        selectedColor === color
                        ? "bg-black text-white"
                        : ""
                    }`}
                    >
                    {color}
                    </button>
                ))}
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6 flex items-center gap-4">
                <p className="text-sm">Qty</p>

                <div className="flex border">
                <button
                    className="px-3"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                    −
                </button>

                <span className="px-4 flex items-center">
                    {quantity}
                </span>

                <button
                    className="px-3"
                    onClick={() => setQuantity(q => q + 1)}
                >
                    +
                </button>
                </div>
            </div>

            {/* Add Button */}
            <button
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

            {/* More payment options */}
            <button className="w-full text-sm underline text-center text-gray-600">
                More payment options
            </button>
            </div>
        </div>
        </>
    );
    }