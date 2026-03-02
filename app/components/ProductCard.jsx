import Image from "next/image";
import Link from "next/link";
import {useStore} from "../../context/storeContext";
import {Heart} from "lucide-react";

export default function ProductCard({ product, onQuickAdd, productHref }) {

    const {addToCart, toggleWishlist, wishlist, setIsCartOpen} = useStore();
    // const {isWishlisted} = wishlist.find((item) => item.id === product.id) || {};
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    return (
        <div className="px-1">
            <div className="group relative bg-white pb-3 transform transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_18px_-10px_rgba(0,0,0,0.55)] border border-black gap-8 m-3">
                {/* Heart */}
                <button
                    onClick={() => toggleWishlist(product)}
                    className="p-3 absolute top-3 right-3 stroke-black z-10 bg-gray-300"
                >
                    <Heart
                    size={20}
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
                        onClick={() => { onQuickAdd(product); }}
                        className="absolute bottom-0 left-0 right-0 justify-around bg-black text-white py-2 px-4 text-sm opacity-100 translate-y-0 transition-all duration-300 ease-out md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 hover:bg-yellow-400 focus-visible:bg-yellow-400"
                    >
                        Quick Add
                    </button>
                </div>

                <div className="mt-3 text-center text-black">
                    {productHref ? (
                        <Link href={productHref} className="font-normal text-sm border-b border-transparent hover:border-black transition-colors">
                            {product.name}
                        </Link>
                    ) : (
                        <h3 className="font-normal text-sm">{product.name}</h3>
                    )}
                    <p className="text-black">{product.price}</p>
                </div>

                <div className="mt-3 flex justify-center">
                <button className="mt-3 px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                    hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                    text-sm tracking-widest"
                >
                    ADD TO CART
                </button>
                </div>
            </div>
        </div>
    );
}

