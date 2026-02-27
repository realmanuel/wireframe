"use client";
import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

    const relatedproducts = [
    {id:1, name: "NKOYO", price:"₦85,000", slug: "nkoyo", img: "/c1.jpg"},
    {id:2, name: "DEAR GEORGE", price:"₦95,000",  slug: "dear-george", img: "/c1.jpg"},
    {id:3, name: "KITH AND KIN", price:"₦90,000", slug: "kith-and-kin", img: "/c1.jpg"},
    {id:4, name: "EKEMINI", price:"₦110,000", slug: "ekemini", img: "/c1.jpg"},
    {id:5, name: "BALOGUN", price:"₦120,000", slug: "balogun", img: "/c1.jpg"},
    {id:6, name: "ICONIC PIECES", price:"₦150,000", slug: "iconic-pieces", img: "/c1.jpg"},
]

    const collections = {
    "nkoyo": {
        name: "NKOYO",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦85,000",
        image: "/c1.jpg",
    },
    "dear-george": {
        name: "DEAR GEORGE",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦95,000",
        image: "/c1.jpg",
    },
    "kith-and-kin": {
        name: "KITH AND KIN",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦90,000",
        image: "/c1.jpg",
    },
    "ekemini": {
        name: "EKEMINI",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦110,000",
        image: "/c1.jpg",
    },
    "balogun": {
        name: "BALOGUN",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦120,000",
        image: "/c1.jpg",
    },
    "iconic-pieces": {
        name: "ICONIC PIECES",
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
        price: "₦150,000",
        image: "/c1.jpg",
    },
    };

export default function CollectionPage({ params }) {
    const { slug } = use(params);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const thumbnailImages = ["/c1.jpg", "/c2.jpg", "/c1.jpg", "/c2.jpg", "/c1.jpg", "/c2.jpg"];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const canAddToCart = Boolean(selectedSize && selectedColor);
    const filteredRelatedProducts = relatedproducts.filter(
        (product) => product.slug !== slug
    );

    const collection = collections[slug];

    if (!collection) {
        return notFound();
    }

    return (
        <div className="bg-white min-h-screen text-black px-4 sm:px-6 lg:px-10 py-10 sm:py-16 mt-15">
        <div className="w-full max-w-7xl mx-auto items-start flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col">
                <div className="relative w-full aspect-square">
                    <Image
                        src={thumbnailImages[selectedImageIndex]}
                        alt={collection.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/**SMALLER IMAGES */}
                <div className="grid grid-cols-6 gap-2 mt-2 w-full">
                    {thumbnailImages.map((img, index) => (
                        <button
                        key={`${img}-${index}`}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-full aspect-square ${
                            selectedImageIndex === index
                                ? "border-2 border-black"
                                : "border border-black"
                        }`}
                        >
                            <Image
                            src={img}
                            alt={`${collection.name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>


            {/* RIGHT INFO */}
            <div className="relative w-full lg:w-1/2">
            <h1 className="text-xl tracking-wide mb-8">
                {collection.name}
            </h1>

            <p className="text-xl mb-6 text-bold">
                {collection.price}
            </p>


                <p className="text-[10px] italic mb-10 max-w-xs">
                    {collection.description}
                </p><hr className="mb-10"/>


            {/* SIZE */}
            <div className="mb-10 max-w-xs">
                <p className="text-[10px] mb-2">SIZE</p>
                <div className="flex flex-wrap gap-2">
                {["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                    <button
                    key={size}
                    onClick={() =>
                        setSelectedSize((current) => (current === size ? null : size))
                    }
                    className={`px-2 py-1 text-[10px] hover:bg-black hover:text-white transition ${
                        selectedSize === size
                            ? "bg-black text-white border-2 border-black"
                            : "border border-black"
                    }`}
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>

            {/**COLOURS */}
            <div className="mb-10 max-w-xs">
                <p>COLOR</p>
                <div className="flex flex-wrap gap-2">
                {[
                    { name: "black", className: "bg-black" },
                    { name: "blue", className: "bg-blue-700" },
                    { name: "amber", className: "bg-amber-200" },
                ].map((color) => (
                    <button
                    key={color.name}
                    onClick={() =>
                        setSelectedColor((current) =>
                            current === color.name ? null : color.name
                        )
                    }
                    className={`w-10 h-10 rounded-full shadow-lg transform transition-transform duration-300 hover:-translate-y-1 ${
                        color.className
                    } ${
                        selectedColor === color.name
                            ? "border-4 border-gray-400"
                            : "border border-white"
                    }`}
                    />
                ))}
                </div>
            </div>

            {/* BUTTONS */}

            <div className="mb-10">
                <p className="m-2 text-sm">QUANTITY</p>
                <div className="flex text-sm">
                    <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="bg-white text-black h-10 aspect-square p-3 text-sm border border-black hover:bg-yellow-300 transition"
                    >
                        -
                    </button>
                    <button className="bg-white text-black h-10 aspect-square p-3 text-sm tracking-wide border border-black transition">
                        {quantity}
                    </button>
                    <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="bg-white text-black h-10 aspect-square p-3 text-sm tracking-wide border border-black hover:bg-yellow-300 transition"
                    >
                        +
                    </button>
                </div>
                </div>
            <div className="flex gap-4 mt-8">
                <button
                    disabled={!canAddToCart}
                    className={`px-6 py-3 w-full text-sm tracking-wide transition ${
                        canAddToCart
                            ? "bg-black text-white hover:bg-yellow-400"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    >
                    ADD TO CART
                </button>
            </div><hr className="mt-10"/>

            <p className="text-[10px] italic mb-10 max-w-xs">Free shipping on orders over ₦50,000. Returns accepted within 14 days.</p>
            
            <div className="flex flex-col gap-7 w-full">
                <button className="border border-black border-b-3 py-2 w-full hover:bg-gray-200 hover:border-3">
                    DESCRIPTION
                </button>
                <button className="border border-black border-b-3 py-2 w-full hover:bg-gray-200 hover:border-3">
                    FABRIC AND CARE
                </button>
                <button className="border border-black border-b-3 py-2 w-full hover:bg-gray-200 hover:border-3">
                    DELIVERY & RETURNS
                </button>
            
            </div>
            
            </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-10">
            <div>
                <p className="text-center font-semibold text-3xl m-10 tracking-widest">RELATED PRODUCTS</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRelatedProducts.map((product)=>(
                    <Link key={product.id} href={`/collections/${product.slug}`} className="text-black block h-full">
                        <div className="bg-white border border-black overflow-hidden shadow-sm hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="relative group bg-white overflow-hidden aspect-square flex items-center justify-center">
                                <Image 
                                    src={product.img}
                                    alt={product.name}
                                    fill
                                />                               
                            </div>
                            <div className="p-4 h-32">
                                <h2 className="text-lg font-semibold tracking-wide text-black">{product.name}</h2>
                                <p className="mt-2 text-sm text-black">{product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    
        </div>
    );
}
