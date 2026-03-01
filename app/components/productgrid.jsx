

const products = [
    { id: 1, name: "PRODUCT NAME", price: "$1,200", img: "/p1.jpg" },
    { id: 2, name: "PRODUCT NAME", price: "$1,500", img: "/p2.jpg" },
    { id: 3, name: "PRODUCT NAME", price: "$1,800", img: "/p3.jpg" },
    { id: 4, name: "PRODUCT NAME", price: "$2,000", img: "/p4.jpg" },
];

export default function ProductGrid(){
    return(
        <section className="w-full max-w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-white overflow-x-hidden">
            <h2 className="text-3xl font-semibold mb-10 text-center text-black">
                FEATURED PIECES
            </h2>
            <p className="text-black text-center text-sm mb-10">Everyday icons. Bold reimaginings</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((p)=>(
                    <div
                        key={p.id}
                        className="border border-black bg-white transform transition-all duration-200 ease-out p-4 text-center hover:-translate-y-1 hover:shadow-[0_10px_18px_-10px_rgba(0,0,0,0.55)]"
                    >
                        <div className="bg-gray-400 h-70 mb-4" />
                        <h3 className="text-black text-sm mb-3">{p.name}</h3>
                        <p className="text-black text-[12px]">{p.price}</p>

                    </div>
                ))}
            </div>
        </section>
    )
}

