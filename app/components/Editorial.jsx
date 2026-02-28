import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link" 

export default function Editorial() {
    return (
        <section className="w-full py-12 sm:py-20 px-4 sm:px-6 text-center text-sm text-black bg-white flex flex-col items-center overflow-x-hidden">
            
            
            <div className="w-full max-w-2xl flex h-64 sm:h-96 md:h-120 items-center justify-center border-2 border-black bg-gray-200">
                <XMarkIcon className="h-20 w-20 text-black" />
            </div>

            {/* Text Content */}
            <h2 className="text-sm mt-6 uppercase tracking-widest">
                Discover our latest editorial collection
            </h2>
            
            <Link href="/lookbook" className="mt-3 px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                text-sm tracking-widest"
            >
                VIEW LOOKBOOK
            </Link>

        </section>
    );
}
