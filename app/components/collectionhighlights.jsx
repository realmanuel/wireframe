import Image from "next/image";
import Link from "next/link";

const collections = [
    {
        id: 1,
        name: "NKOYO",
        description: "A mother's story. Waste-not philosophy woven into every thread.",
        slug: "nkoyo",
        img: "/c1.jpg",
    },
    {
        id: 2,
        name: "DEAR GEORGE",
        description: "Liberation redefined. Who is George? perhaps it's you.",
        slug: "dear-george",
        img: "/c1.jpg",
    },
    {
        id: 3,
        name: "KITH AND KIN",
        description: "A labour of love. A reflection of Nigeria, of us.",
        slug: "kith-and-kin",
        img: "/c1.jpg",
    },
];


export default function CollectionHighlights() {
    return (
        <section className="w-full py-12 sm:py-16 bg-white text-center border-b border-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h1 className="text-3xl md:text-4xl font-normal text-black pb-3 tracking-widest">COLLECTION HIGHLIGHTS</h1>
                <p className="mt-4 text-gray-600">
                </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {collections.map((collection) => (
                            <Link
                                key={collection.id}
                                href={`/collections/${collection.slug}`}
                                className="text-black block h-full"
                            >
                                <div className="bg-white border border-black overflow-hidden shadow-sm hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full">
                                    <div className="relative bg-white overflow-hidden aspect-3/4 flex items-center justify-center">
                                        <Image
                                            src={collection.img}
                                            alt={collection.name}
                                            fill
                                        />
                                    </div>
                                    <div className="p-4 h-32 text-left">
                                        <h3 className="text-lg  tracking-wide text-black">
                                            {collection.name}
                                        </h3>
                                        <p className="mt-2 text-[12px] italic text-black">
                                            {collection.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
            </div>         
        </section>
    );
}


