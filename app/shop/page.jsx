"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import QuickAddModal from "../components/QuickAddModal";

const productsDemo = [
    {
        id: 1,
        slug: "product1",
        name: "PRODUCT 1",
        img: "/c1.jpg",
        variants: [
            { id: 101, size: "S", color: "black", price: 15000 },
            { id: 102, size: "M", color: "white", price: 15000 },
            { id: 103, size: "L", color: "brown", price: 15000 },
        ],
    },
    {
        id: 2,
        slug: "product2",
        name: "PRODUCT 2",
        img: "/c1.jpg",
        variants: [
            { id: 201, size: "S", color: "black", price: 18000 },
            { id: 202, size: "M", color: "white", price: 18000 },
            { id: 203, size: "L", color: "brown", price: 18000 },
        ],
    },
    {
        id: 3,
        slug: "product3",
        name: "PRODUCT 3",
        img: "/c1.jpg",
        variants: [
            { id: 301, size: "S", color: "black", price: 20000 },
            { id: 302, size: "M", color: "white", price: 20000 },
            { id: 303, size: "L", color: "brown", price: 20000 },
        ],
    },
    {
        id: 4,
        slug: "product4",
        name: "PRODUCT 4",
        img: "/c1.jpg",
        variants: [
            { id: 401, size: "S", color: "black", price: 22000 },
            { id: 402, size: "M", color: "white", price: 22000 },
            { id: 403, size: "L", color: "brown", price: 22000 },
        ],
    },
    {
        id: 5,
        slug: "product5",
        name: "PRODUCT 5",
        img: "/c1.jpg",
        variants: [
            { id: 501, size: "S", color: "black", price: 16000 },
            { id: 502, size: "M", color: "white", price: 16000 },
            { id: 503, size: "L", color: "brown", price: 16000 },
        ],
    },
    {
        id: 6,
        slug: "product6",
        name: "PRODUCT 6",
        img: "/c1.jpg",
        variants: [
            { id: 601, size: "S", color: "black", price: 19000 },
            { id: 602, size: "M", color: "white", price: 19000 },
            { id: 603, size: "L", color: "brown", price: 19000 },
        ],
    },
    {
        id: 7,
        slug: "product7",
        name: "PRODUCT 7",
        img: "/c1.jpg",
        variants: [
            { id: 701, size: "S", color: "black", price: 24000 },
            { id: 702, size: "M", color: "black", price: 24000 },
            { id: 703, size: "L", color: "brown", price: 24000 },
        ],
    },
    {
        id: 8,
        slug: "product8",
        name: "PRODUCT 8",
        img: "/c1.jpg",
        variants: [
            { id: 801, size: "S", color: "black", price: 17000 },
            { id: 802, size: "M", color: "white", price: 17000 },
            { id: 803, size: "L", color: "brown", price: 17000 },
        ],
    },
    {
        id: 9,
        slug: "product9",
        name: "PRODUCT 9",
        img: "/c1.jpg",
        variants: [
            { id: 901, size: "S", color: "black", price: 21000 },
            { id: 902, size: "M", color: "white", price: 21000 },
            { id: 903, size: "L", color: "brown", price: 21000 },
        ],
    },
];

const SORT_OPTIONS = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A-Z" },
];

function getMinPrice(product) {
    return Math.min(...product.variants.map((variant) => Number(variant.price) || 0));
}

function inPriceRange(price, range) {
    if (range === "all") return true;
    if (range === "under-18000") return price < 18000;
    if (range === "18000-21000") return price >= 18000 && price <= 21000;
    if (range === "above-21000") return price > 21000;
    return true;
}

function formatColor(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1).toLowerCase();
}

