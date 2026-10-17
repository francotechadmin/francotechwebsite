import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CALENDLY = 'https://calendly.com/francotechnologies/30min'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-base font-bold tracking-tight text-gray-900">
            Gabriel Franco
          </span>
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="https://www.linkedin.com/in/gabriel-alberto-franco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/gabriel-alberto-franco/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-200"
          >
            Message Me
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-all duration-200"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
