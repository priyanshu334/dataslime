export default function App() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 relative bg-gradient-to-br from-[#D8E6EF] to-[#B4D8E4]"
    >
      {/* Small Heading */}
      <p className="text-gray-700 tracking-[0.2em] text-lg uppercase font-semibold">
        HERE DATA FLOWS LIKE
      </p>

      {/* Main Heading */}
      <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3 leading-snug">
        SLIME – SMOOTH <br className="hidden md:block" /> & SMART
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mt-5 text-lg max-w-2xl leading-relaxed">
        Experience the Change. <br className="hidden md:block" />
        Explore Our Work and Discover the Future.
      </p>

      {/* Call to Action Button */}
      <button className="mt-6 bg-blue-500 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
        <a href="/contactUs">Contact Us</a>
      </button>

      {/* Right-Side Logo */}
      <div className="absolute right-10 top-1/3 hidden lg:flex flex-col items-center">
        <div className="flex items-center space-x-[-10px]">
          <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            ᗡ
          </h1>
          <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            D
          </h1>
        </div>
        <p className="text-gray-600 tracking-wider text-lg uppercase font-semibold">
          DATA SLIME
        </p>
      </div>
    </section>
  );
}
