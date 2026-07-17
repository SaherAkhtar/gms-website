import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Canada",
    image: "/images/countries/canada.jpg",
    slug: "canada",
  },
  {
    name: "Australia",
    image: "/images/countries/australia.jpg",
    slug: "australia",
  },
  {
    name: "United Kingdom",
    image: "/images/countries/uk.jpg",
    slug: "uk",
  },
  {
    name: "Europe",
    image: "/images/countries/europe.jpg",
    slug: "europe",
  },
];

export default function Countries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Countries
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Explore Your Dream Destination
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide visa and immigration services for the world's most
            popular study, work and travel destinations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={country.image}
                alt={country.name}
                width={500}
                height={350}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {country.name}
                </h3>

                <Link
                href={`/countries/${country.slug}`}
                className="mt-4 inline-block font-semibold text-green-600 hover:text-green-700"
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