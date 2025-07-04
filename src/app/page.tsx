import NavBar from "./components/NavBar";
import HeroSection from "../features/hero/ui/HeroSection";
import ServiceSection from "../features/service/ui/ServiceSection";
import StrengthsSection from "../features/strengths/ui/StrengthsSection";
import FlowSection from "../features/flow/ui/FlowSection";
import PricingSection from "../features/pricing/ui/PricingSection";
import ContactSection from "../features/contact/ui/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <StrengthsSection />
      <FlowSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
