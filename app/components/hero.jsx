import Link from "next/link";

export default function Hero(){
    return (
        <section className="mt-0 min-h-screen flex flex-col justify-center items-start py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-white text-black border-b-2 border-black overflow-x-hidden">
            
            <h2 className="text-xs md:text-sm tracking-widest mb-4">
                NEW COLLECTION
            </h2>
            
            {/* Font size: 4xl on mobile, 7xl on desktop */}
            <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-tight text-left">
                <span className="block">TIMELESS</span> 
                <span className="block">ELEGANCE,</span>
                <span className="block">REIMAGINED</span>
            </h1>

            <p className="text-sm mb-10 text-left">
                Where heritage meets contemporary luxury
            </p>

            {/* Buttons: content width on mobile, auto width on desktop */}
            <div className="flex flex-col md:flex-row items-start gap-4 w-full md:w-auto">
                <Link
                    href="/shop"
                    className="w-fit md:w-auto text-left px-8 py-4 transition-all font-medium border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                                            hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                                            text-sm tracking-widest"
                >
                    SHOP THE COLLECTION
                </Link>
                <Link 
                    href="/heritage"
                    className="w-fit md:w-auto text-left px-8 py-4 transition-all font-medium hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                                            hover:ring-2  bg-white text-black 
                                                            text-sm tracking-widest underline"
                >
                    EXPLORE HERITAGE
                </Link>
            </div>
        </section>
    )
}