    import Image from "next/image";
    import Link from "next/link";
    import { notFound } from "next/navigation";

    const collectionsData = {
    "nkoyo": {
        title: "NKOYO",
        description:
        "A mother's story. Waste-not philosophy woven into every thread.",
        banner: "/c1.jpg",
        products: [
        { id: 1, name: "Nkoyo Dress", price: "₦45,000", img: "/p1.jpg" },
        { id: 2, name: "Nkoyo Top", price: "₦25,000", img: "/p2.jpg" },
        { id: 3, name: "Nkoyo Set", price: "₦60,000", img: "/p3.jpg" },
        ],
    },

    "dear-george": {
        title: "DEAR GEORGE",
        description:
        "Liberation redefined. Who is George? Perhaps it's you.",
        banner: "/c1.jpg",
        products: [
        { id: 4, name: "George Jacket", price: "₦55,000", img: "/p1.jpg" },
        { id: 5, name: "George Shirt", price: "₦30,000", img: "/p2.jpg" },
        ],
    },

    "kith-and-kin": {
        title: "KITH AND KIN",
        description:
        "A labour of love. A reflection of Nigeria, of us.",
        banner: "/c1.jpg",
        products: [
        { id: 6, name: "Kin Robe", price: "₦48,000", img: "/p1.jpg" },
        ],
    },

    "ekemini": {
        title: "EKEMINI",
        description:
        "Contemporary elegance meets traditional craft.",
        banner: "/c1.jpg",
        products: [],
    },

    "balogun": {
        title: "BALOGUN",
        description:
        "Strength and grace. A celebration of character.",
        banner: "/c1.jpg",
        products: [],
    },

    "iconic-pieces": {
        title: "ICONIC PIECES",
        description:
        "Signature designs. Timeless statements.",
        banner: "/c1.jpg",
        products: [],
    },
    };

    export default function CollectionPage({ props }) {
    // const params = await props.name;
    // const slug = params.slug.toLowerCase();
    // const collection = collectionsData[slug];

    if (!collection) return notFound();

    return (
        <div className="bg-white min-h-screen">

        {/* HERO BANNER */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
            <Image
            src={collection.banner}
            alt={collection.title}
            fill
            className="object-cover"
            priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-widest">
                {collection.title}
            </h1>
            </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
            {collection.description}
            </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto px-6 pb-20">

            {collection.products.length === 0 ? (
            <p className="text-center text-gray-500">
                No products available yet.
            </p>
            ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {collection.products.map((product) => (
                <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group block"
                >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    </div>

                    <div className="mt-4 text-center">
                    <h3 className="text-sm font-medium text-black">
                        {product.name}
                    </h3>
                    <p className="text-gray-600 mt-1">
                        {product.price}
                    </p>
                    </div>
                </Link>
                ))}
            </div>
            )}
        </div>
        </div>
    );
    }