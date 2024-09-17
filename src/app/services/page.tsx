import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ServicesSection } from "@/components/ServicesSection"
import { ContactSection } from "@/components/ContactSection"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive solutions for the pharmaceutical and medical device industries</p>
          </div>
        </section>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}