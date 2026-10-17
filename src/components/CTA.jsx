import { motion } from 'framer-motion'

const CALENDLY = 'https://calendly.com/francotechnologies/30min'
const LINKEDIN = 'https://www.linkedin.com/in/gabriel-alberto-franco/'

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
            Work With Me
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tightest text-white leading-none mb-6">
            Let&apos;s build something<br />
            <span className="text-primary">great.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            I stay deeply involved in every engagement. Book a call or send me a message on LinkedIn.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
            >
              Book a Discovery Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border border-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Message on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
