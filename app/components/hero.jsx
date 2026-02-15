import Link from "next/link";

export default function Hero(){
    return (
        <section className="mt-0 min-h-screen flex flex-col justify-center items-center md:items-start py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 bg-white text-black border-b-2 border-black overflow-x-hidden">
            
            <h2 className="text-xs md:text-sm tracking-widest mb-4">
                NEW COLLECTION
            </h2>
            
            {/* Font size: 4xl on mobile, 7xl on desktop */}
            <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-tight text-center md:text-left">
                <span className="block">TIMELESS</span> 
                <span className="block">ELEGANCE,</span>
                <span className="block">REIMAGINED</span>
            </h1>

            <p className="text-sm mb-10 text-center md:text-left">
                Where heritage meets contemporary luxury
            </p>

            {/* Buttons: full width on mobile, auto width on desktop */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full md:w-auto">
                <Link
                    href="/shop"
                    className="w-full md:w-auto text-center px-8 py-4 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all font-medium"
                >
                    SHOP THE COLLECTION
                </Link>
                <Link 
                    href="/heritage"
                    className="w-full md:w-auto text-center px-8 py-4 border-2 border-transparent hover:border-black transition-all font-medium"
                >
                    EXPLORE HERITAGE
                </Link>
            </div>
        </section>
    )
}