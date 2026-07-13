import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Start Your Journey Abroad?
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Whether you're planning to study, work, visit, migrate, or join our
          Schengen Group Tour, our experienced consultants are here to help you
          every step of the way.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Book Free Consultation
          </Link>

          <Link
            href="/services"
            className="rounded-full border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}