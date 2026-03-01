"use client";

import Image from "next/image";
import { useState } from "react";

const giftCards = [
    { id: 1, value: "₦5,000", description: "Perfect for accessories and small items" },
    { id: 2, value: "₦10,000", description: "Great for a special piece" },
    { id: 3, value: "₦20,000", description: "Ideal for a complete look" },
    { id: 4, value: "₦50,000", description: "Premium gift for luxury shopping" },
    { id: 5, value: "Custom Amount", description: "Choose your own value" },
];

export default function GiftCards() {
    const [customAmount, setCustomAmount] = useState("");
    return (
        <div className="mt-0 min-h-screen flex flex-col justify-center items-start py-10 sm:py-15 md:py-20 bg-white text-black border-b border-black overflow-x-hidden">

        {/* Hero */}
        <div className="max-w-4xl mb-12 m-auto text-center">
            <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-center mt-12 mb-12 text-black tracking-widest">GIFT CARDS</h1>
            <h2 className="text-sm sm:text-base mb-12 text-black">Give the gift of timeless elegance. Our gift cards are perfect for any occasion and never expire.</h2>
        </div>

        {/* Gift Card Grid */}
        <div className="w-full mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {giftCards.map((card) => (
            <div
                key={card.id}
                className="border border-black justify-center overflow-hidden hover:bg-gray-100 cursor-pointer transition"
            >


                <div className="p-4 text-center m-5">
                <h1 className="text-xl font-bold text-black mb-4">{card.value}</h1>
                <p className="text-sm text-black mb-8">{card.description}</p>
                {card.id === 5 && (
                    <div className="mt-3">
                    <input
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full border px-3 py-2 text-sm border-black text-black"
                    />
                    </div>
                )}
                <button className="mt-3 px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
        hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white text-sm tracking-widest">
                    ADD TO CART
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* GIFT CARD DETAILS */}
        <div className="w-full max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-10 text-center tracking-widest">GIFT CARD DETAILS</h1>
            <div className="max-w-2xl mr-auto text-left">
                <p className="text-black text-base text-sm mb-2">
                    • Gift cards never expire
                </p>
                <p className="text-black text-sm mb-2">
                    • Can be used online and in-store
                </p>
                <p className="text-black text-sm mb-2">
                    • Available in various denominations
                </p>
                <p className="text-black text-sm mb-2">
                    • Perfect for any occasion
                </p>
                <p className="text-black text-sm mb-2">
                    • Email delivery available
                </p>
            </div>
        </div>

        </div>
    );
}
