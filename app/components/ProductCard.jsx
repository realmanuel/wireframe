import Image from "next/image";
import {useStore} from "../../context/storeContext";
import {Heart} from "lucide-react";
import QuickAddModal from "./QuickAddModal";

export default function ProductCard({ product, onQuickAdd }) {

    const {addToCart, toggleWishlist, wishlist, setIsCartOpen} = useStore();
    // const {isWishlisted} = wishlist.find((item) => item.id === product.id) || {};
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    return (
        <div className="px-1">
            <div className="relative bg-white pb-3 transform transition-transform duration-200 ease-out hover:translate-y-1 hover:scale-105 active:-translate-y-1  border border-black gap-8 m-3">
                {/* Heart */}
                <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 stroke-black z-10"
                >
                    <Heart
                    size={20}
                    className={isWishlisted ? "fill-black" : ""}
                    />
                </button>
                <div className="group bg-gray-200 overflow-hidden aspect-square relative flex items-center justify-center">
                
                
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    <button
                        onClick={() => { onQuickAdd(product); }}
                        className="absolute bottom-0 left-0 right-0 justify-around bg-black text-white py-2 px-4 text-sm opacity-100 translate-y-0 md:opacity-0 md:translate-y-full transition-all duration-300 ease-out md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-yellow-400"
                    >
                        Quick Add
                    </button>
                </div>

                <div className="mt-3 text-center text-black">
                    <h3 className="font-medium text-sm">{product.name}</h3>
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
