import {
  GraduationCap,
  Plane,
  Briefcase,
  Globe,
  Users,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Visa",
    description:
      "Get admission and student visa assistance for top universities around the world.",
  },
  {
    icon: Plane,
    title: "Visit Visa",
    description:
      "Fast and reliable visit visa services for tourism, family visits and business travel.",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description:
      "Professional guidance for international work permits and employment visas.",
  },
  {
    icon: Globe,
    title: "Immigration",
    description:
      "Complete immigration support for individuals and families planning to settle abroad.",
  },
  {
    icon: Users,
    title: "Schengen Group Tour",
    description:
      "Enjoy memorable Schengen group tours with complete visa and travel arrangements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Complete Visa & Immigration Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            We provide professional guidance for students, professionals,
            tourists and families looking for opportunities abroad.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}