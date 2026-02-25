    import Image from "next/image"
    import { notFound } from "next/navigation"

    const collections = {
    "nkoyo": {
        name: "NKOYO",
        description: "A mother's story. Waste-not philosophy woven into every thread.",
        price: "₦85,000",
        image: "/c1.jpg",
    },
    "dear-george": {
        name: "DEAR GEORGE",
        description: "Liberation redefined. Who is George? Perhaps it's you.",
        price: "₦95,000",
        image: "/c1.jpg",
    },
    "kith-and-kin": {
        name: "KITH AND KIN",
        description: "A labour of love. A reflection of Nigeria, of us.",
        price: "₦90,000",
        image: "/c1.jpg",
    },
    "ekemini": {
        name: "EKEMINI",
        description: "Contemporary elegance meets traditional craft.",
        price: "₦110,000",
        image: "/c1.jpg",
    },
    "balogun": {
        name: "BALOGUN",
        description: "Strength and grace. A celebration of character.",
        price: "₦120,000",
        image: "/c1.jpg",
    },
    "iconic-pieces": {
        name: "ICONIC PIECES",
        description: "Signature designs. Timeless statements.",
        price: "₦150,000",
        image: "/c1.jpg",
    },
    }

    export default async function CollectionPage({ params }) {
    const { slug } = await params

    const collection = collections[slug]

    if (!collection) {
        return notFound()
    }

    return (
        <div className="bg-white min-h-screen text-black px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT IMAGE */}
            <div className="relative w-full aspect-square bg-gray-100">
            <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
            />
            </div>

            {/* RIGHT INFO */}
            <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
                {collection.name}
            </h1>

            <p className="text-lg mb-6">
                {collection.price}
            </p>

            <p className="text-sm leading-relaxed mb-8">
                {collection.description}
            </p>

            {/* SIZE */}
            <div className="mb-6">
                <p className="text-sm mb-2">Size</p>
                <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                    <button
                    key={size}
                    className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:opacity-80 transition">
                ADD TO CART
                </button>

                <button className="border border-black px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition">
                ADD TO WISHLIST
                </button>
            </div>

            </div>
        </div>
        </div>
    )
    }