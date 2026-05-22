import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle
        eyebrow="Resume"
        title="Quick view of profile readiness"
        description="Download a concise resume highlighting education, technical projects, and sales/operations-oriented strengths."
      />
      <motion.div
        whileHover={{ y: -4 }}
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Resume Snapshot</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Sagar Kumar</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Computer Science &amp; Cognitive Systems Undergraduate | AI Enthusiast | Sales &amp; Operations Aspirant
        </p>
        <a
          href="/resume-sagar-kumar.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          <Download size={16} /> Download Resume
        </a>
      </motion.div>
    </section>
  )
}
