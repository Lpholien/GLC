import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Transforming Pharmaceutical & Medical Device Industries</h1>
        <p className="text-xl mb-8">Expert consulting for system implementation and data migration</p>
        <Button asChild variant="secondary">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}