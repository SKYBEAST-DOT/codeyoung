import { motion } from 'framer-motion'
import { Download, ExternalLink, Mail } from 'lucide-react'

const heroButtons = [
  { label: 'Download Resume', href: '/resume-sagar-kumar.pdf', icon: Download, primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sagar-kumar/', icon: ExternalLink },
  { label: 'GitHub', href: 'https://github.com/SKYBEAST-DOT', icon: ExternalLink },
  { label: 'Contact Me', href: '#contact', icon: Mail },
]

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-8 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 sm:p-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Professional Portfolio</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Sagar Kumar
        </h1>
        <p className="mt-5 text-lg font-medium text-slate-700 dark:text-slate-200">
          Computer Science &amp; Cognitive Systems Undergraduate
        </p>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          AI Enthusiast | Strong Communicator | Sales &amp; Operations Aspirant
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroButtons.map((button) => (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              key={button.label}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noreferrer' : undefined}
              download={button.label === 'Download Resume'}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                button.primary
                  ? 'bg-sky-600 text-white hover:bg-sky-700'
                  : 'border border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-700 dark:border-slate-600 dark:text-slate-200'
              }`}
            >
              <button.icon size={16} />
              {button.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
