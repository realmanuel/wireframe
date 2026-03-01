    "use client";
import { useStore } from "../../../context/storeContext";
import { useState, useMemo } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";


const products = [
    {id:1, name: "NKOYO", description:"A mother's story. Waste-not philosophy woven into every thread.", slug: "product-1", img: "/c1.jpg",
        variants: [
            { id: 101, size: "S", color: "Black", price: 15000 },
            { id: 102, size: "M", color: "Black", price: 15000 },
            { id: 103, size: "L", color: "Brown", price: 17000 },
        ],
    },
    {id:2, name: "DEAR GEORGE", description:"Liberation redefined. Who is George? perhaps it's you.", slug: "product-2", img: "/c1.jpg",
        variants: [
            { id: 201, size: "S", color: "Black", price: 15000 },
            { id: 202, size: "M", color: "White", price: 15000 },
            { id: 203, size: "L", color: "Brown", price: 17000 },
        ],
    },
    {id:3, name: "KITH AND KIN", description:"A labour of love. A reflection of Nigeria, of us.", slug: "product-3", img: "/c1.jpg",
        variants: [
            { id: 301, size: "S", color: "Black", price: 15000 },
            { id: 302, size: "M", color: "White", price: 15000 },
            { id: 303, size: "L", color: "Brown", price: 17000 },
        ],
    },
    {id:4, name: "EKEMINI", description:"Contemporary elegance meets traditional craft.", slug: "product-4", img: "/c1.jpg",
        variants: [
            { id: 401, size: "S", color: "Black", price: 15000 },
            { id: 402, size: "M", color: "White", price: 15000 },
            { id: 403, size: "L", color: "Brown", price: 17000 },
        ],        
    },
    {id:5, name: "BALOGUN", description:"Strength and grace. A celebration of character.", slug: "product-5", img: "/c1.jpg",
        variants: [
            { id: 501, size: "S", color: "Black", price: 15000 },
            { id: 502, size: "M", color: "White", price: 15000 },
            { id: 503, size: "L", color: "Brown", price: 17000 },
        ],        
    },
    {id:6, name: "ICONIC PIECES", description:"Signature designs. Timeless statements.", slug: "product-6", img: "/c1.jpg",
        variants: [
            { id: 601, size: "S", color: "Black", price: 15000 },
            { id: 602, size: "M", color: "White", price: 15000 },
            { id: 603, size: "L", color: "Brown", price: 17000 },
        ],
    },
    {id:7, name: "PRODUCT 7", description:"A statement piece that bridges tradition and contemporary design.", slug: "product-7", img: "/c1.jpg",
        variants: [
            { id: 701, size: "S", color: "Black", price: 24000 },
            { id: 702, size: "M", color: "Black", price: 24000 },
            { id: 703, size: "L", color: "Brown", price: 24000 },
        ],
    },
    {id:8, name: "PRODUCT 8", description:"A statement piece that bridges tradition and contemporary design.", slug: "product-8", img: "/c1.jpg",
        variants: [
            { id: 801, size: "S", color: "Black", price: 17000 },
            { id: 802, size: "M", color: "White", price: 17000 },
            { id: 803, size: "L", color: "Brown", price: 17000 },
        ],
    },
    {id:9, name: "PRODUCT 9", description:"A statement piece that bridges tradition and contemporary design.", slug: "product-9", img: "/c1.jpg",
        variants: [
            { id: 901, size: "S", color: "Black", price: 21000 },
            { id: 902, size: "M", color: "White", price: 21000 },
            { id: 903, size: "L", color: "Brown", price: 21000 },
        ],
    },
]
export default function ProductPage({ params }) {
const { addToCart } = useStore();

const product = products.find(
    (p) => p.slug === params.id || String(p.id) === String(params.id)
);
    if (!product) return notFound();

const [selectedSize, setSelectedSize] = useState(null);
const [selectedColor, setSelectedColor] = useState(null);
const [quantity, setQuantity] = useState(1);

const sizes = [...new Set(product.variants.map(v => v.size))];
const colors = [...new Set(product.variants.map(v => v.color))];

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
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT — IMAGE */}
            <div className="relative w-full aspect-square">
            <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
            />
            </div>

            {/* RIGHT — DETAILS */}
            <div>

            <h1 className="text-3xl font-normal mb-4">
                {product.name}
            </h1>

            <p className="text-xl mb-6">
                ₦{selectedVariant
                ? selectedVariant.price.toLocaleString()
                : "--"}
            </p>

            {/* SIZE */}
            <div className="mb-6">
                <p className="mb-2 text-sm">Size</p>
                <div className="flex gap-3 flex-wrap">
                {sizes.map(size => (
                    <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 text-sm ${
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

            {/* COLOR */}
            <div className="mb-6">
                <p className="mb-2 text-sm">Color</p>
                <div className="flex gap-3 flex-wrap">
                {colors.map(color => (
                    <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm ${
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

            {/* QUANTITY */}
            <div className="mb-6 flex items-center gap-4">
                <span className="text-sm">Qty</span>
                <div className="flex border">
                <button
                    className="px-4"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                    −
                </button>
                <span className="px-6 flex items-center">
                    {quantity}
                </span>
                <button
                    className="px-4"
                    onClick={() => setQuantity(q => q + 1)}
                >
                    +
                </button>
                </div>
            </div>

            {/* ADD TO CART */}
            <button
                disabled={!selectedVariant}
                onClick={handleAdd}
                className={`w-full py-4 mb-4 transition ${
                selectedVariant
                    ? "bg-black text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
                ADD TO CART
            </button>

            <button className="underline text-sm text-gray-600">
                More payment options
            </button>

            {/* DESCRIPTION */}
            <div className="mt-12">
                <h3 className="font-normal mb-3">
                Description
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
                </p>
            </div>

            </div>
        </div>
        </div>
    );
}

