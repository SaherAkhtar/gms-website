import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ali Hassan",
    country: "Canada Study Visa",
    review:
      "GMS made my study visa process incredibly smooth. Their team was professional and supportive throughout.",
  },
  {
    name: "Sarah Khan",
    country: "UK Visit Visa",
    review:
      "Highly recommended! My visit visa was approved quickly thanks to their expert guidance.",
  },
  {
    name: "Ahmed Raza",
    country: "Australia Work Visa",
    review:
      "Excellent service and clear communication. I received my work visa without any stress.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Hundreds of satisfied clients have trusted Get Migration & Study
            with their visa and immigration journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-green-600">
                  {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}