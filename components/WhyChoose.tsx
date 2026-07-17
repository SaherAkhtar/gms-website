import {
  FileText,
  Users,
  Globe,
  Clock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Expert Visa Guidance",
    description:
      "Complete assistance for study, visit, work permit and immigration applications.",
  },
  {
    icon: Users,
    title: "Experienced Consultants",
    description:
      "Our experienced team provides personalized guidance throughout your visa journey.",
  },
  {
    icon: Globe,
    title: "45+ Destinations",
    description:
      "Professional visa services for countries across Europe, Australia, Canada, the UK and more.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "We help you prepare accurate documentation for a smoother application process.",
  },
  {
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "Discuss your goals with our consultants before starting your application.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Support",
    description:
      "From your first consultation until your visa process is complete, we're here to help.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-green-600">GMS?</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable visa and immigration solutions with professional
            guidance, transparent processes and dedicated client support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
               key={index}
               className="bg-white rounded-2xl shadow-md border-t-4 border-green-600 p-6 hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}