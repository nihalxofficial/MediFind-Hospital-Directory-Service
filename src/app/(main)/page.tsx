import AboutSection from "@/components/home/AboutSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import Hero from "@/components/home/HeroSection";
import HospitalsSection from "@/components/home/HospitalsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestsSection from "@/components/home/TestsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <HospitalsSection />
      <ServicesSection />
      <TestsSection />
      <FacilitiesSection />
    </>
  );
};

export default HomePage;
