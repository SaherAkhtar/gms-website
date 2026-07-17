import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="inline-block rounded-full bg-green-600 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white">
            Trusted Visa & Education Consultants
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build Your Future
            <span className="block text-yellow-400">
              Study, Work & Travel Abroad
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-gray-200">
            Get Migration & Study provides professional guidance for Study Visa, Visit Visa, Work Permit Visa, Immigration and Schengen Group Tours with
            complete support from start to finish.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >
              Book Free Consultation
            </Link>

            <Link
              href="#services"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-lg border border-white/20 shadow-xl">

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">2500+</h2>
              <p className="mt-2 text-sm text-white">
                Successful Visas
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">45+</h2>
              <p className="mt-2 text-xs sm:text-sm text-white">
                Countries
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-yellow-400">98%</h2>
              <p className="mt-2 text-xs sm:text-sm text-white">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}