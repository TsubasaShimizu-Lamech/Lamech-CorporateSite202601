import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudySection } from "@/components/case-study-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StrengthsSection />
      <ServicesSection />
      <CaseStudySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
