import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-extrabold md:text-6xl">
            Contact Get Migration & Study
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
            Have questions about studying, working or travelling abroad?
            Our experienced consultants are ready to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We'd love to hear from you. Contact us through phone,
              email, WhatsApp or visit our office for a free consultation.
            </p>

            <div className="mt-10 space-y-8">

              {/* Address */}
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-xl font-bold text-green-700">
                  📍 Office Address
                </h3>

                <p className="mt-3 text-gray-600">
                  Office #2, 12th Floor
                  <br />
                  First Capital Tower
                  <br />
                  Gulberg III
                  <br />
                  Lahore, Pakistan
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-xl font-bold text-green-700">
                  📞 Phone
                </h3>

                <a
                  href="tel:+923008382774"
                  className="mt-3 block text-gray-600 hover:text-green-700"
                >
                  +92 300 8382774
                </a>
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-xl font-bold text-green-700">
                  📧 Email
                </h3>

                <a
                  href="mailto:getmigrationstudy@gmail.com"
                  className="mt-3 block text-gray-600 hover:text-green-700"
                >
                  getmigrationstudy@gmail.com
                </a>
              </div>

              {/* Office Hours */}
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="text-xl font-bold text-green-700">
                  🕒 Office Hours
                </h3>

                <p className="mt-3 text-gray-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
              />

              <button
                className="w-full rounded-full bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
              >
                Book Free Consultation
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Visit Our Office
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              You're always welcome to visit us for a free consultation.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=First+Capital+Tower+Gulberg+III+Lahore&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Quick answers to common questions.
            </p>
          </div>

          <div className="mt-14 space-y-6">

            <div className="rounded-2xl border p-6">
              <h3 className="font-bold text-green-700">
                Do you offer free consultation?
              </h3>

              <p className="mt-3 text-gray-600">
                Yes! We provide a free initial consultation to understand your goals.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-bold text-green-700">
                Can I contact you on WhatsApp?
              </h3>

              <p className="mt-3 text-gray-600">
                Yes, you can reach us through WhatsApp during office hours.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-bold text-green-700">
                Do you help with visa documentation?
              </h3>

              <p className="mt-3 text-gray-600">
                Absolutely! We assist you from documentation to visa approval.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Let's Make Your Dream a Reality
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Whether you want to study, work, travel or settle abroad,
            our team is here to guide you every step of the way.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-green-700 hover:bg-gray-100"
          >
            Back to Home
          </Link>

        </div>
      </section>

    </main>
  );
}