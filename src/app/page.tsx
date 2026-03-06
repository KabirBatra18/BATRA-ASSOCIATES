import type { Metadata } from "next";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhoAreWe from "./components/WhoAreWe";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import Team from "./components/Team";
import Counters from "./components/Counters";
import Certifications from "./components/Certifications";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import FixedButtons from "./components/FixedButtons";
import ClientShell from "./components/ClientShell";

export const metadata: Metadata = {
  title: "Batra & Associates | Govt Approved Property Valuers & Structural Engineers in Delhi",
  description:
    "Government and IBBI approved property valuers and structural engineers in New Delhi. Led by Er. Nanu Batra, M.Tech IIT Delhi, with 20+ years of experience. Empanelled with SBI, PNB, UCO Bank.",
  alternates: {
    canonical: "https://batraassociate.com",
  },
};

export default function Home() {
  return (
    <>
      <Preloader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <ClientShell />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <WhoAreWe />
        <ClientLogos />
        <Services />
        <Team />
        <Counters />
        <Certifications />
        <WhyUs />
        <FAQ />
        <Reviews />
        <Contact />
        <GoogleMap />
      </main>
      <Footer />
      <FixedButtons />
      <BackToTop />
    </>
  );
}
