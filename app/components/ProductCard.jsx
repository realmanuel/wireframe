import Image from "next/image";
import Link from "next/link";
import {useStore} from "../../context/storeContext";
import {Heart} from "lucide-react";

export default function ProductCard({ product, onQuickAdd, productHref }) {

    const {toggleWishlist, wishlist} = useStore();
    // const {isWishlisted} = wishlist.find((item) => item.id === product.id) || {};
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    return (
        <div className="h-full min-w-0">
            <div className="group relative h-full min-w-0 bg-white p-[clamp(0.35rem,0.7vw,0.65rem)] transform transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_18px_-10px_rgba(0,0,0,0.55)] border border-black">
                {/* Heart */}
                <button
                    onClick={() => toggleWishlist(product)}
                    className="p-[clamp(0.5rem,0.7vw,0.75rem)] absolute top-[clamp(0.45rem,0.7vw,0.75rem)] right-[clamp(0.45rem,0.7vw,0.75rem)] stroke-black z-10 bg-gray-300"
                >
                    <Heart
                    size={18}
                    className={ isWishlisted ? "fill-yellow-300" : ""}
                    />
                </button>
                <div className="bg-gray-200 overflow-hidden aspect-square relative flex items-center justify-center">
                
                
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onQuickAdd(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 justify-around bg-black text-white py-[clamp(0.5rem,0.7vw,0.7rem)] px-4 text-[clamp(0.82rem,0.9vw,0.95rem)] tracking-wide whitespace-nowrap opacity-100 translate-y-0 transition-all duration-300 ease-out md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 hover:bg-yellow-400 focus-visible:bg-yellow-400"
                    >
                        Quick Add
                    </button>
                </div>

                <div className="mt-[clamp(0.65rem,0.9vw,0.95rem)] text-center text-black">
                    {productHref ? (
                        <Link href={productHref} className="font-normal text-[clamp(0.86rem,1vw,1.02rem)] leading-tight break-words border-b border-transparent hover:border-black transition-colors">
                            {product.name}
                        </Link>
                    ) : (
                        <h3 className="font-normal text-[clamp(0.86rem,1vw,1.02rem)] leading-tight break-words">{product.name}</h3>
                    )}
                    <p className="text-black text-[clamp(0.84rem,0.95vw,1rem)] mt-1">{product.price}</p>
                </div>

                <div className="mt-[clamp(0.5rem,0.9vw,0.9rem)] flex justify-center">
                <button className="mt-2 w-full max-w-[220px] whitespace-nowrap px-[clamp(0.8rem,1vw,1.1rem)] py-[clamp(0.45rem,0.6vw,0.6rem)] border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                    hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                    text-[clamp(0.78rem,0.86vw,0.9rem)] tracking-[0.14em]"
                >
                    ADD TO CART
                </button>
                </div>
            </div>
        </div>
    );
}

