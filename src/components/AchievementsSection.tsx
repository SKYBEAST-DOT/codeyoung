import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { achievements } from '../data/portfolio'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle eyebrow="Achievements" title="Highlights that reflect consistency and ownership" />
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement) => (
          <motion.article
            key={achievement}
            whileHover={{ y: -3 }}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <BadgeCheck size={20} className="mt-1 text-sky-600" aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{achievement}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
