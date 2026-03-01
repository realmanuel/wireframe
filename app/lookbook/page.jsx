"use client"
import Link from "next/link"
import Image from "next/image";

    const books = [
        {id: 1, title: "Spring/Summer 2024 Editorial", img: "/c1.jpg"},
        {id: 2, title: "Evening Collection Showcase", img: "/c1.jpg"},
        {id: 3, title: "Couture Atelier Behind the Scenes", img: "/c1.jpg"},
        {id: 4, title: "Heritage Collection", img: "/c1.jpg"},
        {id: 5, title: "Editorial Feature", img: "/c1.jpg"},
    ]

    export default function Lookbook() {
        return(
            <div className="max-w-full mx-auto px-6 py-16 bg-white">
                {/**Page Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center mt-12 mb-12 text-black tracking-widest">LOOKBOOK</h1>
                
                {/**Lookbook grid */}
                <div className="grid grid-cols-1 gap-6">
                        {books.map((book) => (
                            <div key={book.id} className="w-full">
                                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] bg-gray-100 border border-black">
                                    <Image
                                        src={book.img}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-sm italic text-black text-center">{book.title}</h2>
                                    <div className="mt-3 flex justify-center">
                                        <Link href="./shop" className="mt-3 px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                                            hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                                            text-sm tracking-widest"
                                        >
                                            VIEW LOOKBOOK
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
    
            </div>

        )
    }


