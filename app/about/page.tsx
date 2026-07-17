import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-extrabold md:text-6xl">
            About Get Migration & Study
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
            Your trusted partner for Study Visas, Work Visas, Visit Visas,
            Immigration and Schengen Group Tours.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>
            <Image
              src="/images/about/about.jpg"
              alt="About GMS"
              width={700}
              height={600}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Helping People Build Their Future Abroad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get Migration & Study is a professional immigration and education
              consultancy dedicated to helping students, professionals and
              families achieve their international goals.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced consultants provide complete guidance from your
              first consultation until your visa is approved. We believe in
              honesty, transparency and excellent customer service.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-green-700">
                Our Mission
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                To provide reliable immigration and education services that
                help our clients achieve success with confidence.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-green-700">
                Our Vision
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                To become one of the world's most trusted immigration
                consultancy firms through quality service and client success.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h2 className="text-5xl font-bold text-green-600">
                2500+
              </h2>
              <p className="mt-2 text-gray-600">
                Successful Visas
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-600">
                45+
              </h2>
              <p className="mt-2 text-gray-600">
                Countries
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-600">
                98%
              </h2>
              <p className="mt-2 text-gray-600">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-600">
                10+
              </h2>
              <p className="mt-2 text-gray-600">
                Years Experience
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Why Choose GMS?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            We believe every client deserves honest advice, complete support
            and professional immigration services.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-bold">
                Experienced Team
              </h3>

              <p className="mt-4 text-green-100">
                Professional immigration consultants.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-bold">
                Honest Advice
              </h3>

              <p className="mt-4 text-green-100">
                Transparent consultation with no hidden surprises.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-bold">
                High Success
              </h3>

              <p className="mt-4 text-green-100">
                Thousands of successful applications.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-bold">
                Complete Support
              </h3>

              <p className="mt-4 text-green-100">
                We guide you from consultation to approval.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-green-600 px-8 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>

          <p className="mt-6 text-lg text-green-100">
            Contact Get Migration & Study today and let our experienced
            consultants help you achieve your international dreams.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-green-700 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}