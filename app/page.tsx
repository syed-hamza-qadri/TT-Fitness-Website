"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturedProductsSection } from "@/components/featured-products-section"
import { EquipmentSection } from "@/components/equipment-section"
import { GallerySection } from "@/components/gallery-section"
import { MarketsSection } from "@/components/markets-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedProductsSection />
      <EquipmentSection />
      <GallerySection />
      <MarketsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
