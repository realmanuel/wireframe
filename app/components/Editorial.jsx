import { XMarkIcon } from "@heroicons/react/24/outline";

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
            
            <button className="mt-4 px-6 py-3 border border-black hover:bg-black hover:text-white transition">
                View Lookbook
            </button>
        </section>
    );
}
