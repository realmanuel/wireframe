import { XMarkIcon } from "@heroicons/react/24/outline";

export default function HeritageSection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            <div className="max-w-2xl text-left">
                <h2 className="text-3xl font-semibold text-black uppercase tracking-wide">Our Heritage</h2>
                <p className="mt-4 text-black leading-relaxed">
                    Our heritage is not nostalgia. It is a living language. We draw from culture, arts, and the rich tapestry of Nigerian tradition, reinterpreting Ankara with contemporary vision. Every piece is crafted with artisanal attention to detail, waste-conscious making, and a commitment to timeless elegance over trend-following.
                </p>
                <button className="mt-6 border border-black px-6 py-2 text-black transition-colors hover:bg-black hover:text-white">
                    Learn More
                </button>
            </div>

            
            <div className="flex h-64 sm:h-80 w-56 sm:w-80 shrink-0 items-center justify-center border-2 border-black bg-gray-200">
                <XMarkIcon className="h-12 w-12 text-black" />
            </div>
        </div>
        </section>
    );
}