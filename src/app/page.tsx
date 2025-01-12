import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ContactSection } from "@/components/ContactSection"
import { ClientShowcase } from "@/components/ClientShowcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClientShowcase />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}