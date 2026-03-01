export default function PolicyLayout({ title, children }) {
    return (
        <div className="bg-white text-black min-h-screen py-20 mt-10">
        <div className="max-w-3xl mx-auto px-6">

            <h1 className="text-3xl md:text-4xl font-normal mb-12 tracking-widest text-center">
            {title}
            </h1>

            <div className="space-y-3 text-sm md:text-base leading-relaxed text-black">
            {children}
            </div>

        </div>
        </div>
    );
}

