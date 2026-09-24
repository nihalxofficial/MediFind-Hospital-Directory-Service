import AboutSection from "@/components/home/AboutSection";
import EmergencySection from "@/components/home/EmergencySection";
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
      <EmergencySection />
    </>
  );
};

export default HomePage;
