import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Study Visa",
    subclass: "Student Visa",
    description:
      "Study at leading UK universities and colleges with complete application guidance from GMS.",
  },
  {
    title: "Visit Visa",
    subclass: "Standard Visitor Visa",
    description:
      "Visit the United Kingdom for tourism, family visits, business meetings, or short-term stays with professional visa assistance.",
  },
];

export default function UKPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
          <Image
            src="/images/countries/uk.jpg"
            alt="United Kingdom"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              United Kingdom Visa Services
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">
           {service.title}
        </h2>

        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
           {service.subclass}
        </span>
      </div>

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