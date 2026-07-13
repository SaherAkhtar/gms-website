import Image from "next/image";
import Link from "next/link";

export default function SchengenTour() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Image */}
        <div>
          <Image
            src="/images/tours/schengen.jpg"
            alt="Schengen Group Tour"
            width={700}
            height={600}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Europe Tour
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Discover Europe with Our Schengen Group Tours
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience unforgettable journeys across Europe's most beautiful
            destinations. We arrange visas, hotels, flights, transport and
            guided tours so you can travel without stress.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-gray-700">
            <li>✅ Visa Assistance</li>
            <li>✅ Hotel Booking</li>
            <li>✅ Flight Reservation</li>
            <li>✅ Guided Group Tours</li>
            <li>✅ Complete Travel Support</li>
          </ul>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Book Your Tour
          </Link>

        </div>

      </div>
    </section>
  );
}