import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Study Visa",
    description: "Start your educational journey in Canada with expert guidance.",
  },
  {
    title: "Visit Visa",
    description: "Explore Canada with our hassle-free visitor visa assistance.",
  },
  {
    title: "Work Permit Visa",
    description: "Get professional support for Canadian work permit applications.",
  },
  {
    title: "Immigration Visa",
    description: "Move towards permanent residency with trusted immigration advice.",
  },
];

export default function CanadaPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
          <Image
            src="/images/countries/canada.jpg"
            alt="Canada"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              Canada Visa Services
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}