"use client";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import Link from "next/link"

    const SimpleSelectBox = () => {
    const options = [
        { value: "option1", label: "General Inquiries" },
        { value: "option2", label: "Order & Shipping" },
        { value: "option3", label: "Press & Media" },
    ];
    const [selectedValue, setSelectedValue] = useState(options[0].value);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const selectedLabel =
        options.find((option) => option.value === selectedValue)?.label || "Select";

    return (
        <div ref={wrapperRef} className="relative w-full min-w-0">
            <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="w-full min-w-0 border border-black bg-white px-3 py-2 text-left text-sm flex items-center justify-between"
            aria-haspopup="listbox"
            aria-expanded={open}
            >
            <span className="truncate">{selectedLabel}</span>
            <span className={`ml-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                v
            </span>
            </button>

            {open && (
            <ul
                className="absolute left-0 top-full z-20 mt-1 w-full min-w-0 border border-black bg-white shadow-sm"
                role="listbox"
            >
                {options.map((option) => (
                <li key={option.value}>
                    <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm hover:bg-black hover:text-white transition-colors"
                    onClick={() => {
                        setSelectedValue(option.value);
                        setOpen(false);
                    }}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    >
                    {option.label}
                    </button>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
    };

export default function Contact() {
    return (
        //FIRST SECTION
        <div className="bg-white text-black min-h-screen py-16">

        {/* Title */}
        <div className="text-center max-w-xl mx-auto px-6 mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center mt-12 mb-12 text-black tracking-wides">
            CONTACT US
            </h1>
            <p className="text-base text-gray-800">
            We're here to help. Whether you have questions about an order, want to explore couture, or simply want to connect, reach out.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="flex-1">
            <form className="space-y-6">

            {/* Name */}
            <div>
                <label className="block text-sm  mb-1 tracking-wider">
                NAME
                </label>
                <input
                type="text"
                placeholder="Your full name"
                className="w-full border px-4 py-2"
                required
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm  mb-1">
                EMAIL
                </label>
                <input
                type="email"
                placeholder="your@email.com"
                className="w-full border px-4 py-2"
                required
                />
            </div>

            {/* Subject */}
            <div>
                <label className="block text-sm  mb-1 tracking-wider">
                SUBJECT
                </label>
                <input
                type="text"
                placeholder="Subject"
                className="w-full border px-4 py-2"
                required
                />
            </div>

            {/* Inquiry */}
            <div>
                <label className="block text-sm  mb-1 tracking-wider">
                INQUIRY TYPE
                </label>
                <SimpleSelectBox />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm  mb-1 tracking-wider">
                MESSAGE
                </label>
                <textarea
                rows="5"
                placeholder="Your message"
                className="w-full border px-4 py-2"
                required
                ></textarea>
            </div>



                <button className="mt-3 px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                    hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                    text-sm tracking-widest"
                >
                    SEND MESSAGE
                </button>

            </form>
        </div>

        {/**ADDRESS */}
        <div className="flex-1 border border-black bg-white p-8">
            <h2 className="text-2xl font-normal tracking-widest mb-8 mt-8">STORE ADDRESS</h2>
            
            <span className="mb-8 mt-8 space-y-0.5">
                <p>ITUEN BASI STORE</p>
                <p>215b Etim Inyang Crescent,</p>
                <p>off Muri Okunola,</p>
                <p>Victoria Island,</p>
                <p>Lagos, Nigeria</p>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-normal">OPENING HOURS</p>
                <p>9am - 6pm WAT</p>
                <p>Tuesdays to Saturdays</p>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-normal">TELEPHONE</p>
                <a target="_blank" rel="noopener noreferrer" href="tel:+2349037198414">
                    <p>+234 903 719 8414</p>
                </a>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-normal">EMAIL</p>
                <a href="mailto:ask@ituenbasi.com">
                    <p>ask@ituenbasi.com</p>
                </a>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-normal">INSTAGRAM</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ituenbasi">
                    <p className="underline">@ituenbasi</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ituenbasiworld/">
                    <p className="underline">@ituenbasiworld</p>
                </a>
            </span>
        </div>
        </div>
        {/**CONSULTATION */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto border border-black mt-10 overflow-hidden">
            <div className="w-full lg:w-1/2 p-8">
                <div className="relative h-64 sm:h-80 md:h-96">
                    <Image 
                        src={"/c1.jpg"}
                        alt="book-consultation"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 sm:p-6">
                <h2 className="font-normal mb-4 mt-4 text-2xl tracking-widest">BOOK A CONSULTATION</h2>
                <p>Schedule a personalized consultation with our team. We'll help you find the perfect pieces and answer any questions you may have.</p>
                <Link target="_blank" rel="noopener noreferrer"  href="https://calendly.com/ituebasi-consultation" className="mt-4 inline-block w-fit px-4 py-4 border border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75
                                    hover:ring-2 hover:ring-offset-2 hover:ring-black bg-white text-black hover:bg-black hover:text-white 
                                    text-sm tracking-widest"
                >
                    BOOK NOW
                </Link>
            </div>
        </div>
        </div>
    );
}



