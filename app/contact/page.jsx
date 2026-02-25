"use client";

export default function Contact() {
    return (
        //FIRST SECTION
        <div className="bg-white text-black min-h-screen py-16">

        {/* Title */}
        <div className="text-center max-w-xl mx-auto px-6 mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-12 mb-12 text-black tracking-wides">
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
                <label className="block text-sm font-semibold mb-1">
                Name
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
                <label className="block text-sm font-semibold mb-1">
                Email
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
                <label className="block text-sm font-semibold mb-1">
                Subject
                </label>
                <input
                type="text"
                placeholder="Subject"
                className="w-full border px-4 py-2"
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                Message
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
            <h2 className="text-2xl font-bold tracking-widest mb-8 mt-8">STORE ADDRESS</h2>
            
            <span className="mb-8 mt-8 space-y-0.5">
                <p>ITUEN BASI STORE</p>
                <p>215b Etim Inyang Crescent,</p>
                <p>off Muri Okunola,</p>
                <p>Victoria Island,</p>
                <p>Lagos, Nigeria</p>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-semibold">OPENING HOURS</p>
                <p>9am - 6pm WAT</p>
                <p>Tuesdays to Saturdays</p>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-semibold">TELEPHONE</p>
                <a href="tel:+2349037198414">
                    <p>+234 903 719 8414</p>
                </a>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-semibold">TELEPHONE</p>
                <a href="mailto:ask@ituenbasi.com">
                    <p>ask@ituenbasi.com</p>
                </a>
            </span>

            <span className="flex flex-col justify-between mb-8 mt-8 space-y-0.5">
                <p className="text-xl mb-7 font-semibold">TELEPHONE</p>
                <a href="https://www.instagram.com/ituenbasi">
                    <p className="underline">@ituenbasi</p>
                </a>
                <a href="https://www.instagram.com/ituenbasiworld/">
                    <p className="underline">@ituenbasiworld</p>
                </a>
            </span>
        </div>
        </div>
        </div>
    );
}