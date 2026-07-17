import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Visit Visa",
    subclass: "Subclass 600",
    description:
      "Travel to Australia for tourism, family visits, or short business purposes with expert visa assistance.",
  },
  {
    title: "Study Visa",
    subclass: "Subclass 500",
    description:
      "Pursue your education in Australia with complete student visa guidance and application support.",
  },
  {
    title: "Immigration Visa",
    subclass: "Subclasses 109, 190 & 491",
    description:
      "Explore permanent residency and skilled migration pathways to build your future in Australia.",
  },
  {
    title: "Sponsorship Employment Visa",
    subclass: "Subclasses 482 & 494",
    description:
      "Get professional assistance for employer-sponsored work visas and skilled employment opportunities.",
  },
  {
    title: "National Innovation Visa",
    subclass: "Subclass 858",
    description:
      "Apply for Australia's prestigious visa pathway for exceptional talent and innovation leaders.",
  },
  {
    title: "Internship Program",
    subclass: "Subclass 406",
    description:
      "Gain valuable professional training and internship experience in Australia with expert support.",
  },
  {
    title: "Australia Sports Program",
    subclass: "Subclass 408",
    description:
      "Participate in sports, cultural, and special activity programs in Australia with complete visa guidance.",
  },
];

export default function AustraliaPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
          <Image
            src="/images/countries/australia.jpg"
            alt="Australia"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              Australia Visa Services
            </h1>
          </div>
        </div>

        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Explore our complete range of Australian visa and migration services with
          expert guidance for every subclass and application pathway.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {service.subclass}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-7">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
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