import { HeroSection } from "@/components/home/HeroSection";
import { ServicesCards } from "@/components/home/ServicesCards";
import { AboutSection } from "@/components/home/AboutSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { PatientTestimonials } from "@/components/home/PatientTestimonials";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesCards />
      <AboutSection />
      <PatientTestimonials />
      <AnnouncementsSection />
      {/* <ArticlesSection /> */}
    </div>
  );
}
