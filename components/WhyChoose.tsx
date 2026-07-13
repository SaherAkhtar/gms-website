import {
  Award,
  Users,
  Globe,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Consultants",
    desc: "Professional visa experts with years of experience.",
  },
  {
    icon: Users,
    title: "1000+ Happy Clients",
    desc: "Trusted by students, families and professionals.",
  },
  {
    icon: Globe,
    title: "Worldwide Destinations",
    desc: "Study, work and travel opportunities across the globe.",
  },
  {
    icon: BadgeCheck,
    title: "High Visa Success",
    desc: "Complete documentation and expert application support.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Why Clients Trust GMS
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide complete visa solutions with professional guidance,
            transparent processes and dedicated customer support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}