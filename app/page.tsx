import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import SchengenTour from "@/components/SchengenTour";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Countries />
      <SchengenTour />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
