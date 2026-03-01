"use client";
import Image from "next/image";
import Link from "next/link";


const collections = [
    {id:1, name: "NKOYO", description:"A mother's story. Waste-not philosophy woven into every thread.", slug: "nkoyo", img: "/c1.jpg"},
    {id:2, name: "DEAR GEORGE", description:"Liberation redefined. Who is George? perhaps it's you.", slug: "dear-george", img: "/c1.jpg"},
    {id:3, name: "KITH AND KIN", description:"A labour of love. A reflection of Nigeria, of us.", slug: "kith-and-kin", img: "/c1.jpg"},
    {id:4, name: "EKEMINI", description:"Contemporary elegance meets traditional craft.", slug: "ekemini", img: "/c1.jpg"},
    {id:5, name: "BALOGUN", description:"Strength and grace. A celebration of character.", slug: "balogun", img: "/c1.jpg"},
    {id:6, name: "ICONIC PIECES", description:"Signature designs. Timeless statements.", slug: "iconic-pieces", img: "/c1.jpg"},
]

export default function Collections() {
    return(
        <div className="max-w-full mx-auto px-6 py-16 bg-white">
            {/**Page Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center mt-12 mb-12 text-black tracking-widest">COLLECTIONS</h1>
            <p className="text-black text-center mb-9">Each collection is a narrative. A story told through fabric, form, and the audacious spirit of those who wear it. We don't follow trends—we create them.</p>
            <p className="text-black text-center mb-12">From the waste-not philosophy of Nkoyo to the liberating question of Dear George, our collections are conversations with culture, heritage, and individuality.</p>
            {/**Collection grid */}

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                {collections.map((collection)=>(
                    <Link key={collection.id} href={`/collections/${collection.slug}`} className="text-black block h-full">
                        <div className="bg-white border border-black overflow-hidden shadow-sm hover:shadow-md transform transition-transform duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="relative group bg-white overflow-hidden aspect-3/4 flex items-center justify-center">
                                <Image 
                                    src={collection.img}
                                    alt={collection.name}
                                    fill
                                />                               
                            </div>
                            <div className="p-4 h-32">
                                <h2 className="text-lg font-normal tracking-wide text-black">{collection.name}</h2>
                                <p className="mt-2 text-sm text-black">{collection.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}


