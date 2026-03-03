"use client";

import {useState} from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import QuickAddModal from "../components/QuickAddModal";

const bestSellers =[
    { id:1, name: "PRODUCT 1", slug:"product1", img: "/c1.jpg",
        variants: [
            {id:101, size: "S", color: "black", price: 15000},
            {id:102, size: "M", color: "white", price: 15000},
            {id:103, size: "L", color: "brown", price: 15000},
        ]
    },
    { id:2, name: "PRODUCT 2", slug:"product2", img: "/c1.jpg",
        variants: [
            {id:201, size: "S", color: "black", price: 18000},
            {id:202, size: "M", color: "white", price: 18000},
            {id:203, size: "L", color: "brown", price: 18000},
        ]},
    { id:3, name: "PRODUCT 3", slug:"product3", img: "/c1.jpg",
        variants: [
            {id:301, size: "S", color: "black", price: 20000},
            {id:302, size: "M", color: "white", price: 20000},
            {id:303, size: "L", color: "brown", price: 20000},
        ]},
    { id:4, name: "PRODUCT 4", slug:"product4", img: "/c1.jpg",
        variants: [
            {id:401, size: "S", color: "black", price: 22000},
            {id:402, size: "M", color: "white", price: 22000},
            {id:403, size: "L", color: "brown", price: 22000},
        ]},
    { id:5, name: "PRODUCT 5", slug:"product5", img: "/c1.jpg",
        variants: [
            {id:501, size: "S", color: "black", price: 16000},
            {id:502, size: "M", color: "white", price: 16000},
            {id:503, size: "L", color: "brown", price: 16000},
        ]},
    { id:6, name: "PRODUCT 6", slug:"product6", img: "/c1.jpg",
        variants: [
            {id:601, size: "S", color: "black", price: 19000},
            {id:602, size: "M", color: "white", price: 19000},
            {id:603, size: "L", color: "brown", price: 19000 },
        ]},

]

export default function BestSellers(){
    const [selectedProduct, setSelectedProduct] = useState(null);




    return(
        <section className="min-h-screen bg-white text-black border-b border-black overflow-x-clip">
            <div className="w-full max-w-[1800px] mx-auto px-[clamp(0.75rem,2.5vw,3rem)] py-[clamp(1.5rem,3vw,3.5rem)]">
                {/**TITLE, */}
                <h1 className="text-[clamp(1.4rem,2.4vw,3rem)] font-semibold mt-12 text-center mb-[clamp(1.25rem,2.8vw,3.5rem)] text-black tracking-[clamp(0.08em,0.2vw,0.2em)]">BEST SELLERS</h1>



                {/**GRID */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[clamp(0.5rem,1vw,1.25rem)]">
                    {bestSellers.map((product) =>(
                        <Link key={product.id} href={`/best-sellers/${product.slug}`} className="block h-full min-w-0">
                            <ProductCard
                                product={product}
                                onQuickAdd={()=> setSelectedProduct(product)}
                            />
                        </Link>
                    ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mt-[clamp(1.25rem,2.3vw,2.5rem)] text-[clamp(0.82rem,0.9vw,1rem)]">
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">Prev</button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">1</button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">2</button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">3</button>
                    <button className="whitespace-nowrap px-[clamp(0.55rem,0.8vw,0.9rem)] py-[clamp(0.25rem,0.45vw,0.45rem)] border hover:bg-black hover:text-white">Next</button>

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



