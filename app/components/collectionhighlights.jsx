const collections =[
    {id: 1, name: "NKOYO", caption: "A mother's story. Waste-not philosophy woven into every thread", img: "/p1.jpg"},
    {id: 2, name: "DEAR GEORGE", caption: "Liberation redefined. Who is george? Perhaps it's you", img: "/p2.jpg"},
    {id: 3, name: "KITH AND KIN", caption: "A labour of love. A reflection of Nigeria, of us", img: "/p3.jpg"},
]


export default function CollectionHighlights() {
    return (
        <section className="w-full py-12 sm:py-16 bg-white text-center border-b border-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h1 className="text-5xl font-semibold text-black pb-3">Collection Highlights</h1>
                <p className="mt-4 text-gray-600">
                </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {collections.map((c)=>(
                            <div 
                                key={c.id}
                                className="border transform transition-transform duration-200 ease-out p-4 text-center hover:-translate-y-2 hover:scale-105 active:-translate-y-1 active:scale-105"
                            >
                                <div className="bg-gray-400 h-70 mb-4" />
                                <h3 className="font-medium text-black">{c.name}</h3>
                                <p className="text-gray-700 text-sm">{c.caption}</p>

                            </div>
                        ))}
                    </div>        
            </div>         
        </section>
    );
}
