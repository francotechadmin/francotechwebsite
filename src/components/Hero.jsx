import { motion } from 'framer-motion'

const CALENDLY = 'https://calendly.com/francotechnologies/30min'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="pt-20 md:pt-20 pb-10 md:pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">

          {/* Text content */}
          <div className="flex-1 min-w-0">

            {/* Desktop: badge only */}
            <motion.div {...fadeUp(0.1)} className="mb-3 md:mb-2">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new projects
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tightest text-gray-900 mb-6"
            >
              I build<br />
              AI agents &amp;<br />
              <span className="text-primary">LLM pipelines.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="text-lg text-gray-500 max-w-md leading-relaxed mb-8"
            >
              What could your team build with a senior AI engineer who's shipped it at Fortune 500 scale?
            </motion.p>

            <motion.div {...fadeUp(0.38)} className="mb-8 flex flex-col gap-2">
              {[
                'RAG system indexing 50k+ procedures for a global Fortune 500 chemicals company',
                'Self-serve AI agent platform for Fortune 500 trading analysts',
                'Trading AI platform shipped 2–3 months ahead of schedule',
              ].map((blurb) => (
                <div key={blurb} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-sm text-gray-500 leading-snug">{blurb}</p>
                </div>
              ))}
            </motion.div>

<motion.div {...fadeUp(0.42)} className="mb-8">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
                Previously at
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { company: 'ExxonMobil', role: 'Lead SWE · Global Trading' },
                  { company: 'Koch Industries', role: 'Senior SWE · Invista' },
                ].map(({ company, role }) => (
                  <div key={company}>
                    <div className="text-base font-black text-gray-900 tracking-tight">{company}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{role}</div>
                  </div>
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
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <a
                  href="https://franco-sanbox.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  Still unsure? See AI Demos
                </a>
              </div>
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
