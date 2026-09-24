import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/HeroSection";
import HospitalsSection from "@/components/home/HospitalsSection";
import ServicesSection from "@/components/home/ServicesSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <HospitalsSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