export default function Shop() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedSize = searchParams.get("size") || "all";
    const selectedColor = searchParams.get("color") || "all";
    const selectedPrice = searchParams.get("price") || "all";
    const selectedSort = searchParams.get("sort") || "featured";

    const sizeOptions = useMemo(
        () => ["all", ...new Set(productsDemo.flatMap((p) => p.variants.map((v) => v.size)))],
        []
    );

    const colorOptions = useMemo(
        () => [
            "all",
            ...new Set(
                productsDemo.flatMap((p) => p.variants.map((v) => String(v.color).toLowerCase()))
            ),
        ],
        []
    );

    const filteredProducts = useMemo(() => {
        const list = productsDemo.filter((product) => {
            const sizeMatch =
                selectedSize === "all" || product.variants.some((variant) => variant.size === selectedSize);

            const colorMatch =
                selectedColor === "all" ||
                product.variants.some(
                    (variant) => String(variant.color).toLowerCase() === String(selectedColor).toLowerCase()
                );

            const minPrice = getMinPrice(product);
            const priceMatch = inPriceRange(minPrice, selectedPrice);

            return sizeMatch && colorMatch && priceMatch;
        });

        const sorted = [...list];
        if (selectedSort === "price-asc") {
            sorted.sort((a, b) => getMinPrice(a) - getMinPrice(b));
        } else if (selectedSort === "price-desc") {
            sorted.sort((a, b) => getMinPrice(b) - getMinPrice(a));
        } else if (selectedSort === "name-asc") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sorted.sort((a, b) => a.id - b.id);
        }

        return sorted;
    }, [selectedSize, selectedColor, selectedPrice, selectedSort]);

    const updateQuery = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!value || value === "all" || (key === "sort" && value === "featured")) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    };

    const clearFilters = () => {
        router.replace(pathname, { scroll: false });
    };

    return (
        <div className="min-h-screen bg-white text-black border-b border-black overflow-x-clip">
            <div className="w-full max-w-[1800px] mx-auto px-[clamp(0.75rem,2.5vw,3rem)] py-[clamp(1.5rem,3vw,3.5rem)]">
                <h1 className="text-[clamp(1.4rem,2.4vw,3rem)] font-semibold text-center mb-[clamp(0.6rem,1.2vw,1.1rem)] mt-12 text-black tracking-[clamp(0.08em,0.2vw,0.2em)]">
                    SHOP
                </h1>
                <h3 className="text-black text-[clamp(0.9rem,1vw,1.15rem)] text-center mb-[clamp(1rem,1.8vw,2rem)]">
                    Everyday icons. Bold reimaginings
                </h3>

                <div className="flex flex-wrap items-end gap-3 mb-[clamp(0.8rem,1.4vw,1.4rem)]">
                    <label className="text-xs flex flex-col gap-1">
                        Size
                        <select
                            value={selectedSize}
                            onChange={(e) => updateQuery("size", e.target.value)}
                            className="border px-3 py-2 text-sm bg-white"
                        >
                            {sizeOptions.map((size) => (
                                <option key={size} value={size}>
                                    {size === "all" ? "All" : size}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="text-xs flex flex-col gap-1">
                        Color
                        <select
                            value={selectedColor}
                            onChange={(e) => updateQuery("color", e.target.value)}
                            className="border px-3 py-2 text-sm bg-white"
                        >
                            {colorOptions.map((color) => (
                                <option key={color} value={color}>
                                    {color === "all" ? "All" : formatColor(color)}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="text-xs flex flex-col gap-1">
                        Price
                        <select
                            value={selectedPrice}
                            onChange={(e) => updateQuery("price", e.target.value)}
                            className="border px-3 py-2 text-sm bg-white"
                        >
                            <option value="all">All</option>
                            <option value="under-18000">Under NGN 18,000</option>
                            <option value="18000-21000">NGN 18,000 - 21,000</option>
                            <option value="above-21000">Above NGN 21,000</option>
                        </select>
                    </label>

                    <label className="text-xs flex flex-col gap-1">
                        Sort
                        <select
                            value={selectedSort}
                            onChange={(e) => updateQuery("sort", e.target.value)}
                            className="border px-3 py-2 text-sm bg-white"
                        >
                            {SORT_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </label>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="border px-3 py-2 text-sm hover:bg-black hover:text-white"
                    >
                        Clear Filters
                    </button>
                </div>
                <hr className="mb-[clamp(0.9rem,1.6vw,1.8rem)]" />

                <div className="mb-4 text-sm">
                    Showing {filteredProducts.length} of {productsDemo.length} products
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="border border-black p-8 text-center">
                        <p className="text-sm mb-3">No products match these filters.</p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="border px-3 py-2 text-sm hover:bg-black hover:text-white"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[clamp(0.5rem,1vw,1.25rem)]">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={`/shop/${product.slug}`} className="block h-full min-w-0">
                                <ProductCard
                                    product={product}
                                    onQuickAdd={() => setSelectedProduct(product)}
                                />
                            </Link>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-3 mt-[clamp(1.25rem,2.3vw,2.5rem)] text-[clamp(0.82rem,0.9vw,1rem)]">
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">
                        Prev
                    </button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">
                        1
                    </button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">
                        2
                    </button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">
                        3
                    </button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">
                        Next
                    </button>
                </div>
            </div>

            {selectedProduct && <QuickAddModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    );
}
