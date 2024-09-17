'use client'

import { useEffect, useState, useRef } from 'react'

const clients = ["GlaxoSmithKline", "UCB", "Dentsply Sirona", "Univercells"]

export function ClientShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const timer = setInterval(() => {
      if (currentIndex < clients.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1)
      } else {
        setCurrentIndex(0)
        container.style.transition = 'none'
        container.style.transform = 'translateX(0)'
        setTimeout(() => {
          container.style.transition = 'transform 1000ms ease-in-out'
        }, 50)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary">Our Clients</h2>
      <div className="overflow-hidden h-16">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl font-light font-serif text-gray-400 bg-gradient-to-r from-gray-400 via-primary to-secondary bg-clip-text text-transparent">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}