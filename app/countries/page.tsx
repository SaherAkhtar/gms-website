import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Canada",
    image: "/images/countries/canada.jpg",
    description:
      "One of the most popular destinations for international students and skilled workers.",
  },
  {
    name: "Australia",
    image: "/images/countries/australia.jpg",
    description:
      "World-class education, excellent lifestyle and strong career opportunities.",
  },
  {
    name: "United Kingdom",
    image: "/images/countries/uk.jpg",
    description:
      "Top universities, rich culture and global employment opportunities.",
  },
  {
    name: "Europe",
    image: "/images/countries/europe.jpg",
    description:
      "Affordable education and exciting travel opportunities across Europe.",
  },
  {
    name: "United States",
    image: "/images/countries/usa.jpg",
    description:
      "Home to leading universities and endless career possibilities.",
  },
  {
    name: "New Zealand",
    image: "/images/countries/newzealand.jpg",
    description:
      "Beautiful landscapes, quality education and welcoming communities.",
  },
];

export default function CountriesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Explore Your Dream Destination
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
            Study, work and settle in the world's most popular destinations
            with expert guidance from Get Migration & Study.
          </p>

        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Destinations
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Discover exciting opportunities across the globe.
            </p>

          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {countries.map((country) => (
              <div
                key={country.name}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-green-700">
                    {country.name}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {country.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                  >
                    Get Consultation
                  </Link>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

            {/* Why Study Abroad */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose to Study & Work Abroad?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Studying or working abroad opens doors to world-class education,
              global careers and unforgettable life experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                World-Class Education
              </h3>
              <p className="mt-4 text-gray-600">
                Study at internationally recognized universities and colleges.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Better Career
              </h3>
              <p className="mt-4 text-gray-600">
                Gain international work experience and increase career opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Permanent Residency
              </h3>
              <p className="mt-4 text-gray-600">
                Many countries offer PR pathways after study or employment.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Global Lifestyle
              </h3>
              <p className="mt-4 text-gray-600">
                Experience new cultures, travel and build an international network.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Our Visa Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We make your journey simple with a proven step-by-step process.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Free Consultation",
              "Documentation",
              "Visa Processing",
              "Fly Abroad",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Start Your Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Contact our experienced consultants today and let us help you choose
            the perfect country for your education, career or immigration goals.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-green-700 transition hover:bg-gray-100"
          >
            Book Free Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}