    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import { useStore } from "../../context/storeContext";
    import CartSidebar from "./CartSidebar";    

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
            fixed top-0 left-0 w-full z-50
            transition-all duration-300 
            ${scrolled ? "bg-white shadow-sm" : "bg-white"}
            `}
        >
            <div
            className="
                max-w-7xl mx-auto
                px-4 sm:px-6 lg:px-10
                h-12 sm:h-14
                flex items-center justify-between
            "
            >

            {/* Logo */}
                <img src="/IBL logo.png" className="h-13" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-7 text-sm">
                {links.map(([name, href]) => (
                <Link key={name} href={href} className="hover:border-b-2 text-black">
                    {name}
                </Link>
                ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4 stroke-black relative">
                {/* SEARCH */}
                <MagnifyingGlassIcon
                className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded transition hover:border-2 hover:border-yellow-400"
                onClick={() => setSearchOpen(true)}
                />
                <UserIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded transition hover:border-2 hover:border-yellow-400" />
                <div className="relative">
                <HeartIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded transition hover:border-2 hover:border-yellow-400" />
                {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlist.length}
                    </span>
                )}
                </div>
                
                <button onClick={()=> setIsCartOpen(true)} className="relative">
                    <ShoppingCartIcon className="h-7 w-7 sm:h-10 sm:w-10 cursor-pointer stroke-black p-1 sm:p-2 rounded transition hover:border-2 hover:border-yellow-400" />
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-white text-black text-xs rounded-full px-1">
                            {cart.length}
                        </span>
                    )}
                </button>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden hover:opacity-60 transition-opacity p-1 sm:p-2 rounded hover:border-2 hover:border-yellow-400"
                    onClick={() => setMenuOpen(true)}
                >
                    <Bars3Icon className="h-7 w-7 sm:h-10 sm:w-10 stroke-black" />
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
            <div className="max-w-7xl mx-auto px-6 flex gap-3">
                <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="flex-1 border px-4 py-2"
                />

                <button onClick={() => setSearchOpen(false)} className="p-1 rounded hover:border-2 hover:border-yellow-400 transition cursor-pointer">
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
            fixed top-0 right-0 h-full w-64 sm:w-72 bg-white z-50 text-black
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <div className="p-6 flex flex-col gap-10 relative">
                <button
                    type="button"
                    className="mb-6 hover:opacity-60 transition-opacity cursor-pointer p-1 rounded hover:border-2 absolute right-0 hover:border-yellow-400"
                    onClick={() => setMenuOpen(false)}
                >
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-black" />
                </button>

                <nav className="text-sm space-y-4">
                    {links.map(([name, href]) => (
                    <div key={name}>
                        <Link
                            href={href}
                            className="block hover:border transition-opacity py-3 px-4"
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
