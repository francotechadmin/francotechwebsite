import { motion } from 'framer-motion'

const CALENDLY = 'https://calendly.com/francotechnologies/30min'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const services = [
  'AI & LLM',
  'React · Next.js',
  'Python · FastAPI',
  'AWS · GCP',
]

export default function Hero() {
  return (
    <section className="pt-24 pb-10 md:pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">

          {/* Text content */}
          <div className="flex-1 min-w-0">

            {/* Mobile: circular photo + badge inline */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8 md:hidden">
              <img
                src="/assets/images/headshot.png"
                alt="Gabriel Franco"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0"
              />
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new projects
              </span>
            </motion.div>

            {/* Desktop: badge only */}
            <motion.div {...fadeUp(0.1)} className="hidden md:block mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new projects
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tightest text-gray-900 mb-6"
            >
              Senior AI &amp;<br />
              Full&#8209;Stack<br />
              <span className="text-primary">Engineer.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="text-lg text-gray-500 max-w-md leading-relaxed mb-8"
            >
              I build AI-powered products and enterprise-grade software — without the agency overhead.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="mb-8">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
                Enterprise experience at
              </p>
              <div className="flex flex-wrap gap-2">
                {['Lead SWE · ExxonMobil · Global Trading', 'Senior SWE · Koch Industries · Invista'].map((co) => (
                  <span key={co} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700">
                    {co}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="mb-10">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
                What I build
              </p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600 whitespace-nowrap">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.58)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                Book a Discovery Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://franco-sanbox.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:border-primary hover:text-primary transition-colors duration-200"
              >
                See AI Demos
              </a>
            </motion.div>
          </div>

          {/* Desktop: big photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:block flex-shrink-0 w-96 h-96"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl shadow-gray-200">
              <img
                src="/assets/images/headshot.png"
                alt="Gabriel Franco"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
