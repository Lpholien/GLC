import { ContactForm } from "./ContactForm"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="text-center mb-8">Ready to transform your systems? Get in touch with us today.</p>
        <ContactForm />
      </div>
    </section>
  )
}