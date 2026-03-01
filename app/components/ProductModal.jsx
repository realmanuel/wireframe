import Image from "next/image";

export default function ProductModal({ product, onClose }) {
return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
        <div className="bg-white max-w-lg w-full p-6 rounded-lg">
            <button
            className="float-right text-gray-600"
            onClick={onClose}
            >
            ✕
            </button>

            <div className="relative w-full aspect-square mb-4">
            <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
            />
            </div>

            <h2 className="text-xl font-normal mb-2">{product.name}</h2>
            <p className="text-black mb-4">{product.price}</p>
            <button className="w-full bg-black text-white px-4 py-2">
            Add to Cart
            </button>
        </div>
        </div>
);
}


