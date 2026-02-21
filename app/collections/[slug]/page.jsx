import image from "next/image";
import { notFound } from "next/navigation";

const collections=[
    {
        slug: "nkoyo",
        name: "NKOYO",
        description: "A mother's story. Waste-not philosophy woven into every thread.",
        img: "/c1.jpg",
    },
    {
        slug: "dear-george",
        name: "DEAR GEORGE",
        description: "Liberation redefined. Who is George? perhaps it's you.",
        img: "/c1.jpg",
    },
    {
        slug: "kith-and-kin",
        name: "KITH AND KIN",
        description: "A labour of love. A reflection of Nigeria, of us.",
        img: "/c1.jpg",
    },
    {
        slug: "ekemini",
        name: "EKEMINI",
        description: "Contemporary elegance meets traditional craft.",
        img: "/c1.jpg",
    },
    {
        slug: "balogun",
        name: "BALOGUN",
        description: "Strength and grace. A celebration of character.",
        img: "/c1.jpg",
    },
    {
        slug: "iconic-pieces",
        name: "ICONIC PIECES",
        description: "Signature designs. Timeless statements.",
        img: "/c1.jpg",
    },
]

export default async function CollectionPage({params}) {
    const {slug} = await params;
    const collection = collections.find((c)=> c.slug === slug);
    if(!collection) {
        notFound();
    }

    return(
        <div className="w-full">
            {/**Hero Section */}
            <div className="relatve w-full h-[60vh]">
                <image 
                    src={collection.img}
                    alt={collection.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">{collection.name}</h1>
                <p className="text-black text-center text-sm md:text-base">{collection.description}</p>
                </div>
            </div>

            {/**CONTENTS */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                <p className="max-w-6xl mx-auto px-6 py-16 text-center">A statement piece that bridges tradition and contemporary design. Crafted with attention to detail and waste-conscious making.</p>
            </div>
        </div>
    )
}