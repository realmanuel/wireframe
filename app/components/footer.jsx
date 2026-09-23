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
                    <h3 className="font-semibold mb-9 tracking-widest">NEWSLETTER</h3>
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
                <h3 className="font-semibold mb-6 tracking-widest">LEGAL</h3>

                <nav className="space-y-4">
                    {links.map(([name, href]) => (
                    <Link
                        key={name}
                        href={href}
                        className="block text-sm py-2 border-2 border-transparent hover:border-black transition-colors"
                    >
                        {name}
                    </Link>
                    ))}
                </nav>
                </div>

                <div>
                    <h3 className="font-semibold mb-6 tracking-widest">CONNECT</h3>
                    <div className="space-y-4">
                        <a href="tel:+2349037198414" className="block border-2 border-transparent hover:border-black transition-colors">
                            <p className="text-sm py-2">+234 903 719 8414</p>
                        </a>
                        <a href="mailto:ask@magicbass.com" className="block border-2 border-transparent hover:border-black transition-colors">
                            <p className="text-sm py-2">ask@magicbass.com</p>
                        </a>
                    </div>
                </div>
                    
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
                <p className="text-xs text-black">&copy; {new Date().getFullYear()} MagicBass</p>
                        {/**ICONS */}
                <div className="flex items-center gap-4">
            <a href="https://x.com/Reallnxgga" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded border-2 border-transparent hover:border-yellow-400 focus-visible:border-4 focus-visible:border-yellow-400 focus-visible:outline-none transition-colors">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            
            <a href="https://www.instagram.com/thereal_.manny" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded border-2 border-transparent hover:border-yellow-400 focus-visible:border-4 focus-visible:border-yellow-400 focus-visible:outline-none transition-colors">
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

