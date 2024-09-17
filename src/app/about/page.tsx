import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactSection } from "@/components/ContactSection"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">About Genvallake Consulting</h1>
            <p className="text-xl">Your trusted partner in pharmaceutical and medical device industry solutions</p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg mb-8 text-center">
              At Genvallake Consulting, we are dedicated to transforming the pharmaceutical and medical device industries through expert consulting, innovative system implementations, and seamless data migrations. Our mission is to empower organizations with cutting-edge solutions that enhance efficiency, ensure compliance, and drive growth.
            </p>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            <ul className="list-disc pl-6 mb-8 text-lg">
              <li>New System Implementation</li>
              <li>Data Migration</li>
              <li>Compliance Consulting</li>
              <li>Process Optimization</li>
              <li>Quality Management</li>
            </ul>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}