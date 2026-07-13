import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Study Visa",
    image: "/images/services/study-visa.jpg",
    description:
      "Get admission guidance and complete support for student visas in top study destinations around the world.",
  },
  {
    title: "Visit Visa",
    image: "/images/services/visit-visa.jpg",
    description:
      "Travel confidently with professional assistance for tourist and family visit visas.",
  },
  {
    title: "Work Visa",
    image: "/images/services/work-visa.jpg",
    description:
      "Build your international career with expert work visa consultation and documentation support.",
  },
  {
    title: "Immigration",
    image: "/images/services/immigration.jpg",
    description:
      "Permanent residency and immigration solutions for individuals and families.",
  },
  {
    title: "Schengen Tour",
    image: "/images/services/schengen-tour.jpg",
    description:
      "Experience Europe with our professionally organized Schengen group tours.",
  },
  {
    title: "Documentation",
    image: "/images/services/documentation.jpg",
    description:
      "Complete assistance with visa documentation, SOPs, applications and interview preparation.",
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
            Professional immigration and education services designed to help
            you study, work, travel and settle abroad successfully.
          </p>

        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Complete Visa & Immigration Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get Migration & Study provides reliable consultation for students,
            professionals and families. From choosing the right destination to
            visa approval, we support you at every step.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-green-700">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Get Consultation
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

          {/* Why Choose GMS */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Get Migration & Study?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We believe every client deserves professional guidance,
              transparent advice and complete support throughout the visa
              process.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Expert Consultants
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Experienced consultants providing trusted immigration advice.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Honest Guidance
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Transparent consultation without hidden charges.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                High Success Rate
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Thousands of successful visa approvals across multiple countries.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                End-to-End Support
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                From consultation to visa approval, we are with you at every step.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Our Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Our Simple Process
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We make your immigration journey simple and stress-free.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                1
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Consultation
              </h3>

              <p className="mt-4 text-gray-600">
                Discuss your goals with our visa experts.
              </p>
            </div>

            <div className="rounded-3xl border p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                2
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Documentation
              </h3>

              <p className="mt-4 text-gray-600">
                Prepare all required documents correctly.
              </p>
            </div>

            <div className="rounded-3xl border p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                3
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Application
              </h3>

              <p className="mt-4 text-gray-600">
                Submit your visa application with confidence.
              </p>
            </div>

            <div className="rounded-3xl border p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                4
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Success
              </h3>

              <p className="mt-4 text-gray-600">
                Receive your visa and begin your journey abroad.
              </p>
            </div>

          </div>

        </div>
      </section>

            {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Here are some common questions our clients ask.
            </p>
          </div>

          <div className="mt-16 space-y-8">

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-green-700">
                Which countries do you provide visa services for?
              </h3>

              <p className="mt-4 text-gray-600">
                We assist with visas for Canada, Australia, the UK, Europe,
                the USA, and many other popular destinations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-green-700">
                Do you help with documentation?
              </h3>

              <p className="mt-4 text-gray-600">
                Yes. We guide you through document preparation, application
                forms, SOPs, interview preparation, and submission.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-green-700">
                Can I book a free consultation?
              </h3>

              <p className="mt-4 text-gray-600">
                Absolutely! Contact our team today to schedule your free
                consultation and discuss your immigration goals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-green-700 px-8 py-16 text-center text-white">

          <h2 className="text-5xl font-bold">
            Start Your Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Let our experienced consultants help you achieve your dreams of
            studying, working, travelling or settling abroad.
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