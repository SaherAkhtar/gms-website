import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Hungary",
    image: "/images/europe/hungary.jpg",
  },
  {
    name: "Denmark",
    image: "/images/europe/denmark.jpg",
  },
  {
    name: "Germany",
    image: "/images/europe/germany.jpg",
  },
  {
    name: "France",
    image: "/images/europe/france.jpg",
  },
  {
    name: "Italy",
    image: "/images/europe/italy.jpg",
  },
  {
    name: "Netherlands",
    image: "/images/europe/netherlands.jpg",
  },
  {
    name: "Poland",
    image: "/images/europe/poland.jpg",
  },
  {
    name: "Sweden",
    image: "/images/europe/sweden.jpg",
  },
];

export default function EuropePage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          Europe Destinations
        </h1>

        <p className="text-center text-gray-600 text-lg mb-12">
          Choose your preferred European country and start your visa journey
          with GMS.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={country.image}
                alt={country.name}
                width={500}
                height={300}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {country.name}
                </h2>

                <Link
                  href="/contact"
                  className="inline-block text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}