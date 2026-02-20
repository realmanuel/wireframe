"use client";

import {useState} from "react";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import QuickAddModal from "./components/QuickAddModal";

const ProductsDemo =[
    { id:1, name: "Product 1", price: "₦15,000", img: "/p1.jpg"},
    { id:2, name: "Product 2", price: "₦18,000", img: "/p2.jpg"},
    { id:3, name: "Product 3", price: "₦20,000", img: "/p3.jpg"},
    { id:4, name: "Product 4", price: "₦22,000", img: "/p4.jpg"},
    { id:5, name: "Product 5", price: "₦16,000", img: "/p5.jpg"},
    { id:6, name: "Product 6", price: "₦19,000", img: "/p6.jpg"},
    { id:7, name: "Product 7", price: "₦24,000", img: "/p7.jpg"},
    { id:8, name: "Product 8", price: "₦17,000", img: "/p8.jpg"},
    { id:9, name: "Product 9", price: "₦21,000", img: "/p9.jpg"},
]

export default function Shop(){
    const [selectedProduct, setSelectedProduct] = useState(null);




    return(
        <section className="mt-0 min-h-screen flex flex-col justify-center items-start py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-white text-black border-b-2 border-black overflow-x-hidden">
            <div className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-8 bg-white">
                {/**TITLE, FILTERS */}
                <h1 className="text-5xl font-semibold top-5 text-center text-black mb-10">SHOP</h1>
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