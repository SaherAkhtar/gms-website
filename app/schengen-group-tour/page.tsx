import Image from "next/image";
import Link from "next/link";

const countries = [
  "France",
  "Italy",
  "Germany",
  "Switzerland",
  "Netherlands",
  "Belgium",
  "Austria",
  "Spain",
];

export default function SchengenTourPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Discover Europe with Our Schengen Tours
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
            Experience Europe's breathtaking landscapes, historic landmarks,
            rich culture and unforgettable memories with our professionally
            organized Schengen Group Tours.
          </p>

        </div>
      </section>

      {/* Image + Overview */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>
            <Image
              src="/images/tours/schengen.jpg"
              alt="Schengen Tour"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Explore Europe Like Never Before
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Schengen Group Tours are designed for travelers who want to
              experience the beauty of Europe without worrying about planning.
              We take care of visas, accommodation, transportation and guided
              sightseeing.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-3xl font-bold text-green-700">
                  10+
                </h3>

                <p className="mt-2 text-gray-600">
                  Countries Covered
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-3xl font-bold text-green-700">
                  7-15
                </h3>

                <p className="mt-2 text-gray-600">
                  Days Tour
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-3xl font-bold text-green-700">
                  100+
                </h3>

                <p className="mt-2 text-gray-600">
                  Happy Travelers
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-3xl font-bold text-green-700">
                  24/7
                </h3>

                <p className="mt-2 text-gray-600">
                  Tour Support
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Countries Included */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Countries You Can Visit
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Visit some of Europe's most beautiful destinations.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {countries.map((country) => (
              <div
                key={country}
                className="rounded-2xl bg-white p-6 text-center shadow-md"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {country}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

            {/* Tour Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Tour Highlights
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Everything you need for a memorable European adventure is included.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-700">
                ✈️ Visa Assistance
              </h3>
              <p className="mt-4 text-gray-600">
                Complete Schengen visa guidance and documentation support.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-700">
                🏨 Premium Hotels
              </h3>
              <p className="mt-4 text-gray-600">
                Comfortable accommodation throughout your trip.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-700">
                🚌 Guided Transport
              </h3>
              <p className="mt-4 text-gray-600">
                Safe transportation between cities and attractions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-700">
                📸 Sightseeing
              </h3>
              <p className="mt-4 text-gray-600">
                Visit famous landmarks with experienced tour guides.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Sample Tour Itinerary
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              A glimpse of what your European adventure could look like.
            </p>
          </div>

          <div className="mt-16 space-y-6">

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="font-bold text-green-700">Day 1–2</h3>
              <p className="mt-2 text-gray-600">
                Arrival, hotel check-in and city sightseeing.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="font-bold text-green-700">Day 3–5</h3>
              <p className="mt-2 text-gray-600">
                Visit famous attractions and travel between Schengen countries.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="font-bold text-green-700">Day 6–7</h3>
              <p className="mt-2 text-gray-600">
                Shopping, local experiences and departure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready for Your European Adventure?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Book your Schengen Group Tour today and let our team handle the
            planning while you enjoy the journey.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-green-700 hover:bg-gray-100"
          >
            Book Your Tour
          </Link>

        </div>
      </section>

    </main>
  );
}