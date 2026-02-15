    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";

    import {
    MagnifyingGlassIcon,
    HeartIcon,
    ShoppingBagIcon,
    UserIcon,
    Bars3Icon,
    XMarkIcon,
    } from "@heroicons/react/24/outline";

    export default function Header() {
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
        ["Home", "/"],
        ["Shop", "/shop"],
        ["Collections", "/collections"],
        ["Best Sellers", "/best-sellers"],
        ["Gift Cards", "/gift-cards"],
        ["Heritage", "/heritage"],
        ["Lookbook", "/lookbook"],
        ["Contact", "/contact"],
    ];

    return (
        <>
        {/* ================= HEADER ================= */}
        <header
            className={`
            fixed top-0 left-0 w-full z-50
            transition-all duration-300 
            ${scrolled ? "bg-white shadow-sm" : "bg-gray-200"}
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
                <img src="/IBL logo.png" className="h-18" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-7 text-sm">
                {links.map(([name, href]) => (
                <Link key={name} href={href} className="hover:opacity-60 text-black">
                    {name}
                </Link>
                ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 stroke-black">
                {/* SEARCH */}
                <MagnifyingGlassIcon
                className="h-6 w-6 cursor-pointer stroke-black p-1 rounded transition hover:border-2 hover:border-yellow-400"
                onClick={() => setSearchOpen(true)}
                />

                <HeartIcon className="h-6 w-6  cursor-pointer stroke-black p-1 rounded transition hover:border-2 hover:border-yellow-400" />
                <ShoppingBagIcon className="h-6 w-6 cursor-pointer stroke-black p-1 rounded transition hover:border-2 hover:border-yellow-400" />
                <UserIcon className="h-6 w-6 cursor-pointer stroke-black p-1 rounded transition hover:border-2 hover:border-yellow-400" />

                {/* Mobile menu button */}
                <button
                    className="lg:hidden hover:opacity-60 transition-opacity p-1 rounded hover:border-2 hover:border-yellow-400"
                    onClick={() => setMenuOpen(true)}
                >
                    <Bars3Icon className="h-7 w-7 stroke-black" />
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
                <XMarkIcon className="h-6 w-6 stroke-black" />
                </button>
            </div>
            </div>
        </header>

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
            <div className="p-6">
            <button
                type="button"
                className="mb-6 hover:opacity-60 transition-opacity cursor-pointer p-1 rounded hover:border-2 hover:border-yellow-400"
                onClick={() => setMenuOpen(false)}
            >
                <XMarkIcon className="h-6 w-6 stroke-black" />
            </button>

            <nav className="space-y-5 text-sm">
                {links.map(([name, href]) => (
                <Link
                    key={name}
                    href={href}
                    className="block hover:opacity-60 transition-opacity"
                    onClick={() => setMenuOpen(false)}
                >
                    {name}
                </Link>
                ))}
            </nav>
            </div>
        </aside>
        </>
    );
    }
