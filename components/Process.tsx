import { MessageCircle, FileCheck, Send, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "Discuss your study, visit, work permit or immigration goals with our expert consultants.",
  },
  {
    icon: FileCheck,
    title: "Document Assessment",
    description:
      "We carefully review your documents and guide you on the requirements.",
  },
  {
    icon: Send,
    title: "Application Submission",
    description:
      "Our team prepares and submit your visa application accurately.",
  },
  {
    icon: Plane,
    title: "Visa Approval",
    description:
      "Once approved, we assist you until your successful departure.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Our <span className="text-green-600">Visa Process</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures every application is handled
            professionally from consultation to visa approval.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mt-8 mb-6">
                  <Icon className="w-10 h-10 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-center leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}