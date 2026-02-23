"use client";

import {useState} from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import QuickAddModal from "../components/QuickAddModal";

const ProductsDemo =[
    { id:1, name: "Product 1", img: "/c1.jpg",
        variants: [
            {id:101, size: "S", color: "black", price: 15000},
            {id:102, size: "M", color: "white", price: 15000},
            {id:103, size: "L", color: "brown", price: 15000},
        ]
    },
    { id:2, name: "Product 2", img: "/c1.jpg",
        variants: [
            {id:201, size: "S", color: "black", price: 18000},
            {id:202, size: "M", color: "white", price: 18000},
            {id:203, size: "L", color: "brown", price: 18000},
        ]},
    { id:3, name: "Product 3", img: "/c1.jpg",
        variants: [
            {id:301, size: "S", color: "black", price: 20000},
            {id:302, size: "M", color: "white", price: 20000},
            {id:303, size: "L", color: "brown", price: 20000},
        ]},
    { id:4, name: "Product 4", img: "/c1.jpg",
        variants: [
            {id:401, size: "S", color: "black", price: 22000},
            {id:402, size: "M", color: "white", price: 22000},
            {id:403, size: "L", color: "brown", price: 22000},
        ]},
    { id:5, name: "Product 5", img: "/c1.jpg",
        variants: [
            {id:501, size: "S", color: "black", price: 16000},
            {id:502, size: "M", color: "white", price: 16000},
            {id:503, size: "L", color: "brown", price: 16000},
        ]},
    { id:6, name: "Product 6", img: "/c1.jpg",
        variants: [
            {id:601, size: "S", color: "black", price: 19000},
            {id:602, size: "M", color: "white", price: 19000},
            {id:603, size: "L", color: "brown", price: 19000 },
        ]},
    { id:7, name: "Product 7", img: "/c1.jpg",
        variants: [
            {id:701, size: "S", color: "black", price: 24000},
            {id:702, size: "M", color: "black", price: 24000},
            {id:703, size: "L", color: "brown", price: 24000},
        ]},
    { id:8, name: "Product 8", img: "/c1.jpg",
        variants: [
            {id:801, size: "S", color: "black", price: 17000},
            {id:802, size: "M", color: "white", price: 17000},
            {id:803, size: "L", color: "brown", price: 17000},
        ]},
    { id:9, name: "Product 9", img: "/c1.jpg",
        variants: [
            {id:901, size: "S", color: "black", price: 21000},
            {id:902, size: "M", color: "white", price: 21000},
            {id:903, size: "L", color: "brown", price: 21000},
        ]},
]

export default function Shop(){
    const [selectedProduct, setSelectedProduct] = useState(null);




    return(
        <section className="mt-0 min-h-screen flex flex-col justify-center items-start py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-white text-black border-b-2 border-black overflow-x-hidden">
            <div className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-8 bg-white">
                {/**TITLE, FILTERS */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center mt-12 mb-12 text-black tracking-widest">SHOP</h1>
                <h3 className="text-black text-sm text-center mb-10">Everyday icons. Bold reimaginings</h3>

                {/**Filters */}
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                    {["Category", "Collection", "Size", "Price", "Color", "Sort By"].map(
                        (f)=>(
                            <button key={f} className="px-3 py-2 border text-sm bg-white text-black mb-8">
                                {f} ▼
                            </button>
                        )
                    )}
                </div>
                {/**GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {ProductsDemo.map((product) =>(
                        <ProductCard 
                            key={product.id}
                            product={product}
                            onQuickAdd={()=> setSelectedProduct(product)}
                        />
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-10 text-sm">
                    <button className="px-3 py-1 border">Prev</button>
                    <button className="px-3 py-1 border">1</button>
                    <button className="px-3 py-1 border">2</button>
                    <button className="px-3 py-1 border">3</button>
                    <button className="px-3 py-1 border">Next</button>

                </div>
            </div>
            {selectedProduct && (
            <QuickAddModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
            )}
        </section>
    )
}