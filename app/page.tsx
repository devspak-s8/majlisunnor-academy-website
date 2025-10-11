import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/video-hero"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { PrincipalSection } from "@/components/principal-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AnthemSection } from "@/components/anthem-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VideoHero />
      <FeaturesSection />
      <StatsSection />
      <PrincipalSection />
      <TestimonialsSection />
      <AnthemSection />
      <CTASection />
      <Footer />
    </main>
  )
}
