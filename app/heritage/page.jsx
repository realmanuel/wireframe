
import Image from "next/image";

const heritages = [
    {
        id: 1,
        name: "CRAFTSMANSHIP",
        description:
        "Our artisans bring decades of experience to every piece. Each garment is constructed with precision, care, and a deep respect for traditional techniques reimagined for contemporary wear.",
        img: "/c1.jpg",
    },
    {
        id: 2,
        name: "TRADITION",
        description:
        "We honor Nigerian textile heritage while pushing boundaries. Our Ankara reinterpretations are bold, unexpected, and always respectful of the craft that came before us.",
        img: "/c1.jpg",
    },
    {
        id: 3,
        name: "INNOVATION",
        description:
        "Innovation means finding new ways to express timeless values. We experiment with cuts, silhouettes, and fabric combinations while maintaining the integrity of our craft.",
        img: "/c1.jpg",
    },
];

const timelines = [
    {
        id: 1,
        year: "2008",
        event: "Ituen Basi founded. A vision to bridge heritage and contemporary luxury.",
    },
    {
        id: 2,
        year: "2012",
        event: "First major collection launch. Nkoyo collection introduces waste-not philosophy.",
    },
    {
        id: 3,
        year: "2016",
        event: "International recognition. Expansion of couture services and atelier.",
    },
    {
        id: 4,
        year: "2024",
        event: "Continuing to create. Every piece a story, every collection a conversation.",
    },            
]

export default function Heritage() {
    return (
        <section className="bg-white text-black mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="max-w-4xl mb-12 m-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal text-center mt-12 mb-12 text-black tracking-widest">OUR HERITAGE</h1>
            <h2 className="text-xl mb-12 italic">Our heritage is not nostalgia. It is a living language.</h2>
            <p className="mb-7">
            We draw from culture, arts, and the rich tapestry of Nigerian tradition. Our reinterpretation of Ankara is not about replication — It's about evolution. We honor the past while creating for the future.
            </p>
            <p className="mb-7">
            Every piece is crafted with artisanal attention to detail. We practice waste-conscious making, ensuring that every thread serves a purpose. Our commitment is to timeless elegance, not trend-following.
            </p>
            <p className="mb-7">
            Founded on the belief that fashion should reflect individuality and heritage, Ituen Basi was born from a vision to create pieces that tell stories. Stories of who we are, where we come from, and where we're going.
            </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 mt-8">
            {heritages.map((heritage) => (
            <article key={heritage.id} className="w-full">
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                {/* Image: full-width square on mobile, responsive square on desktop */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                    <div className="relative w-full aspect-square">
                    <Image src={heritage.img} alt={heritage.name} fill className="object-cover" />
                    </div>
                </div>

                {/* Text with spacing on large screens */}
                <div className="w-full lg:w-3/5 lg:pl-8 flex flex-col justify-start">
                    <h2 className="text-xl sm:text-2xl font-normal tracking-wide">{heritage.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed">{heritage.description}</p>
                </div>
                </div>
            </article>
            ))}
        </div>
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-normal tracking-wide text-black mt-12 sm:mt-16">TIMELINE</h1>
            <div className="flex flex-col lg:flex-row items-stretch justify-center mt-8 sm:mt-16 w-full gap-4 p-4 sm:p-0">
                {timelines.map((timeline)=>(
                    <article key={timeline.id} className="w-full lg:max-w-xs flex-1 p-4 sm:p-6 border border-black">
                        <h2 className="text-xl sm:text-2xl font-normal tracking-wide text-center">{timeline.year}</h2>
                        <p className="mt-3 text-sm text-center">{timeline.event}</p>
                    </article>
                ))}

            </div>
        </div>

        </section>
    );
}



