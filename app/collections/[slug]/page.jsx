"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionsData } from "../../../lib/collectionsData";

export default function CollectionPage({ params }) {
    const collection = collectionsData.find(
        (c) => c.slug === params.slug
    );

    if (!collection) return notFound();

    return (
        <div className="bg-white">

        {/* HERO */}
        <div className="relative w-full h-[60vh]">
            <Image
            src={collection.hero}
            alt={collection.name}
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
                {collection.name}
                </h1>
                <p className="max-w-2xl mx-auto text-sm md:text-base">
                {collection.longDescription}
                </p>
            </div>
            </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto px-6 py-16">

            <h2 className="text-2xl font-semibold mb-10 text-center">
            Explore the Collection
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {collection.products.map((product) => (
                <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="block"
                >
                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">

                    <div className="relative h-80">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    </div>

                    <div className="p-4">
                    <h3 className="font-medium">
                        {product.name}
                    </h3>
                    <p className="text-gray-600 mt-1">
                        ₦{product.price.toLocaleString()}
                    </p>
                    </div>

                </div>
                </Link>
            ))}

            </div>
        </div>
        </div>
    );
}