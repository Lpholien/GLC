import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/genvallake-logo.png"
            alt="Genvallake Consulting Logo"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}