const faqs = [
  {
    question: "Which countries do you provide visa services for?",
    answer:
      "We provide visa consultancy for Canada, Australia, the UK, the USA, Germany, France, Italy, Spain, Portugal, Malta, Poland and many more.",
  },
  {
    question: "Do you help with university admissions?",
    answer:
      "Yes. We assist students in selecting universities, preparing applications, and completing the admission process.",
  },
  {
    question: "Do you offer Schengen Group Tours?",
    answer:
      "Yes. We organize professionally managed Schengen Group Tours with complete visa guidance and travel planning.",
  },
  {
    question: "Can I book a free consultation?",
    answer:
      "Absolutely! You can contact us through our website to book your free consultation with our experts.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-700">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the questions we receive most often.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}