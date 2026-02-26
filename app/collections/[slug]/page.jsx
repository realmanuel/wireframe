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
        description: "A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.",
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
        <div className="w-full m-5 md:grid-cols-2 items-start flex flex-row gap-5">

            {/* LEFT IMAGE */}
            <div className="relative w-3/5 aspect-2/5 bg-gray-100 flex m-2">
            <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
            />
            </div>

            {/* RIGHT INFO */}
            <div className="m-2">
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
            <div className="mb-6 max-w-xs">
                <p className="text-[10px] mb-2">SIZE</p>
                <div className="flex flex-wrap gap-2">
                {["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                    <button
                    key={size}
                    className="border border-black px-2 py-1 text-[10px] hover:bg-black hover:text-white transition"
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>

            {/**COLOURS */}
            <div className="mb-6 max-w-xs">
                <div className="flex flex-wrap gap-2">
                <button className="w-10 h-10 bg-black rounded-full shadow-lg border border-black hover:border-2 hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1"></button>
                <button className="w-10 h-10 bg-blue-700 rounded-full shadow-lg border border-black hover:border-2 hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1"></button>
                <button className="w-10 h-10 bg-amber-200 rounded-full shadow-lg border border-black hover:border-2 hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1"></button>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-yellow-300  transition">
                ADD TO CART
                </button>

            </div>

            </div>
        </div>
        </div>
    )
    }