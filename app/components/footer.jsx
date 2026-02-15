"use client";
import Link from "next/link"



export default function Footer(){
    return(
        <footer className="bg-white w-full border-t-2 border-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-3 gap-8 md:gap-12 text-black">
                <div>
                    <h3 className="font-semibold mb-9">NEWSLETTER</h3>
                    <div className="flex flex-col gap-3">
                        <input className="w-full px-3 py-3 border" 
                                placeholder="Your Email"
                        />
                        <button className="w-full px-3 py-3 bg-grey-300 border-2 text-black font-medium hover:bg-black  hover:text-white transition">
                            SUBMIT
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-9">Legal</h3>
                    <ul className="space-y-6 text-sm">
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Shipping Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-9">Connect</h3>
                    <div className="space-y-6">
                        <p className="text-sm">+234 903 719 8414</p>
                        <p className="text-sm">ask@ituenbasi.com</p>
                    </div>
                </div>
                    
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
                <p className="text-sm">&copy; {new Date().getFullYear()} Ituenbasi</p>

                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Instagram" className="p-2 rounded hover:border-2 hover:border-yellow-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="3" y="3" width="18" height="18" rx="4" ry="4" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="3.2" strokeWidth="1.5" />
                            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                    </a>

                    <a href="#" aria-label="YouTube" className="p-2 rounded hover:border-2 hover:border-yellow-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .4 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .4 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.7 15.5V8.5l6 3.5-6 3.5z" />
                        </svg>
                    </a>

                    <a href="#" aria-label="Facebook" className="p-2 rounded hover:border-2 hover:border-yellow-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}