"use client";
import Link from "next/link"



export default function Footer(){
    
        const links = [
        ["Privacy Policy", "/privacy-policy"],
        ["Refund Policy", "/refund-policy"],
        ["Shipping Policy", "/shipping-policy"],
        ["Terms of Service", "/terms-and-conditions"],
    ];
    return(
        <footer className="bg-white w-full border-t-2 border-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-3 gap-8 md:gap-12 text-black">
                <div>
                    <h3 className="font-semibold mb-9">NEWSLETTER</h3>
                        <div className="flex flex-col sm:flex-row gap-2 items-center">
                            <input className="flex-1 w-full px-3 py-3 border text-sm" 
                                    placeholder="Your Email"
                            />
                            <button className="px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                                hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                                "
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                </div>

                <div>
                <h3 className="font-semibold mb-9 ">LEGAL</h3>

                <nav className="space-y-6">
                    {links.map(([name, href]) => (
                    <Link
                        key={name}
                        href={href}
                        className="block lg:text-xl p-2 hover:border hover:border-b-3"
                    >
                        {name}
                    </Link>
                    ))}
                </nav>
                </div>

                <div>
                    <h3 className="font-semibold mb-9">CONNECT</h3>
                    <div className="space-y-6">
                        <a href="tel:+2349037198414" className="block hover:border hover:border-black">
                            <p className="lg:text-xl p-2 hover:border-b">+234 903 719 8414</p>
                        </a>
                        <a href="mailto:ask@ituenbasi.com" className="block hover:border hover:border-black">
                            <p className="lg:text-xl p-2 hover:border-b-3">ask@ituenbasi.com</p>
                        </a>
                    </div>
                </div>
                    
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
                <p className="text-sm text-black">&copy; {new Date().getFullYear()} Ituenbasi</p>

                <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/ituenbasi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded hover:border-2 hover:border-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="4" ry="4" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.2" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            </a>
            
            <a href="https://www.instagram.com/ituenbasiworld/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded hover:border-2 hover:border-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="4" ry="4" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.2" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            </a>

                </div>
            </div>
        </footer>
    )
}