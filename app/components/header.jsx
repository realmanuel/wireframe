    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import { useStore } from "../../context/storeContext";
    import CartSidebar from "./CartSidebar";    
    import Image from "next/image"

    import {
    MagnifyingGlassIcon,
    HeartIcon,
    UserIcon,
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon,
    } from "@heroicons/react/24/outline";

    export default function Header() {
    const { wishlist, setIsCartOpen, cart } = useStore();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    /* Prevent body scroll when menu is open */
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
        return () => document.body.classList.remove("menu-open");
    }, [menuOpen]);

    /* scroll detection */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        ["HOME", "/"],
        ["SHOP", "/shop"],
        ["COLLECTIONS", "/collections"],
        ["BEST SELLERS", "/best-sellers"],
        ["GIFT CARDS", "/gift-cards"],
        ["HERITAGE", "/heritage"],
        ["LOOKBOOK", "/lookbook"],
        ["CONTACT", "/contact"],
    ];

        
    return (
        <>
        {/* ================= HEADER ================= */}
        <header
            className={`
            fixed top-0 left-0 w-full z-20
            transition-all duration-300 
            ${scrolled ? "bg-white shadow-sm" : "bg-white"}
            `}
        >
            <div
            className="
                relative
                max-w-7xl mx-auto
                px-4 sm:px-6 lg:px-2 lg:py-10
                h-12 sm:h-14
                flex items-center justify-between
            "
            >

            {/* Logo */}
                <img src="/IBL logo.png" className="h-13" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-7 text-sm">
                {links.map(([name, href]) => (
                <Link key={name} href={href} className="text-black border-b-2 border-transparent hover:border-black transition-colors">
                    {name}
                </Link>
                ))}
            </nav>


            <button
                className="lg:hidden fixed z-[60] left-1/2 -translate-x-1/2 h-9 w-9 sm:h-10 sm:w-10 hover:opacity-60 transition-colors p-1 rounded border-2 border-transparent hover:border-yellow-400 focus-visible:border-4 focus-visible:border-yellow-400 focus-visible:outline-none"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                <Bars3Icon
                    className={`
                        absolute inset-0 m-auto h-7 w-7 sm:h-10 z-100 sm:w-10 stroke-black
                        transition-all duration-300
                        ${menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
                    `}
                />
                <XMarkIcon
                    className={`
                        absolute inset-0 m-auto h-7 w-7 sm:h-10 sm:w-10 z-100 stroke-black
                        transition-all duration-300
                        ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
                    `}
                />
            </button>



            {/* Icons */}
            
            <div className="flex items-center gap-2 sm:gap-4 stroke-black relative">
                
                {/* SEARCH */}
                <MagnifyingGlassIcon
                className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded border-2 border-transparent hover:border-yellow-400 transition-colors"
                onClick={() => setSearchOpen(true)}
                
                />
                <UserIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded border-2 border-transparent hover:border-yellow-400 transition-colors" />
                <div className="relative">
                <HeartIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded border-2 border-transparent hover:border-yellow-400 transition-colors" />
                {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlist.length}
                    </span>
                )}
                </div>
                
                <button onClick={()=> setIsCartOpen(true)} className="relative rounded border-2 border-transparent hover:border-yellow-400 focus-visible:border-4 focus-visible:border-yellow-400 focus-visible:outline-none transition-colors">
                    <ShoppingCartIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded" />
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-white text-black text-xs rounded-full px-1">
                            {cart.length}
                        </span>
                    )}
                </button>


            </div>
            </div>

            {/* ================= SEARCH BAR ================= */}
            <div
            className={`
                overflow-hidden transition-all duration-300 border-2 border-black text-black
                ${searchOpen ? "max-h-24 py-4" : "max-h-0"}
            `}
            >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 sm:gap-3">
                <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="flex-1 min-w-0 border px-3 sm:px-4 py-2"
                />

                <button onClick={() => setSearchOpen(false)} className="shrink-0 p-1 rounded border-2 border-transparent hover:border-yellow-400 focus-visible:border-4 focus-visible:border-yellow-400 focus-visible:outline-none transition-colors cursor-pointer">
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-black" />
                </button>
            </div>
            </div>
        </header>
        <CartSidebar />

        {/* ================= MOBILE DRAWER ================= */}

        {/* Overlay */}
        {menuOpen && (
            <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
            />
        )}

        {/* Side menu */}
        <aside
            className={`
            fixed top-0 right-0 h-full w-43 sm:w-55 bg-white z-50 text-black
            transform transition-transform duration-300 delay-75
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <div className="p-6 flex flex-col gap-6 relative">
                <nav className="text-sm space-y-4">
                    {links.map(([name, href]) => (
                    <div key={name}>
                        <Link
                            href={href}
                            className="block border border-transparent hover:border-black transition-colors py-3 px-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            {name}
                        </Link>
                        <hr className="border-t border-black"/>
                </div>
                ))}
                </nav>
            </div>
        </aside>
        </>
    );
    }
